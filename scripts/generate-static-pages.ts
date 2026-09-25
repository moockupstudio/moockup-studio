import fs from "fs";
import path from "path";
import { SERVICE_LANDINGS } from "../src/data/serviceLandingsData";
import { ALL_SEO_LANDINGS } from "../src/data/seoLandingsData";

const distDir = path.resolve(process.cwd(), "dist");
const templatePath = path.join(distDir, "index.html");

if (!fs.existsSync(templatePath)) {
  console.error("dist/index.html does not exist. Run vite build first!");
  process.exit(1);
}

const templateHtml = fs.readFileSync(templatePath, "utf-8");

interface PageConfig {
  route: string;
  metaTitle: string;
  metaDescription: string;
  heroHeadline?: string;
  heroSubheadline?: string;
  badge?: string;
}

const pagesToGenerate: PageConfig[] = [];

// 1. Service Landings (/servizi/{slug})
for (const [slug, landing] of Object.entries(SERVICE_LANDINGS)) {
  pagesToGenerate.push({
    route: `/servizi/${slug}`,
    metaTitle: landing.metaTitle,
    metaDescription: landing.metaDescription,
    heroHeadline: landing.heroHeadline,
    heroSubheadline: landing.heroSubheadline,
    badge: landing.badge,
  });
}

// 2. SEO Sector & Local Landings (/{slug})
for (const [slug, landing] of Object.entries(ALL_SEO_LANDINGS)) {
  pagesToGenerate.push({
    route: `/${slug}`,
    metaTitle: landing.metaTitle,
    metaDescription: landing.metaDescription,
    heroHeadline: landing.heroHeadline,
    heroSubheadline: landing.heroSubheadline,
    badge: landing.badge,
  });
}

console.log(`Generating ${pagesToGenerate.length} static HTML pages for GitHub Pages...`);

for (const page of pagesToGenerate) {
  const fullUrl = `https://www.moockup.it${page.route}`;
  
  // Replace title, meta description, and canonical
  let customizedHtml = templateHtml
    .replace(/<title>.*?<\/title>/i, `<title>${escapeHtml(page.metaTitle)}</title>`)
    .replace(
      /<meta\s+name="description"\s+content=".*?"\s*\/?>/i,
      `<meta name="description" content="${escapeHtml(page.metaDescription)}" />`
    )
    .replace(
      /<meta\s+property="og:title"\s+content=".*?"\s*\/?>/i,
      `<meta property="og:title" content="${escapeHtml(page.metaTitle)}" />`
    )
    .replace(
      /<meta\s+property="og:description"\s+content=".*?"\s*\/?>/i,
      `<meta property="og:description" content="${escapeHtml(page.metaDescription)}" />`
    )
    .replace(
      /<meta\s+property="og:url"\s+content=".*?"\s*\/?>/i,
      `<meta property="og:url" content="${fullUrl}" />`
    )
    .replace(
      /<meta\s+name="twitter:title"\s+content=".*?"\s*\/?>/i,
      `<meta name="twitter:title" content="${escapeHtml(page.metaTitle)}" />`
    )
    .replace(
      /<meta\s+name="twitter:description"\s+content=".*?"\s*\/?>/i,
      `<meta name="twitter:description" content="${escapeHtml(page.metaDescription)}" />`
    )
    .replace(
      /<link\s+rel="canonical"\s+href=".*?"\s*\/?>/i,
      `<link rel="canonical" href="${fullUrl}" />`
    );

  // In root container, provide initial crawler-readable semantic tags before React mounts
  const semanticFallback = `<div id="root"><main class="sr-only"><h1>${escapeHtml(
    page.heroHeadline || page.metaTitle
  )}</h1><p>${escapeHtml(
    page.heroSubheadline || page.metaDescription
  )}</p></main></div>`;

  customizedHtml = customizedHtml.replace(
    /<div id="root"><\/div>/i,
    semanticFallback
  );

  // Target directory inside dist
  // E.g. /servizi/sem -> dist/servizi/sem/index.html
  // E.g. /siti-web-ristoranti -> dist/siti-web-ristoranti/index.html
  const cleanRoute = page.route.replace(/^\//, "");
  const targetDir = path.join(distDir, cleanRoute);
  
  fs.mkdirSync(targetDir, { recursive: true });
  fs.writeFileSync(path.join(targetDir, "index.html"), customizedHtml, "utf-8");
}

console.log(`Successfully generated all ${pagesToGenerate.length} static landing pages in dist!`);

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}
