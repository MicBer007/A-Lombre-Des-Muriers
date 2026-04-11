# View local dev site

Start the Vite dev server and open the site in the Playwright browser, ready for testing.

## Setup

1. Start the Vite dev server using `run_in_background: true` on the Bash tool (no `&`):
   ```
   cd "D:\Personal\ALombreDesMuriers" && npm run dev
   ```

2. Wait ~3 seconds, then confirm it's up:
   ```
   curl -s -o /dev/null -w "%{http_code}" http://localhost:5173/
   ```

3. Call `browser_close` to clear any stale Playwright session, then navigate to `http://localhost:5173/`.

The site is now live at `http://localhost:5173`. Ask the user what they'd like to do.

## Teardown

When done, find and kill only the Vite process — never use `taskkill //F //IM node.exe` as it also kills the Playwright MCP server:
```
netstat -ano | findstr 5173
taskkill //F //PID <pid>
```
