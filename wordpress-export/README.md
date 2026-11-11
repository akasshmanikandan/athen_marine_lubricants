# WordPress export (athenmarine.com, backup of 2026-11-11)

Content migrated from the live WordPress site for the Vercel rebuild. Nothing here is imported by the app; it is source material.

- `content/posts/` - 32 blog posts as Markdown (front matter: title, slug, old WordPress path, date, SEO title/description/keyword)
- `content/pages/` - 28 WordPress pages from the XML export. Pages with `empty_in_wordpress: true` render from the custom theme templates, so their text is in `content/theme-page-text/`
- `content/theme-page-text/` - plain-text extraction of each theme template (`front-page`, `page-*.php`). Rough; check against `theme-templates/`
- `theme-templates/` - original `athen-marine` theme PHP templates and `style.css`, for reference
- `redirects.json` - old WordPress paths with `new_path: null`; fill in the new route for each, then add to `vercel.json`
- `../public/documents/` - 223 product catalogues, datasheets and certificates (main grades, secondary grades, synthetics, EAL, greases), served at `/documents/...`

Not included: `wp-content/uploads` media (images, remaining PDFs) and the theme's images/videos (about 52 MB). Database and user data are intentionally left out.
