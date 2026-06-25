import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import {
  applyNavigableUrlPolicy,
  guardToolCall,
  rewriteInitialBlankTabNewCall,
  rewriteToolCallForPolicy,
  sandboxByDefaultEnv,
  validateNavigableUrl,
} from '../src/server.ts';

describe('navigation URL policy', () => {
  it('sets upstream Chromium sandbox env by default', () => {
    assert.deepEqual(sandboxByDefaultEnv({
      OTHER: 'kept',
    }), {
      PLAYWRIGHT_MCP_SANDBOX: '1',
      OTHER: 'kept',
    });
  });

  it('allows text hostnames without rewriting them', () => {
    assert.deepEqual(applyNavigableUrlPolicy('https://example.com/path?q=1'), { allowed: true });
    assert.deepEqual(validateNavigableUrl('http://localhost:4173/'), { allowed: true });
  });

  it('rewrites loopback IP hosts to localhost', () => {
    assert.deepEqual(applyNavigableUrlPolicy('http://127.0.0.1:4173/path?q=1#top'), {
      allowed: true,
      url: 'http://localhost:4173/path?q=1#top',
    });
    assert.deepEqual(applyNavigableUrlPolicy('127.0.0.1:4173/path'), {
      allowed: true,
      url: 'http://localhost:4173/path',
    });
    assert.deepEqual(applyNavigableUrlPolicy('http://[::1]:4173/'), {
      allowed: true,
      url: 'http://localhost:4173/',
    });
  });

  it('blocks non-loopback numeric IP hosts', () => {
    assert.deepEqual(validateNavigableUrl('http://192.168.1.10:3000/'), {
      allowed: false,
      reason: 'numeric IP hostname',
      message: 'IP is not supported. Use localhost instead.',
    });
    assert.deepEqual(validateNavigableUrl('http://8.8.8.8/'), {
      allowed: false,
      reason: 'numeric IP hostname',
      message: 'IP is not supported. Use localhost instead.',
    });
  });

  it('blocks non-loopback IP tab creation before upstream handling', () => {
    const blocked = guardToolCall({
      params: {
        name: 'browser_tabs',
        arguments: {
          action: 'new',
          url: 'http://192.168.1.10:3000/',
        },
      },
    });

    assert.deepEqual(blocked, {
      content: [{ type: 'text', text: 'IP is not supported. Use localhost instead.' }],
      isError: true,
    });
  });

  it('rewrites loopback navigation and new-tab URLs before upstream handling', async () => {
    const navigate = await rewriteToolCallForPolicy({
      params: {
        name: 'browser_navigate',
        arguments: {
          url: 'http://127.0.0.1:4173/',
        },
      },
    }, join(tmpdir(), 'gerald-playwright-url-policy-test'));

    assert.equal((navigate.params as any).arguments.url, 'http://localhost:4173/');

    const tab = await rewriteToolCallForPolicy({
      params: {
        name: 'browser_tabs',
        arguments: {
          action: 'new',
          url: 'http://127.0.0.1:4173/app',
        },
      },
    }, join(tmpdir(), 'gerald-playwright-url-policy-test'));

    assert.equal((tab.params as any).arguments.url, 'http://localhost:4173/app');
  });

  it('uses the initial blank tab for the first new-tab request', async () => {
    const rewritten = await rewriteInitialBlankTabNewCall({
      params: {
        name: 'browser_tabs',
        arguments: {
          action: 'new',
          url: 'http://localhost:4173/app',
        },
      },
    }, {
      async callTool() {
        return {
          content: [{
            type: 'text',
            text: '### Result\n- 0: (current) [](about:blank)',
          }],
        };
      },
    });

    assert.equal((rewritten.params as any).name, 'browser_navigate');
    assert.deepEqual((rewritten.params as any).arguments, {
      url: 'http://localhost:4173/app',
    });
  });

  it('keeps normal new-tab behavior when a real page is already open', async () => {
    const request = {
      params: {
        name: 'browser_tabs',
        arguments: {
          action: 'new',
          url: 'http://localhost:4173/second',
        },
      },
    };
    const rewritten = await rewriteInitialBlankTabNewCall(request, {
      async callTool() {
        return {
          content: [{
            type: 'text',
            text: '### Result\n- 0: (current) [App](http://localhost:4173/)',
          }],
        };
      },
    });

    assert.equal(rewritten, request);
  });
});
