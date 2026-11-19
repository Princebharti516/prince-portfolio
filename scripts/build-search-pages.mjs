import { mkdir, readFile, writeFile } from "node:fs/promises";

const output = new URL("../dist/", import.meta.url);
const origin = "https://prince-portfolio-sepia.vercel.app";
const pages = [
  ["about", "About"],
  ["skills", "Technical Skills"],
  ["projects", "Projects"],
  ["experience", "Experience"],
  ["certifications", "Certifications"],
  ["contact", "Contact"],
];

const template = (await readFile(new URL("index.html", output), "utf8"))
  .replace('content="/profile-pic.png"', 'content="' + origin + '/profile-pic.png"');

function renderPage(path, label) {
  let html = template;
  if (label) {
    const title = label + " | Prince Kumar";
    const description = "Explore the " + label.toLowerCase() + " page of Prince Kumar's developer portfolio.";
    html = html
      .replace(/<title>[^<]*<\/title>/, "<title>" + title + "</title>")
      .replace(/<meta\s+name="description"\s+content="[^"]*"\s*\/>/, '<meta name="description" content="' + description + '" />')
      .replace(/<meta property="og:title" content="[^"]*"\s*\/>/, '<meta property="og:title" content="' + title + '" />')
      .replace(/<meta\s+property="og:description"\s+content="[^"]*"\s*\/>/, '<meta property="og:description" content="' + description + '" />');
  }
  const tags = path === null
    ? '<meta name="robots" content="noindex" />'
    : '<link rel="canonical" href="' + origin + path + '" />\n    <meta property="og:url" content="' + origin + path + '" />';
  return html.replace("</head>", "  " + tags + "\n  </head>");
}

await writeFile(new URL("index.html", output), renderPage("/", null));
await mkdir(new URL("pages/", output), { recursive: true });
for (const [slug, label] of pages) {
  await writeFile(new URL("pages/" + slug + ".html", output), renderPage("/" + slug, label));
}
await writeFile(new URL("404.html", output), renderPage(null, "Page Not Found"));

const urls = ["/", ...pages.map(([slug]) => "/" + slug)];
const entries = urls.map((path) => "  <url><loc>" + origin + path + "</loc></url>").join("\n");
await writeFile(new URL("sitemap.xml", output),
  '<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n' + entries + '\n</urlset>\n');
