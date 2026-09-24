import React from "react";
import { ServiceLandingPage } from "./ServiceLandingPage";
import { SERVICE_LANDINGS } from "../data/serviceLandingsData";

interface ServiceLandingContainerProps {
  slug: string;
  onBack: () => void;
  onOpenAudit: () => void;
}

export default function ServiceLandingContainer({
  slug,
  onBack,
  onOpenAudit,
}: ServiceLandingContainerProps) {
  const landing = SERVICE_LANDINGS[slug];

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
    <ServiceLandingPage
      landing={landing}
      onBack={onBack}
      onOpenAudit={onOpenAudit}
    />
  );
}
