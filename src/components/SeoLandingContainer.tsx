import React from "react";
import { SeoLandingPageView } from "./SeoLandingPageView";
import { ALL_SEO_LANDINGS } from "../data/seoLandingsData";

interface SeoLandingContainerProps {
  slug: string;
  onBack: () => void;
  onOpenAudit: () => void;
  onSelectOtherLanding: (slug: string) => void;
}

export default function SeoLandingContainer({
  slug,
  onBack,
  onOpenAudit,
  onSelectOtherLanding,
}: SeoLandingContainerProps) {
  const landing = ALL_SEO_LANDINGS[slug];

  if (!landing) {
    return (
      <div className="min-h-screen bg-[#090D16] text-white flex flex-col items-center justify-center p-6">
        <h1 className="text-2xl font-bold mb-4">Pagina non trovata</h1>
        <button
          onClick={onBack}
          className="px-6 py-2 rounded-xl bg-fuchsia-600 text-white font-semibold"
        >
          Torna alla Home
        </button>
      </div>
    );
  }

  return (
    <SeoLandingPageView
      landing={landing}
      onBack={onBack}
      onOpenAudit={onOpenAudit}
      onSelectOtherLanding={onSelectOtherLanding}
    />
  );
}
