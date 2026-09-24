import React, { useState, useEffect } from "react";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { ServicesGrid } from "./components/ServicesGrid";
import { PortfolioSection } from "./components/PortfolioSection";
import { WhyChooseUsSection } from "./components/WhyChooseUsSection";
import { ProcessSection } from "./components/ProcessSection";
import { TestimonialsSection } from "./components/TestimonialsSection";
import { FaqSection } from "./components/FaqSection";
import { ContactSection } from "./components/ContactSection";
import { Footer } from "./components/Footer";
import { LiveChat } from "./components/LiveChat";
import { AuditModal } from "./components/AuditModal";
import { ServiceLandingPage } from "./components/ServiceLandingPage";
import { SERVICE_LANDINGS } from "./data/serviceLandingsData";
import { SeoLandingPageView } from "./components/SeoLandingPageView";
import { ALL_SEO_LANDINGS } from "./data/seoLandingsData";
import { SeoDirectorySection } from "./components/SeoDirectorySection";
import { AboutSeoSection } from "./components/AboutSeoSection";
import { 
  getInitialSiteContent, 
  fetchServerSiteContent,
  EditableSiteContent 
} from "./context/SiteContentContext";

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
    if (candidate && (SERVICE_LANDINGS[candidate] || ALL_SEO_LANDINGS[candidate])) {
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
      if (candidate && (SERVICE_LANDINGS[candidate] || ALL_SEO_LANDINGS[candidate])) {
        setActiveLandingSlug(candidate);
      } else {
        setActiveLandingSlug(null);
      }
    };
    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  // Fetch updated content from server on mount so all visitors see edits
  useEffect(() => {
    fetchServerSiteContent().then((serverData) => {
      if (serverData) {
        setSiteContent(serverData);
      }
    });

    const handleContentUpdate = () => {
      setSiteContent(getInitialSiteContent());
    };
    window.addEventListener("moockup-content-updated", handleContentUpdate);
    return () => window.removeEventListener("moockup-content-updated", handleContentUpdate);
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
    document.title = "Moockup Studio | Realizzazione Siti Web Foggia, SEO & Google Ads";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute(
        "content",
        "Agenzia specializzata nella realizzazione di siti web a Foggia e in tutta Italia. Posizionamento SEO su Google nei primi risultati, e-commerce veloci e campagne Google Ads orientate al ROI."
      );
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // If a dedicated service landing is selected, render it
  if (activeLandingSlug && SERVICE_LANDINGS[activeLandingSlug]) {
    const landing = SERVICE_LANDINGS[activeLandingSlug];
    return (
      <>
        <ServiceLandingPage 
          landing={landing}
          onBack={handleBackToHome}
          onOpenAudit={() => handleOpenAudit()}
        />
        <AuditModal 
          isOpen={isAuditModalOpen}
          onClose={handleCloseAudit}
          initialUrl={auditInitialUrl}
        />
        <LiveChat 
          isOpen={isChatOpen}
          onToggle={handleToggleChat}
          onOpenAudit={() => handleOpenAudit()}
        />
      </>
    );
  }

  // If a dedicated sector/local SEO landing is selected, render it
  if (activeLandingSlug && ALL_SEO_LANDINGS[activeLandingSlug]) {
    const landing = ALL_SEO_LANDINGS[activeLandingSlug];
    return (
      <>
        <SeoLandingPageView 
          landing={landing}
          onBack={handleBackToHome}
          onOpenAudit={() => handleOpenAudit()}
          onSelectOtherLanding={handleOpenLanding}
        />
        <AuditModal 
          isOpen={isAuditModalOpen}
          onClose={handleCloseAudit}
          initialUrl={auditInitialUrl}
        />
        <LiveChat 
          isOpen={isChatOpen}
          onToggle={handleToggleChat}
          onOpenAudit={() => handleOpenAudit()}
        />
      </>
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

        {/* User Section 2: "Perchè sceglierci?" 6-box Bento matching uploaded screenshot */}
        <WhyChooseUsSection 
          onOpenAudit={() => handleOpenAudit()}
        />

        {/* SEO Overview & Core Pillars Section: Realizzazione Siti Web, SEO & Google Ads */}
        <AboutSeoSection 
          onOpenAudit={() => handleOpenAudit()}
          onOpenChat={handleOpenChat}
        />

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

        {/* Testimonials & Social Proof (temporarily hidden upon request) */}
        {/* <TestimonialsSection /> */}

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
      </main>

      {/* Footer */}
      <Footer 
        onOpenAudit={() => handleOpenAudit()}
        onOpenChat={handleOpenChat}
        onOpenLanding={handleOpenLanding}
      />

      {/* Live Chat Component */}
      <LiveChat 
        isOpen={isChatOpen}
        onToggle={handleToggleChat}
        onOpenAudit={() => handleOpenAudit()}
      />

      {/* Audit Modal (Lead Magnet) */}
      <AuditModal 
        isOpen={isAuditModalOpen}
        onClose={handleCloseAudit}
        initialUrl={auditInitialUrl}
      />
    </div>
  );
}
