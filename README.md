# Prince Kumar — Developer Portfolio

A multi-page portfolio built with React, Vite, Tailwind CSS and React Router. Seven real routes (`/`, `/about`, `/skills`, `/projects`, `/experience`, `/certifications`, `/contact`) plus a custom 404 page.

## Tech stack
React 19 · Vite · Tailwind CSS v4 (`@tailwindcss/vite`) · React Router DOM · Lucide React · Motion for React · Google Fonts (Inter + Space Grotesk)

## Install and run locally
Requires Node.js 20+.

```bash
npm install
npm run dev        # http://localhost:5173
```

## Build for production
```bash
npm run build      # outputs to /dist
npm run preview    # serve the production build locally
```

## Deploy
**Vercel (recommended):** push the project to GitHub → import it at vercel.com → framework "Vite" is auto-detected. `vercel.json` already rewrites all paths to `index.html`, so opening `/projects` directly works.

**Netlify:** `public/_redirects` handles route fallback. Build command `npm run build`, publish directory `dist`.

**GitHub Pages:** set `base: "/your-repo-name/"` in `vite.config.js`, and `<BrowserRouter basename="/your-repo-name">` in `src/main.jsx`. GitHub Pages has no rewrite support, so also copy `dist/index.html` to `dist/404.html` after building.

## Where to change things
| I want to… | Edit |
| --- | --- |
| Update name, email, phone, links, location, footer text | `src/data/site.js` |
| Replace the profile photo | Overwrite `public/profile-pic.png` (square, ~600–800px) |
| Add a project | Add an object to `src/data/projects.js` (see comments in the file). Put a screenshot in `public/projects/` and set `image: "/projects/your-file.png"`. Set `github` only when you have a real repo URL |
| Add a certificate | Put the PDF in `public/certificates/`, then add an entry to `src/data/certifications.js` |
| Change skills | `src/data/skills.js` |
| Change internship / learning details | `src/data/experience.js` |
| Change colours | Tokens at the top of `src/index.css` (`@theme`) |

## Contact form
There is no backend. Submitting validates the form and opens the visitor's email app via a `mailto:` link addressed to the email in `site.js`. To send messages directly later, add a service such as Formspree with a real endpoint.

## Structure
```
src/
  components/   Navbar, Footer, Button, PageHeader, ProjectCard, SkillCard, CertificateCard, ...
  layouts/      MainLayout (navbar + footer + page transition)
  pages/        one component per route
  data/         site, skills, projects, certifications, experience
```

## Motion & extras
- `components/Background.jsx` — animated grid + drifting colour washes (CSS only; disabled for reduced motion)
- `components/ScrollProgress.jsx`, `BackToTop.jsx`, `Typewriter.jsx` (edit phrases in `pages/Home.jsx`), `TechMarquee.jsx` (reads `skills.js`)
- Scroll reveal and card spotlight are handled in `layouts/MainLayout.jsx`; any element with `.card` or `data-reveal` animates in.
- Resume: replace `public/Prince-Kumar-Resume.pdf` (path set in `src/data/site.js`).
