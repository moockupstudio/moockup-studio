import React, { useState, useEffect, useId } from "react";
import { AGENCY_INFO } from "../data/agencyData";
import { 
  X, 
  Sparkles, 
  Globe, 
  CheckCircle2, 
  AlertCircle, 
  ArrowRight, 
  Zap, 
  TrendingUp, 
  Search, 
  MessageSquare,
  Mail
} from "lucide-react";

interface AuditModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialUrl?: string;
}

export const AuditModal: React.FC<AuditModalProps> = ({ 
  isOpen, 
  onClose, 
  initialUrl = "" 
}) => {
  const modalUrlId = useId();
  const modalGoalId = useId();

  const [url, setUrl] = useState(initialUrl);
  const [goal, setGoal] = useState("Aumentare Vendite & Conversioni");
  const [name, setName] = useState("");
  const [step, setStep] = useState<"input" | "analyzing" | "preview">("input");
  const [scanProgress, setScanProgress] = useState(0);

  useEffect(() => {
    if (initialUrl) {
      setUrl(initialUrl);
    }
  }, [initialUrl]);

  if (!isOpen) return null;

  const handleStartAnalysis = (e: React.FormEvent) => {
    e.preventDefault();
    if (!url.trim()) return;

    setStep("analyzing");
    setScanProgress(15);

    const interval = setInterval(() => {
      setScanProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setStep("preview");
          return 100;
        }
        return prev + 25;
      });
    }, 400);
  };

  const buildAuditMessage = () => {
    let msg = `Ciao Moockup Studio! Vorrei ricevere l'Audit Tecnico Gratuito (15 pagine) per il mio sito web.\n\n`;
    msg += `🌐 URL Sito: ${url.trim()}\n`;
    msg += `🎯 Obiettivo primario: ${goal}\n`;
    if (name.trim()) {
      msg += `👤 Nome referente: ${name.trim()}\n`;
    }
    return msg;
  };

  const handleAuditWhatsApp = () => {
    const text = encodeURIComponent(buildAuditMessage());
    window.open(`https://wa.me/${AGENCY_INFO.whatsapp}?text=${text}`, "_blank", "noopener,noreferrer");
    onClose();
  };

  const handleAuditEmail = () => {
    const subject = encodeURIComponent(`Richiesta Audit Gratuito per ${url}`);
    const body = encodeURIComponent(buildAuditMessage());
    window.location.href = `mailto:${AGENCY_INFO.email}?subject=${subject}&body=${body}`;
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md overflow-y-auto">
      <div 
        id="audit-lead-modal"
        className="relative w-full max-w-2xl bg-slate-900 border border-slate-800 rounded-3xl shadow-2xl overflow-hidden my-8 max-h-[92vh] flex flex-col"
      >
        {/* Header */}
        <div className="p-5 bg-[#090D16] border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-fuchsia-600/20 text-fuchsia-400 border border-fuchsia-500/30 flex items-center justify-center">
              <Sparkles className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-display font-bold text-base text-white">
                Audit Gratuito Sito Web & Google Ads
              </h3>
              <p className="text-[11px] text-slate-400">
                Valore commerciale 450€ • Gratuito per aziende e professionisti
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8 overflow-y-auto">
          {/* STEP 1: INITIAL URL INPUT */}
          {step === "input" && (
            <form onSubmit={handleStartAnalysis} className="space-y-5">
              <div className="text-center max-w-lg mx-auto mb-6">
                <h4 className="font-display font-bold text-xl sm:text-2xl text-white mb-2">
                  Dove sta perdendo soldi il tuo sito web?
                </h4>
                <p className="text-xs sm:text-sm text-slate-300">
                  Analizziamo velocità mobile, errori SEO tecnici, dispersione del budget Google Ads e usabilità del carrello/form di contatto.
                </p>
              </div>

              <div>
                <label htmlFor={modalUrlId} className="block text-xs uppercase font-bold text-slate-300 tracking-wider mb-2">
                  URL del tuo Sito Web *
                </label>
                <div className="relative">
                  <Globe className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                  <input
                    id={modalUrlId}
                    type="text"
                    required
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}
                    placeholder="es. www.latuazienda.it"
                    className="w-full pl-10 pr-4 py-3 bg-slate-950 border border-slate-800 rounded-xl text-base sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-fuchsia-500 transition-colors"
                  />
                </div>
              </div>

              <div>
                <label htmlFor={modalGoalId} className="block text-xs uppercase font-bold text-slate-300 tracking-wider mb-2">
                  Qual è la tua priorità principale?
                </label>
                <select
                  id={modalGoalId}
                  value={goal}
                  onChange={(e) => setGoal(e.target.value)}
                  className="w-full px-3.5 py-3 bg-slate-950 border border-slate-800 rounded-xl text-sm text-white focus:outline-none focus:border-fuchsia-500"
                >
                  <option value="Aumentare Vendite & Conversioni">Aumentare Vendite E-Commerce & Scontrino Medio</option>
                  <option value="Generare Lead Qualificati B2B">Generare Nuovi Preventivi / Lead B2B Qualificati</option>
                  <option value="Abbassare il Costo per Clic Google Ads">Abbassare il Costo per Lead su Google Ads e Massimizzare il ROAS</option>
                  <option value="Scalare la 1° Pagina di Google (SEO)">Scalare la Prima Pagina di Google con la SEO Organica</option>
                  <option value="Riprogettare il Sito Web da Zero">Riprogettare il Sito Web con Grafica Moderna e Veloce</option>
                </select>
              </div>

              <button
                type="submit"
                className="w-full py-4 px-6 bg-gradient-to-r from-fuchsia-600 to-pink-600 hover:from-fuchsia-500 hover:to-pink-500 text-white font-semibold text-sm rounded-xl shadow-xl shadow-fuchsia-600/30 flex items-center justify-center gap-2 transition-all active:scale-95"
              >
                <span>Avvia Diagnostica Istantanea</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <div className="text-center text-[11px] text-slate-400">
                Audit 100% gratuito e confidenziale. Nessun accesso richiesto al tuo server.
              </div>
            </form>
          )}

          {/* STEP 2: SIMULATED SCAN PROGRESS */}
          {step === "analyzing" && (
            <div className="py-12 text-center space-y-6">
              <div className="w-16 h-16 rounded-full bg-fuchsia-600/20 text-fuchsia-400 border border-fuchsia-500/30 flex items-center justify-center mx-auto animate-spin">
                <Sparkles className="w-8 h-8" />
              </div>
              <div>
                <h4 className="font-display font-bold text-xl text-white mb-2">
                  Scansione in Corso di: <span className="text-fuchsia-400">{url}</span>
                </h4>
                <p className="text-xs text-slate-400">
                  Verifica PageSpeed, Core Web Vitals, Tag di Tracciamento e Fattori di Ranking SEO...
                </p>
              </div>
              <div className="w-full bg-slate-950 rounded-full h-3 max-w-md mx-auto overflow-hidden border border-slate-800">
                <div 
                  className="bg-gradient-to-r from-fuchsia-500 to-pink-500 h-full transition-all duration-300 rounded-full"
                  style={{ width: `${scanProgress}%` }}
                />
              </div>
              <div className="text-xs font-mono text-slate-500">
                Avanzamento: {scanProgress}%
              </div>
            </div>
          )}

          {/* STEP 3: PREVIEW METRICS & LEAD FORM */}
          {step === "preview" && (
            <div className="space-y-6">
              <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-between">
                <div>
                  <div className="text-xs text-slate-400">Dominio Analizzato</div>
                  <div className="font-bold text-white text-sm truncate max-w-xs">{url}</div>
                </div>
                <div className="text-right">
                  <span className="px-2.5 py-1 rounded bg-amber-500/20 text-amber-300 text-xs font-bold border border-amber-500/30">
                    3 Aree di Ottimizzazione Rilevate
                  </span>
                </div>
              </div>

              {/* Preliminary Diagnosis Preview */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-center">
                <div className="p-3 rounded-lg bg-slate-950 border border-slate-800/80">
                  <div className="text-[11px] text-slate-400">Velocità Mobile</div>
                  <div className="text-base font-extrabold text-amber-400">58/100</div>
                  <div className="text-[9px] text-slate-500">Migliorabile</div>
                </div>
                <div className="p-3 rounded-lg bg-slate-950 border border-slate-800/80">
                  <div className="text-[11px] text-slate-400">SEO On-Page</div>
                  <div className="text-base font-extrabold text-fuchsia-400">Buona</div>
                  <div className="text-[9px] text-slate-500">Keyword gap</div>
                </div>
                <div className="p-3 rounded-lg bg-slate-950 border border-slate-800/80">
                  <div className="text-[11px] text-slate-400">Tracking Ads</div>
                  <div className="text-base font-extrabold text-red-400">Incompleto</div>
                  <div className="text-[9px] text-slate-500">No Server-Side</div>
                </div>
                <div className="p-3 rounded-lg bg-slate-950 border border-slate-800/80">
                  <div className="text-[11px] text-slate-400">Potenziale CRO</div>
                  <div className="text-base font-extrabold text-emerald-400">+65%</div>
                  <div className="text-[9px] text-slate-500">Fatturato stimato</div>
                </div>
              </div>

              {/* Complete Report Request Delivery */}
              <div className="p-5 rounded-2xl bg-slate-950 border border-slate-800 space-y-4 pt-4">
                <div>
                  <div className="text-xs font-bold text-white uppercase tracking-wider mb-1">
                    Ricevi il Report Completo di 15 Pagine con Piano d'Azione
                  </div>
                  <p className="text-xs text-slate-400">
                    Valore 450€ • Gratuito. Inviaci la richiesta su WhatsApp o via Email per ricevere il documento e la spiegazione tecnica dei punti critici rilevati.
                  </p>
                </div>

                <div>
                  <label className="block text-[11px] text-slate-300 font-semibold mb-1">
                    Il Tuo Nome o Azienda (facoltativo)
                  </label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="es. Giovanni - Brand XYZ"
                    className="w-full px-3 py-2 bg-slate-900 border border-slate-800 rounded-lg text-base sm:text-sm text-white focus:outline-none focus:border-fuchsia-500"
                  />
                </div>

                <div className="space-y-2.5 pt-1">
                  <button
                    type="button"
                    onClick={handleAuditWhatsApp}
                    id="audit-send-whatsapp-btn"
                    className="w-full py-3.5 px-5 bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-white font-bold text-xs sm:text-sm rounded-xl shadow-lg shadow-emerald-600/30 transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-95"
                  >
                    <MessageSquare className="w-4 h-4 text-white" />
                    <span>Richiedi Report su WhatsApp</span>
                  </button>

                  <button
                    type="button"
                    onClick={handleAuditEmail}
                    id="audit-send-email-btn"
                    className="w-full py-2.5 px-4 bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-700/80 rounded-xl font-semibold text-xs flex items-center justify-center gap-2 transition-all cursor-pointer"
                  >
                    <Mail className="w-3.5 h-3.5 text-fuchsia-400" />
                    <span>Oppure Invia per Email</span>
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
