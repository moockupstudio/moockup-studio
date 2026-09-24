import React from "react";
import { 
  Trophy, 
  TrendingUp, 
  Search, 
  BarChart2, 
  Zap, 
  HeartHandshake, 
  ShieldCheck,
  CheckCircle2,
  Sparkles
} from "lucide-react";

interface WhyChooseUsSectionProps {
  onOpenAudit?: () => void;
}

export const WhyChooseUsSection: React.FC<WhyChooseUsSectionProps> = ({ onOpenAudit }) => {
  const points = [
    {
      id: "esperienza-risultati",
      title: "Esperienza e",
      highlight: "Risultati",
      desc: "Oltre 15 anni di progetti web ad alte prestazioni, con decine di brand posizionati stabilmente in prima pagina su Google.",
      icon: Trophy,
      color: "from-fuchsia-500 to-pink-500",
      accent: "text-fuchsia-400",
      badge: "Esperienza di Oltre 15 Anni",
      footerNote: "Traguardi Verificati",
      svgStyle: "design",
    },
    {
      id: "crescita-obiettivo",
      title: "Crescita come",
      highlight: "Obiettivo",
      desc: "Non ci limitiamo a consegnare un sito: progettiamo la tua espansione, trasformando ogni euro investito in contatti e vendite.",
      icon: TrendingUp,
      color: "from-pink-500 to-rose-500",
      accent: "text-pink-400",
      badge: "Focus ROI & Fatturato",
      footerNote: "Massimizzazione Conversioni",
      svgStyle: "growth",
    },
    {
      id: "analisi-strategia",
      title: "Analisi e",
      highlight: "Strategia",
      desc: "Nessun lavoro improvvisato. Studiamo concorrenti, parole chiave di ricerca e percorsi di conversione prima di scrivere codice.",
      icon: Search,
      color: "from-indigo-500 to-fuchsia-500",
      accent: "text-indigo-400",
      badge: "Benchmark & Studio Mercato",
      footerNote: "Zero Improvvisazione",
      svgStyle: "strategy",
    },
    {
      id: "marketing-data-driven",
      title: "Marketing",
      highlight: "Data Driven",
      desc: "Decisioni basate su numeri reali, test A/B continui, metriche GA4 e tracciamenti sia Client-Side che Server-Side con Enhanced Conversions.",
      icon: BarChart2,
      color: "from-purple-500 to-pink-500",
      accent: "text-purple-400",
      badge: "Metriche & Analytics GA4",
      footerNote: "Dati Reali e Trasparenti",
      svgStyle: "analytics",
    },
    {
      id: "processi-snelli",
      title: "Processi Snelli ed",
      highlight: "Efficienti",
      desc: "Niente burocrazia o attese infinite. Comunicazione diretta, rilasci veloci e iterazioni puntuali per essere subito operativi.",
      icon: Zap,
      color: "from-amber-500 to-rose-500",
      accent: "text-amber-400",
      badge: "Velocità & Sprint Agili",
      footerNote: "Consegne Puntuali",
      svgStyle: "speed",
    },
    {
      id: "sempre-al-tuo-fianco",
      title: "Sempre",
      highlight: "Al Tuo Fianco",
      desc: "Un partner strategico sempre reperibile al telefono o su WhatsApp per supportare la tua azienda in ogni fase di crescita.",
      icon: HeartHandshake,
      color: "from-emerald-500 to-teal-500",
      accent: "text-emerald-400",
      badge: "Supporto Dedicato 1-to-1",
      footerNote: "Assistenza Continua",
      svgStyle: "support",
    },
  ];

  return (
    <section id="perche-noi" className="py-24 bg-[#0B0F1C] relative border-t border-slate-800/80 overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-fuchsia-600/10 blur-[130px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header (Matches user screenshot: "Perchè sceglierci?") */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-fuchsia-500/10 border border-fuchsia-500/20 text-fuchsia-400 text-xs font-bold uppercase tracking-wider mb-4">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Valore Concreto & Affidabilità</span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight mb-4 leading-tight">
            Perché{" "}
            <span className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 via-pink-400 to-rose-400 pr-2 pb-1">
              sceglierci?
            </span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Unire estetica sartoriale, ingegneria web ultra-veloce e strategie di acquisizione clienti concrete. Ecco i principi che guidano ogni nostra collaborazione.
          </p>
        </div>

        {/* 6 Column Bento Grid with Illustrations */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {points.map((point) => {
            const Icon = point.icon;

            return (
              <div
                key={point.id}
                className="group relative bg-slate-900/60 hover:bg-slate-900/90 border border-slate-800 hover:border-fuchsia-500/40 rounded-2xl p-6 sm:p-7 transition-all duration-300 hover:shadow-xl hover:shadow-fuchsia-500/10 flex flex-col justify-between"
              >
                <div>
                  {/* Visual Illustration Container */}
                  <div className="h-36 sm:h-40 rounded-xl bg-slate-950/70 border border-slate-800/80 mb-6 flex items-center justify-center relative overflow-hidden group-hover:border-fuchsia-500/30 transition-colors">
                    {/* Subtle grid pattern inside */}
                    <div 
                      className="absolute inset-0 opacity-[0.05]"
                      style={{
                        backgroundImage: `linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)`,
                        backgroundSize: '20px 20px'
                      }}
                    />

                    {/* Gradient pulse badge */}
                    <div className="relative z-10 flex flex-col items-center gap-3 w-full px-3">
                      <div className={`w-14 h-14 rounded-2xl bg-gradient-to-tr ${point.color} text-white flex items-center justify-center shadow-lg shadow-pink-500/20 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300`}>
                        <Icon className="w-7 h-7" />
                      </div>
                      <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900/90 border border-slate-700/60 text-[11px] font-medium text-slate-300 backdrop-blur-md max-w-full">
                        <CheckCircle2 className="w-3 h-3 text-emerald-400 shrink-0" />
                        <span className="truncate">{point.badge}</span>
                      </div>
                    </div>
                  </div>

                  {/* Title on a single line */}
                  <h3 className="font-display font-bold text-base sm:text-lg lg:text-[17px] xl:text-xl text-white mb-3 tracking-tight leading-snug">
                    <span className="text-slate-100">{point.title} </span>
                    <span className="inline-block italic text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-fuchsia-400 pr-2 pb-0.5">
                      {point.highlight}
                    </span>
                  </h3>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                    {point.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400 font-medium">
                  <span>{point.footerNote}</span>
                  <span className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.6)]" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Action Button */}
        {onOpenAudit && (
          <div className="mt-10 sm:mt-14 text-center px-2">
            <button
              onClick={onOpenAudit}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-gradient-to-r from-fuchsia-600 to-pink-600 hover:from-fuchsia-500 hover:to-pink-500 text-white font-bold text-xs sm:text-sm rounded-xl shadow-lg shadow-fuchsia-600/30 transition-all active:scale-95"
            >
              <Sparkles className="w-4 h-4 text-fuchsia-200 shrink-0" />
              <span>Inizia un Progetto con Moockup Studio</span>
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
