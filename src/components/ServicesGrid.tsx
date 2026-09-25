import React from "react";
import ecommerceDashboardImg from "../assets/images/ecommerce_dashboard_1789582311263.jpg";
import googleSearchImg from "../assets/images/google_search_results_1789582298704.jpg";
import tshirtLogoImg from "../assets/images/tshirt_mockup_logo_1789582284814.jpg";
import billboardRoadsideImg from "../assets/images/billboard_roadside_ad_1789582538387.jpg";
import { 
  Palette, 
  Globe, 
  ShoppingBag, 
  Target,
  TrendingUp,
  BookOpen,
  Gift,
  MapPin, 
  Share2, 
  Newspaper, 
  Mail, 
  Tv, 
  ArrowRight, 
  Sparkles 
} from "lucide-react";

interface ServicesGridProps {
  onSelectService?: (serviceTitle: string) => void;
  onOpenLanding?: (serviceSlug: string) => void;
  onOpenAudit?: () => void;
}

export const ServicesGrid: React.FC<ServicesGridProps> = ({ 
  onSelectService, 
  onOpenLanding,
  onOpenAudit 
}) => {
  const services = [
    {
      id: "brand-identity",
      title: "Brand Identity",
      subtitle: "Naming, Logo & Immagine Coordinata",
      image: "https://images.unsplash.com/photo-1633533452148-a9657d2c9a5f?auto=format&fit=crop&w=800&q=80",
      icon: Palette,
      tag: "Identità Visiva",
    },
    {
      id: "siti-web",
      title: "Siti Web",
      subtitle: "Design Sartoriale & Velocità Mobile-First",
      image: "https://images.unsplash.com/photo-1519222970733-f546218fa6d7?auto=format&fit=crop&w=800&q=80",
      icon: Globe,
      tag: "Web Design",
    },
    {
      id: "e-commerce",
      title: "E-Commerce",
      subtitle: "Shopify & Custom per Vendite Online",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
      icon: ShoppingBag,
      tag: "Vendite Online",
    },
    {
      id: "sem",
      title: "SEM & Google Ads",
      subtitle: "Campagne Pay-Per-Click & Google Shopping",
      image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?auto=format&fit=crop&w=800&q=80",
      icon: Target,
      tag: "Google Ads & PPC",
    },
    {
      id: "seo-organica",
      title: "SEO Organica",
      subtitle: "Posizionamento in 1ª Pagina su Google",
      image: "https://images.unsplash.com/photo-1616499452581-cc7f8e3dd3c9?auto=format&fit=crop&w=800&q=80",
      icon: TrendingUp,
      tag: "SEO & Google Search",
    },
    {
      id: "blog-content",
      title: "Blog & Content",
      subtitle: "Piani Editoriali & Articoli SEO Persuasivi",
      image: "https://images.unsplash.com/photo-1522199755839-a2bacb67c546?auto=format&fit=crop&w=800&q=80",
      icon: BookOpen,
      tag: "Content Marketing",
    },
    {
      id: "gadget-merchandising",
      title: "Gadget & Merch",
      subtitle: "Merchandising, Packaging & Abbigliamento",
      image: "https://images.unsplash.com/photo-1668959813575-8e68053e2fcc?auto=format&fit=crop&w=800&q=80",
      icon: Gift,
      tag: "Materiale Promozionale",
    },
    {
      id: "local-marketing",
      title: "Local Marketing",
      subtitle: "Cartellonistica, Pensiline & Presidio Territoriale",
      image: "https://images.unsplash.com/photo-1585306235015-334715af0c2d?auto=format&fit=crop&w=800&q=80",
      icon: MapPin,
      tag: "Outdoor & Visibilità Locale",
    },
    {
      id: "social-media-marketing",
      title: "Social Media",
      subtitle: "Meta Ads, TikTok & Crescita Community",
      image: "https://images.unsplash.com/photo-1645849017333-abc9c24522b2?auto=format&fit=crop&w=800&q=80",
      icon: Share2,
      tag: "Social Growth",
    },
    {
      id: "digital-pr",
      title: "Digital PR",
      subtitle: "Articoli su Grandi Testate & Link Building",
      image: "https://images.unsplash.com/photo-1584714268709-c3dd9c92b378?auto=format&fit=crop&w=800&q=80",
      icon: Newspaper,
      tag: "Autorevolezza",
    },
    {
      id: "newsletter-edm",
      title: "Newsletter EDM",
      subtitle: "Email Automation & Fidelizzazione Clienti",
      image: "https://images.unsplash.com/photo-1583142305729-5cb119ce5d3e?auto=format&fit=crop&w=800&q=80",
      icon: Mail,
      tag: "Direct Marketing",
    },
    {
      id: "tv-ads",
      title: "TV Ads & Video",
      subtitle: "Spot Pubblicitari & Video Advertising",
      image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=800&q=80",
      icon: Tv,
      tag: "Broadcasting",
    },
  ];

  return (
    <section id="servizi" className="py-24 bg-[#090D16] relative border-t border-slate-800/70 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-gradient-to-r from-fuchsia-600/10 via-pink-600/10 to-purple-600/10 blur-[130px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-pink-500/10 border border-pink-500/20 text-pink-400 text-xs font-bold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Soluzioni a 360° per la Tua Crescita</span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight mb-4">
            I Nostri{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 via-pink-400 to-rose-400">
              Servizi
            </span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Dalla brand identity alla SEO organica, dalle campagne Google Ads e Social fino a gadget aziendali, e-commerce e video marketing.
          </p>
        </div>

        {/* 12 Services Grid (4x3 on desktop, 6x2 on tablet/mobile: perfectly aligned with no missing slots) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {services.map((service, index) => {
            const Icon = service.icon;
            const isPriority = index < 2;

            return (
              <a
                key={service.id}
                href={`/servizi/${service.id}`}
                onClick={(e) => {
                  if (onOpenLanding) {
                    e.preventDefault();
                    onOpenLanding(service.id);
                  } else if (onSelectService) {
                    e.preventDefault();
                    onSelectService(service.title);
                  }
                }}
                className="group relative w-full aspect-[4/5] sm:aspect-[3/4] min-h-[320px] rounded-2xl overflow-hidden border border-slate-800/90 hover:border-pink-500/60 shadow-xl transition-all duration-500 hover:-translate-y-1.5 cursor-pointer flex flex-col justify-end bg-slate-950 block text-left"
              >
                {/* Background Photography with Lazy Loading & Asynchronous Decoding */}
                <img
                  src={service.image}
                  alt={service.title}
                  width={600}
                  height={800}
                  loading={isPriority ? "eager" : "lazy"}
                  decoding="async"
                  {...(isPriority ? { fetchPriority: "high" as const } : {})}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out brightness-[0.85] group-hover:brightness-95"
                />

                {/* Dark & Magenta Vignette Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#090D16] via-[#090D16]/50 to-transparent opacity-90 group-hover:opacity-80 transition-opacity" />
                <div className="absolute inset-0 bg-fuchsia-950/20 mix-blend-multiply pointer-events-none" />

                {/* Top Corner Icon & Tag */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none">
                  <span className="px-2.5 py-1 rounded-lg text-[11px] font-bold bg-black/70 text-pink-300 border border-pink-500/30 backdrop-blur-md">
                    {service.tag}
                  </span>
                  <div className="w-9 h-9 rounded-xl bg-black/60 border border-white/10 text-white flex items-center justify-center backdrop-blur-md group-hover:bg-pink-600 group-hover:border-pink-500 transition-colors">
                    <Icon className="w-4 h-4 text-pink-300 group-hover:text-white transition-colors" />
                  </div>
                </div>

                {/* Prominent Pink Badge on Center/Bottom (Matches user visual screenshot) */}
                <div className="relative p-5 sm:p-6 z-10">
                  <div className="inline-block w-full text-center py-2.5 px-4 rounded-xl bg-gradient-to-r from-pink-500 to-fuchsia-500 text-white font-display font-extrabold text-base sm:text-lg tracking-wide shadow-lg shadow-pink-500/40 group-hover:from-pink-400 group-hover:to-fuchsia-400 transition-all mb-2.5">
                    {service.title}
                  </div>

                  <p 
                    title={service.subtitle}
                    className="text-xs sm:text-sm text-slate-200 text-center truncate whitespace-nowrap drop-shadow-md block"
                  >
                    {service.subtitle}
                  </p>

                  <div className="mt-3 flex items-center justify-center gap-1 text-xs font-bold text-pink-300 opacity-0 group-hover:opacity-100 transition-all translate-y-2 group-hover:translate-y-0">
                    <span>Richiedi Consulenza</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              </a>
            );
          })}
        </div>

        {/* Bottom Call to Action */}
        <div className="mt-10 sm:mt-14 text-center px-2">
          <button
            onClick={onOpenAudit}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-3 rounded-xl bg-slate-900/80 hover:bg-slate-900 border border-slate-700/80 hover:border-pink-500/50 text-white text-xs sm:text-sm font-semibold transition-all hover:shadow-lg hover:shadow-pink-500/10 active:scale-95"
          >
            <Sparkles className="w-4 h-4 text-pink-400 shrink-0" />
            <span>Hai un progetto speciale? Richiedi un'analisi su misura</span>
            <ArrowRight className="w-4 h-4 text-pink-400 shrink-0" />
          </button>
        </div>
      </div>
    </section>
  );
};
