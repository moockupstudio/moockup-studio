import React from "react";
import { SEO_SECTOR_LANDINGS } from "../data/seoLandingsData";
import { 
  Building2, 
  ArrowRight, 
  Sparkles, 
  Compass,
  UtensilsCrossed,
  Pizza,
  Stethoscope,
  Scissors,
  Hotel,
  Home,
  FileSpreadsheet,
  Scale,
  Users,
  Activity,
  HeartPulse,
  Apple,
  Dog,
  Zap,
  Scroll,
  PenTool,
  Plane,
  Trees,
  KeyRound,
  Sparkle,
  Camera,
  Armchair,
  Leaf
} from "lucide-react";

interface SeoDirectorySectionProps {
  onOpenLanding: (slug: string) => void;
  onOpenAudit: () => void;
}

// Helper icon picker based on category
const getSectorIcon = (slug: string) => {
  switch (slug) {
    case "siti-web-ristoranti": return UtensilsCrossed;
    case "siti-web-pizzerie": return Pizza;
    case "siti-web-dentisti":
    case "siti-web-odontoiatri": return Stethoscope;
    case "siti-web-parrucchieri":
    case "siti-web-barbieri": return Scissors;
    case "siti-web-hotel": return Hotel;
    case "siti-web-bed-and-breakfast": return Home;
    case "siti-web-commercialisti": return FileSpreadsheet;
    case "siti-web-avvocati": return Scale;
    case "siti-web-consulenti-del-lavoro": return Users;
    case "siti-web-fisioterapisti": return Activity;
    case "siti-web-dietologi": return HeartPulse;
    case "siti-web-nutrizionisti": return Apple;
    case "siti-web-negozi-animali": return Dog;
    case "siti-web-elettricisti": return Zap;
    case "siti-web-notai": return Scroll;
    case "siti-web-architetti": return PenTool;
    case "siti-web-agenzie-viaggio": return Plane;
    case "siti-web-agriturismi": return Trees;
    case "siti-web-agenzie-immobiliari": return KeyRound;
    case "siti-web-centri-estetici": return Sparkle;
    case "siti-web-fotografi": return Camera;
    case "siti-web-negozi-arredamento": return Armchair;
    case "siti-web-erboristerie": return Leaf;
    default: return Building2;
  }
};

export const SeoDirectorySection: React.FC<SeoDirectorySectionProps> = ({
  onOpenLanding,
  onOpenAudit,
}) => {
  const sectorItems = Object.values(SEO_SECTOR_LANDINGS);

  return (
    <section id="settori" className="py-24 bg-[#070A12] border-t border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-pink-500/10 border border-pink-500/20 text-pink-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <Compass className="w-3.5 h-3.5" />
            <span>Soluzioni Verticali per Categoria</span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight mb-4">
            Siti Web Specializzati per il Tuo{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 via-pink-400 to-rose-400">
              Settore
            </span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Ogni attività ha le sue peculiarità: menu per i ristoranti, conformità deontologica per gli studi medici e legali, booking engine per strutture ricettive, portfolio fotografici e ordini senza intermediari. Scegli il tuo settore:
          </p>
        </div>

        {/* Sectors Grid: 3 columns on desktop for optimal title readability and perfect balance (multiples of 3 & 2) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {sectorItems.map((item) => {
            const Icon = getSectorIcon(item.slug);
            return (
              <div
                key={item.slug}
                onClick={() => onOpenLanding(item.slug)}
                className="group relative rounded-2xl bg-slate-900/70 hover:bg-slate-900 border border-slate-800 hover:border-pink-500/50 p-6 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-pink-600/10 cursor-pointer"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 rounded-xl bg-pink-500/10 border border-pink-500/20 text-pink-400 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-slate-800 text-slate-300 border border-slate-700">
                      {item.badge}
                    </span>
                  </div>

                  <div>
                    <h3 className="font-display font-bold text-lg text-white group-hover:text-pink-300 transition-colors leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-slate-400 text-xs sm:text-sm mt-2 line-clamp-2 leading-relaxed">
                      {item.heroSubheadline}
                    </p>
                  </div>
                </div>

                <div className="pt-5 mt-5 border-t border-slate-800/80 flex items-center justify-between">
                  <span className="text-xs text-slate-400 group-hover:text-slate-200 transition-colors font-medium">
                    Scopri la soluzione
                  </span>
                  <div className="w-8 h-8 rounded-lg bg-slate-800 group-hover:bg-gradient-to-r group-hover:from-fuchsia-600 group-hover:to-pink-600 text-slate-300 group-hover:text-white flex items-center justify-center transition-all">
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Quick CTA Bottom Bar */}
        <div className="mt-14 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-slate-900 via-slate-900 to-[#120D1B] border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <div className="font-bold text-white text-base sm:text-lg">
              Hai un'attività in un settore non presente in elenco?
            </div>
            <div className="text-xs sm:text-sm text-slate-400">
              Progettiamo landing page e siti web su misura per qualsiasi categoria commerciale e industriale.
            </div>
          </div>

          <button
            onClick={onOpenAudit}
            className="w-full sm:w-auto px-6 py-3 bg-gradient-to-r from-fuchsia-600 to-pink-600 hover:from-fuchsia-500 hover:to-pink-500 text-white font-bold text-xs sm:text-sm rounded-xl flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-fuchsia-600/30 whitespace-nowrap"
          >
            <Sparkles className="w-4 h-4" />
            <span>Richiedi Proposta Personalizzata</span>
          </button>
        </div>

      </div>
    </section>
  );
};
