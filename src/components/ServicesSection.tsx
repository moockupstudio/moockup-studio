import React, { useState } from "react";
import { SERVICES_DATA } from "../data/agencyData";
import { 
  Layout, 
  Target, 
  Search, 
  TrendingUp, 
  CheckCircle, 
  ArrowRight, 
  Sparkles, 
  Zap, 
  ShieldAlert,
  Layers,
  ChevronRight
} from "lucide-react";

interface ServicesSectionProps {
  onSelectService: (serviceName: string) => void;
  onOpenAudit: () => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectService, onOpenAudit }) => {
  const [activeTabId, setActiveTabId] = useState<string>(SERVICES_DATA[0].id);

  const activeService = SERVICES_DATA.find((s) => s.id === activeTabId) || SERVICES_DATA[0];

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "Layout":
        return <Layout className="w-5 h-5 text-fuchsia-400" />;
      case "Target":
        return <Target className="w-5 h-5 text-pink-400" />;
      case "Search":
        return <Search className="w-5 h-5 text-rose-400" />;
      case "TrendingUp":
        return <TrendingUp className="w-5 h-5 text-amber-400" />;
      default:
        return <Layers className="w-5 h-5 text-fuchsia-400" />;
    }
  };

  return (
    <section id="servizi" className="py-24 bg-[#0B0F1C] border-y border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-fuchsia-500/10 border border-fuchsia-500/20 text-fuchsia-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Servizi ad Alto Rendimento</span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight mb-5">
            Sviluppo Web, SEO & Google Ads:{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 via-pink-400 to-rose-400">
              Il Nostro Metodo Scientifico
            </span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
            Eliminiamo la dispersione di budget. Ogni servizio Moockup è progettato con un solo obiettivo: aumentare le conversioni, posizionarti al vertice di Google e farti acquisire clienti paganti con costanza.
          </p>
        </div>

        {/* Interactive Service Selector Tabs */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-10">
          {SERVICES_DATA.map((service) => {
            const isSelected = service.id === activeTabId;
            return (
              <button
                key={service.id}
                onClick={() => setActiveTabId(service.id)}
                className={`p-4 rounded-xl text-left transition-all duration-200 border flex flex-col justify-between relative group ${
                  isSelected
                    ? "bg-slate-900 border-fuchsia-500/60 shadow-lg shadow-fuchsia-500/15"
                    : "bg-slate-900/40 border-slate-800 hover:bg-slate-900/80 hover:border-slate-700"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className={`p-2.5 rounded-lg ${isSelected ? "bg-fuchsia-600/20 border border-fuchsia-500/30" : "bg-slate-800"}`}>
                      {getIcon(service.icon)}
                    </div>
                    {service.badge && (
                      <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider ${
                        isSelected 
                          ? "bg-fuchsia-500/20 text-fuchsia-300 border border-fuchsia-500/30" 
                          : "bg-slate-800 text-slate-400 border border-slate-700"
                      }`}>
                        {service.badge}
                      </span>
                    )}
                  </div>
                  <h3 className={`font-display font-bold text-base mb-1 ${isSelected ? "text-white" : "text-slate-300 group-hover:text-white"}`}>
                    {service.title}
                  </h3>
                  <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed">
                    {service.subtitle}
                  </p>
                </div>
                {isSelected && (
                  <div className="mt-3 pt-2 border-t border-fuchsia-500/20 flex items-center text-xs font-semibold text-fuchsia-400">
                    <span>Dettagli e Deliverable</span>
                    <ChevronRight className="w-3.5 h-3.5 ml-1" />
                  </div>
                )}
              </button>
            );
          })}
        </div>

        {/* Active Service Detailed View Card */}
        <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-6 sm:p-10 shadow-2xl backdrop-blur-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex flex-wrap items-center gap-3">
                <span className="px-3 py-1 rounded-md bg-fuchsia-500/20 text-fuchsia-300 text-xs font-bold border border-fuchsia-500/30">
                  Target Risultati: {activeService.metricsTarget}
                </span>
              </div>

              <div>
                <h3 className="font-display font-bold text-2xl sm:text-3xl text-white mb-2">
                  {activeService.title}
                </h3>
                <p className="text-fuchsia-300/90 text-sm sm:text-base font-medium mb-4">
                  {activeService.subtitle}
                </p>
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                  {activeService.description}
                </p>
              </div>

              {/* Highlights Checklist */}
              <div>
                <h4 className="text-xs uppercase font-bold text-slate-400 tracking-wider mb-3">
                  I Punti di Forza Moockup
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {activeService.highlights.map((h, i) => (
                    <div key={i} className="flex items-start gap-2 text-sm text-slate-200">
                      <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Features List */}
              <div className="pt-2">
                <h4 className="text-xs uppercase font-bold text-slate-400 tracking-wider mb-3">
                  Cosa Include il Servizio
                </h4>
                <ul className="space-y-2">
                  {activeService.features.map((f, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-fuchsia-400 shrink-0 mt-2" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right Deliverables & CTA Box */}
            <div className="lg:col-span-5 bg-[#090D16] border border-slate-800 rounded-xl p-6 sm:p-7 flex flex-col justify-between h-full space-y-6">
              <div>
                <div className="flex items-center gap-2 mb-4 pb-3 border-b border-slate-800">
                  <Zap className="w-4 h-4 text-amber-400" />
                  <span className="text-xs font-bold text-white uppercase tracking-wider">
                    Deliverable & Output Concreti
                  </span>
                </div>
                <div className="space-y-3">
                  {activeService.deliverables.map((item, idx) => (
                    <div key={idx} className="p-3 rounded-lg bg-slate-900/80 border border-slate-800/80 flex items-center justify-between text-xs sm:text-sm text-slate-200 font-medium">
                      <span>{item}</span>
                      <CheckCircle className="w-4 h-4 text-fuchsia-400 shrink-0 ml-2" />
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Box */}
              <div className="pt-4 border-t border-slate-800 space-y-2.5 sm:space-y-3">
                <button
                  onClick={() => onSelectService(activeService.title)}
                  className="w-full py-3.5 px-4 sm:px-5 bg-gradient-to-r from-fuchsia-600 to-pink-600 hover:from-fuchsia-500 hover:to-pink-500 text-white font-semibold text-xs sm:text-sm rounded-xl shadow-lg shadow-fuchsia-600/30 flex items-center justify-center gap-2 transition-all active:scale-95 group"
                >
                  <span className="truncate">Richiedi Proposta per {activeService.title}</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform shrink-0" />
                </button>

                <button
                  onClick={onOpenAudit}
                  className="w-full py-2.5 px-3 sm:px-4 text-xs font-medium text-slate-400 hover:text-white bg-slate-900 hover:bg-slate-800 border border-slate-800 rounded-lg transition-colors text-center"
                >
                  Oppure richiedi prima un Audit Gratuito del tuo sito
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
