import React from "react";
import { AGENCY_INFO } from "../data/agencyData";
import { Logo } from "./Logo";
import { Mail, Phone, MapPin, Sparkles } from "lucide-react";

interface FooterProps {
  onOpenAudit: () => void;
  onOpenChat: () => void;
  onOpenLanding?: (slug: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ 
  onOpenAudit, 
  onOpenChat,
  onOpenLanding
}) => {
  return (
    <footer className="bg-[#060911] border-t border-slate-800 text-slate-400 pt-12 pb-4 sm:pt-16 sm:pb-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10">
          
          {/* Col 1: Brand & Descrizione */}
          <div className="space-y-4">
            <Logo size="md" showTagline={true} />
            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed max-w-sm">
              Moockup Studio è l'agenzia digitale specializzata nella creazione di siti web moderni ad altissime prestazioni, posizionamento SEO organico su Google e strategie omnicanale su tutto il territorio nazionale.
            </p>
            <div className="pt-2 text-xs text-slate-300 space-y-2 font-medium">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-fuchsia-400 shrink-0" />
                <a href={`mailto:${AGENCY_INFO.email}`} className="hover:text-white transition-colors break-all">
                  {AGENCY_INFO.email}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <a href={`tel:${AGENCY_INFO.phone.replace(/\s+/g, '')}`} className="hover:text-white transition-colors">
                  {AGENCY_INFO.phone}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-pink-400 shrink-0" />
                <span>{AGENCY_INFO.location}</span>
              </div>
            </div>
          </div>

          {/* Col 2: Servizi */}
          <div>
            <h4 className="text-xs uppercase font-bold text-white tracking-wider mb-3 sm:mb-4">
              I Nostri Servizi
            </h4>
            <ul className="space-y-2 sm:space-y-2.5 text-xs">
              <li>
                <button
                  type="button"
                  onClick={() => onOpenLanding ? onOpenLanding("brand-identity") : window.location.hash = "servizi"}
                  className="hover:text-white transition-colors text-left cursor-pointer"
                >
                  Brand Identity & Naming
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onOpenLanding ? onOpenLanding("siti-web") : window.location.hash = "servizi"}
                  className="hover:text-white transition-colors text-left cursor-pointer"
                >
                  Creazione Siti Web & UI/UX Design
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onOpenLanding ? onOpenLanding("e-commerce") : window.location.hash = "servizi"}
                  className="hover:text-white transition-colors text-left cursor-pointer"
                >
                  Sviluppo E-Commerce Shopify & Custom
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onOpenLanding ? onOpenLanding("seo-organica") : window.location.hash = "servizi"}
                  className="hover:text-white transition-colors text-left cursor-pointer"
                >
                  Posizionamento SEO Organico su Google
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onOpenLanding ? onOpenLanding("sem") : window.location.hash = "servizi"}
                  className="hover:text-white transition-colors text-left cursor-pointer"
                >
                  Campagne SEM & Google Ads
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onOpenLanding ? onOpenLanding("social-media") : window.location.hash = "servizi"}
                  className="hover:text-white transition-colors text-left cursor-pointer"
                >
                  Social Media Marketing & Video Ads
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onOpenLanding ? onOpenLanding("local-marketing") : window.location.hash = "servizi"}
                  className="hover:text-white transition-colors text-left cursor-pointer"
                >
                  Local Marketing & Presidio Territoriale
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Risorse & Informazioni */}
          <div>
            <h4 className="text-xs uppercase font-bold text-white tracking-wider mb-3 sm:mb-4">
              Risorse & Navigazione
            </h4>
            <ul className="space-y-2 sm:space-y-2.5 text-xs">
              <li>
                <a href="#portfolio" className="hover:text-white transition-colors">
                  Portfolio Progetti Realizzati
                </a>
              </li>
              <li>
                <a href="#perche-noi" className="hover:text-white transition-colors">
                  Perché Sceglierci
                </a>
              </li>
              <li>
                <a href="#processo" className="hover:text-white transition-colors">
                  Il Nostro Metodo in 4 Step
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-white transition-colors">
                  Domande Frequenti (FAQ)
                </a>
              </li>
              <li>
                <a href="#contatti" className="hover:text-white transition-colors">
                  Richiedi Preventivo Gratuito
                </a>
              </li>
              <li>
                <button onClick={onOpenChat} className="hover:text-emerald-400 transition-colors text-left text-emerald-400 font-semibold cursor-pointer">
                  WhatsApp (+39 348 6520380)
                </button>
              </li>
              <li>
                <button onClick={onOpenAudit} className="hover:text-white transition-colors text-left text-fuchsia-400 font-semibold cursor-pointer">
                  Richiedi Audit Gratuito del Sito
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Garanzie & Standard */}
          <div>
            <h4 className="text-xs uppercase font-bold text-white tracking-wider mb-3 sm:mb-4">
              Garanzie & Standard
            </h4>
            <div className="space-y-2.5 sm:space-y-3 text-xs">
              <div className="p-3 rounded-lg bg-slate-900 border border-slate-800">
                <div className="font-semibold text-white">Google Ads & SEO</div>
                <div className="text-[11px] text-slate-400">Tracciamenti avanzati e posizionamento organico</div>
              </div>
              <div className="p-3 rounded-lg bg-slate-900 border border-slate-800">
                <div className="font-semibold text-white">Velocità & Mobile-First</div>
                <div className="text-[11px] text-slate-400">Core Web Vitals performanti e caricamento istantaneo</div>
              </div>
              <div className="p-3 rounded-lg bg-slate-900 border border-slate-800">
                <div className="font-semibold text-white">100% Proprietà Cliente</div>
                <div className="text-[11px] text-slate-400">Nessun vincolo, codice di tua proprietà</div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom copyright - Mobile friendly & cleanly wrapped */}
        <div className="mt-8 sm:mt-10 pt-5 sm:pt-6 border-t border-slate-800/80 flex flex-col items-center sm:flex-row sm:justify-between gap-3 text-xs text-slate-400 text-center sm:text-left">
          <div className="leading-relaxed">
            <span>© 2026 MOOCKUP STUDIO | P.IVA 04242600718</span>
            <span className="block sm:inline sm:before:content-['\00a0-\00a0'] text-slate-500 sm:text-slate-400">
              Tutti i diritti riservati.
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
