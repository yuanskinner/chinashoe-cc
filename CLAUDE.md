# Cloudflare Pages Deployment

## Important Constraints (HARD RULES)

- `src/` is linked to Cloudflare Pages auto-deploy
- **Every push triggers compilation and website update**
- Pre-push verification is mandatory

## Pre-Push Checklist

Before pushing to remote, MUST verify:

1. **Build passes locally**
   ```bash
   npm run build
   ```

2. **No breaking changes to Cloudflare**
   - Check `wrangler.toml` and `astro.config.mjs`
   - Ensure features are Cloudflare Pages compatible

3. **Push only essential files**
   - `src/` - website source code
   - `public/` - static assets
   - `docs/` - documentation
   - Config files: `package.json`, `astro.config.mjs`, `tailwind.config.mjs`, `tsconfig.json`

## Do NOT Push

- `scripts/` - Python utilities (local only)
- `data/` - generated data (local only)
- `output/` - generated output (local only)
- `node_modules/` - dependencies (in .gitignore)
- `.env` files - secrets (in .gitignore)

## Python Scripts Rules (CRITICAL)

1. **NEVER fallback to demo/mock data** - If crawling fails, the script MUST fail with an error. No silent degradation.

2. **Scripts are local-only tools** - They generate data locally, not content for the website directly.

3. **Anti-scraping compliance** - Respect robots.txt, rate limits, and website terms of service.

4. **Error handling** - Scripts should fail fast and loud if data cannot be obtained. Never return fake data.

## Project Structure

```
chinashoe-cc/
├── src/              # Website source (Cloudflare linked)
├── public/           # Static assets
├── scripts/          # Python tools (DO NOT PUSH)
├── data/             # Generated data (DO NOT PUSH)
├── output/           # Build output (DO NOT PUSH)
├── docs/             # Planning docs
└── [config files]    # package.json, astro.config.mjs, etc.
```
