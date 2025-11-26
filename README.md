# Portfolio (Vite + React + Express API)

This project has a React frontend (Vite) and an Express API that stores messages in MongoDB and emails you via Resend.

## Local setup
1) Install deps: `npm install`
2) Create `project/.env` (copy from `.env.example`) and fill:
```
MONGODB_URI=your-mongodb-uri
MONGODB_DB_NAME=portfolio
MONGODB_COLLECTION=incomming
PORT=5174
ALLOWED_ORIGINS=http://localhost:5173
VITE_API_BASE_URL=http://localhost:5174
RESEND_API_KEY=your_resend_api_key
```
3) Run API: `npm run server` (http://localhost:5174). Check `GET /api/health`.
4) Run frontend: `npm run dev` (http://localhost:5173). Submit the form; it should store to Mongo and send email.

## Deploy the API (Vercel serverless)
This repo now includes `api/messages.js` and `api/health.js` for Vercel serverless functions.

Env vars (Vercel → Project → Settings → Environment Variables):
```
MONGODB_URI=...
MONGODB_DB_NAME=portfolio
MONGODB_COLLECTION=incomming
ALLOWED_ORIGINS=https://asjadyousaf.online,https://www.asjadyousaf.online
RESEND_API_KEY=your_resend_api_key
```

API endpoints will be available at your site domain (e.g., https://asjadyousaf.online/api/messages and /api/health).

## Deploy the frontend (Vercel)
- Build command: `npm run build`
- Output: `dist`
- In production leave `VITE_API_BASE_URL` unset so the client uses the current origin (handles `www`/apex without redirects). For local dev, keep `VITE_API_BASE_URL=http://localhost:5174` in `.env`.

## Custom domain (Vercel)
- Add `asjadyousaf.online` and `www.asjadyousaf.online` in Vercel Domains.
- Set DNS: CNAME `www` → `cname.vercel-dns.com` (and root to Vercel/redirect to `www`).

## Verify in production
1) Open `https://www.asjadyousaf.online`
2) Submit the form.
3) Expect 201 response, Mongo insert, and an email via Resend to your configured address.
4) If email fails, check API logs; Resend errors will be logged to stdout.
