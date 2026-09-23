import React, { useState } from "react";
import { AGENCY_INFO } from "../data/agencyData";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Sparkles, 
  MessageSquare,
  Check,
  ExternalLink,
  Zap,
  ArrowRight
} from "lucide-react";

interface ContactSectionProps {
  initialService?: string;
  onOpenAudit: () => void;
  onOpenChat: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ 
  initialService, 
  onOpenAudit,
  onOpenChat
}) => {
  const serviceOptions = [
    { id: "full", label: "Pacchetto Completo (Sito + Ads + SEO)", badge: "Più Richiesto" },
    { id: "website", label: "Nuovo Sito Web o E-Commerce", badge: "Alta Velocità" },
    { id: "ads", label: "Campagne Google Ads & Tracciamenti", badge: "ROI Focus" },
    { id: "seo", label: "SEO & Posizionamento Google", badge: "Crescita Organica" },
    { id: "cro", label: "Audit, Restyling & Ottimizzazione CRO", badge: "Conversioni" },
  ];

  const budgetOptions = [
    "1.000€ - 2.500€",
    "2.500€ - 5.000€",
    "5.000€ - 10.000€",
    "Da definire insieme"
  ];

  const [selectedService, setSelectedService] = useState(initialService || serviceOptions[0].label);
  const [selectedBudget, setSelectedBudget] = useState(budgetOptions[0]);
  const [websiteUrl, setWebsiteUrl] = useState("");
  const [notes, setNotes] = useState("");

  const buildMessage = () => {
    let msg = `Ciao Moockup Studio! Vorrei richiedere informazioni e un preventivo personalizzato.\n\n`;
    msg += `📌 Servizio: ${selectedService}\n`;
    msg += `💰 Budget indicativo: ${selectedBudget}\n`;
    if (websiteUrl.trim()) {
      msg += `🌐 Sito attuale: ${websiteUrl.trim()}\n`;
    }
    if (notes.trim()) {
      msg += `📝 Dettagli / Obiettivo: ${notes.trim()}\n`;
    }
    return msg;
  };

  const handleSendWhatsApp = () => {
    const text = encodeURIComponent(buildMessage());
    window.open(`https://wa.me/${AGENCY_INFO.whatsapp}?text=${text}`, "_blank", "noopener,noreferrer");
  };

  const handleSendEmail = () => {
    const subject = encodeURIComponent(`Richiesta Preventivo - ${selectedService}`);
    const body = encodeURIComponent(buildMessage());
    window.location.href = `mailto:${AGENCY_INFO.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contatti" className="py-24 bg-[#090D16] relative border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Agency Information */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-4">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>Canale Diretto Senza Attese</span>
              </div>
              <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight mb-4">
                Iniziamo a Scalare il Tuo Business.{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 via-pink-400 to-rose-400">
                  Oggi Stesso.
                </span>
              </h2>
              <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
                Nessun form complicato né email perse nello spam: parla direttamente con i fondatori di Moockup Studio per ottenere stime chiare, consigli strategici e preventivi rapidi.
              </p>
            </div>

            {/* Direct Contacts Cards */}
            <div className="space-y-3">
              {/* WhatsApp Highlight */}
              <button
                onClick={handleSendWhatsApp}
                className="w-full p-4 rounded-2xl bg-gradient-to-r from-emerald-950/40 via-slate-900 to-slate-900 border border-emerald-500/30 hover:border-emerald-400/70 flex items-center justify-between group transition-all cursor-pointer text-left shadow-lg shadow-emerald-950/20"
              >
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-xl bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 group-hover:scale-105 transition-transform">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-emerald-400 font-semibold uppercase tracking-wider">WhatsApp Diretto</div>
                    <div className="text-sm sm:text-base font-bold text-white group-hover:text-emerald-300 transition-colors">
                      {AGENCY_INFO.phone}
                    </div>
                  </div>
                </div>
                <ArrowRight className="w-4 h-4 text-emerald-400 group-hover:translate-x-1 transition-transform" />
              </button>

              {/* Direct Email */}
              <a
                href={`mailto:${AGENCY_INFO.email}`}
                className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-fuchsia-500/50 flex items-center justify-between group transition-all"
              >
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-lg bg-fuchsia-600/20 text-fuchsia-400 border border-fuchsia-500/30 group-hover:scale-105 transition-transform">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400 font-medium">Scrivici via Email</div>
                    <div className="text-sm sm:text-base font-bold text-white group-hover:text-fuchsia-300 transition-colors">
                      {AGENCY_INFO.email}
                    </div>
                  </div>
                </div>
                <ExternalLink className="w-4 h-4 text-slate-500 group-hover:text-fuchsia-400 transition-colors" />
              </a>

              {/* Direct Phone Call */}
              <a
                href={`tel:${AGENCY_INFO.phone.replace(/\s+/g, '')}`}
                className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-slate-700 flex items-center justify-between group transition-all"
              >
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-lg bg-slate-800 text-slate-300">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400 font-medium">Chiamata Telefonica</div>
                    <div className="text-sm sm:text-base font-bold text-white">
                      {AGENCY_INFO.phone}
                    </div>
                  </div>
                </div>
                <ExternalLink className="w-4 h-4 text-slate-500" />
              </a>

              {/* Location & Hours */}
              <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800/80 flex items-center gap-4">
                <div className="p-3 rounded-lg bg-slate-800/60 text-slate-400">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-400 font-medium">Sede Operativa & Smart Working</div>
                  <div className="text-sm font-semibold text-slate-200">
                    {AGENCY_INFO.location}
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800/80 flex items-center gap-4">
                <div className="p-3 rounded-lg bg-slate-800/60 text-slate-400">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-400 font-medium">Orari di Risposta Rapida</div>
                  <div className="text-sm font-semibold text-slate-200">
                    {AGENCY_INFO.hours} • Risposta in &lt; 2 ore
                  </div>
                </div>
              </div>
            </div>

            {/* Free Audit Banner */}
            <div className="p-5 rounded-2xl bg-gradient-to-br from-fuchsia-950/30 to-slate-900 border border-fuchsia-500/25 flex items-center justify-between gap-4">
              <div>
                <div className="text-xs font-bold text-fuchsia-400 uppercase tracking-wider mb-1 flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Vuoi prima testare il tuo sito?</span>
                </div>
                <div className="text-xs text-slate-300">
                  Richiedi la nostra analisi tecnica gratuita su PageSpeed, SEO e tracciamenti.
                </div>
              </div>
              <button
                onClick={onOpenAudit}
                className="px-3.5 py-2 rounded-xl bg-fuchsia-600 hover:bg-fuchsia-500 text-white font-semibold text-xs shadow-md shadow-fuchsia-600/30 shrink-0 cursor-pointer transition-all"
              >
                Audit Gratuito
              </button>
            </div>
          </div>

          {/* Right Column: High-Conversion Instant Quote Builder */}
          <div className="lg:col-span-7 bg-slate-900/90 border border-slate-800 rounded-3xl p-6 sm:p-10 shadow-2xl backdrop-blur-xl space-y-6">
            <div className="border-b border-slate-800 pb-4">
              <div className="flex items-center gap-2 mb-1">
                <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 text-[11px] font-bold border border-emerald-500/30">
                  Contatto Immediato
                </span>
                <span className="text-xs text-slate-400">Zero registrazione</span>
              </div>
              <h3 className="font-display font-bold text-xl sm:text-2xl text-white">
                Configura la Tua Richiesta
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 mt-1">
                Seleziona i servizi di tuo interesse: ti prepariamo un messaggio chiaro da inviarci subito su WhatsApp o via Email.
              </p>
            </div>

            {/* Step 1: Select Service */}
            <div>
              <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2.5">
                1. Di cosa hai bisogno? *
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {serviceOptions.map((opt) => {
                  const isSelected = selectedService === opt.label;
                  return (
                    <button
                      key={opt.id}
                      type="button"
                      onClick={() => setSelectedService(opt.label)}
                      className={`p-3 rounded-xl border text-left transition-all cursor-pointer flex items-start justify-between gap-2 ${
                        isSelected
                          ? "bg-fuchsia-600/15 border-fuchsia-500 text-white shadow-md shadow-fuchsia-950/50"
                          : "bg-slate-950/60 border-slate-800 text-slate-300 hover:border-slate-700 hover:bg-slate-950"
                      }`}
                    >
                      <div>
                        <div className="text-xs sm:text-sm font-semibold leading-snug">
                          {opt.label}
                        </div>
                        <span className="inline-block text-[10px] text-fuchsia-400 font-medium mt-1">
                          {opt.badge}
                        </span>
                      </div>
                      {isSelected ? (
                        <div className="w-4 h-4 rounded-full bg-fuchsia-500 text-white flex items-center justify-center shrink-0 mt-0.5">
                          <Check className="w-3 h-3" />
                        </div>
                      ) : (
                        <div className="w-4 h-4 rounded-full border border-slate-700 shrink-0 mt-0.5" />
                      )}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 2: Indicative Budget */}
            <div>
              <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2.5">
                2. Budget indicativo orientativo
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {budgetOptions.map((b) => {
                  const isSelected = selectedBudget === b;
                  return (
                    <button
                      key={b}
                      type="button"
                      onClick={() => setSelectedBudget(b)}
                      className={`py-2.5 px-3 rounded-xl border text-center text-xs font-semibold transition-all cursor-pointer ${
                        isSelected
                          ? "bg-pink-600/20 border-pink-500 text-pink-300 shadow-sm"
                          : "bg-slate-950/60 border-slate-800 text-slate-400 hover:border-slate-700 hover:text-slate-200"
                      }`}
                    >
                      {b}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 3: Optional Website & Notes */}
            <div className="space-y-3">
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                  Link del Tuo Sito Attuale (facoltativo)
                </label>
                <input
                  type="text"
                  value={websiteUrl}
                  onChange={(e) => setWebsiteUrl(e.target.value)}
                  placeholder="es. www.tuosito.it (se hai già un sito)"
                  className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-800 rounded-xl text-base sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-fuchsia-500 transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                  Eventuali dettagli o obiettivi del progetto (facoltativo)
                </label>
                <textarea
                  rows={2}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="es. Vorrei rinnovare il design, aumentare le vendite e scalare le campagne..."
                  className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-800 rounded-xl text-base sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-fuchsia-500 transition-colors resize-none"
                />
              </div>
            </div>

            {/* Live Message Preview */}
            <div className="p-3.5 rounded-xl bg-slate-950/80 border border-slate-800/80">
              <div className="text-[11px] font-semibold text-slate-400 mb-1 flex items-center gap-1.5">
                <Zap className="w-3 h-3 text-amber-400" />
                <span>Messaggio pronto per l'invio immediato:</span>
              </div>
              <div className="text-xs text-slate-300 font-mono whitespace-pre-line bg-slate-900/70 p-2.5 rounded-lg border border-slate-800/50">
                {buildMessage()}
              </div>
            </div>

            {/* CTA Buttons: WhatsApp Primary, Email Secondary */}
            <div className="space-y-3 pt-1">
              <button
                type="button"
                onClick={handleSendWhatsApp}
                id="contact-send-whatsapp-btn"
                className="w-full py-4 px-6 bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-white font-bold text-sm sm:text-base rounded-xl shadow-xl shadow-emerald-600/30 flex items-center justify-center gap-2.5 transition-all active:scale-[0.98] cursor-pointer"
              >
                <MessageSquare className="w-5 h-5 text-white" />
                <span>Invia Richiesta su WhatsApp</span>
              </button>

              <button
                type="button"
                onClick={handleSendEmail}
                id="contact-send-email-btn"
                className="w-full py-3 px-5 bg-slate-800/90 hover:bg-slate-800 text-slate-200 hover:text-white border border-slate-700/80 rounded-xl font-semibold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all cursor-pointer"
              >
                <Mail className="w-4 h-4 text-fuchsia-400" />
                <span>Oppure Invia per Email</span>
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
