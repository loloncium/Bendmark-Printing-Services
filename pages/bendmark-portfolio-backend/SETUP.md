# BendMark Portfolio Admin — Setup Guide

This adds a password-protected admin panel, a Postgres database, and
image storage (Vercel Blob) to your site, so `portfolio.html` can show
an unlimited number of projects that you manage through `/admin.html`
instead of hardcoded HTML.

## 1. File layout

Merge these into your existing site's repo (same one deployed to
`bendmark-printing-services.vercel.app`):

```
your-repo/
├── api/
│   ├── login.js
│   ├── logout.js
│   ├── session.js
│   ├── upload.js
│   └── projects/
│       ├── index.js
│       └── [id].js
├── lib/
│   ├── auth.js
│   ├── db.js
│   └── requireAuth.js
├── admin.html          ← the admin panel
├── portfolio.html       ← replace your existing one with this version
├── package.json          ← merge dependencies if you already have one
└── schema.sql            (not deployed — just run it once, see step 4)
```

`index.html` and `styles.css` are unchanged by this step.

## 2. Create the Postgres database

1. In the Vercel dashboard, open your project → **Storage** tab → **Create Database** → **Postgres**.
2. Connect it to your project. Vercel automatically adds the
   `POSTGRES_URL` (and related) environment variables — you don't set
   these yourself.

## 3. Create the Blob store

1. Same **Storage** tab → **Create Database** → **Blob**.
2. Connect it to your project. This adds `BLOB_READ_WRITE_TOKEN`
   automatically.

## 4. Run the schema

Open the Postgres database in the Vercel dashboard → **Query** tab,
paste the contents of `schema.sql`, and run it. This creates the
`projects` table.

## 5. Set the two remaining environment variables

In your project → **Settings** → **Environment Variables**, add:

| Name | Value |
|---|---|
| `ADMIN_PASSWORD` | Whatever password you want to log into `/admin.html` with |
| `SESSION_SECRET` | A long random string (e.g. run `openssl rand -hex 32` locally and paste the output) |

Set both for the **Production** environment (and Preview, if you use
preview deployments).

## 6. Install dependencies and deploy

```bash
npm install
vercel deploy --prod
```

(Or just push to your connected Git branch if Vercel auto-deploys from Git.)

## 7. Use it

- Go to `https://your-site.vercel.app/admin.html`, log in with
  `ADMIN_PASSWORD`.
- Add a project: title, category, description, installation location,
  client, year, dimensions, materials, features, and a photo.
- Photos are resized in your browser before upload (max 1600px, JPEG)
  to stay under Vercel's request size limit — very large source photos
  will be shrunk automatically, so don't worry about pre-resizing.
- `portfolio.html` fetches from `/api/projects` on every page load, so
  changes you save in the admin panel show up for every visitor
  immediately — no rebuild or redeploy needed.

## Notes & limits

- Uploads over ~3MB (after the browser resize) may fail — this is a
  hard limit on Vercel's default serverless function body size (4.5MB
  including base64 overhead). Almost no photo should hit this after
  the automatic resize, but very long videos might. If you need to
  upload longer/heavier videos regularly, say so and we can switch
  video uploads to a direct-to-Blob client upload that bypasses this
  limit.
- The admin password is a single shared password, not per-user
  accounts. That's fine for one or two people managing content; if you
  want individual logins later, Vercel/Auth.js or Supabase Auth would
  be the next step.
- Session cookies last 8 hours, then you'll need to log in again.
