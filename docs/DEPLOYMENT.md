# Deployment guide

This is a standard Next.js 14 (App Router) app. All pages are statically prerendered, so it deploys
anywhere that runs Node or serves static files.

## Environment variables

| Variable | Default | Purpose |
|---|---|---|
| `NEXT_PUBLIC_SITE_URL` | `https://www.bloo.io` | Canonical origin for URLs, OG, sitemap, schema |

Copy `.env.example` → `.env.local` and set the production domain before building.

## Option A — Vercel (recommended)

1. Push the repo to GitHub/GitLab.
2. Import the project in Vercel; framework auto-detected as Next.js.
3. Set `NEXT_PUBLIC_SITE_URL` in Project → Settings → Environment Variables.
4. Deploy. Vercel runs `next build` and serves automatically (the dynamic OG route and
   `sitemap.xml`/`robots.txt` work out of the box).

## Option B — Node server (any host / Docker)

```bash
npm ci
NEXT_PUBLIC_SITE_URL=https://www.bloo.io npm run build
npm run start          # serves on port 3000
```

Minimal Dockerfile:

```dockerfile
FROM node:20-alpine AS deps
WORKDIR /app
COPY package*.json ./
RUN npm ci
FROM node:20-alpine AS build
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
ENV NEXT_PUBLIC_SITE_URL=https://www.bloo.io
RUN npm run build
FROM node:20-alpine AS run
WORKDIR /app
ENV NODE_ENV=production
COPY --from=build /app/.next ./.next
COPY --from=build /app/public ./public
COPY --from=build /app/package*.json ./
COPY --from=build /app/node_modules ./node_modules
EXPOSE 3000
CMD ["npm","run","start"]
```

## Option C — static export

Because every route is static, you can add `output: 'export'` to `next.config.mjs` and run
`next build` to emit a static `out/` folder for any CDN/static host. Note: the dynamic
`/opengraph-image` route and `headers()` are server features — if you static-export, replace the OG
route with a pre-generated PNG and set security headers at the CDN/edge instead.

## Custom domain & DNS

- Point the apex/`www` record to your host.
- Enforce HTTPS (HSTS is already sent via `next.config.mjs` headers).
- Decide on a single canonical host (www vs non-www) and 301 the other to it.

## Security headers

Sent from `next.config.mjs`: HSTS, `X-Content-Type-Options: nosniff`, `X-Frame-Options: SAMEORIGIN`,
`Referrer-Policy: strict-origin-when-cross-origin`, a baseline `Permissions-Policy`. On a static
host, configure these at the edge/CDN. Consider adding a Content-Security-Policy once analytics/forms
endpoints are finalized.

## Post-deploy checklist

1. Verify `https://yourdomain/robots.txt` and `https://yourdomain/sitemap.xml` resolve.
2. Submit the sitemap in Google Search Console.
3. Test a page in the Rich Results Test and Schema validator.
4. Confirm OG image renders by sharing a URL (LinkedIn/X/Slack unfurl).
5. Run Lighthouse on the production URL (target ≥90 across the board).
6. Wire forms to your CRM endpoint and analytics to consent mode.
