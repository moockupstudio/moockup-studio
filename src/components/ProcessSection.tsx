import React from "react";
import { WORK_PROCESS } from "../data/agencyData";
import { 
  CheckCircle2, 
  ArrowRight, 
  Sparkles, 
  ShieldCheck, 
  Clock, 
  BarChart2 
} from "lucide-react";

interface ProcessSectionProps {
  onOpenAudit: () => void;
}

export const ProcessSection: React.FC<ProcessSectionProps> = ({ onOpenAudit }) => {
  return (
    <section id="metodo" className="py-24 bg-[#0B0F1C] border-y border-slate-800/80 relative scroll-mt-16">
      <div id="processo" className="sr-only" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-fuchsia-500/10 border border-fuchsia-500/20 text-fuchsia-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Come Lavoriamo</span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight mb-4">
            Un Processo Lineare in 4 Fasi,{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 via-pink-400 to-rose-400">
              Zero Sorprese
            </span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Dalla diagnosi iniziale del tuo sito fino alle campagne Google Ads a regime: ecco come ti guidiamo passo dopo passo verso la scalata.
          </p>
        </div>

        {/* 4-Step Process Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {WORK_PROCESS.map((step) => (
            <div
              key={step.step}
              className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 sm:p-7 relative group hover:border-fuchsia-500/40 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-display font-black text-4xl text-slate-800 group-hover:text-fuchsia-500/40 transition-colors">
                    {step.step}
                  </span>
                  {step.badge && (
                    <span className="text-[11px] font-medium px-2.5 py-0.5 rounded-full bg-fuchsia-500/10 border border-fuchsia-500/20 text-fuchsia-300">
                      {step.badge}
                    </span>
                  )}
                </div>
                <h3 className="font-display font-bold text-lg text-white mb-2 group-hover:text-fuchsia-400 transition-colors">
                  {step.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  {step.desc}
                </p>
              </div>

              <div className="pt-4 mt-6 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400 font-medium">
                <span className="truncate pr-2">{step.deliverable || "Obiettivo Raggiunto"}</span>
                <CheckCircle2 className="w-4 h-4 shrink-0 text-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.5)]" />
              </div>
            </div>
          ))}
        </div>

        {/* Guarantees Box */}
        <div className="bg-slate-950 border border-slate-800/90 rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-4">
            <div className="p-3 rounded-xl bg-fuchsia-600/20 border border-fuchsia-500/30 text-fuchsia-400 shrink-0">
              <ShieldCheck className="w-8 h-8" />
            </div>
            <div>
              <h4 className="font-display font-bold text-lg text-white mb-1">
                Le Tre Garanzie Moockup Studio
              </h4>
              <p className="text-xs sm:text-sm text-slate-400 max-w-xl">
                Nessun vincolo a vita: codice e account pubblicitari 100% di tua proprietà. Tracciamenti trasparenti e report settimanali chiari senza metriche di vanità.
              </p>
            </div>
          </div>

          <button
            onClick={onOpenAudit}
            className="w-full sm:w-auto px-6 py-3.5 bg-gradient-to-r from-fuchsia-600 to-pink-600 hover:from-fuchsia-500 hover:to-pink-500 text-white font-semibold text-xs sm:text-sm rounded-xl shadow-lg shadow-fuchsia-600/30 transition-all shrink-0 active:scale-95 flex items-center justify-center gap-2"
          >
            <span>Inizia con l'Audit Gratuito</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
