# Athen Marine Lubricants - website

Static copy of the athenmarine.com WordPress site (custom `athen-marine` theme), hosted on Vercel.

- `site/` - the deployed website (pre-rendered HTML pages, `assets/` for theme CSS/JS/images/videos, `documents/` for product PDFs)
- `api/form.js` - serverless function that emails the Quote, Contact, Careers and Partner forms (needs `RESEND_API_KEY`, optional `FORM_TO`, `FORM_FROM`)
- `vercel.json` - output directory, trailing slashes and redirects from old WordPress URLs
- `wordpress-export/` - source material from the WordPress backup of 2026-11-11 (content as Markdown, original theme templates, redirects list)

The previous React/Vite site is kept on the `react-rebuild-backup` branch.

To edit a page, change its `index.html` under `site/`. Blog posts live in `site/<post-slug>/index.html`.
