import type { ServiceLanding } from "../data/serviceLandingsData";
import type { SeoLanding } from "../data/seoLandingsData";

export const SITE_BASE_URL = "https://www.moockup.it";

export const HOME_META = {
  title: "Agenzia Marketing Foggia: Siti Web, SEO & Google Ads | MOOCKUP",
  description:
    "Agenzia marketing a Foggia specializzata in realizzazione siti web veloci, agenzia SEO Foggia e gestione campagne Google Ads ad alto ROI. Audit gratuito.",
  url: SITE_BASE_URL,
};

function upsertMetaTag(
  selector: string,
  attrName: "name" | "property",
  attrValue: string,
  content: string
) {
  if (typeof document === "undefined") return;
  let el = document.querySelector(selector) as HTMLMetaElement | null;
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attrName, attrValue);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

export function updateDocumentSeoMeta(params: {
  title: string;
  description: string;
  path: string;
}) {
  if (typeof document === "undefined") return;
  const cleanPath = params.path === "/" ? "" : `/${params.path.replace(/^\/+|\/+$/g, "")}`;
  const fullUrl = `${SITE_BASE_URL}${cleanPath}`;

  document.title = params.title;

  upsertMetaTag('meta[name="description"]', "name", "description", params.description);
  upsertMetaTag('meta[property="og:title"]', "property", "og:title", params.title);
  upsertMetaTag('meta[property="og:description"]', "property", "og:description", params.description);
  upsertMetaTag('meta[property="og:url"]', "property", "og:url", fullUrl);
  upsertMetaTag('meta[name="twitter:title"]', "name", "twitter:title", params.title);
  upsertMetaTag('meta[name="twitter:description"]', "name", "twitter:description", params.description);

  let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
  if (!canonical) {
    canonical = document.createElement("link");
    canonical.setAttribute("rel", "canonical");
    document.head.appendChild(canonical);
  }
  canonical.setAttribute("href", fullUrl);
}

export function buildServiceLandingJsonLd(landing: ServiceLanding, route: string) {
  const fullUrl = `${SITE_BASE_URL}${route}`;
  const graph: Record<string, any>[] = [
    {
      "@type": "Service",
      "@id": `${fullUrl}#service`,
      name: landing.title,
      serviceType: landing.badge,
      url: fullUrl,
      provider: {
        "@type": "LocalBusiness",
        name: "Moockup Studio - Agenzia Marketing Foggia",
        url: SITE_BASE_URL,
        telephone: "+39 348 652 0380",
        email: "moockupstudio@gmail.com",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Foggia",
          addressRegion: "FG",
          postalCode: "71122",
          addressCountry: "IT",
        },
      },
      description: landing.metaDescription,
      areaServed: [
        { "@type": "City", name: "Foggia" },
        { "@type": "AdministrativeArea", name: "Puglia" },
        { "@type": "Country", name: "Italia" },
      ],
      offers: {
        "@type": "Offer",
        priceCurrency: "EUR",
        availability: "https://schema.org/InStock",
      },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: SITE_BASE_URL,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: landing.title,
          item: fullUrl,
        },
      ],
    },
  ];

  if (landing.faqList && landing.faqList.length > 0) {
    graph.push({
      "@type": "FAQPage",
      mainEntity: landing.faqList.map((faq) => ({
        "@type": "Question",
        name: faq.q,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.a,
        },
      })),
    });
  }

  return {
    "@context": "https://schema.org",
    "@graph": graph,
  };
}

export function buildSeoLandingJsonLd(landing: SeoLanding, route: string) {
  const fullUrl = `${SITE_BASE_URL}${route}`;
  const isLocal = landing.category === "localita";

  const primaryEntity: Record<string, any> = isLocal
    ? {
        "@type": "ProfessionalService",
        "@id": `${fullUrl}#localservice`,
        name: `${landing.title} - Moockup Studio`,
        url: fullUrl,
        description: landing.metaDescription,
        telephone: "+39 348 652 0380",
        email: "moockupstudio@gmail.com",
        priceRange: "€€",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Foggia",
          addressRegion: "FG",
          postalCode: "71122",
          addressCountry: "IT",
        },
        areaServed: landing.geoArea || "Foggia e Puglia",
        serviceType: landing.keywordTarget,
      }
    : {
        "@type": "Service",
        "@id": `${fullUrl}#service`,
        name: landing.title,
        url: fullUrl,
        description: landing.metaDescription,
        provider: {
          "@type": "LocalBusiness",
          name: "Moockup Studio",
          url: SITE_BASE_URL,
          telephone: "+39 348 652 0380",
          email: "moockupstudio@gmail.com",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Foggia",
            addressRegion: "FG",
            postalCode: "71122",
            addressCountry: "IT",
          },
        },
        areaServed: landing.geoArea || "Italia",
        serviceType: landing.keywordTarget,
        offers: {
          "@type": "Offer",
          priceCurrency: "EUR",
          availability: "https://schema.org/InStock",
        },
      };

  const graph: Record<string, any>[] = [
    primaryEntity,
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: SITE_BASE_URL,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: landing.title,
          item: fullUrl,
        },
      ],
    },
  ];

  if (landing.faqList && landing.faqList.length > 0) {
    graph.push({
      "@type": "FAQPage",
      mainEntity: landing.faqList.map((faq) => ({
        "@type": "Question",
        name: faq.q,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.a,
        },
      })),
    });
  }

  return {
    "@context": "https://schema.org",
    "@graph": graph,
  };
}
