# Gerald Playwright MCP Blueprint

This repository is the executable blueprint for Gerald Playwright automation. Project copies should include `GERALD_PLAYWRIGHT_BLUEPRINT.json` inside the project-local Playwright MCP setup folder so future agents can compare that project against this blueprint version and source commit.

The server wraps the official `@playwright/mcp` package rather than replacing it. That keeps the full upstream browser tool surface available while adding Gerald-specific policy around auth gates, URL safety, profile isolation, and artifact placement.

Run locally:

```sh
npm install
npm run check
npm run start
```

When registering a project copy in `.mcp.json`, launch the wrapper directly, for example `node --import tsx <project>/_tools/playwright/src/server.ts`, and set `GERALD_PROJECT_ROOT` to the project root. Do not register it through `npm run start`; npm script output can pollute MCP stdio, and the wrapper needs to see its own launch path so it can forward cleanly to the official upstream server.

Default behavior:

- one MCP process owns one browser runtime for the project
- the upstream Playwright MCP package is pinned to `@playwright/mcp@0.0.76` by default; set `GERALD_PLAYWRIGHT_MCP_PACKAGE` only for an intentional override
- persistent Chromium auth/profile state is saved outside the project repository
- Playwright output defaults to an OS temp run directory
- upstream `--output-mode stdout` keeps page YAML and console logs in MCP responses instead of files
- browser automation defaults to a visible window; set `GERALD_PLAYWRIGHT_ALLOW_HEADLESS=1` only when headless is intentional
- Chromium sandboxing is enabled by default with upstream `PLAYWRIGHT_MCP_SANDBOX=1`
- screenshot filenames must be relative; the wrapper rewrites them into the temp output directory before forwarding to upstream Playwright
- auth gates wait briefly, recheck the page snapshot, then return `AUTH_REQUIRED` and instruct the agent to ask for human login
- `localhost` is allowed, loopback IP hosts such as `127.0.0.1` and `::1` are rewritten to `localhost`, and other numeric IP hosts return `IP is not supported. Use localhost instead.`
- when the only tab is the initial `about:blank` tab, the first `browser_tabs new` request reuses that tab instead of leaving it open
