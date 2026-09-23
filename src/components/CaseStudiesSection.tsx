import React, { useState } from "react";
import { CASE_STUDIES_DATA } from "../data/agencyData";
import { CaseStudy } from "../types";
import { 
  BookOpen, 
  ArrowRight, 
  TrendingUp, 
  Clock, 
  Calendar, 
  CheckCircle2, 
  Search, 
  Sparkles, 
  X, 
  ChevronRight,
  ExternalLink,
  Quote
} from "lucide-react";

interface CaseStudiesSectionProps {
  onOpenAudit: () => void;
  onContactWithCase: (caseTitle: string) => void;
}

export const CaseStudiesSection: React.FC<CaseStudiesSectionProps> = ({ 
  onOpenAudit, 
  onContactWithCase 
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>("Tutti");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [activeModalCase, setActiveModalCase] = useState<CaseStudy | null>(null);

  const categories = ["Tutti", "Google Ads", "Lead Generation", "SEO", "E-Commerce"];

  const filteredStudies = CASE_STUDIES_DATA.filter((cs) => {
    const matchesCategory = selectedCategory === "Tutti" || cs.category === selectedCategory;
    const matchesSearch = 
      cs.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      cs.client.toLowerCase().includes(searchQuery.toLowerCase()) ||
      cs.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="casi-studio" className="py-24 bg-[#090D16] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-fuchsia-500/10 border border-fuchsia-500/20 text-fuchsia-400 text-xs font-semibold uppercase tracking-wider mb-4">
              <BookOpen className="w-3.5 h-3.5" />
              <span>Blog & Casi Studio Concreti</span>
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight">
              Numeri Veri, <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 via-pink-400 to-rose-400">Non Teorie</span>
            </h2>
            <p className="text-slate-400 text-base sm:text-lg max-w-2xl mt-3">
              Scopri come abbiamo analizzato il mercato, risolto criticità tecniche e scalato fatturato e lead qualificati con siti web moderni, SEO e campagne Google Ads.
            </p>
          </div>

          <button
            onClick={onOpenAudit}
            className="hidden sm:inline-flex items-center gap-2 px-5 py-3 text-sm font-semibold text-white bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-xl transition-all shadow-md group shrink-0 self-start md:self-auto"
          >
            <Sparkles className="w-4 h-4 text-emerald-400" />
            <span>Vuoi risultati simili? Fai l'Audit</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Filters & Search Toolbar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-10 pb-6 border-b border-slate-800/80">
          {/* Category Pills */}
          <div className="flex items-center gap-2 overflow-x-auto w-full sm:w-auto pb-2 sm:pb-0 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all whitespace-nowrap ${
                  selectedCategory === cat
                    ? "bg-fuchsia-600 text-white shadow-md shadow-fuchsia-600/30"
                    : "bg-slate-900 text-slate-400 hover:text-white border border-slate-800 hover:border-slate-700"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Quick Search */}
          <div className="relative w-full sm:w-72">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Cerca per argomento o settore..."
              className="w-full pl-10 pr-4 py-2 bg-slate-900 border border-slate-800 rounded-xl text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-fuchsia-500 transition-colors"
            />
          </div>
        </div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredStudies.map((study) => (
            <article
              key={study.id}
              className="bg-slate-900/80 border border-slate-800/90 rounded-2xl overflow-hidden hover:border-slate-700 transition-all duration-300 flex flex-col justify-between group shadow-xl hover:-translate-y-1"
            >
              <div>
                {/* Hero Thumbnail */}
                <div className="relative h-48 sm:h-52 overflow-hidden">
                  <img
                    src={study.heroImage}
                    alt={study.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
                  
                  {/* Category Badge */}
                  <span className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-bold bg-slate-950/80 backdrop-blur-md text-emerald-400 border border-emerald-500/30">
                    {study.category}
                  </span>

                  {/* Read Time */}
                  <span className="absolute bottom-3 left-4 flex items-center gap-1.5 text-xs text-slate-300 font-medium">
                    <Clock className="w-3.5 h-3.5 text-slate-400" />
                    {study.readTime}
                  </span>
                </div>

                {/* Body Content */}
                <div className="p-6">
                  <div className="text-xs font-semibold text-fuchsia-400 uppercase tracking-wider mb-2">
                    Cliente: {study.client}
                  </div>
                  <h3 className="font-display font-bold text-lg sm:text-xl text-white group-hover:text-fuchsia-300 transition-colors line-clamp-2 mb-3 leading-snug">
                    {study.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-400 line-clamp-3 mb-6 leading-relaxed">
                    {study.excerpt}
                  </p>

                  {/* Key Metrics Grid */}
                  <div className="grid grid-cols-3 gap-2 p-3 rounded-xl bg-[#090D16] border border-slate-800/80 text-center mb-4">
                    <div>
                      <div className="font-display font-bold text-sm sm:text-base text-emerald-400">
                        {study.metrics.metric1.value}
                      </div>
                      <div className="text-[10px] text-slate-400 font-medium truncate">
                        {study.metrics.metric1.label}
                      </div>
                    </div>
                    <div className="border-x border-slate-800">
                      <div className="font-display font-bold text-sm sm:text-base text-fuchsia-400">
                        {study.metrics.metric2.value}
                      </div>
                      <div className="text-[10px] text-slate-400 font-medium truncate">
                        {study.metrics.metric2.label}
                      </div>
                    </div>
                    <div>
                      <div className="font-display font-bold text-sm sm:text-base text-pink-400">
                        {study.metrics.metric3.value}
                      </div>
                      <div className="text-[10px] text-slate-400 font-medium truncate">
                        {study.metrics.metric3.label}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="p-6 pt-0">
                <button
                  onClick={() => setActiveModalCase(study)}
                  className="w-full py-2.5 px-4 rounded-xl bg-slate-800/80 hover:bg-fuchsia-600 text-slate-200 hover:text-white text-xs sm:text-sm font-semibold transition-all flex items-center justify-center gap-2 group-hover:border-fuchsia-500"
                >
                  <span>Leggi il Caso Studio Completo</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </article>
          ))}
        </div>

        {filteredStudies.length === 0 && (
          <div className="text-center py-16 bg-slate-900/40 border border-slate-800 rounded-2xl">
            <p className="text-slate-400 text-sm">Nessun caso studio corrisponde alla tua ricerca.</p>
            <button
              onClick={() => { setSelectedCategory("Tutti"); setSearchQuery(""); }}
              className="mt-3 text-fuchsia-400 text-xs font-semibold hover:underline"
            >
              Reimposta filtri
            </button>
          </div>
        )}

        {/* Modal: Full Case Study Reader */}
        {activeModalCase && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm overflow-y-auto">
            <div className="relative w-full max-w-4xl bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl overflow-hidden my-8 max-h-[90vh] flex flex-col">
              {/* Modal Top Bar */}
              <div className="flex items-center justify-between p-5 border-b border-slate-800 bg-[#090D16] sticky top-0 z-10">
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-1 rounded bg-fuchsia-500/20 text-fuchsia-400 text-xs font-bold border border-fuchsia-500/30">
                    {activeModalCase.category}
                  </span>
                  <span className="text-xs text-slate-400">
                    Caso Studio: {activeModalCase.client}
                  </span>
                </div>
                <button
                  onClick={() => setActiveModalCase(null)}
                  className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Modal Scrollable Body */}
              <div className="p-6 sm:p-8 overflow-y-auto space-y-8">
                <div>
                  <h2 className="font-display font-bold text-2xl sm:text-3xl text-white mb-3">
                    {activeModalCase.title}
                  </h2>
                  <div className="flex items-center gap-4 text-xs text-slate-400">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-slate-500" /> {activeModalCase.readTime}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-slate-500" /> {activeModalCase.publishedDate}
                    </span>
                  </div>
                </div>

                {/* Hero Image */}
                <div className="h-64 sm:h-80 rounded-xl overflow-hidden">
                  <img
                    src={activeModalCase.heroImage}
                    alt={activeModalCase.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Metrics Highlight Banner */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 p-5 rounded-xl bg-slate-950 border border-slate-800 text-center">
                  <div className="p-2">
                    <div className="text-xs text-slate-400 mb-1">{activeModalCase.metrics.metric1.label}</div>
                    <div className="font-display font-extrabold text-2xl sm:text-3xl text-emerald-400">
                      {activeModalCase.metrics.metric1.value}
                    </div>
                  </div>
                  <div className="p-2 sm:border-x border-slate-800">
                    <div className="text-xs text-slate-400 mb-1">{activeModalCase.metrics.metric2.label}</div>
                    <div className="font-display font-extrabold text-2xl sm:text-3xl text-fuchsia-400">
                      {activeModalCase.metrics.metric2.value}
                    </div>
                  </div>
                  <div className="p-2">
                    <div className="text-xs text-slate-400 mb-1">{activeModalCase.metrics.metric3.label}</div>
                    <div className="font-display font-extrabold text-2xl sm:text-3xl text-pink-400">
                      {activeModalCase.metrics.metric3.value}
                    </div>
                  </div>
                </div>

                {/* The Problem */}
                <div className="space-y-3">
                  <h4 className="font-display font-bold text-lg text-white flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-red-400" />
                    Il Problema & La Sfida Iniziale
                  </h4>
                  <p className="text-sm sm:text-base text-slate-300 leading-relaxed bg-slate-950/60 p-4 rounded-xl border border-slate-800/80">
                    {activeModalCase.problem}
                  </p>
                </div>

                {/* The Strategy Applied */}
                <div className="space-y-4">
                  <h4 className="font-display font-bold text-lg text-white flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-400" />
                    La Strategia Adottata da Moockup Studio
                  </h4>
                  <div className="space-y-4">
                    {activeModalCase.strategy.map((st, i) => (
                      <div key={i} className="p-4 rounded-xl bg-slate-950/80 border border-slate-800">
                        <h5 className="font-semibold text-sm sm:text-base text-white mb-2">
                          {st.title}
                        </h5>
                        <ul className="space-y-2">
                          {st.map ? null : null}
                          {st.points.map((pt, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-300">
                              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                              <span>{pt}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Before vs After Table */}
                <div>
                  <h4 className="font-display font-bold text-lg text-white mb-3">
                    Confronto Prima e Dopo Moockup
                  </h4>
                  <div className="overflow-x-auto">
                    <table className="w-full text-left text-xs sm:text-sm border-collapse">
                      <thead>
                        <tr className="border-b border-slate-800 text-slate-400">
                          <th className="py-2.5 px-3">Metrica Chiave</th>
                          <th className="py-2.5 px-3 text-red-400">Prima</th>
                          <th className="py-2.5 px-3 text-emerald-400">Dopo con Moockup</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-800/60">
                        {activeModalCase.beforeAfter.map((row, i) => (
                          <tr key={i} className="hover:bg-slate-950/40">
                            <td className="py-3 px-3 font-medium text-slate-200">{row.metric}</td>
                            <td className="py-3 px-3 text-slate-400 line-through">{row.before}</td>
                            <td className="py-3 px-3 font-bold text-emerald-400">{row.after}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Client Quote if available */}
                {activeModalCase.clientQuote && (
                  <div className="p-5 rounded-xl bg-fuchsia-950/20 border border-fuchsia-500/20 relative">
                    <Quote className="w-8 h-8 text-fuchsia-500/30 absolute top-4 right-4" />
                    <p className="italic text-sm text-slate-200 mb-3 relative z-10">
                      "{activeModalCase.clientQuote.text}"
                    </p>
                    <div className="text-xs font-bold text-white">
                      {activeModalCase.clientQuote.author}
                    </div>
                    <div className="text-[11px] text-fuchsia-300">
                      {activeModalCase.clientQuote.role}
                    </div>
                  </div>
                )}

                {/* Key Takeaway */}
                <div className="p-4 rounded-xl bg-slate-950 border border-slate-800">
                  <span className="text-xs uppercase font-bold text-amber-400 tracking-wider block mb-1">
                    💡 Principale Insegnamento
                  </span>
                  <p className="text-xs sm:text-sm text-slate-300">
                    {activeModalCase.keyTakeaway}
                  </p>
                </div>
              </div>

              {/* Modal Bottom CTA */}
              <div className="p-5 border-t border-slate-800 bg-[#090D16] flex flex-col sm:flex-row items-center justify-between gap-3">
                <div className="text-xs text-slate-400 text-center sm:text-left">
                  Vuoi ottenere numeri simili per il tuo settore?
                </div>
                <div className="flex items-center gap-3 w-full sm:w-auto">
                  <button
                    onClick={() => {
                      const title = activeModalCase.title;
                      setActiveModalCase(null);
                      onContactWithCase(title);
                    }}
                    className="flex-1 sm:flex-initial px-5 py-2.5 bg-gradient-to-r from-fuchsia-600 to-pink-600 hover:from-fuchsia-500 hover:to-pink-500 text-white font-semibold text-xs sm:text-sm rounded-xl shadow-lg shadow-fuchsia-600/30 transition-all"
                  >
                    Richiedi Strategia Simile
                  </button>
                  <button
                    onClick={() => setActiveModalCase(null)}
                    className="px-4 py-2.5 text-xs text-slate-400 hover:text-white"
                  >
                    Chiudi
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
