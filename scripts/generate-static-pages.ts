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

  // In root container, provide instant visual shell customized for this landing page
  const pageShell = `<div id="root">
      <header class="fixed top-0 left-0 right-0 z-40 bg-[#090D16]/90 backdrop-blur-md border-b border-slate-800/80 py-4 sm:py-5">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <a href="/" class="inline-flex flex-col select-none leading-none">
            <div class="flex items-baseline tracking-tighter">
              <span class="font-black italic text-white text-2xl sm:text-3xl tracking-[-0.04em]" style="font-style:italic">moockup</span>
              <span class="font-black italic text-fuchsia-500 text-3xl sm:text-4xl drop-shadow-[0_0_12px_rgba(217,70,239,0.7)] ml-0.5" style="font-style:italic">.</span>
            </div>
            <span class="font-semibold tracking-[0.22em] uppercase text-fuchsia-400/90 text-[11px] sm:text-[12px] -mt-0.5 sm:-mt-1">your vision, our mission</span>
          </a>
          <a href="/#contatti" class="inline-flex items-center justify-center px-4 py-2 text-xs sm:text-sm font-bold rounded-xl text-white bg-gradient-to-r from-fuchsia-600 to-pink-600 shadow-md">
            Richiedi Preventivo
          </a>
        </div>
      </header>
      <main class="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-4xl">
          <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-800/90 border border-slate-700/80 mb-6">
            <span class="flex h-2 w-2 rounded-full bg-emerald-400 shrink-0 animate-pulse"></span>
            <span class="text-xs font-semibold text-slate-300">${escapeHtml(page.badge || "Moockup Studio")}</span>
          </div>
          <h1 class="text-3xl sm:text-5xl md:text-6xl font-display font-extrabold text-white tracking-tight mb-6">
            ${escapeHtml(page.heroHeadline || page.metaTitle)}
          </h1>
          <p class="text-base sm:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed mb-8">
            ${escapeHtml(page.heroSubheadline || page.metaDescription)}
          </p>
          <div class="flex items-center justify-center gap-4">
            <a href="/#contatti" class="px-7 py-3.5 rounded-xl text-white font-bold bg-gradient-to-r from-fuchsia-600 to-pink-600 shadow-xl shadow-fuchsia-600/25">
              Richiedi Preventivo Gratuito
            </a>
            <a href="/" class="px-6 py-3.5 rounded-xl text-slate-200 font-semibold bg-slate-800/80 border border-slate-700">
              Torna alla Home
            </a>
          </div>
        </div>
      </main>
    </div>`;

  customizedHtml = customizedHtml.replace(
    /<div id="root">[\s\S]*?<\/div>/i,
    pageShell
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
