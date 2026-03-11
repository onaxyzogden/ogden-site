OGDEN site package for site.ogden.ag

WHAT'S INCLUDED
- Shared design system across all pages
- Shared nav/footer
- Smooth page transitions
- SEO tags and social preview image
- Analytics-ready click tracking hooks
- Demo intake form that can be wired to Formspree/Tally/Basin

DEPLOY
1. Create a new GitHub repo
2. Upload all files from this package to the repo root
3. In GitHub: Settings > Pages > Deploy from branch > main > /(root)
4. DNS: create CNAME record
   Host: site
   Value: <your-github-username>.github.io
5. Wait for DNS, then open https://site.ogden.ag

MAKE THE INTAKE LIVE
Open /bbos/intake/index.html
Replace:
  action="YOUR_FORM_ENDPOINT_HERE"
  data-endpoint="YOUR_FORM_ENDPOINT_HERE"
With your real endpoint.

FASTEST OPTIONS
- Formspree: easiest GitHub Pages setup
- Tally: best UX, use redirect/embed link
- Basin/Getform: similar to Formspree

TURN ON ANALYTICS
Open /assets/js/analytics.js
Uncomment the Plausible or Fathom block and replace the placeholder value.

FILES
/index.html
/bbos/index.html
/bbos/intake/index.html
/moontrance/index.html
/moontrance/acquisition/index.html
/moontrance/economics/index.html
/assets/css/style.css
/assets/js/main.js
/assets/js/analytics.js
/assets/favicon.svg
/assets/og-preview.svg
/CNAME