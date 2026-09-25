import React, { useState, useEffect, lazy, Suspense } from "react";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { ServicesGrid } from "./components/ServicesGrid";
import { WhyChooseUsSection } from "./components/WhyChooseUsSection";
import { AboutSeoSection } from "./components/AboutSeoSection";
import { Footer } from "./components/Footer";
import { SERVICE_SLUGS, SEO_SLUGS } from "./data/slugs";
import { 
  getInitialSiteContent, 
  fetchServerSiteContent,
  EditableSiteContent 
} from "./context/SiteContentContext";

// Code-split below-the-fold sections, interactive modals, chat and landing page bundles
const PortfolioSection = lazy(() => import("./components/PortfolioSection").then(m => ({ default: m.PortfolioSection })));
const ProcessSection = lazy(() => import("./components/ProcessSection").then(m => ({ default: m.ProcessSection })));
const SeoDirectorySection = lazy(() => import("./components/SeoDirectorySection").then(m => ({ default: m.SeoDirectorySection })));
const FaqSection = lazy(() => import("./components/FaqSection").then(m => ({ default: m.FaqSection })));
const ContactSection = lazy(() => import("./components/ContactSection").then(m => ({ default: m.ContactSection })));
const LiveChat = lazy(() => import("./components/LiveChat").then(m => ({ default: m.LiveChat })));
const AuditModal = lazy(() => import("./components/AuditModal").then(m => ({ default: m.AuditModal })));
const ServiceLandingContainer = lazy(() => import("./components/ServiceLandingContainer"));
const SeoLandingContainer = lazy(() => import("./components/SeoLandingContainer"));

