import React, { useState } from "react";
import { 
  ArrowRight, 
  Sparkles, 
  CheckCircle2, 
  TrendingUp, 
  Zap, 
  ShieldCheck, 
  Search, 
  Globe, 
  ChevronRight,
  FolderOpen
} from "lucide-react";

interface HeroProps {
  onOpenAudit: (initialUrl?: string) => void;
  badge?: string;
  titleLine1?: string;
  titleHighlight?: string;
  subtitle?: string;
}

export const Hero: React.FC<HeroProps> = ({ 
  onOpenAudit,
  badge = "Agenzia Marketing, Siti Web, SEO & Google Ads",
  titleLine1 = "Non Creiamo Semplici Siti.",
  titleHighlight = "Creiamo Business Scalabili.",
  subtitle = "Sviluppiamo siti web ultra-veloci ottimizzati per la conversione (CRO), scaliamo il posizionamento organico su Google e moltiplichiamo il fatturato con campagne Google Ads guidate dal ROI."
}) => {
  const [quickUrl, setQuickUrl] = useState("");

  const handleQuickAuditSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onOpenAudit(quickUrl);
  };

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[450px] bg-fuchsia-600/15 blur-[120px] pointer-events-none rounded-full" />
      <div className="absolute top-1/3 right-10 w-[350px] h-[350px] bg-pink-500/10 blur-[100px] pointer-events-none rounded-full" />
      <div className="absolute bottom-10 left-10 w-[400px] h-[300px] bg-rose-500/5 blur-[120px] pointer-events-none rounded-full" />

      {/* Subtle grid pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          {/* Top Trust Badge - Responsive & sleek on mobile */}
          <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-1.5 rounded-full bg-slate-800/90 border border-slate-700/80 shadow-inner mb-6 max-w-full">
            <span className="flex h-2 w-2 rounded-full bg-emerald-400 shrink-0 animate-pulse" />
            <span className="text-[11px] sm:text-xs font-semibold text-slate-300 truncate">
              {badge}
            </span>
            <span className="text-[11px] sm:text-xs font-bold text-fuchsia-400 shrink-0 flex items-center">
              <ChevronRight className="w-3 h-3 ml-0.5" />
            </span>
          </div>

          {/* Main H1 Headline for SEO and high impact: Realizzazione Siti Web, SEO & Google Ads */}
          <h1 className="font-display font-extrabold tracking-tight mb-5 sm:mb-6">
            <span className="block text-xs sm:text-sm font-bold uppercase tracking-widest text-fuchsia-400 mb-2">
              Realizzazione Siti Web, SEO & Campagne Google Ads
            </span>
            <span className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl text-white leading-[1.18] sm:leading-[1.1]">
              <span className="block sm:inline">Non Semplici Siti.</span>{" "}
              <span className="block mt-1 sm:mt-2 text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 via-pink-400 to-rose-400">
                Generiamo Successo.
              </span>
            </span>
          </h1>

          {/* Subtitle oriented to business growth & conversions */}
          <p className="text-sm sm:text-lg md:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed mb-8 sm:mb-10 font-normal px-2 sm:px-0">
            {subtitle}
          </p>

          {/* Interactive Fast Audit Input (Lead Conversion Magnet) */}
          <div className="max-w-2xl mx-auto bg-slate-900/95 border border-slate-800 p-2 sm:p-2.5 rounded-2xl shadow-2xl shadow-black/50 backdrop-blur-xl mb-8">
            <form onSubmit={handleQuickAuditSubmit} className="flex flex-col sm:flex-row gap-2">
              <div className="relative flex-1 flex items-center">
                <Globe className="absolute left-3.5 w-5 h-5 text-slate-400" />
                <input
                  type="text"
                  value={quickUrl}
                  onChange={(e) => setQuickUrl(e.target.value)}
                  placeholder="Inserisci l'URL del tuo sito (es. tuodominio.it)"
                  className="w-full pl-11 pr-4 py-3 bg-slate-950/70 border border-slate-800/80 rounded-xl text-base sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-fuchsia-500 focus:ring-1 focus:ring-fuchsia-500 transition-all"
                  id="hero-quick-audit-input"
                />
              </div>
              <button
                type="submit"
                id="hero-quick-audit-submit"
                className="w-full sm:w-auto px-6 py-3.5 bg-gradient-to-r from-fuchsia-600 to-pink-600 hover:from-fuchsia-500 hover:to-pink-500 text-white font-semibold text-xs sm:text-sm rounded-xl shadow-lg shadow-fuchsia-600/30 flex items-center justify-center gap-2 transition-all active:scale-95 group shrink-0"
              >
                <Sparkles className="w-4 h-4 text-fuchsia-200 group-hover:rotate-12 transition-transform" />
                <span>Analisi Gratuita & Audit</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
            <div className="flex flex-wrap items-center justify-center gap-x-4 sm:gap-x-6 gap-y-1.5 pt-3 pb-1 text-[11px] sm:text-xs text-slate-400">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" /> 100% Gratuito & Senza Impegno
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" /> Velocità & SEO Score
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" /> Analisi Sprechi Google Ads
              </span>
            </div>
          </div>

          {/* Secondary Action Link: Direct to Portfolio */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 text-xs sm:text-sm font-medium">
            <span className="text-slate-400">Vuoi scoprire cosa abbiamo realizzato?</span>
            <a
              href="#portfolio"
              className="text-fuchsia-400 hover:text-fuchsia-300 underline underline-offset-4 flex items-center gap-1.5 font-semibold group"
            >
              <FolderOpen className="w-4 h-4 shrink-0" />
              <span>Scopri alcuni dei nostri progetti in Portfolio</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform shrink-0" />
            </a>
          </div>
        </div>

        {/* Real Metrics & Proof Badges Ribbon */}
        <div className="mt-16 sm:mt-20 pt-10 border-t border-slate-800/80">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 text-center">
            {/* Metric 1 */}
            <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800/50">
              <div className="flex items-center justify-center text-pink-400 mb-2">
                <Zap className="w-5 h-5" />
              </div>
              <div className="text-2xl sm:text-3xl font-extrabold text-white font-display">&lt; 0.8s</div>
              <div className="text-xs text-slate-400 mt-1 font-medium">Tempo di Caricamento Web</div>
            </div>

            {/* Metric 2 */}
            <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800/50">
              <div className="flex items-center justify-center text-fuchsia-400 mb-2">
                <TrendingUp className="w-5 h-5" />
              </div>
              <div className="text-2xl sm:text-3xl font-extrabold text-white font-display">95+</div>
              <div className="text-xs text-slate-400 mt-1 font-medium">Google PageSpeed Score</div>
            </div>

            {/* Metric 3 */}
            <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800/50">
              <div className="flex items-center justify-center text-rose-400 mb-2">
                <Search className="w-5 h-5" />
              </div>
              <div className="text-2xl sm:text-3xl font-extrabold text-white font-display">1ª Pagina</div>
              <div className="text-xs text-slate-400 mt-1 font-medium">Posizionamento SEO su Google</div>
            </div>

            {/* Metric 4 */}
            <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800/50">
              <div className="flex items-center justify-center text-emerald-400 mb-2">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div className="text-2xl sm:text-3xl font-extrabold text-white font-display">100%</div>
              <div className="text-xs text-slate-400 mt-1 font-medium">Proprietà Codice & Account</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
