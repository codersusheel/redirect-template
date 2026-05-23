
# Netlify _redirects File Guide

The _redirects file is used in Netlify to manage URL redirects and routing rules for a website.
It helps you move users from old pages to new pages without breaking links and improves SEO.

This file is very important when you:

Change page URLs
Move pages or folders
Update website structure
Show temporary pages (like maintenance)
Redirect full website to a new design
🚀 Basic Format
/old-url     /new-url     status-code

Example:

/about-old    /about      301
🔥 1. 301 Redirect (Permanent Move)

👉 Use when a page is permanently moved.

/about-old     /about     301

📌 Meaning:
Old page is permanently replaced by new page.
SEO ranking is transferred to new page.

🔄 2. 302 Redirect (Temporary Move)

👉 Use when a page is temporarily moved.

/login         /maintenance     302

📌 Meaning:
Login page is temporarily showing maintenance page.

📁 3. Folder / Section Redirect

👉 Move a complete section or folder.

/page/         /new-page/       301

📌 Meaning:
All pages inside /page/ are moved to /new-page/

🌍 4. Full Website Redirect

👉 Redirect entire website to a new structure.

/*             /new-home        301

📌 Meaning:
All pages of the old website redirect to new homepage.

🔁 5. Dynamic Redirect (Splat Redirect)

👉 Keeps same page structure while changing folder.

/blog/*        /articles/:splat     301

📌 Example:

/blog/post-1 → /articles/post-1
/blog/react → /articles/react
💡 Real Example (Haproven Project)
# Permanent page updates
/old-about      /about        301
/old-projects   /projects     301

# Temporary maintenance
/login          /maintenance  302

# Blog restructure
/blog/*         /articles/:splat  301

# Full redesign move
/*              /home         301
⚠️ Important Rules
File name must be exactly: _redirects
No file extension (not .txt)
Use 301 for permanent changes
Use 302 for temporary changes
Place file in the root folder of project
🎯 Summary

The _redirects file helps manage website navigation smoothly without breaking links.
It is essential for SEO, clean URL structure, and better user experience.