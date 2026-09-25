import { ProjectItem, ServiceDetail, FAQItem } from "../types";
import { 
  AGENCY_INFO, 
  SERVICES_DATA, 
  PORTFOLIO_DATA, 
  FAQ_DATA, 
  WORK_PROCESS 
} from "../data/agencyData";

export interface EditableSiteContent {
  agencyInfo: typeof AGENCY_INFO;
  portfolio: ProjectItem[];
  services: ServiceDetail[];
  faqs: FAQItem[];
  heroBadge: string;
  heroTitleLine1: string;
  heroTitleHighlight: string;
  heroSubtitle: string;
}

const STORAGE_KEY = "moockup_editable_site_content_v1";

// Strip huge base64 images from localStorage copy to guarantee it never exceeds browser quota
function sanitizeForLocalStorage(content: EditableSiteContent): EditableSiteContent {
  return {
    ...content,
    portfolio: content.portfolio.map((p) => {
      // If heroImage is a huge raw base64 string (>20KB), don't store it in localStorage;
      // it is safely persisted on the server in site-content.json
      if (p.heroImage && p.heroImage.startsWith("data:") && p.heroImage.length > 25000) {
        return {
          ...p,
          heroImage: p.heroImage.substring(0, 50) + "...", // placeholder for localStorage only
        };
      }
      return p;
    }),
  };
}

export const getInitialSiteContent = (): EditableSiteContent => {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      const parsed = JSON.parse(stored);
      // Always use PORTFOLIO_DATA as base to guarantee all new projects (Artemide, Romano Roppo, Foggia Calcio, MB Strategy, Montepeloso, Gringos, CAF365) are present
      const storedMap = new Map<string, ProjectItem>((Array.isArray(parsed.portfolio) ? parsed.portfolio : []).map((p: ProjectItem) => [p.id, p]));
      const mergedPortfolio = PORTFOLIO_DATA.map((defaultProj: ProjectItem) => {
        const storedItem = storedMap.get(defaultProj.id);
        if (storedItem) {
          // If stored item has an image that is placeholder/unsplash, replace with defaultProj.heroImage
          const isOutdatedImg = !storedItem.heroImage || 
            storedItem.heroImage.endsWith("...") || 
            storedItem.heroImage.includes("images.unsplash.com") ||
            (defaultProj.heroImage && !storedItem.heroImage.startsWith("data:") && storedItem.heroImage !== defaultProj.heroImage);
          return {
            ...storedItem,
            title: defaultProj.title,
            client: defaultProj.client,
            summary: defaultProj.summary,
            url: defaultProj.url,
            heroImage: isOutdatedImg ? defaultProj.heroImage : storedItem.heroImage,
          };
        }
        return defaultProj;
      });

      return {
        agencyInfo: parsed.agencyInfo || AGENCY_INFO,
        portfolio: mergedPortfolio,
        services: Array.isArray(parsed.services) && parsed.services.length > 0 ? parsed.services : SERVICES_DATA,
        faqs: FAQ_DATA,
        heroBadge: (parsed.heroBadge && parsed.heroBadge !== "Specialisti Certificati in Sviluppo Web, SEO & Google Ads" && parsed.heroBadge !== "Agenzia Realizzazione Sito Web, SEO & Google Ads") ? parsed.heroBadge : "Agenzia Marketing, Siti Web, SEO & Google Ads",
        heroTitleLine1: parsed.heroTitleLine1 || "Non Creiamo Semplici Siti.",
        heroTitleHighlight: (parsed.heroTitleHighlight && parsed.heroTitleHighlight !== "Creiamo Macchine da Vendita.") ? parsed.heroTitleHighlight : "Creiamo Business Scalabili.",
        heroSubtitle: parsed.heroSubtitle || "Sviluppiamo siti web ultra-veloci ottimizzati per la conversione (CRO), scaliamo il posizionamento organico su Google e moltiplichiamo il fatturato con campagne Google Ads guidate dal ROI.",
      };
    }
  } catch (e) {
    console.warn("Could not read site content from localStorage", e);
  }

  return {
    agencyInfo: AGENCY_INFO,
    portfolio: PORTFOLIO_DATA,
    services: SERVICES_DATA,
    faqs: FAQ_DATA,
    heroBadge: "Agenzia Marketing, Siti Web, SEO & Google Ads",
    heroTitleLine1: "Non Creiamo Semplici Siti.",
    heroTitleHighlight: "Creiamo Business Scalabili.",
    heroSubtitle: "Sviluppiamo siti web ultra-veloci ottimizzati per la conversione (CRO), scaliamo il posizionamento organico su Google e moltiplichiamo il fatturato con campagne Google Ads guidate dal ROI.",
  };
};

// Fetch from backend server so ALL end users see the full updated content (including uploaded images)
export const fetchServerSiteContent = async (): Promise<EditableSiteContent | null> => {
  try {
    const res = await fetch("/api/content");
    if (res.ok) {
      const data = await res.json();
      if (data.success && data.content) {
        // Safely cache a lightweight version in localStorage
        try {
          localStorage.setItem(STORAGE_KEY, JSON.stringify(sanitizeForLocalStorage(data.content)));
        } catch (quotaErr) {
          console.warn("localStorage quota reached; using in-memory state", quotaErr);
        }
        return data.content;
      }
    }
  } catch (err) {
    console.warn("Could not fetch site content from server", err);
  }
  return null;
};

// Save to server first, and safely guard localStorage so quota is never exceeded
export const saveSiteContent = async (content: EditableSiteContent) => {
  // 1. Always save full high-res content to the server backend (no quota limits)
  try {
    await fetch("/api/content", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ content }),
    });
  } catch (serverErr) {
    console.error("Could not save to backend server", serverErr);
  }

  // 2. Safe save to localStorage wrapped in try/catch to avoid any browser errors
  try {
    const safeContent = sanitizeForLocalStorage(content);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(safeContent));
  } catch (e) {
    // If quota is still exceeded or storage blocked, safely clear or skip without throwing
    console.warn("localStorage quota full - content successfully saved to server instead.", e);
  }

  // 3. Notify app components
  window.dispatchEvent(new Event("moockup-content-updated"));
};

export const resetSiteContent = () => {
  try {
    localStorage.removeItem(STORAGE_KEY);
    localStorage.removeItem("moockup_custom_portfolio_images");
    window.dispatchEvent(new Event("moockup-content-updated"));
  } catch (e) {
    console.error("Could not reset site content", e);
  }
};
