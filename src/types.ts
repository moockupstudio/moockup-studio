export interface ProjectItem {
  id: string;
  title: string;
  client: string;
  category: "all" | "siti-web" | "ecommerce" | "branding" | "seo" | "marketing" | "print" | "b2b" | "google-ads" | "web-app" | "brand";
  categoryLabel: string;
  heroImage: string;
  url?: string;
  services: string[];
  tags: string[];
  summary: string;
  challenge?: string;
  solution?: string;
  results?: string[];
  techStack?: string[];
  year?: string;
}

export interface CaseStudy {
  id: string;
  slug: string;
  title: string;
  category: "Google Ads" | "SEO" | "E-Commerce" | "Lead Generation" | "Web Design";
  client: string;
  readTime: string;
  publishedDate: string;
  heroImage: string;
  excerpt: string;
  metrics: {
    metric1: { label: string; value: string };
    metric2: { label: string; value: string };
    metric3: { label: string; value: string };
  };
  problem: string;
  strategy: {
    title: string;
    points: string[];
  }[];
  beforeAfter: {
    metric: string;
    before: string;
    after: string;
  }[];
  keyTakeaway: string;
  clientQuote?: {
    text: string;
    author: string;
    role: string;
  };
}

export interface ServiceDetail {
  id: string;
  icon: string;
  title: string;
  subtitle: string;
  description: string;
  highlights: string[];
  features: string[];
  deliverables: string[];
  metricsTarget: string;
  badge?: string;
}

export interface Testimonial {
  id: string;
  author: string;
  role: string;
  company: string;
  avatar: string;
  rating: number;
  content: string;
  highlightMetric: string;
  verifiedProject: string;
}

export interface FAQItem {
  question: string;
  answer: string;
  category: "preventivi" | "google-ads" | "seo" | "tempi";
}

export interface ChatMessage {
  id: string;
  sender: "user" | "bot";
  text: string;
  timestamp: string;
  actionSuggestions?: string[];
}
