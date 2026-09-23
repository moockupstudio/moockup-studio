import React from "react";
import { X, CheckCircle, FileCode, Sliders, Layers, Sparkles, Download, ArrowRight, ExternalLink } from "lucide-react";

interface WordPressModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const WordPressModal: React.FC<WordPressModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-3xl bg-[#090D16] border border-pink-500/40 rounded-2xl shadow-2xl p-6 sm:p-8 text-slate-200 my-8">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-lg bg-slate-800/80 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors"
          aria-label="Chiudi"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="flex items-center gap-3 mb-6">
          <div className="p-3 rounded-xl bg-gradient-to-tr from-pink-600 to-rose-600 text-white shadow-lg shadow-pink-500/30">
            <FileCode className="w-6 h-6" />
          </div>
          <div>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-pink-500/10 text-pink-400 border border-pink-500/20 text-[11px] font-bold uppercase tracking-wider mb-1">
              <Sparkles className="w-3 h-3" /> Pacchetto Creato con Successo
            </div>
            <h3 className="text-xl sm:text-2xl font-black text-white">
              Tema WordPress Ufficiale Moockup Studio
            </h3>
          </div>
        </div>

        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
          Abbiamo generato l'intera architettura del tema WordPress all'interno della cartella <code className="px-2 py-0.5 rounded bg-slate-800 text-pink-300 font-mono text-xs">/wordpress-theme/moockup-studio/</code>. È pronto per essere installato su qualsiasi hosting (Serverplan, SiteGround, Aruba, ecc.).
        </p>

        {/* Direct Download Banner */}
        <div className="p-5 rounded-2xl bg-gradient-to-r from-pink-950/60 via-slate-900 to-rose-950/60 border-2 border-pink-500/50 shadow-xl mb-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <div className="text-white font-black text-base flex items-center gap-2 mb-1">
                <span>⚡ Download Diretto con 1 Clic</span>
                <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 text-[10px] uppercase font-bold tracking-wider">
                  Pronto per WordPress
                </span>
              </div>
              <p className="text-xs text-slate-300">
                Non serve cercare menu o esportare: abbiamo già impacchettato il file <strong className="text-pink-300">moockup-studio.zip</strong> per te!
              </p>
            </div>

            <a
              href="/moockup-studio.zip"
              download="moockup-studio.zip"
              id="direct-download-wp-zip"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-pink-600 via-rose-600 to-fuchsia-600 hover:from-pink-500 hover:to-rose-500 shadow-lg shadow-pink-600/40 hover:shadow-pink-600/60 active:scale-95 transition-all text-center whitespace-nowrap cursor-pointer"
            >
              <Download className="w-5 h-5 animate-bounce" />
              <span>Scarica moockup-studio.zip</span>
            </a>
          </div>
        </div>

        {/* Key Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
          <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800">
            <div className="flex items-center gap-2 text-pink-400 font-bold text-xs uppercase mb-2">
              <Sliders className="w-4 h-4" /> Tutti i Div On/Off
            </div>
            <p className="text-xs text-slate-400">
              Da <em>Aspetto &rarr; Personalizza</em> puoi accendere o spegnere ogni singolo div (Hero, ROI, Servizi, Portfolio, Testimonianze, FAQ).
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800">
            <div className="flex items-center gap-2 text-pink-400 font-bold text-xs uppercase mb-2">
              <Layers className="w-4 h-4" /> Portfolio CPT Nativo
            </div>
            <p className="text-xs text-slate-400">
              Gestisci i progetti come articoli: inserisci cliente, metriche di risultato (es. +240% Lead) e PageSpeed in pochi clic.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800">
            <div className="flex items-center gap-2 text-pink-400 font-bold text-xs uppercase mb-2">
              <ExternalLink className="w-4 h-4" /> Landing SEO & Ads
            </div>
            <p className="text-xs text-slate-400">
              Crea infinite landing page con il modello dedicato per indicizzarti su Google con parole chiave locali e su Foggia.
            </p>
          </div>
        </div>

        {/* 3 Quick Steps */}
        <div className="p-5 rounded-xl bg-slate-950/60 border border-slate-800 mb-6">
          <h4 className="text-xs uppercase font-bold text-white tracking-wider mb-3">
            Come installarlo in WordPress (3 passaggi):
          </h4>
          <ol className="space-y-3 text-xs text-slate-300">
            <li className="flex items-start gap-2.5">
              <span className="flex-shrink-0 w-5 h-5 rounded-full bg-pink-500/20 text-pink-400 font-bold flex items-center justify-center text-[11px] border border-pink-500/30">1</span>
              <div>
                <strong className="text-white">Scarica il file:</strong> Clicca sul pulsante fucsia <strong className="text-pink-300">"Scarica moockup-studio.zip"</strong> qui sopra (oppure in alto nella barra di navigazione del sito). Il browser scaricherà all'istante il file .zip già pronto per WordPress.
              </div>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="flex-shrink-0 w-5 h-5 rounded-full bg-pink-500/20 text-pink-400 font-bold flex items-center justify-center text-[11px] border border-pink-500/30">2</span>
              <div>
                <strong className="text-white">Accedi alla tua bacheca WordPress:</strong> Vai su <code className="text-pink-300 bg-slate-900 px-1.5 py-0.5 rounded">iltuosito.it/wp-admin</code> &rarr; menu laterale <strong className="text-white">Aspetto &rarr; Temi</strong>.
              </div>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="flex-shrink-0 w-5 h-5 rounded-full bg-pink-500/20 text-pink-400 font-bold flex items-center justify-center text-[11px] border border-pink-500/30">3</span>
              <div>
                <strong className="text-white">Carica e Attiva:</strong> Clicca in alto su <strong className="text-white">"Aggiungi nuovo tema"</strong>, poi su <strong className="text-white">"Carica tema"</strong>, seleziona il file scaricato <code className="text-pink-300 bg-slate-900 px-1.5 py-0.5 rounded">moockup-studio.zip</code> e clicca su <strong className="text-emerald-400">Installa ora &rarr; Attiva</strong>. Fatto!
              </div>
            </li>
          </ol>
        </div>

        {/* Action Footer */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-slate-800">
          <div className="text-xs text-slate-400 flex items-center gap-1.5">
            <CheckCircle className="w-4 h-4 text-emerald-400" />
            <span>Guida completa inclusa in <strong>/wordpress-theme/GUIDA_INSTALLAZIONE.md</strong></span>
          </div>

          <button
            onClick={onClose}
            className="w-full sm:w-auto px-6 py-2.5 rounded-xl font-bold text-xs text-white bg-pink-600 hover:bg-pink-500 transition-colors"
          >
            Ho capito, perfetto!
          </button>
        </div>

      </div>
    </div>
  );
};
