import { createHash, randomBytes } from 'node:crypto';
import { existsSync, readFileSync } from 'node:fs';
import { mkdir } from 'node:fs/promises';
import { isIP } from 'node:net';
import { homedir, tmpdir } from 'node:os';
import { basename, dirname, isAbsolute, join, relative, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { Client } from '@modelcontextprotocol/sdk/client/index.js';
import { StdioClientTransport } from '@modelcontextprotocol/sdk/client/stdio.js';
import { Server } from '@modelcontextprotocol/sdk/server/index.js';
import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js';
import {
  CallToolRequestSchema,
  ListToolsRequestSchema,
} from '@modelcontextprotocol/sdk/types.js';

const AUTH_REQUIRED_TEXT = [
  'AUTH_REQUIRED: Authentication gate detected.',
  'The auth flow should be completed by a human in the browser session.',
  'Ask the user to log in manually, then retry the browser action.',
  'Do not debug or modify application auth code unless the user explicitly asks.',
].join(' ');

const AUTH_URL_SEGMENT_RE = /(?:^|[/?#&=:\s])(?:log[-_]?in|sign[-_]?in|signin|auth|authorize|session|oauth|sso)(?:[/?#&=:\s]|$)/i;
const PASSWORD_INPUT_RE = /(?:input[^\n<>]*type=["']?password|type:\s*password|textbox\s+"[^"]*(?:password|passcode)|(?:password|passcode)"?\s+\[ref=)/i;
const AUTH_KEYWORD_RE = /\b(?:sign in|log in|login|continue with (?:google|microsoft|github|apple)|forgot password|verification code|two[-\s]?factor|2fa|multi[-\s]?factor|mfa)\b/i;
const PAGE_URL_RE = /(?:Page URL:\s*|["']url["']\s*:\s*["'])(https?:\/\/[^\s"',}]+)/gi;
const IP_NOT_SUPPORTED_TEXT = 'IP is not supported. Use localhost instead.';
const SCREENSHOT_PATH_ERROR_TEXT = 'Screenshot paths must be relative to the Playwright temp output directory.';
const BLUEPRINT_VERSION = '0.1.4';
const UPSTREAM_PLAYWRIGHT_MCP_PACKAGE = process.env.GERALD_PLAYWRIGHT_MCP_PACKAGE ?? '@playwright/mcp@0.0.76';
const AUTH_SETTLE_SECONDS = Number.parseInt(process.env.GERALD_PLAYWRIGHT_AUTH_SETTLE_SECONDS ?? '8', 10);
const ALLOW_HEADLESS = process.env.GERALD_PLAYWRIGHT_ALLOW_HEADLESS === '1';
const RUN_ID = `${new Date().toISOString().replace(/[:.]/g, '-')}-${randomBytes(3).toString('hex')}`;

const PAGE_CONTENT_TOOL_NAMES = new Set([
  'browser_click',
  'browser_drag',
  'browser_drop',
  'browser_file_upload',
  'browser_fill_form',
  'browser_hover',
  'browser_navigate',
  'browser_navigate_back',
  'browser_press_key',
  'browser_select_option',
  'browser_snapshot',
  'browser_type',
  'browser_wait_for',
]);

const __filename = fileURLToPath(import.meta.url);

type JsonObject = Record<string, unknown>;

type ToolCaller = {
  callTool(request: { name: string; arguments?: JsonObject }): Promise<unknown>;
};

type UpstreamConfig = {
  command: string;
  args: string[];
  env: Record<string, string>;
  cwd: string;
  outputDir: string;
  profileDir: string;
};

function defaultNpxCommand(): string {
  return process.platform === 'win32' ? 'npx.cmd' : 'npx';
}

function normalizeEnv(raw: unknown): Record<string, string> | undefined {
  if (!raw || typeof raw !== 'object') return undefined;
  const env: Record<string, string> = {};
  for (const [key, value] of Object.entries(raw as JsonObject)) {
    if (value == null) continue;
    env[key] = String(value);
  }
  return env;
}

function processEnvStrings(): Record<string, string> {
  const env: Record<string, string> = {};
  for (const [key, value] of Object.entries(process.env)) {
    if (value != null) env[key] = value;
  }
  return env;
}

function resolveProjectRoot(projectRoot = process.env.GERALD_PROJECT_ROOT ?? process.env.PLAYWRIGHT_MCP_PROJECT_ROOT ?? process.cwd()): string {
  return resolve(projectRoot);
}

function defaultStateRoot(): string {
  if (process.platform === 'win32') return process.env.LOCALAPPDATA ?? join(homedir(), 'AppData', 'Local');
  if (process.platform === 'darwin') return join(homedir(), 'Library', 'Application Support');
  return process.env.XDG_STATE_HOME ?? join(homedir(), '.local', 'state');
}

function projectId(projectRoot: string): string {
  const label = basename(projectRoot).replace(/[^A-Za-z0-9._-]+/g, '_') || 'project';
  const hash = createHash('sha256').update(resolve(projectRoot).toLowerCase()).digest('hex').slice(0, 10);
  return `${label}-${hash}`;
}

function defaultProfileDir(projectRoot: string): string {
  return join(defaultStateRoot(), 'Gerald', 'playwright', projectId(projectRoot), 'profile');
}

function defaultOutputDir(projectRoot: string): string {
  return join(tmpdir(), 'gerald-playwright', projectId(projectRoot), 'runs', RUN_ID);
}

function isWithin(target: string, root: string): boolean {
  const rel = relative(resolve(root), resolve(target));
  return rel === '' || (!rel.startsWith('..') && !isAbsolute(rel));
}

function assertOutsideProject(label: string, targetPath: string, projectRoot: string): void {
  if (isWithin(targetPath, projectRoot)) {
    throw new Error(`Refusing ${label} inside project root: ${targetPath}`);
  }
}

function readLocalPlaywrightConfig(projectRoot: string): { command: string; args: string[]; env: Record<string, string>; cwd: string } | null {
  const localConfig = join(projectRoot, '.mcp.json');
  if (!existsSync(localConfig)) return null;
  try {
    const parsed = JSON.parse(readFileSync(localConfig, 'utf8')) as JsonObject;
    const mcpServers = parsed.mcpServers as JsonObject | undefined;
    const playwright = mcpServers?.playwright as JsonObject | undefined;
    if (!playwright?.command || typeof playwright.command !== 'string') return null;
    return {
      command: process.platform === 'win32' && playwright.command === 'npx' ? defaultNpxCommand() : playwright.command,
      args: Array.isArray(playwright.args) ? playwright.args.map(String) : [],
      env: normalizeEnv(playwright.env) ?? {},
      cwd: typeof playwright.cwd === 'string' ? playwright.cwd : projectRoot,
    };
  } catch (err) {
    process.stderr.write(`gerald playwright mcp: failed to read ${localConfig}: ${err instanceof Error ? err.message : String(err)}\n`);
    return null;
  }
}

function isOwnWrapperArg(projectRoot: string, arg: string): boolean {
  try {
    return resolve(projectRoot, arg) === resolve(__filename);
  } catch {
    return false;
  }
}

function argValue(args: string[], flag: string): string | null {
  const index = args.indexOf(flag);
  if (index >= 0 && args[index + 1]) return args[index + 1];
  const prefix = `${flag}=`;
  const inline = args.find(arg => arg.startsWith(prefix));
  return inline ? inline.slice(prefix.length) : null;
}

function hasArg(args: string[], flag: string): boolean {
  return args.includes(flag) || args.some(arg => arg.startsWith(`${flag}=`));
}

function visibleByDefaultArgs(args: string[]): string[] {
  if (ALLOW_HEADLESS) return args;
  return args.filter(arg => arg !== '--headless');
}

export function sandboxByDefaultEnv(env: Record<string, string>): Record<string, string> {
  return {
    ...env,
    PLAYWRIGHT_MCP_SANDBOX: '1',
  };
}

function normalizeOfficialPlaywrightArgs(args: string[], projectRoot: string): { args: string[]; outputDir: string; profileDir: string } {
  const next = visibleByDefaultArgs(args.length ? [...args] : ['-y', UPSTREAM_PLAYWRIGHT_MCP_PACKAGE]);
  const profileDir = resolve(process.env.GERALD_PLAYWRIGHT_PROFILE_DIR ?? argValue(next, '--user-data-dir') ?? defaultProfileDir(projectRoot));
  const outputDir = resolve(process.env.GERALD_PLAYWRIGHT_OUTPUT_DIR ?? argValue(next, '--output-dir') ?? defaultOutputDir(projectRoot));

  assertOutsideProject('Playwright profile directory', profileDir, projectRoot);
  assertOutsideProject('Playwright output directory', outputDir, projectRoot);

  if (!hasArg(next, '--user-data-dir')) next.push('--user-data-dir', profileDir);
  if (!hasArg(next, '--output-dir')) next.push('--output-dir', outputDir);
  if (!hasArg(next, '--output-mode')) next.push('--output-mode', 'stdout');

  return { args: next, outputDir, profileDir };
}

export function resolveUpstreamConfig(projectRoot = resolveProjectRoot()): UpstreamConfig {
  const local = readLocalPlaywrightConfig(projectRoot);
  const env = sandboxByDefaultEnv({ ...processEnvStrings(), ...(local?.env ?? {}) });

  if (local) {
    const guardArgIndex = local.args.findIndex(arg => isOwnWrapperArg(projectRoot, arg));
    if (guardArgIndex >= 0) {
      const normalized = normalizeOfficialPlaywrightArgs(local.args.slice(guardArgIndex + 1), projectRoot);
      return {
        command: defaultNpxCommand(),
        args: normalized.args,
        env: { ...env, PLAYWRIGHT_MCP_OUTPUT_DIR: normalized.outputDir },
        cwd: local.cwd,
        outputDir: normalized.outputDir,
        profileDir: normalized.profileDir,
      };
    }

    const normalized = normalizeOfficialPlaywrightArgs(local.args, projectRoot);
    return {
      command: local.command,
      args: normalized.args,
      env: { ...env, PLAYWRIGHT_MCP_OUTPUT_DIR: normalized.outputDir },
      cwd: local.cwd,
      outputDir: normalized.outputDir,
      profileDir: normalized.profileDir,
    };
  }

  const normalized = normalizeOfficialPlaywrightArgs(process.argv.slice(2), projectRoot);
  return {
    command: defaultNpxCommand(),
    args: normalized.args,
    env: { ...env, PLAYWRIGHT_MCP_OUTPUT_DIR: normalized.outputDir },
    cwd: projectRoot,
    outputDir: normalized.outputDir,
    profileDir: normalized.profileDir,
  };
}

function flattenText(value: unknown, out: string[] = []): string[] {
  if (typeof value === 'string') {
    out.push(value);
    return out;
  }
  if (Array.isArray(value)) {
    for (const item of value) flattenText(item, out);
    return out;
  }
  if (!value || typeof value !== 'object') return out;
  const record = value as JsonObject;
  if (record.type === 'text' && typeof record.text === 'string') out.push(record.text);
  const resource = record.resource as JsonObject | undefined;
  if (typeof resource?.text === 'string') out.push(resource.text);
  for (const key of ['content', 'structuredContent', 'toolResult']) {
    if (record[key] !== undefined) flattenText(record[key], out);
  }
  return out;
}

function stripMarkdownSection(text: string, heading: string): string {
  const escapedHeading = heading.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  return text.replace(
    new RegExp(`(?:^|\\n)### ${escapedHeading}[\\s\\S]*?(?=\\n### |$)`, 'gi'),
    '\n',
  );
}

function stripNonPageContent(text: string): string {
  return stripMarkdownSection(
    stripMarkdownSection(
      stripMarkdownSection(
        stripMarkdownSection(text, 'Ran Playwright code'),
        'Console messages',
      ),
      'New console messages',
    ),
    'Events',
  );
}

function extractPageUrls(text: string): string[] {
  const urls: string[] = [];
  for (const match of text.matchAll(PAGE_URL_RE)) urls.push(match[1]);
  return urls;
}

function normalizeHostname(hostname: string): string {
  return hostname.trim().toLowerCase().replace(/^\[(.*)\]$/, '$1').replace(/\.$/, '');
}

function isNumericIpHostname(hostname: string): boolean {
  const host = normalizeHostname(hostname);
  if (!host || host === 'localhost') return false;
  if (isIP(host)) return true;
  if (/^\d+$/.test(host)) return true;
  if (/^\d{1,3}(?:\.\d{1,3}){3}$/.test(host)) {
    return host.split('.').every(part => Number(part) >= 0 && Number(part) <= 255);
  }
  return host.includes(':') && /^[0-9a-f:.]+$/i.test(host);
}

function isLoopbackIpHostname(hostname: string): boolean {
  const host = normalizeHostname(hostname);
  if (/^127(?:\.\d{1,3}){3}$/.test(host)) {
    return host.split('.').every(part => Number(part) >= 0 && Number(part) <= 255);
  }
  return host === '::1' || host === '0:0:0:0:0:0:0:1';
}

export function applyNavigableUrlPolicy(rawUrl: unknown): { allowed: true; url?: string } | { allowed: false; reason: string; message: string } {
  if (typeof rawUrl !== 'string' || rawUrl.trim() === '') return { allowed: true };
  const trimmed = rawUrl.trim();
  const candidate = /^[a-z][a-z0-9+.-]*:\/\//i.test(trimmed) ? trimmed : `http://${trimmed}`;

  let parsed: URL;
  try {
    parsed = new URL(candidate);
  } catch {
    return { allowed: true };
  }

  if (!['http:', 'https:'].includes(parsed.protocol)) return { allowed: true };
  if (isLoopbackIpHostname(parsed.hostname)) {
    parsed.hostname = 'localhost';
    return { allowed: true, url: parsed.href };
  }
  if (isNumericIpHostname(parsed.hostname)) {
    return {
      allowed: false,
      reason: 'numeric IP hostname',
      message: IP_NOT_SUPPORTED_TEXT,
    };
  }

  return { allowed: true };
}

export function validateNavigableUrl(rawUrl: unknown): { allowed: true } | { allowed: false; reason: string; message: string } {
  const policy = applyNavigableUrlPolicy(rawUrl);
  if (policy.allowed) return { allowed: true };
  return policy;
}

function navigationUrlsForToolCall(req: JsonObject): unknown[] {
  const params = req.params as JsonObject | undefined;
  const args = params?.arguments as JsonObject | undefined ?? {};
  if (params?.name === 'browser_navigate') return [args.url];
  if (params?.name === 'browser_tabs' && args.action === 'new') return [args.url];
  return [];
}

function validateScreenshotPath(rawPath: unknown): { allowed: true } | { allowed: false; message: string } {
  if (rawPath == null) return { allowed: true };
  if (typeof rawPath !== 'string' || rawPath.trim() === '') return { allowed: true };
  const normalized = rawPath.replace(/\\/g, '/');
  if (isAbsolute(rawPath) || normalized.startsWith('/') || /^[A-Za-z]:\//.test(normalized) || normalized.split('/').includes('..')) {
    return { allowed: false, message: SCREENSHOT_PATH_ERROR_TEXT };
  }
  return { allowed: true };
}

export function guardToolCall(req: JsonObject): JsonObject | null {
  const blocked = navigationUrlsForToolCall(req)
    .map(url => ({ url, validation: validateNavigableUrl(url) }))
    .find(({ validation }) => !validation.allowed);

  if (blocked && !blocked.validation.allowed) {
    return {
      content: [{ type: 'text', text: blocked.validation.message }],
      isError: true,
    };
  }

  const params = req.params as JsonObject | undefined;
  if (params?.name === 'browser_take_screenshot') {
    const args = params.arguments as JsonObject | undefined ?? {};
    const screenshotPath = validateScreenshotPath(args.filename ?? args.path);
    if (!screenshotPath.allowed) {
      return {
        content: [{ type: 'text', text: screenshotPath.message }],
        isError: true,
      };
    }
  }

  return null;
}

function rewriteNavigationToolCallForPolicy(req: JsonObject): JsonObject {
  const params = req.params as JsonObject | undefined;
  const args = params?.arguments as JsonObject | undefined ?? {};
  const isNavigation = params?.name === 'browser_navigate' || (params?.name === 'browser_tabs' && args.action === 'new');
  if (!isNavigation) return req;

  const policy = applyNavigableUrlPolicy(args.url);
  if (!policy.allowed || !policy.url) return req;

  return {
    ...req,
    params: {
      ...params,
      arguments: {
        ...args,
        url: policy.url,
      },
    },
  };
}

export async function rewriteToolCallForPolicy(req: JsonObject, outputDir: string): Promise<JsonObject> {
  const navigationReq = rewriteNavigationToolCallForPolicy(req);
  const params = navigationReq.params as JsonObject | undefined;
  if (params?.name !== 'browser_take_screenshot') return navigationReq;

  const args = { ...((params.arguments as JsonObject | undefined) ?? {}) };
  const rawPath = args.filename ?? args.path;
  const relativeName = typeof rawPath === 'string' && rawPath.trim() !== ''
    ? rawPath.trim()
    : `screenshot-${new Date().toISOString().replace(/[:.]/g, '-')}-${randomBytes(3).toString('hex')}.png`;
  const targetPath = resolve(outputDir, relativeName);

  if (!isWithin(targetPath, outputDir)) {
    return req;
  }

  await mkdir(dirname(targetPath), { recursive: true });
  if ('path' in args && !('filename' in args)) args.path = targetPath;
  else args.filename = targetPath;

  return {
    ...navigationReq,
    params: {
      ...params,
      arguments: args,
    },
  };
}

function hasSingleInitialBlankTab(result: unknown): boolean {
  const lines = flattenText(result).join('\n').split(/\r?\n/);
  const tabLines = lines.map(line => line.trim()).filter(line => /^-\s+\d+:\s/.test(line));
  return tabLines.length === 1 && /^-\s+0:\s+\(current\)\s+\[\]\(about:blank\)$/.test(tabLines[0]);
}

export async function rewriteInitialBlankTabNewCall(req: JsonObject, client: ToolCaller): Promise<JsonObject> {
  const params = req.params as JsonObject | undefined;
  const args = params?.arguments as JsonObject | undefined ?? {};
  if (params?.name !== 'browser_tabs' || args.action !== 'new' || typeof args.url !== 'string' || args.url.trim() === '') return req;

  let tabs: unknown;
  try {
    tabs = await client.callTool({ name: 'browser_tabs', arguments: { action: 'list' } });
  } catch {
    return req;
  }

  if (!hasSingleInitialBlankTab(tabs)) return req;

  return {
    ...req,
    params: {
      ...params,
      name: 'browser_navigate',
      arguments: {
        url: args.url,
      },
    },
  };
}

function hasVisiblePasswordInput(text: string): boolean {
  for (const line of text.split(/\r?\n/)) {
    if (!PASSWORD_INPUT_RE.test(line)) continue;
    if (/\bvisible["']?\s*:\s*false\b/i.test(line)) continue;
    if (/\b(?:hidden|display:\s*none|visibility:\s*hidden)\b/i.test(line)) continue;
    return true;
  }
  return false;
}

export function detectAuthGate(result: unknown): { detected: boolean; reasons: string[] } {
  const text = stripNonPageContent(flattenText(result).join('\n'));
  const reasons: string[] = [];
  if (extractPageUrls(text).some(url => AUTH_URL_SEGMENT_RE.test(url))) reasons.push('auth-like URL');
  if (hasVisiblePasswordInput(text)) reasons.push('password input');
  if (AUTH_KEYWORD_RE.test(text)) reasons.push('auth keyword');
  return {
    detected: reasons.length > 0,
    reasons,
  };
}

export function guardToolResult(result: JsonObject): JsonObject {
  const auth = detectAuthGate(result);
  if (!auth.detected) return result;
  return {
    _meta: result?._meta,
    content: [{
      type: 'text',
      text: `${AUTH_REQUIRED_TEXT} Signals: ${auth.reasons.join(', ')}.`,
    }],
  };
}

async function settleAndRecheckAuthGate(client: Client): Promise<{ result: JsonObject; auth: { detected: boolean; reasons: string[] } }> {
  await client.callTool({
    name: 'browser_wait_for',
    arguments: { time: AUTH_SETTLE_SECONDS },
  });

  const snapshot = await client.callTool({
    name: 'browser_snapshot',
    arguments: { depth: 6 },
  }) as JsonObject;

  return {
    result: snapshot,
    auth: detectAuthGate(snapshot),
  };
}

async function guardToolResultAfterSettling(req: JsonObject, result: JsonObject, client: Client): Promise<JsonObject> {
  const params = req.params as JsonObject | undefined;
  const toolName = typeof params?.name === 'string' ? params.name : '';
  if (!PAGE_CONTENT_TOOL_NAMES.has(toolName)) return result;

  const initialAuth = detectAuthGate(result);
  if (!initialAuth.detected) return result;

  let settled: Awaited<ReturnType<typeof settleAndRecheckAuthGate>>;
  try {
    settled = await settleAndRecheckAuthGate(client);
  } catch (err) {
    return {
      _meta: result?._meta,
      content: [{
        type: 'text',
        text: `${AUTH_REQUIRED_TEXT} Initial signals: ${initialAuth.reasons.join(', ')}. Settle recheck failed: ${err instanceof Error ? err.message : String(err)}.`,
      }],
    };
  }
  if (!settled.auth.detected) return settled.result;

  return {
    _meta: settled.result?._meta ?? result?._meta,
    content: [{
      type: 'text',
      text: `${AUTH_REQUIRED_TEXT} Signals after ${AUTH_SETTLE_SECONDS}s settle: ${settled.auth.reasons.join(', ')}.`,
    }],
  };
}

async function main(): Promise<void> {
  const projectRoot = resolveProjectRoot();
  const upstreamConfig = resolveUpstreamConfig(projectRoot);
  await mkdir(upstreamConfig.outputDir, { recursive: true });
  await mkdir(upstreamConfig.profileDir, { recursive: true });

  const client = new Client(
    { name: 'gerald-playwright-mcp-blueprint-client', version: BLUEPRINT_VERSION },
    { capabilities: {} },
  );
  const upstreamTransport = new StdioClientTransport({
    command: upstreamConfig.command,
    args: upstreamConfig.args,
    env: upstreamConfig.env,
    cwd: upstreamConfig.cwd,
    stderr: 'inherit',
  });
  await client.connect(upstreamTransport);

  const server = new Server(
    { name: 'gerald-playwright-mcp-blueprint', version: BLUEPRINT_VERSION },
    {
      capabilities: { tools: {} },
      instructions: [
        'Playwright browser automation with Gerald policy guards.',
        'This server wraps the official Playwright MCP tool surface, so browser_snapshot, browser_tabs, screenshots, clicks, form fills, file upload, evaluate, and other upstream tools remain available.',
        'If a tool result returns AUTH_REQUIRED, ask the user to complete the login manually in the browser session and retry. Do not debug or modify application auth code unless the user explicitly asks.',
        'Allow localhost and rewrite loopback IP hosts such as 127.0.0.1 to localhost before upstream navigation. Reject other numeric IP hosts with: IP is not supported. Use localhost instead.',
        'When the only open tab is the initial about:blank tab, turn the first browser_tabs new request into a browser_navigate call so the blank tab does not linger.',
        'Default to a visible browser window. Headless mode is allowed only when GERALD_PLAYWRIGHT_ALLOW_HEADLESS=1 is set before launch.',
        'Default to Chromium sandboxing by setting PLAYWRIGHT_MCP_SANDBOX=1 before launching upstream Playwright MCP.',
        'Keep generated artifacts out of project directories. Screenshots should use relative filenames and land under the configured temp output directory.',
      ].join(' '),
    },
  );

  server.setRequestHandler(ListToolsRequestSchema, async req => client.listTools(req.params));
  server.setRequestHandler(CallToolRequestSchema, async req => {
    const blocked = guardToolCall(req as JsonObject);
    if (blocked) return blocked;

    const policyReq = await rewriteToolCallForPolicy(req as JsonObject, upstreamConfig.outputDir);
    const upstreamReq = await rewriteInitialBlankTabNewCall(policyReq, client);
    const params = upstreamReq.params as JsonObject;
    const result = await client.callTool({
      name: String(params.name),
      arguments: (params.arguments as JsonObject | undefined) ?? {},
    }) as JsonObject;
    return guardToolResultAfterSettling(upstreamReq, result, client);
  });

  await server.connect(new StdioServerTransport());

  const shutdown = () => {
    void upstreamTransport.close().finally(() => process.exit(0));
  };
  process.stdin.on('end', shutdown);
  process.stdin.on('close', shutdown);
  process.on('SIGTERM', shutdown);
  process.on('SIGINT', shutdown);
}

if (process.argv[1] && resolve(process.argv[1]) === resolve(__filename)) {
  main().catch(err => {
    process.stderr.write(`gerald playwright mcp: ${err instanceof Error ? err.stack : String(err)}\n`);
    process.exit(1);
  });
}
