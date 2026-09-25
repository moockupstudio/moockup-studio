import React, { useEffect } from "react";
import { SeoLanding } from "../data/seoLandingsData";
import { AGENCY_INFO } from "../data/agencyData";
import { 
  ArrowLeft, 
  Sparkles, 
  CheckCircle2, 
  MessageSquare, 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Target, 
  ShieldCheck, 
  Building2, 
  Search,
  ExternalLink
} from "lucide-react";
import { Logo } from "./Logo";

interface SeoLandingPageViewProps {
  landing: SeoLanding;
  onBack: () => void;
  onOpenAudit: () => void;
  onSelectOtherLanding?: (slug: string) => void;
}

export const SeoLandingPageView: React.FC<SeoLandingPageViewProps> = ({
  landing,
  onBack,
  onOpenAudit,
  onSelectOtherLanding,
}) => {
  useEffect(() => {
    document.title = landing.metaTitle;
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute("content", landing.metaDescription);
    }
    window.scrollTo({ top: 0, behavior: "smooth" });

    // Inject dedicated LocalBusiness / Service Schema.org JSON-LD
    const scriptId = "seo-landing-jsonld";
    let script = document.getElementById(scriptId) as HTMLScriptElement | null;
    if (!script) {
      script = document.createElement("script");
      script.id = scriptId;
      script.type = "application/ld+json";
      document.head.appendChild(script);
    }

    const schemaData = {
      "@context": "https://schema.org",
      "@type": landing.category === "localita" ? "LocalBusiness" : "Service",
      "name": landing.title,
      "description": landing.metaDescription,
      "provider": {
        "@type": "LocalBusiness",
        "name": "Moockup Studio",
        "url": "https://www.moockup.it",
        "telephone": "+39 348 6520380",
        "email": "moockupstudio@gmail.com",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Foggia",
          "postalCode": "71122",
          "addressCountry": "IT"
        }
      },
      "areaServed": landing.geoArea ? landing.geoArea : "Italia",
      "serviceType": landing.keywordTarget,
      "offers": {
        "@type": "Offer",
        "priceCurrency": "EUR",
        "availability": "https://schema.org/InStock"
      }
    };

    script.textContent = JSON.stringify(schemaData);

    return () => {
      const el = document.getElementById(scriptId);
      if (el) el.remove();
    };
  }, [landing]);

  const handleWhatsApp = () => {
    const text = encodeURIComponent(
      `Ciao Moockup Studio! Vorrei un preventivo e maggiori informazioni per il servizio "${landing.title}" (${landing.keywordTarget}).`
    );
    window.open(`https://wa.me/${AGENCY_INFO.whatsapp}?text=${text}`, "_blank", "noopener,noreferrer");
  };

  const handleCall = () => {
    window.location.href = `tel:${AGENCY_INFO.phone.replace(/\s+/g, '')}`;
  };

  return (
    <div className="min-h-screen bg-[#090D16] text-[#E2E8F0] selection:bg-fuchsia-600 selection:text-white">
      {/* Top Floating Bar */}
      <header className="sticky top-0 z-40 bg-[#090D16]/95 backdrop-blur-md border-b border-slate-800/80 py-3 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3 sm:gap-4">
            <button
              onClick={onBack}
              id="seo-landing-back-btn"
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white text-xs font-semibold border border-slate-700/60 transition-all cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4" />
              <span className="hidden sm:inline">Torna alla Home</span>
              <span className="sm:hidden">Home</span>
            </button>
            <Logo size="sm" showTagline={false} />
          </div>

          <div className="flex items-center gap-2 sm:gap-3">
            <button
              onClick={handleWhatsApp}
              id="seo-landing-top-whatsapp"
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-950/50 hover:bg-emerald-900/60 text-emerald-300 border border-emerald-500/30 text-xs font-bold transition-all cursor-pointer"
            >
              <MessageSquare className="w-3.5 h-3.5 text-emerald-400" />
              <span>WhatsApp</span>
            </button>
            <button
              onClick={onOpenAudit}
              id="seo-landing-top-audit"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-gradient-to-r from-fuchsia-600 to-pink-600 hover:from-fuchsia-500 hover:to-pink-500 text-white text-xs font-bold shadow-md shadow-fuchsia-600/30 transition-all cursor-pointer"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Audit Gratuito</span>
            </button>
          </div>
        </div>
      </header>

      {/* SEO Optimized Hero Section */}
      <section className="relative pt-12 pb-20 overflow-hidden border-b border-slate-800/80">
        <div className="absolute inset-0 bg-gradient-to-b from-fuchsia-950/20 via-transparent to-[#090D16] pointer-events-none" />
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-pink-500/10 border border-pink-500/20 text-pink-400 text-xs font-bold uppercase tracking-wider">
              {landing.category === "localita" ? (
                <MapPin className="w-3.5 h-3.5" />
              ) : (
                <Building2 className="w-3.5 h-3.5" />
              )}
              <span>{landing.badge}</span>
            </div>

            <h1 className="font-display font-extrabold text-3xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-[1.15]">
              {landing.heroHeadline}
            </h1>

            <p className="text-slate-300 text-base sm:text-xl leading-relaxed">
              {landing.heroSubheadline}
            </p>

            {/* Keyword tag for user clarity & SEO relevance */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-slate-900 border border-slate-800 text-[11px] sm:text-xs text-slate-400">
              <Search className="w-3.5 h-3.5 text-pink-400" />
              <span>Specializzazione: <strong className="text-slate-200">{landing.keywordTarget}</strong></span>
              {landing.geoArea && (
                <>
                  <span className="text-slate-600">•</span>
                  <span className="text-emerald-400 font-semibold">{landing.geoArea}</span>
                </>
              )}
            </div>

            {/* Fast Action CTA Group */}
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
              <button
                onClick={handleWhatsApp}
                id="seo-hero-whatsapp-btn"
                className="w-full sm:w-auto px-7 py-4 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-white font-bold text-sm sm:text-base shadow-xl shadow-emerald-600/30 transition-all flex items-center justify-center gap-2.5 cursor-pointer active:scale-95"
              >
                <MessageSquare className="w-5 h-5" />
                <span>Parla con Noi su WhatsApp</span>
              </button>

              <button
                onClick={onOpenAudit}
                id="seo-hero-audit-btn"
                className="w-full sm:w-auto px-6 py-4 rounded-xl bg-slate-900/90 hover:bg-slate-800 text-white border border-slate-700/80 hover:border-pink-500/50 font-bold text-sm sm:text-base transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <Sparkles className="w-4 h-4 text-pink-400" />
                <span>Richiedi Audit Gratuito</span>
              </button>
            </div>

            <p className="text-xs text-slate-500 flex items-center justify-center gap-2">
              <Clock className="w-3.5 h-3.5 text-emerald-400" />
              <span>Risposta garantita entro 2 ore • Preventivo personalizzato senza impegno</span>
            </p>
          </div>

          {/* Visual Showcase Card: only displayed on sector landing pages, removed for local city landings per user request */}
          {landing.category !== "localita" && (
            <div className="mt-12 rounded-2xl overflow-hidden border border-slate-800 shadow-2xl relative max-w-4xl mx-auto w-full aspect-[16/9] sm:aspect-[21/9] min-h-[260px] bg-slate-950">
              <img 
                src={landing.coverImage} 
                alt={landing.title}
                width={1200}
                height={514}
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover brightness-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#090D16] via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-black/70 backdrop-blur-md border border-white/10 text-xs sm:text-sm text-slate-200 flex items-center justify-between">
                <div>
                  <span className="font-bold text-pink-400">Target Risultati: </span>
                  <span>{landing.metricsTarget}</span>
                </div>
                <div className="hidden sm:block text-slate-400 text-xs">
                  PageSpeed 95+ • Mobile-First
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Specific Highlights Section */}
      <section className="py-20 border-b border-slate-800/80 bg-[#0B0F1C]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="font-display font-extrabold text-2xl sm:text-4xl text-white mb-3">
              Perché Sceglierci per {landing.title}
            </h2>
            <p className="text-slate-400 text-sm sm:text-base">
              {landing.tagline}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {landing.sectorOrCityHighlights.map((point, idx) => (
              <div 
                key={idx}
                className="p-6 rounded-2xl bg-slate-900/70 border border-slate-800 hover:border-pink-500/40 transition-all space-y-2"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-pink-500/10 text-pink-400 flex items-center justify-center font-bold text-sm">
                    0{idx + 1}
                  </div>
                  <h3 className="font-bold text-white text-base sm:text-lg">
                    {point.title}
                  </h3>
                </div>
                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed pl-11">
                  {point.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Deliverables & What's included */}
      <section className="py-20 border-b border-slate-800/80">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-b from-slate-900 to-slate-950 border border-slate-800 space-y-8">
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-pink-400 mb-2">Cosa è compreso</div>
              <h2 className="font-display font-bold text-2xl sm:text-3xl text-white">
                Standard Inclusi per {landing.title}
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {landing.includedFeatures.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3 p-3 rounded-xl bg-slate-950/60 border border-slate-800/80">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-slate-200 font-medium">{item}</span>
                </div>
              ))}
            </div>

            {/* Direct Contact Banner inside section */}
            <div className="pt-6 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <div className="font-bold text-white text-sm sm:text-base">Vuoi superare i competitor su Google?</div>
                <div className="text-xs text-slate-400">Analizziamo la tua concorrenza senza impegno e ti mostriamo come superarli.</div>
              </div>
              <button
                onClick={handleWhatsApp}
                className="w-full sm:w-auto px-6 py-3 bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-white font-bold text-xs sm:text-sm rounded-xl flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-emerald-600/30"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Contattaci su WhatsApp</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section for this specific niche or location */}
      {landing.faqList && landing.faqList.length > 0 && (
        <section className="py-20 border-b border-slate-800/80 bg-[#0B0F1C]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-white text-center mb-10">
              Domande Frequenti: {landing.title}
            </h2>

            <div className="space-y-4">
              {landing.faqList.map((faq, idx) => (
                <div key={idx} className="p-5 rounded-2xl bg-slate-900 border border-slate-800 space-y-2">
                  <div className="font-bold text-white text-sm sm:text-base flex items-start gap-2">
                    <span className="text-pink-400 font-extrabold">Q:</span>
                    <span>{faq.q}</span>
                  </div>
                  <div className="text-xs sm:text-sm text-slate-300 leading-relaxed pl-6">
                    {faq.a}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Bottom CTA with Phone and WhatsApp */}
      <section className="py-20 text-center relative">
        <div className="max-w-3xl mx-auto px-4 space-y-6">
          <Logo size="lg" showTagline={true} />
          <h2 className="font-display font-bold text-2xl sm:text-4xl text-white">
            Parla con il Nostro Team per {landing.title}
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Siamo a Foggia e operativi su tutto il territorio. Ti affianchiamo con consulenze chiare, tempi certi e risultati tangibili.
          </p>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
            <button
              onClick={handleWhatsApp}
              className="w-full sm:w-auto px-8 py-3.5 bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-white font-bold text-sm rounded-xl shadow-lg shadow-emerald-600/30 flex items-center justify-center gap-2 cursor-pointer"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Invia Richiesta su WhatsApp</span>
            </button>

            <button
              onClick={handleCall}
              className="w-full sm:w-auto px-6 py-3.5 bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-700 rounded-xl font-semibold text-xs sm:text-sm flex items-center justify-center gap-2 cursor-pointer"
            >
              <Phone className="w-4 h-4 text-emerald-400" />
              <span>Chiamaci Subito</span>
            </button>
          </div>

          <div className="pt-4">
            <button
              onClick={onBack}
              className="text-xs text-slate-400 hover:text-white transition-colors underline cursor-pointer"
            >
              ← Torna alla Homepage di Moockup Studio
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