export default function App() {
  const [siteContent, setSiteContent] = useState<EditableSiteContent>(getInitialSiteContent);
  const [isAuditModalOpen, setIsAuditModalOpen] = useState(false);
  const [auditInitialUrl, setAuditInitialUrl] = useState("");
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [selectedServiceForContact, setSelectedServiceForContact] = useState<string>("");
  const [activeLandingSlug, setActiveLandingSlug] = useState<string | null>(() => {
    // Check initial URL pathname or hash (e.g., /servizi/siti-web or /siti-web-ristoranti or #/servizi/siti-web)
    const path = window.location.pathname.replace(/^\//, "");
    const hash = window.location.hash.replace(/^#\/?/, "");
    const cleanPath = path.startsWith("servizi/") ? path.replace("servizi/", "") : path;
    const cleanHash = hash.startsWith("servizi/") ? hash.replace("servizi/", "") : hash;
    const candidate = cleanPath || cleanHash;
    if (candidate && (SERVICE_SLUGS.has(candidate) || SEO_SLUGS.has(candidate))) {
      return candidate;
    }
    return null;
  });

  // Listen to popstate (back/forward browser buttons)
  useEffect(() => {
    const handlePopState = () => {
      const path = window.location.pathname.replace(/^\//, "");
      const hash = window.location.hash.replace(/^#\/?/, "");
      const cleanPath = path.startsWith("servizi/") ? path.replace("servizi/", "") : path;
      const cleanHash = hash.startsWith("servizi/") ? hash.replace("servizi/", "") : hash;
      const candidate = cleanPath || cleanHash;
      if (candidate && (SERVICE_SLUGS.has(candidate) || SEO_SLUGS.has(candidate))) {
        setActiveLandingSlug(candidate);
      } else {
        setActiveLandingSlug(null);
      }
    };
    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  // Fetch updated content when idle so we NEVER block initial render, LCP or critical network chain
  useEffect(() => {
    let timeoutId: ReturnType<typeof setTimeout> | undefined;
    const fetchContent = () => {
      fetchServerSiteContent().then((serverData) => {
        if (serverData) {
          setSiteContent(serverData);
        }
      });
    };

    if (typeof window !== "undefined" && "requestIdleCallback" in window) {
      (window as any).requestIdleCallback(fetchContent, { timeout: 3000 });
    } else {
      timeoutId = setTimeout(fetchContent, 2000);
    }

    const handleContentUpdate = () => {
      setSiteContent(getInitialSiteContent());
    };
    window.addEventListener("moockup-content-updated", handleContentUpdate);
    return () => {
      if (timeoutId) clearTimeout(timeoutId);
      window.removeEventListener("moockup-content-updated", handleContentUpdate);
    };
  }, []);

  const handleOpenAudit = (initialUrl?: string) => {
    if (initialUrl) {
      setAuditInitialUrl(initialUrl);
    }
    setIsAuditModalOpen(true);
  };

  const handleCloseAudit = () => {
    setIsAuditModalOpen(false);
    setAuditInitialUrl("");
  };

  const handleOpenChat = () => {
    const phoneNumber = "393486520380";
    const defaultMessage = encodeURIComponent("salve ho bisogno di una consulenza");
    window.open(`https://wa.me/${phoneNumber}?text=${defaultMessage}`, "_blank", "noopener,noreferrer");
  };

  const handleToggleChat = () => {
    handleOpenChat();
  };

  const handleSelectService = (serviceName: string) => {
    setSelectedServiceForContact(serviceName);
    const element = document.getElementById("contatti");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  const handleContactProject = (projectName: string) => {
    setSelectedServiceForContact(`Progetto simile a: ${projectName}`);
    const element = document.getElementById("contatti");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  const handleOpenLanding = (slug: string) => {
    setActiveLandingSlug(slug);
    window.history.pushState({}, "", `/servizi/${slug}`);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleBackToHome = () => {
    setActiveLandingSlug(null);
    window.history.pushState({}, "", "/");
    // Restore default homepage meta
    document.title = "Realizzazione Siti Web, SEO & Google Ads | MOOCKUP";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute(
        "content",
        "Realizzazione siti web moderni a Foggia e in tutta Italia, posizionamento SEO organico su Google e gestione campagne Google Ads ad alto ROI."
      );
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // If a dedicated service landing is selected, render it
  if (activeLandingSlug && SERVICE_SLUGS.has(activeLandingSlug)) {
    return (
      <Suspense fallback={<div className="min-h-screen bg-[#090D16]" />}>
        <ServiceLandingContainer 
          slug={activeLandingSlug}
          onBack={handleBackToHome}
          onOpenAudit={() => handleOpenAudit()}
        />
        {isAuditModalOpen && (
          <AuditModal 
            isOpen={isAuditModalOpen}
            onClose={handleCloseAudit}
            initialUrl={auditInitialUrl}
          />
        )}
        <LiveChat 
          isOpen={isChatOpen}
          onToggle={handleToggleChat}
          onOpenAudit={() => handleOpenAudit()}
        />
      </Suspense>
    );
  }

  // If a dedicated sector/local SEO landing is selected, render it
  if (activeLandingSlug && SEO_SLUGS.has(activeLandingSlug)) {
    return (
      <Suspense fallback={<div className="min-h-screen bg-[#090D16]" />}>
        <SeoLandingContainer 
          slug={activeLandingSlug}
          onBack={handleBackToHome}
          onOpenAudit={() => handleOpenAudit()}
          onSelectOtherLanding={handleOpenLanding}
        />
        {isAuditModalOpen && (
          <AuditModal 
            isOpen={isAuditModalOpen}
            onClose={handleCloseAudit}
            initialUrl={auditInitialUrl}
          />
        )}
        <LiveChat 
          isOpen={isChatOpen}
          onToggle={handleToggleChat}
          onOpenAudit={() => handleOpenAudit()}
        />
      </Suspense>
    );
  }

  return (
    <div className="min-h-screen w-full max-w-full overflow-x-hidden bg-[#090D16] text-[#E2E8F0] selection:bg-fuchsia-600 selection:text-white flex flex-col font-sans relative">
      
      {/* Sticky Header Navbar */}
      <Navbar 
        onOpenAudit={() => handleOpenAudit()} 
        onOpenChat={handleOpenChat} 
        agencyName={siteContent.agencyInfo.name}
      />

      {/* Main Page Sections */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero 
          onOpenAudit={handleOpenAudit}
          badge={siteContent.heroBadge}
          titleLine1={siteContent.heroTitleLine1}
          titleHighlight={siteContent.heroTitleHighlight}
          subtitle={siteContent.heroSubtitle}
        />

        {/* User Section 1: "I Nostri Servizi" Grid with click to dedicated landing */}
        <ServicesGrid 
          onSelectService={handleSelectService}
          onOpenLanding={handleOpenLanding}
          onOpenAudit={() => handleOpenAudit()}
        />

        {/* User Section 2: "Perchè sceglierci?" 6-box Bento */}
        <WhyChooseUsSection 
          onOpenAudit={() => handleOpenAudit()}
        />

        {/* SEO Overview & Core Pillars Section: Realizzazione Siti Web, SEO & Google Ads */}
        <AboutSeoSection 
          onOpenAudit={() => handleOpenAudit()}
          onOpenChat={handleOpenChat}
        />

        {/* Below-the-fold sections loaded seamlessly without delaying LCP or FCP */}
        <Suspense fallback={null}>
          {/* Portfolio & Projects Showcase */}
          <PortfolioSection 
            projects={siteContent.portfolio}
            onOpenAudit={() => handleOpenAudit()}
            onContactProject={handleContactProject}
          />

          {/* 4-Step Process & Guarantees */}
          <ProcessSection 
            onOpenAudit={() => handleOpenAudit()}
          />

          {/* SEO Landing Directory: Settori & Località per dominare Google */}
          <SeoDirectorySection 
            onOpenLanding={handleOpenLanding}
            onOpenAudit={() => handleOpenAudit()}
          />

          {/* Interactive FAQ Section */}
          <FaqSection 
            onOpenAudit={() => handleOpenAudit()}
            onOpenChat={handleOpenChat}
          />

          {/* Contact & Lead Conversion Form */}
          <ContactSection 
            initialService={selectedServiceForContact}
            onOpenAudit={() => handleOpenAudit()}
            onOpenChat={handleOpenChat}
          />
        </Suspense>
      </main>

      {/* Footer */}
      <Footer 
        onOpenAudit={() => handleOpenAudit()}
        onOpenChat={handleOpenChat}
        onOpenLanding={handleOpenLanding}
      />

      {/* Suspended Chat and Modals loaded on demand without impacting initial paint */}
      <Suspense fallback={null}>
        <LiveChat 
          isOpen={isChatOpen}
          onToggle={handleToggleChat}
          onOpenAudit={() => handleOpenAudit()}
        />
        {isAuditModalOpen && (
          <AuditModal 
            isOpen={isAuditModalOpen}
            onClose={handleCloseAudit}
            initialUrl={auditInitialUrl}
          />
        )}
      </Suspense>
    </div>
  );
}
