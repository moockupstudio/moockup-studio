import fs from "fs";
import path from "path";
import { pathToFileURL } from "url";
import { SERVICE_LANDINGS } from "../src/data/serviceLandingsData";
import { ALL_SEO_LANDINGS } from "../src/data/seoLandingsData";
import {
  SITE_BASE_URL,
  buildServiceLandingJsonLd,
  buildSeoLandingJsonLd,
} from "../src/utils/seoMeta";

const distDir = path.resolve(process.cwd(), "dist");
const ssrEntryPath = path.resolve(process.cwd(), ".ssr-dist/entry-ssr.js");
const templatePath = path.join(distDir, "index.html");

if (!fs.existsSync(templatePath)) {
  console.error("dist/index.html does not exist. Run vite build first!");
  process.exit(1);
}

if (!fs.existsSync(ssrEntryPath)) {
  console.error(".ssr-dist/entry-ssr.js does not exist. Run vite build --ssr first!");
  process.exit(1);
}

const templateHtml = fs.readFileSync(templatePath, "utf-8");

interface PageConfig {
  route: string;
  metaTitle: string;
  metaDescription: string;
  jsonLd: Record<string, any>;
}

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

function replaceMetaAndRoot(
  baseHtml: string,
  renderedRootHtml: string,
  options?: {
    fullUrl: string;
    metaTitle: string;
    metaDescription: string;
    jsonLdScript: string;
  }
): string {
  let html = baseHtml.replace(
    /<div id="root">[\s\S]*?<\/div>/i,
    `<div id="root">${renderedRootHtml}</div>`
  );

  if (options) {
    html = html
      .replace(/<title>.*?<\/title>/i, `<title>${escapeHtml(options.metaTitle)}</title>`)
      .replace(
        /<meta\s+name="description"\s+content=".*?"\s*\/?>/i,
        `<meta name="description" content="${escapeHtml(options.metaDescription)}" />`
      )
      .replace(
        /<meta\s+property="og:title"\s+content=".*?"\s*\/?>/i,
        `<meta property="og:title" content="${escapeHtml(options.metaTitle)}" />`
      )
      .replace(
        /<meta\s+property="og:description"\s+content=".*?"\s*\/?>/i,
        `<meta property="og:description" content="${escapeHtml(options.metaDescription)}" />`
      )
      .replace(
        /<meta\s+property="og:url"\s+content=".*?"\s*\/?>/i,
        `<meta property="og:url" content="${options.fullUrl}" />`
      )
      .replace(
        /<meta\s+name="twitter:title"\s+content=".*?"\s*\/?>/i,
        `<meta name="twitter:title" content="${escapeHtml(options.metaTitle)}" />`
      )
      .replace(
        /<meta\s+name="twitter:description"\s+content=".*?"\s*\/?>/i,
        `<meta name="twitter:description" content="${escapeHtml(options.metaDescription)}" />`
      )
      .replace(
        /<link\s+rel="canonical"\s+href=".*?"\s*\/?>/i,
        `<link rel="canonical" href="${options.fullUrl}" />`
      )
      .replace(
        /<script\s+id="home-jsonld"\s+type="application\/ld\+json">[\s\S]*?<\/script>/i,
        `<script id="page-jsonld" type="application/ld+json">${options.jsonLdScript}</script>`
      );
  }

  return html;
}

async function run() {
  const ssrModule = await import(pathToFileURL(ssrEntryPath).href);
  const renderRoute: (routePath: string) => string = ssrModule.renderRoute;

  // 1. Pre-render full visible Homepage HTML into dist/index.html
  const homeRendered = renderRoute("/");
  const homeHtml = replaceMetaAndRoot(templateHtml, homeRendered);
  fs.writeFileSync(templatePath, homeHtml, "utf-8");

  // 2. Collect all Service Landings (/servizi/{slug}) and SEO Sector & Local Landings (/{slug})
  const pagesToGenerate: PageConfig[] = [];

  for (const [slug, landing] of Object.entries(SERVICE_LANDINGS)) {
    const route = `/servizi/${slug}`;
    pagesToGenerate.push({
      route,
      metaTitle: landing.metaTitle,
      metaDescription: landing.metaDescription,
      jsonLd: buildServiceLandingJsonLd(landing, route),
    });
  }

  for (const [slug, landing] of Object.entries(ALL_SEO_LANDINGS)) {
    const route = `/${slug}`;
    pagesToGenerate.push({
      route,
      metaTitle: landing.metaTitle,
      metaDescription: landing.metaDescription,
      jsonLd: buildSeoLandingJsonLd(landing, route),
    });
  }

  console.log(`Pre-rendering Homepage + ${pagesToGenerate.length} static HTML pages...`);

  for (const page of pagesToGenerate) {
    const fullUrl = `${SITE_BASE_URL}${page.route}`;
    const renderedContent = renderRoute(page.route);
    const customizedHtml = replaceMetaAndRoot(templateHtml, renderedContent, {
      fullUrl,
      metaTitle: page.metaTitle,
      metaDescription: page.metaDescription,
      jsonLdScript: JSON.stringify(page.jsonLd),
    });

    // Write extensionless .html file (e.g. dist/servizi/siti-web.html, dist/siti-web-ristoranti.html)
    // so GitHub Pages serves /servizi/siti-web with HTTP 200 OK and zero trailing-slash 301 redirect.
    const cleanRoute = page.route.replace(/^\//, "");
    const targetFile = path.join(distDir, `${cleanRoute}.html`);
    fs.mkdirSync(path.dirname(targetFile), { recursive: true });
    fs.writeFileSync(targetFile, customizedHtml, "utf-8");
  }

  // Clean up temporary SSR build folder
  const ssrDir = path.dirname(ssrEntryPath);
  if (fs.existsSync(ssrDir)) {
    fs.rmSync(ssrDir, { recursive: true, force: true });
  }

  console.log(`Successfully pre-rendered Homepage and ${pagesToGenerate.length} landing pages in dist!`);
}

run().catch((err) => {
  console.error("Failed to generate static pre-rendered pages:", err);
  process.exit(1);
});
