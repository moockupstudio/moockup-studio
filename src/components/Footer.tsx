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
              Moockup Studio è l'agenzia specializzata in <strong>realizzazione siti web a Foggia</strong> e in tutta Italia, <strong>posizionamento SEO su Google</strong>, <strong>gestione campagne Google Ads</strong> orientate al ROI e strategie di <strong>link building</strong> autorevoli.
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
                <a
                  href="/servizi/brand-identity"
                  onClick={(e) => {
                    if (onOpenLanding) {
                      e.preventDefault();
                      onOpenLanding("brand-identity");
                    }
                  }}
                  className="hover:text-white transition-colors text-left block cursor-pointer"
                >
                  Brand Identity & Naming
                </a>
              </li>
              <li>
                <a
                  href="/servizi/siti-web"
                  onClick={(e) => {
                    if (onOpenLanding) {
                      e.preventDefault();
                      onOpenLanding("siti-web");
                    }
                  }}
                  className="hover:text-white transition-colors text-left block cursor-pointer"
                >
                  Creazione Siti Web & UI/UX Design
                </a>
              </li>
              <li>
                <a
                  href="/servizi/e-commerce"
                  onClick={(e) => {
                    if (onOpenLanding) {
                      e.preventDefault();
                      onOpenLanding("e-commerce");
                    }
                  }}
                  className="hover:text-white transition-colors text-left block cursor-pointer"
                >
                  Sviluppo E-Commerce Shopify & Custom
                </a>
              </li>
              <li>
                <a
                  href="/servizi/seo-organica"
                  onClick={(e) => {
                    if (onOpenLanding) {
                      e.preventDefault();
                      onOpenLanding("seo-organica");
                    }
                  }}
                  className="hover:text-white transition-colors text-left block cursor-pointer"
                >
                  Posizionamento SEO Organico su Google
                </a>
              </li>
              <li>
                <a
                  href="/servizi/sem"
                  onClick={(e) => {
                    if (onOpenLanding) {
                      e.preventDefault();
                      onOpenLanding("sem");
                    }
                  }}
                  className="hover:text-white transition-colors text-left block cursor-pointer"
                >
                  Campagne SEM & Google Ads
                </a>
              </li>
              <li>
                <a
                  href="/servizi/social-media"
                  onClick={(e) => {
                    if (onOpenLanding) {
                      e.preventDefault();
                      onOpenLanding("social-media");
                    }
                  }}
                  className="hover:text-white transition-colors text-left block cursor-pointer"
                >
                  Social Media Marketing & Video Ads
                </a>
              </li>
              <li>
                <a
                  href="/servizi/local-marketing"
                  onClick={(e) => {
                    if (onOpenLanding) {
                      e.preventDefault();
                      onOpenLanding("local-marketing");
                    }
                  }}
                  className="hover:text-white transition-colors text-left block cursor-pointer"
                >
                  Local Marketing & Presidio Territoriale
                </a>
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

        {/* Local & Sector SEO Links Directory (Direct Crawlability for Googlebot) */}
        <div className="mt-10 pt-8 border-t border-slate-800/80">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs">
            <div>
              <h5 className="uppercase font-bold text-slate-300 tracking-wider mb-2.5 text-[11px]">
                Aree Territoriali & Sedi
              </h5>
              <div className="flex flex-wrap gap-x-4 gap-y-2 text-slate-400">
                <a
                  href="/realizzazione-siti-web-foggia"
                  onClick={(e) => {
                    if (onOpenLanding) {
                      e.preventDefault();
                      onOpenLanding("realizzazione-siti-web-foggia");
                    }
                  }}
                  className="hover:text-fuchsia-400 transition-colors"
                >
                  Siti Web Foggia
                </a>
                <a
                  href="/realizzazione-siti-web-bari"
                  onClick={(e) => {
                    if (onOpenLanding) {
                      e.preventDefault();
                      onOpenLanding("realizzazione-siti-web-bari");
                    }
                  }}
                  className="hover:text-fuchsia-400 transition-colors"
                >
                  Web Agency Bari
                </a>
                <a
                  href="/realizzazione-siti-web-lucera"
                  onClick={(e) => {
                    if (onOpenLanding) {
                      e.preventDefault();
                      onOpenLanding("realizzazione-siti-web-lucera");
                    }
                  }}
                  className="hover:text-fuchsia-400 transition-colors"
                >
                  Siti Web Lucera
                </a>
                <a
                  href="/realizzazione-siti-web-san-severo"
                  onClick={(e) => {
                    if (onOpenLanding) {
                      e.preventDefault();
                      onOpenLanding("realizzazione-siti-web-san-severo");
                    }
                  }}
                  className="hover:text-fuchsia-400 transition-colors"
                >
                  Siti Web San Severo
                </a>
                <a
                  href="/realizzazione-siti-web-san-giovanni-rotondo"
                  onClick={(e) => {
                    if (onOpenLanding) {
                      e.preventDefault();
                      onOpenLanding("realizzazione-siti-web-san-giovanni-rotondo");
                    }
                  }}
                  className="hover:text-fuchsia-400 transition-colors"
                >
                  Siti Web San Giovanni Rotondo
                </a>
              </div>
            </div>

            <div>
              <h5 className="uppercase font-bold text-slate-300 tracking-wider mb-2.5 text-[11px]">
                Siti Web per Settore
              </h5>
              <div className="flex flex-wrap gap-x-4 gap-y-2 text-slate-400">
                <a
                  href="/siti-web-ristoranti"
                  onClick={(e) => {
                    if (onOpenLanding) {
                      e.preventDefault();
                      onOpenLanding("siti-web-ristoranti");
                    }
                  }}
                  className="hover:text-pink-400 transition-colors"
                >
                  Ristoranti & Pizzerie
                </a>
                <a
                  href="/siti-web-dentisti"
                  onClick={(e) => {
                    if (onOpenLanding) {
                      e.preventDefault();
                      onOpenLanding("siti-web-dentisti");
                    }
                  }}
                  className="hover:text-pink-400 transition-colors"
                >
                  Dentisti & Studi Medici
                </a>
                <a
                  href="/siti-web-avvocati"
                  onClick={(e) => {
                    if (onOpenLanding) {
                      e.preventDefault();
                      onOpenLanding("siti-web-avvocati");
                    }
                  }}
                  className="hover:text-pink-400 transition-colors"
                >
                  Avvocati & Studi Legali
                </a>
                <a
                  href="/siti-web-commercialisti"
                  onClick={(e) => {
                    if (onOpenLanding) {
                      e.preventDefault();
                      onOpenLanding("siti-web-commercialisti");
                    }
                  }}
                  className="hover:text-pink-400 transition-colors"
                >
                  Commercialisti & Consulenti
                </a>
                <a
                  href="/siti-web-hotel"
                  onClick={(e) => {
                    if (onOpenLanding) {
                      e.preventDefault();
                      onOpenLanding("siti-web-hotel");
                    }
                  }}
                  className="hover:text-pink-400 transition-colors"
                >
                  Hotel & Strutture Ricettive
                </a>
                <a
                  href="/siti-web-architetti"
                  onClick={(e) => {
                    if (onOpenLanding) {
                      e.preventDefault();
                      onOpenLanding("siti-web-architetti");
                    }
                  }}
                  className="hover:text-pink-400 transition-colors"
                >
                  Architetti & Interior Design
                </a>
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
