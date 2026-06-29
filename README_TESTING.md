# WBT Companion App v16.4 — Lightweight PWA Test Project

This is the first lightweight PWA wrapper test project for the WBT Companion App.

## What is included

- `src/App.jsx` — the WBT Companion App source
- `src/main.jsx` — React entry point
- `public/manifest.webmanifest` — installable app manifest
- `public/sw.js` — lightweight app-shell service worker
- `public/icons/` — temporary WBT app icons
- `index.html` — Vite app shell
- `package.json` — minimal Vite/React project

## What is not included yet

- No live AI
- No OpenAI API key
- No backend
- No login/account system
- No payment/subscription connection
- No database
- No social/community layer

## Local test commands

```bash
npm install
npm run dev
```

For a production-style test:

```bash
npm run build
npm run preview
```

## Phone/PWA test checklist

1. Open the app on a phone browser.
2. Save a Dog Profile.
3. Run an assessment and generate a report.
4. Save the report to the Behaviour Log.
5. Start a 7-day observation.
6. Close and reopen the app in the same phone/browser.
7. Confirm the Dog Profile, report/log, and observation are still there.
8. Use Add to Home Screen / Install App.
9. Open from the phone home screen.
10. Confirm WBT links open safely outside the app.

Saved information remains in local device/browser storage in this version.
