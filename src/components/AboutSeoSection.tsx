import React from "react";
import { 
  Globe2, 
  Search, 
  Target, 
  Link2, 
  MapPin, 
  Zap, 
  TrendingUp, 
  ShieldCheck, 
  CheckCircle2, 
  ArrowRight,
  Sparkles
} from "lucide-react";

interface AboutSeoSectionProps {
  onOpenAudit: () => void;
  onOpenChat: () => void;
}

export const AboutSeoSection: React.FC<AboutSeoSectionProps> = ({
  onOpenAudit,
  onOpenChat,
}) => {
  return (
    <section className="py-20 md:py-28 bg-[#070B14] border-t border-slate-800/80 relative overflow-hidden">
      {/* Background radial gradient */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-fuchsia-600/5 blur-[140px] pointer-events-none rounded-full" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-14 md:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-fuchsia-500/10 border border-fuchsia-500/20 text-fuchsia-400 text-xs font-bold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Autorità Digitale, Posizionamento & Performance</span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight mb-5">
            Realizzazione Siti Web, SEO & Google Ads a{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 via-pink-400 to-rose-400">
              Foggia e in Tutta Italia
            </span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
            Dal codice pulito al posizionamento su Google: costruiamo ecosistemi digitali completi progettati per scalare la visibilità organica, dominare le ricerche locali e massimizzare il ritorno sull'investimento pubblicitario.
          </p>
        </div>

        {/* 4 Pillars Grid with Rich SEO Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-16">
          {/* Pillar 1: Realizzazione Siti Web & Web Design */}
          <div className="p-6 sm:p-8 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-fuchsia-500/40 transition-all duration-300 flex flex-col justify-between group">
            <div>
              <div className="w-12 h-12 rounded-xl bg-fuchsia-500/10 border border-fuchsia-500/20 flex items-center justify-center text-fuchsia-400 mb-5 group-hover:scale-110 transition-transform">
                <Globe2 className="w-6 h-6" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">
                Realizzazione Siti Web Moderni & E-Commerce
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-4">
                La <strong>realizzazione di siti web</strong> per noi non è un template preimpostato, ma un'architettura su misura sviluppata con standard ingegneristici d'eccellenza. Che tu abbia bisogno di un sito vetrina aziendale, un portale corporate o di uno <strong>sviluppo e-commerce</strong> Shopify e custom ad altissime conversioni, garantiamo codice semantico pulito, usabilità <em>mobile-first</em> e punteggi Core Web Vitals massimi.
              </p>
              <ul className="space-y-2 text-xs text-slate-300">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Tempi di caricamento inferiori a 1 secondo (LCP ottimizzato)</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Design responsive, interfaccia UI/UX moderna e accessibile</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Checkout rapido a 1-step per e-commerce e conversion rate optimization (CRO)</span>
                </li>
              </ul>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs text-fuchsia-400 font-semibold">
              <span>Siti Web ad Alte Prestazioni</span>
              <Zap className="w-4 h-4" />
            </div>
          </div>

          {/* Pillar 2: SEO & Posizionamento su Google */}
          <div className="p-6 sm:p-8 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-pink-500/40 transition-all duration-300 flex flex-col justify-between group">
            <div>
              <div className="w-12 h-12 rounded-xl bg-pink-500/10 border border-pink-500/20 flex items-center justify-center text-pink-400 mb-5 group-hover:scale-110 transition-transform">
                <Search className="w-6 h-6" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">
                SEO Organica & Posizionamento su Google
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-4">
                La <strong>SEO (Search Engine Optimization)</strong> è il fattore decisivo per essere trovati dai clienti nel momento esatto in cui cercano i tuoi prodotti o servizi. Curiamo ogni aspetto del posizionamento organico: dall'<strong>audit SEO tecnico</strong> (risoluzione problemi di scansione, indicizzazione e canonicalizzazione) all'ottimizzazione on-page (tag Title, gerarchia H1-H6, Schema Markup e dati strutturati) fino alla creazione di contenuti verticali per intercettare l'intento di ricerca degli utenti.
              </p>
              <ul className="space-y-2 text-xs text-slate-300">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Keyword research strategica basata su parole chiave ad alto intento commerciale</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Ottimizzazione per Google AI Overviews & Search Generative Experience</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Architettura dell'informazione a cluster tematici e internal linking strategico</span>
                </li>
              </ul>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs text-pink-400 font-semibold">
              <span>Posizionamento nei Primi Risultati</span>
              <TrendingUp className="w-4 h-4" />
            </div>
          </div>

          {/* Pillar 3: Google Ads & Gestione Campagne SEM */}
          <div className="p-6 sm:p-8 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-rose-500/40 transition-all duration-300 flex flex-col justify-between group">
            <div>
              <div className="w-12 h-12 rounded-xl bg-rose-500/10 border border-rose-500/20 flex items-center justify-center text-rose-400 mb-5 group-hover:scale-110 transition-transform">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">
                Creazione & Gestione Campagne Google Ads
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-4">
                Come specialisti dedicati nella <strong>gestione di campagne Google Ads</strong>, trasformiamo il budget pubblicitario in fatturato tangibile e contatti commerciali qualificati. Progettiamo campagne Search mirate con filtraggio rigoroso delle parole chiave negative, campagne Performance Max ottimizzate per massimizzare il valore delle conversioni e feed Google Shopping strutturati per vendere con ROAS sostenibile.
              </p>
              <ul className="space-y-2 text-xs text-slate-300">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Tracciamento conversioni avanzato GA4 e Google Tag Manager sia client che server-side</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Landing page ad altissima conversione studiate per abbassare il CPA (Costo per Acquisizione)</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Monitoraggio continuo con report trasparenti su Google Looker Studio</span>
                </li>
              </ul>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs text-rose-400 font-semibold">
              <span>Massimo Rendimento & Focus ROI</span>
              <ShieldCheck className="w-4 h-4" />
            </div>
          </div>

          {/* Pillar 4: Link Building & Local SEO Foggia */}
          <div className="p-6 sm:p-8 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-indigo-500/40 transition-all duration-300 flex flex-col justify-between group">
            <div>
              <div className="w-12 h-12 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 mb-5 group-hover:scale-110 transition-transform">
                <Link2 className="w-6 h-6" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">
                Link Building Autorevole & Local SEO Foggia
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-4">
                La forza di un dominio web dipende dalla sua autorità agli occhi di Google. Attraverso strategie etiche di <strong>link building</strong> e digital PR su quotidiani e testate giornalistiche nazionali di settore, incrementiamo il Trust Flow del tuo sito web. Per le attività territoriali, curiamo il presidio della <strong>Local SEO a Foggia</strong> e in tutta la Puglia, posizionando la tua azienda nel Google Local 3-Pack e su Google Maps con schede Google Business Profile performanti.
              </p>
              <ul className="space-y-2 text-xs text-slate-300">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Backlink editoriali sicuri da siti ad alto Domain Authority (DA)</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Ottimizzazione scheda Google Business Profile e recensioni clienti</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Presidio geolocalizzato per ricerche locali "vicino a me" a Foggia e provincia</span>
                </li>
              </ul>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs text-indigo-400 font-semibold">
              <span>Autorevolezza & Presidio Territoriale</span>
              <MapPin className="w-4 h-4" />
            </div>
          </div>
        </div>

        {/* Bottom Callout: Audit gratuito */}
        <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-slate-900 via-slate-900 to-fuchsia-950/40 border border-slate-800 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="max-w-2xl text-center md:text-left">
            <h4 className="text-lg sm:text-xl font-bold text-white mb-1.5">
              Vuoi conoscere lo stato di salute SEO e velocità del tuo sito?
            </h4>
            <p className="text-xs sm:text-sm text-slate-400">
              Analizziamo gratuitamente la struttura tecnica, il punteggio PageSpeed, le parole chiave posizionate e le opportunità per le campagne Google Ads.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0 w-full md:w-auto">
            <button
              onClick={onOpenAudit}
              className="w-full sm:w-auto px-6 py-3 bg-gradient-to-r from-fuchsia-600 to-pink-600 hover:from-fuchsia-500 hover:to-pink-500 text-white font-semibold text-xs sm:text-sm rounded-xl shadow-lg shadow-fuchsia-600/30 flex items-center justify-center gap-2 transition-all active:scale-95 cursor-pointer"
            >
              <Sparkles className="w-4 h-4 text-fuchsia-200" />
              <span>Richiedi Audit SEO Gratuito</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={onOpenChat}
              className="w-full sm:w-auto px-5 py-3 bg-slate-800/80 hover:bg-slate-700/80 text-slate-300 hover:text-white font-semibold text-xs sm:text-sm rounded-xl border border-slate-700 transition-all cursor-pointer"
            >
              Contattaci su WhatsApp
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
