# InspireNova Documents Directory

Place all publicly accessible PDF and document files in this directory.

### How Direct Links Work for AI Analysis
When your site is deployed to Vercel or your custom domain (e.g., `https://inspirenova.com`), any file placed in this folder is immediately available at:

`https://yourdomain.com/documents/<filename>.pdf`

### Why this works with AI (Gemini, ChatGPT, Claude)
- **Direct HTTP Stream:** Standard HTTP GET with `Content-Type: application/pdf`.
- **No Login / Captcha Walls:** Unlike Google Drive or Dropbox links, there is no preview iframe, cookie prompt, or anti-bot verification page.
- **Fast Ingestion:** AI web browsers and code interpreters can fetch, read, and analyze the contents instantly.

### Document Index
1. `InspireNova_Overview_2025.pdf` - Sample Company Overview PDF.

