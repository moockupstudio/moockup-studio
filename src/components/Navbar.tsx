import React, { useState, useEffect } from "react";
import { AGENCY_INFO } from "../data/agencyData";
import { Logo } from "./Logo";
import { 
  Menu, 
  X, 
  Sparkles, 
  Layers, 
  Briefcase, 
  MessageSquare
} from "lucide-react";

interface NavbarProps {
  onOpenAudit: () => void;
  onOpenChat: () => void;
  agencyName?: string;
}

export const Navbar: React.FC<NavbarProps> = ({ 
  onOpenAudit, 
  onOpenChat, 
  agencyName
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Servizi", href: "#servizi", icon: Layers },
    { label: "Settori", href: "#settori" },
    { label: "Portfolio", href: "#portfolio", icon: Briefcase },
    { label: "Metodo", href: "#metodo" },
    { label: "FAQ", href: "#faq" },
    { label: "Contatti", href: "#contatti" },
  ];

  return (
    <header
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? "bg-[#090D16]/90 backdrop-blur-md border-b border-slate-800/80 shadow-lg shadow-black/20 py-3"
          : "bg-transparent py-4 sm:py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <a
            href="#"
            className="flex items-center group focus:outline-none py-1"
            aria-label="Moockup Studio Home"
          >
            <Logo size="md" showTagline={true} />
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="relative px-3.5 py-2 text-sm font-medium text-slate-300 hover:text-white rounded-lg hover:bg-slate-800/60 transition-colors duration-150"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            {/* Quick WhatsApp Chat Button */}
            <button
              onClick={onOpenChat}
              className="inline-flex items-center gap-2 px-3.5 py-2 text-xs font-semibold text-emerald-400 hover:text-white bg-emerald-950/40 hover:bg-emerald-900/60 border border-emerald-500/30 rounded-lg transition-all duration-200 hover:border-emerald-400/60 cursor-pointer"
              title="Scrivici su WhatsApp: +39 348 6520380"
              id="nav-whatsapp-btn"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <MessageSquare className="w-3.5 h-3.5 text-emerald-400" />
              <span>WhatsApp</span>
            </button>

            {/* Primary Conversion CTA */}
            <button
              onClick={onOpenAudit}
              id="nav-audit-cta-btn"
              className="inline-flex items-center gap-2 px-4 py-2 text-xs sm:text-sm font-semibold text-white bg-gradient-to-r from-fuchsia-600 to-pink-600 hover:from-fuchsia-500 hover:to-pink-500 rounded-lg shadow-md shadow-fuchsia-600/30 transition-all duration-200 active:scale-95 group cursor-pointer"
            >
              <Sparkles className="w-4 h-4 text-fuchsia-200 group-hover:rotate-12 transition-transform duration-200" />
              <span>Richiedi Audit Gratuito</span>
            </button>
          </div>

          {/* Mobile Menu Trigger */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800"
              aria-label="Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0B0F1C] border-b border-slate-800 px-4 pt-3 pb-6 space-y-3 shadow-2xl">
          <nav className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 text-sm font-medium text-slate-300 hover:text-white hover:bg-slate-800 rounded-lg transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>
          
          <div className="pt-3 border-t border-slate-800/80 flex flex-col gap-2.5">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenChat();
              }}
              className="w-full py-2.5 bg-emerald-950/40 text-emerald-300 border border-emerald-500/30 rounded-xl text-xs font-semibold flex items-center justify-center gap-2 hover:bg-emerald-900/50 transition-colors"
            >
              <MessageSquare className="w-4 h-4 text-emerald-400" />
              <span>Scrivici su WhatsApp</span>
            </button>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenAudit();
              }}
              className="w-full py-3 bg-gradient-to-r from-fuchsia-600 to-pink-600 text-white rounded-xl text-xs font-bold flex items-center justify-center gap-2 shadow-lg shadow-fuchsia-600/30"
            >
              <Sparkles className="w-4 h-4" />
              <span>Richiedi Audit Gratuito</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
