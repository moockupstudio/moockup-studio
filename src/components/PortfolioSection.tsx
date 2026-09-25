import React, { useState } from "react";
import { ProjectItem } from "../types";
import { 
  ArrowUpRight, 
  ExternalLink, 
  Layers, 
  Globe 
} from "lucide-react";

interface PortfolioSectionProps {
  onOpenAudit: () => void;
  onContactProject: (projectName: string) => void;
  projects: ProjectItem[];
}

export const PortfolioSection: React.FC<PortfolioSectionProps> = ({ 
  onOpenAudit, 
  onContactProject,
  projects
}) => {
  const [filter, setFilter] = useState<string>("all");

  const filterCategories = [
    { key: "all", label: "Tutti i Servizi" },
    { key: "siti-web", label: "Siti Web & Portali" },
    { key: "seo", label: "SEO & Posizionamento" },
    { key: "ecommerce", label: "E-Commerce" },
    { key: "branding", label: "Logo & Brand Identity" },
    { key: "print-gadget", label: "Print & Gadget" },
    { key: "marketing", label: "Marketing & Landing Page" },
  ];

  const filteredList = projects.filter((item) => {
    if (filter === "all") return true;
    if (filter === "siti-web") {
      return item.services.some((s) => s.toLowerCase().includes("sito web") || s.toLowerCase().includes("landing"));
    }
    if (filter === "seo") {
      return item.services.some((s) => s.toLowerCase().includes("seo") || s.toLowerCase().includes("sem"));
    }
    if (filter === "ecommerce") {
      return item.services.some((s) => s.toLowerCase().includes("commerce") || s.toLowerCase().includes("e-commerce"));
    }
    if (filter === "branding") {
      return item.services.some((s) => s.toLowerCase().includes("logo") || s.toLowerCase().includes("brand"));
    }
    if (filter === "print-gadget") {
      return item.services.some((s) => s.toLowerCase().includes("print") || s.toLowerCase().includes("gadget"));
    }
    if (filter === "marketing") {
      return item.services.some((s) => s.toLowerCase().includes("marketing") || s.toLowerCase().includes("landing") || s.toLowerCase().includes("edm"));
    }
    return true;
  });

  const handleCardClick = (project: ProjectItem) => {
    if (project.url) {
      window.open(project.url, "_blank", "noopener,noreferrer");
    } else {
      onContactProject(project.title);
    }
  };

  return (
    <section id="portfolio" className="py-24 bg-[#0B0F1C] border-t border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-fuchsia-500/10 border border-fuchsia-500/20 text-fuchsia-400 text-xs font-bold uppercase tracking-wider mb-4">
            <Layers className="w-3.5 h-3.5" />
            <span>I Nostri Lavori & Case History</span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight mb-4">
            Progetti Realizzati per{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 via-pink-400 to-rose-400">
              Brand e Imprese
            </span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Siti web moderni, UI/UX su misura, ottimizzazione CRO per le conversioni e posizionamento SEO organico.
          </p>
        </div>

        {/* Filter Toolbar */}
        <div className="flex items-center justify-center gap-2 overflow-x-auto pb-4 mb-12 scrollbar-none">
          {filterCategories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setFilter(cat.key)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all whitespace-nowrap ${
                filter === cat.key
                  ? "bg-fuchsia-600 text-white shadow-lg shadow-fuchsia-600/30"
                  : "bg-slate-900/60 text-slate-400 hover:text-white border border-slate-800 hover:border-slate-700"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Projects Cards Grid (4x3 on desktop, 6x2 on mobile/tablet) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredList.map((project, index) => {
            const hasWebsite = Boolean(project.url);
            const isPriority = index < 2;

            return (
              <div
                key={project.id}
                className="group relative bg-slate-900/80 border border-slate-800/90 hover:border-fuchsia-500/50 rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-fuchsia-500/10 flex flex-col justify-between"
              >
                {/* Aspect Ratio Image Preview Container (Prevents layout shift and boosts scroll performance) */}
                <div 
                  className="relative w-full aspect-[16/10] overflow-hidden cursor-pointer bg-slate-950"
                  onClick={() => handleCardClick(project)}
                >
                  <img
                    src={project.heroImage}
                    alt={`${project.title} - Realizzazione Sito Web & SEO`}
                    width={640}
                    height={400}
                    loading={isPriority ? "eager" : "lazy"}
                    decoding="async"
                    {...(isPriority ? { fetchPriority: "high" as const } : {})}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent pointer-events-none" />

                  {/* Floating Category Tag */}
                  <div className="absolute top-3 left-3">
                    <span className="px-2.5 py-1 rounded-lg text-[11px] font-bold bg-slate-950/90 text-fuchsia-400 border border-fuchsia-500/30 backdrop-blur-md">
                      {project.categoryLabel}
                    </span>
                  </div>

                  {/* Action icon button */}
                  <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-slate-950/80 border border-slate-700/80 text-white flex items-center justify-center group-hover:bg-fuchsia-600 group-hover:border-fuchsia-500 transition-colors shadow-lg">
                    {hasWebsite ? (
                      <ExternalLink className="w-4 h-4 text-pink-300" />
                    ) : (
                      <ArrowUpRight className="w-4 h-4" />
                    )}
                  </div>

                  {/* Website link badge if available */}
                  {project.url && (
                    <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                      <span className="px-2.5 py-1 rounded-md bg-slate-950/90 border border-slate-800 text-[11px] font-mono text-slate-300 backdrop-blur-md flex items-center gap-1.5">
                        <Globe className="w-3 h-3 text-pink-400" />
                        <span>{project.url.replace("https://", "")}</span>
                      </span>
                    </div>
                  )}
                </div>

                {/* Card Information */}
                <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
                  <div>
                    {/* Notice: Year is completely removed as requested */}
                    <div className="flex items-center justify-between text-xs text-slate-400 mb-2 font-medium">
                      <span>Cliente: <strong className="text-slate-200">{project.client}</strong></span>
                    </div>
                    
                    <h3 
                      onClick={() => handleCardClick(project)}
                      className="font-display font-bold text-lg sm:text-xl text-white group-hover:text-fuchsia-400 transition-colors mb-2.5 cursor-pointer flex items-center gap-1.5"
                    >
                      <span>{project.title}</span>
                      {hasWebsite && (
                        <ExternalLink className="w-4 h-4 text-slate-500 group-hover:text-fuchsia-400 inline transition-colors" />
                      )}
                    </h3>
                    
                    <p className="text-xs sm:text-sm text-slate-300 line-clamp-3 leading-relaxed mb-4">
                      {project.summary}
                    </p>

                    {/* Services Tags */}
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {project.services.map((srv, i) => (
                        <span
                          key={i}
                          className="text-[11px] font-medium px-2 py-0.5 rounded-md bg-fuchsia-500/10 text-fuchsia-300 border border-fuchsia-500/20"
                        >
                          {srv}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Card Bottom Controls */}
                  <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between gap-2">
                    {hasWebsite ? (
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs font-bold text-fuchsia-400 hover:text-fuchsia-300 flex items-center gap-1.5 transition-colors cursor-pointer group-hover:translate-x-0.5 duration-200"
                      >
                        <Globe className="w-3.5 h-3.5 text-pink-400" />
                        <span>Visita Sito Web</span>
                        <ExternalLink className="w-3.5 h-3.5 text-fuchsia-400" />
                      </a>
                    ) : (
                      <button
                        onClick={() => onContactProject(project.title)}
                        className="text-xs font-bold text-slate-300 hover:text-fuchsia-400 flex items-center gap-1 transition-colors cursor-pointer group-hover:translate-x-0.5 duration-200"
                      >
                        <span>Richiedi Progetto Simile</span>
                        <ArrowUpRight className="w-3.5 h-3.5 text-fuchsia-400" />
                      </button>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
