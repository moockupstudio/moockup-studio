import React, { useState } from "react";
import { EditableSiteContent, saveSiteContent, resetSiteContent } from "../context/SiteContentContext";
import { ProjectItem } from "../types";
import { optimizeImageFile } from "../utils/imageOptimizer";
import { 
  X, 
  Save, 
  RotateCcw, 
  Plus, 
  Trash2, 
  Upload, 
  Check, 
  Layers, 
  Edit3, 
  Eye, 
  Sparkles,
  Phone,
  Mail,
  MapPin,
  Type,
  HelpCircle,
  Briefcase
} from "lucide-react";

interface VisualEditorModalProps {
  isOpen: boolean;
  onClose: () => void;
  siteContent: EditableSiteContent;
  onContentUpdated: (newContent: EditableSiteContent) => void;
}

export const VisualEditorModal: React.FC<VisualEditorModalProps> = ({
  isOpen,
  onClose,
  siteContent,
  onContentUpdated,
}) => {
  const [activeTab, setActiveTab] = useState<"projects" | "hero" | "agency" | "services" | "faq">("projects");
  const [formData, setFormData] = useState<EditableSiteContent>(JSON.parse(JSON.stringify(siteContent)));
  const [selectedProjectId, setSelectedProjectId] = useState<string>(formData.portfolio[0]?.id || "");
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  if (!isOpen) return null;

  const showNotification = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3000);
  };

  const handleSaveAll = async () => {
    await saveSiteContent(formData);
    onContentUpdated(formData);
    showNotification("Modifiche salvate con successo per tutti gli utenti!");
  };

  const handleReset = () => {
    if (confirm("Sei sicuro di voler ripristinare tutti i testi e progetti ai valori originali di fabbrica?")) {
      resetSiteContent();
      window.location.reload();
    }
  };

  // Portfolio actions
  const currentProject = formData.portfolio.find((p) => p.id === selectedProjectId) || formData.portfolio[0];

  const handleUpdateCurrentProject = (field: keyof ProjectItem, value: any) => {
    setFormData((prev) => ({
      ...prev,
      portfolio: prev.portfolio.map((p) =>
        p.id === currentProject?.id ? { ...p, [field]: value } : p
      ),
    }));
  };

  const handleProjectImageUpload = async (e: React.ChangeEvent<HTMLInputElement>, projectId: string) => {
    const file = e.target.files?.[0];
    if (!file) return;

    try {
      showNotification("Compressione e ottimizzazione immagine in corso...");
      const optimizedBase64 = await optimizeImageFile(file, 1280, 720, 0.82);
      setFormData((prev) => ({
        ...prev,
        portfolio: prev.portfolio.map((p) =>
          p.id === projectId ? { ...p, heroImage: optimizedBase64 } : p
        ),
      }));
      showNotification("Immagine ottimizzata e caricata con successo!");
    } catch (err) {
      console.error("Errore durante il caricamento immagine", err);
      showNotification("Errore nel caricamento dell'immagine.");
    }
  };

  const handleAddNewProject = () => {
    const newId = `project-${Date.now()}`;
    const newProject: ProjectItem = {
      id: newId,
      title: "Nuovo Progetto",
      client: "Nome Cliente",
      category: "seo",
      categoryLabel: "Sito Web & Marketing",
      heroImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1000&q=80",
      url: "https://www.nuovosito.it",
      services: ["Sito Web", "SEO", "UI/UX"],
      tags: ["Modern", "Responsive", "SEO"],
      summary: "Descrizione dettagliata delle attività svolte per questo cliente.",
      challenge: "Esigenza del cliente e obiettivi iniziali.",
      solution: "Soluzione e implementazione creata su misura.",
      results: ["Aumento del traffico", "Nuovo look moderno"],
      techStack: ["React", "SEO", "Tailwind CSS"],
    };

    setFormData((prev) => ({
      ...prev,
      portfolio: [newProject, ...prev.portfolio],
    }));
    setSelectedProjectId(newId);
    showNotification("Nuovo progetto aggiunto! Ora puoi modificarne i dettagli.");
  };

  const handleDeleteProject = (id: string) => {
    if (formData.portfolio.length <= 1) {
      alert("Devi mantenere almeno un progetto nel portfolio.");
      return;
    }
    if (confirm("Vuoi eliminare questo progetto dal portfolio?")) {
      const remaining = formData.portfolio.filter((p) => p.id !== id);
      setFormData((prev) => ({
        ...prev,
        portfolio: remaining,
      }));
      setSelectedProjectId(remaining[0].id);
      showNotification("Progetto rimosso dal portfolio.");
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-5xl bg-[#090D16] border border-slate-700/80 rounded-2xl shadow-2xl overflow-hidden my-4 max-h-[95vh] flex flex-col">
        
        {/* Toast */}
        {toastMessage && (
          <div className="absolute top-4 right-4 z-50 bg-emerald-500 text-white font-bold text-xs sm:text-sm px-4 py-2.5 rounded-xl shadow-2xl flex items-center gap-2 animate-fade-in">
            <Check className="w-4 h-4" />
            <span>{toastMessage}</span>
          </div>
        )}

        {/* Top Header */}
        <div className="flex items-center justify-between p-4 sm:p-6 border-b border-slate-800 bg-[#0B0F1C]">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-gradient-to-tr from-fuchsia-600 to-pink-600 text-white shadow-lg">
              <Edit3 className="w-5 h-5" />
            </div>
            <div>
              <h2 className="font-display font-bold text-lg sm:text-xl text-white">
                Pannello Modifica Contenuti & Testi
              </h2>
              <p className="text-xs text-slate-400">
                Personalizza ogni frase, immagine e scheda del sito in tempo reale
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleSaveAll}
              className="px-4 py-2 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-bold text-xs sm:text-sm rounded-xl shadow-lg shadow-emerald-600/30 flex items-center gap-1.5 transition-all"
            >
              <Save className="w-4 h-4" />
              <span>Salva Modifiche</span>
            </button>

            <button
              onClick={onClose}
              className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
              aria-label="Chiudi editor"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="flex items-center gap-1 px-4 sm:px-6 border-b border-slate-800 bg-[#090D16] overflow-x-auto scrollbar-none">
          <button
            onClick={() => setActiveTab("projects")}
            className={`px-4 py-3 text-xs sm:text-sm font-semibold border-b-2 transition-all whitespace-nowrap flex items-center gap-2 ${
              activeTab === "projects"
                ? "border-fuchsia-500 text-fuchsia-400 bg-fuchsia-500/5"
                : "border-transparent text-slate-400 hover:text-white"
            }`}
          >
            <Briefcase className="w-4 h-4" />
            <span>Progetti Realizzati ({formData.portfolio.length})</span>
          </button>

          <button
            onClick={() => setActiveTab("hero")}
            className={`px-4 py-3 text-xs sm:text-sm font-semibold border-b-2 transition-all whitespace-nowrap flex items-center gap-2 ${
              activeTab === "hero"
                ? "border-fuchsia-500 text-fuchsia-400 bg-fuchsia-500/5"
                : "border-transparent text-slate-400 hover:text-white"
            }`}
          >
            <Type className="w-4 h-4" />
            <span>Titoli & Hero Iniziale</span>
          </button>

          <button
            onClick={() => setActiveTab("agency")}
            className={`px-4 py-3 text-xs sm:text-sm font-semibold border-b-2 transition-all whitespace-nowrap flex items-center gap-2 ${
              activeTab === "agency"
                ? "border-fuchsia-500 text-fuchsia-400 bg-fuchsia-500/5"
                : "border-transparent text-slate-400 hover:text-white"
            }`}
          >
            <MapPin className="w-4 h-4" />
            <span>Dati Agenzia & Contatti</span>
          </button>

          <button
            onClick={() => setActiveTab("faq")}
            className={`px-4 py-3 text-xs sm:text-sm font-semibold border-b-2 transition-all whitespace-nowrap flex items-center gap-2 ${
              activeTab === "faq"
                ? "border-fuchsia-500 text-fuchsia-400 bg-fuchsia-500/5"
                : "border-transparent text-slate-400 hover:text-white"
            }`}
          >
            <HelpCircle className="w-4 h-4" />
            <span>Domande Frequenti (FAQ)</span>
          </button>
        </div>

        {/* Tab Content */}
        <div className="p-4 sm:p-6 flex-1 overflow-y-auto">
          
          {/* 1. PROJECTS TAB */}
          {activeTab === "projects" && (
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
              
              {/* Project list selector */}
              <div className="md:col-span-4 bg-slate-950/80 p-3 rounded-xl border border-slate-800 max-h-[60vh] overflow-y-auto space-y-1.5">
                <div className="flex items-center justify-between pb-2 mb-2 border-b border-slate-800">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    Seleziona Progetto
                  </span>
                  <button
                    onClick={handleAddNewProject}
                    className="p-1.5 rounded-lg bg-fuchsia-600/20 text-fuchsia-400 hover:bg-fuchsia-600 hover:text-white text-xs font-bold flex items-center gap-1 transition-colors"
                    title="Aggiungi nuovo progetto"
                  >
                    <Plus className="w-3.5 h-3.5" />
                    <span>Nuovo</span>
                  </button>
                </div>

                {formData.portfolio.map((p) => (
                  <button
                    key={p.id}
                    onClick={() => setSelectedProjectId(p.id)}
                    className={`w-full text-left p-2.5 rounded-lg text-xs transition-all flex items-center justify-between ${
                      p.id === currentProject?.id
                        ? "bg-fuchsia-600/20 border border-fuchsia-500 text-white font-bold"
                        : "bg-slate-900/50 hover:bg-slate-800 text-slate-300 border border-transparent"
                    }`}
                  >
                    <div className="truncate pr-2">
                      <div className="font-semibold text-white truncate">{p.title}</div>
                      <div className="text-[10px] text-slate-400 truncate">{p.client}</div>
                    </div>
                    {p.id === currentProject?.id && (
                      <span className="w-2 h-2 rounded-full bg-fuchsia-400 shrink-0" />
                    )}
                  </button>
                ))}
              </div>

              {/* Project Edit Form */}
              {currentProject && (
                <div className="md:col-span-8 bg-slate-950/60 p-5 rounded-xl border border-slate-800 space-y-5">
                  <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                    <h3 className="font-display font-bold text-base text-white">
                      Modifica: <span className="text-fuchsia-400">{currentProject.title}</span>
                    </h3>
                    <button
                      onClick={() => handleDeleteProject(currentProject.id)}
                      className="px-2.5 py-1 rounded-lg text-xs font-semibold bg-red-500/10 text-red-400 hover:bg-red-500 hover:text-white border border-red-500/20 flex items-center gap-1 transition-colors"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                      <span>Elimina</span>
                    </button>
                  </div>

                  {/* Title and Client */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1">
                        Nome Progetto / Brand
                      </label>
                      <input
                        type="text"
                        value={currentProject.title}
                        onChange={(e) => handleUpdateCurrentProject("title", e.target.value)}
                        className="w-full px-3 py-2 bg-slate-900 border border-slate-700 rounded-lg text-xs text-white focus:border-fuchsia-500 focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1">
                        Ragione Sociale / Cliente
                      </label>
                      <input
                        type="text"
                        value={currentProject.client}
                        onChange={(e) => handleUpdateCurrentProject("client", e.target.value)}
                        className="w-full px-3 py-2 bg-slate-900 border border-slate-700 rounded-lg text-xs text-white focus:border-fuchsia-500 focus:outline-none"
                      />
                    </div>
                  </div>

                  {/* Category & Website URL */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1">
                        Etichetta Settore (es: Food, Automotive, B2B)
                      </label>
                      <input
                        type="text"
                        value={currentProject.categoryLabel}
                        onChange={(e) => handleUpdateCurrentProject("categoryLabel", e.target.value)}
                        className="w-full px-3 py-2 bg-slate-900 border border-slate-700 rounded-lg text-xs text-white focus:border-fuchsia-500 focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1">
                        Link al Sito Web (URL)
                      </label>
                      <input
                        type="text"
                        value={currentProject.url || ""}
                        onChange={(e) => handleUpdateCurrentProject("url", e.target.value)}
                        placeholder="https://www.tuosito.it"
                        className="w-full px-3 py-2 bg-slate-900 border border-slate-700 rounded-lg text-xs text-white focus:border-fuchsia-500 focus:outline-none"
                      />
                    </div>
                  </div>

                  {/* Image and Upload */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                      Immagine di Copertina / Mockup
                    </label>
                    <div className="flex flex-col sm:flex-row items-center gap-4 p-3 bg-slate-900/90 rounded-xl border border-slate-800">
                      <div className="w-28 h-20 rounded-lg overflow-hidden shrink-0 border border-slate-700">
                        <img
                          src={currentProject.heroImage}
                          alt={currentProject.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-1 space-y-2 w-full">
                        <input
                          type="text"
                          value={currentProject.heroImage}
                          onChange={(e) => handleUpdateCurrentProject("heroImage", e.target.value)}
                          placeholder="Inserisci URL immagine esterna oppure carica un file dal computer..."
                          className="w-full px-3 py-2 bg-slate-950 border border-slate-800 rounded-lg text-xs text-slate-300 focus:border-fuchsia-500 focus:outline-none"
                        />
                        <label className="inline-flex items-center gap-2 px-3 py-1.5 bg-fuchsia-600/20 hover:bg-fuchsia-600 text-fuchsia-300 hover:text-white border border-fuchsia-500/30 rounded-lg text-xs font-bold cursor-pointer transition-colors">
                          <Upload className="w-3.5 h-3.5" />
                          <span>Carica Immagine dal PC</span>
                          <input
                            type="file"
                            accept="image/*"
                            className="hidden"
                            onChange={(e) => handleProjectImageUpload(e, currentProject.id)}
                          />
                        </label>
                      </div>
                    </div>
                  </div>

                  {/* Summary / Description */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">
                      Descrizione / Riassunto del Progetto
                    </label>
                    <textarea
                      rows={3}
                      value={currentProject.summary}
                      onChange={(e) => handleUpdateCurrentProject("summary", e.target.value)}
                      className="w-full px-3 py-2 bg-slate-900 border border-slate-700 rounded-lg text-xs text-white focus:border-fuchsia-500 focus:outline-none leading-relaxed"
                    />
                  </div>

                  {/* Services tags */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">
                      Servizi svolti (separati da virgola, es: Sito Web, SEO, Gadget, CRO)
                    </label>
                    <input
                      type="text"
                      value={currentProject.services.join(", ")}
                      onChange={(e) => {
                        const splitted = e.target.value.split(",").map((s) => s.trim()).filter(Boolean);
                        handleUpdateCurrentProject("services", splitted);
                      }}
                      className="w-full px-3 py-2 bg-slate-900 border border-slate-700 rounded-lg text-xs text-white focus:border-fuchsia-500 focus:outline-none"
                    />
                  </div>

                  {/* Challenge & Solution */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1">
                        La Sfida del Cliente
                      </label>
                      <textarea
                        rows={2}
                        value={currentProject.challenge || ""}
                        onChange={(e) => handleUpdateCurrentProject("challenge", e.target.value)}
                        className="w-full px-3 py-2 bg-slate-900 border border-slate-700 rounded-lg text-xs text-white focus:border-fuchsia-500 focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1">
                        La Nostra Soluzione
                      </label>
                      <textarea
                        rows={2}
                        value={currentProject.solution || ""}
                        onChange={(e) => handleUpdateCurrentProject("solution", e.target.value)}
                        className="w-full px-3 py-2 bg-slate-900 border border-slate-700 rounded-lg text-xs text-white focus:border-fuchsia-500 focus:outline-none"
                      />
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* 2. HERO & TITLES TAB */}
          {activeTab === "hero" && (
            <div className="space-y-6 max-w-2xl bg-slate-950/60 p-6 rounded-xl border border-slate-800">
              <h3 className="font-display font-bold text-base text-white border-b border-slate-800 pb-3">
                Testi dell'Intestazione (Hero Principale)
              </h3>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  Badge Superiore
                </label>
                <input
                  type="text"
                  value={formData.heroBadge}
                  onChange={(e) => setFormData({ ...formData, heroBadge: e.target.value })}
                  className="w-full px-3 py-2.5 bg-slate-900 border border-slate-700 rounded-lg text-xs text-white focus:border-fuchsia-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  Titolo Principale - Prima Riga
                </label>
                <input
                  type="text"
                  value={formData.heroTitleLine1}
                  onChange={(e) => setFormData({ ...formData, heroTitleLine1: e.target.value })}
                  className="w-full px-3 py-2.5 bg-slate-900 border border-slate-700 rounded-lg text-xs text-white focus:border-fuchsia-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  Titolo Principale - Riga Evidenziata (Gradiente Rosa/Fucsia)
                </label>
                <input
                  type="text"
                  value={formData.heroTitleHighlight}
                  onChange={(e) => setFormData({ ...formData, heroTitleHighlight: e.target.value })}
                  className="w-full px-3 py-2.5 bg-slate-900 border border-slate-700 rounded-lg text-xs text-white focus:border-fuchsia-500 focus:outline-none font-bold"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  Sottotitolo / Paragrafo Esplicativo
                </label>
                <textarea
                  rows={3}
                  value={formData.heroSubtitle}
                  onChange={(e) => setFormData({ ...formData, heroSubtitle: e.target.value })}
                  className="w-full px-3 py-2.5 bg-slate-900 border border-slate-700 rounded-lg text-xs text-white focus:border-fuchsia-500 focus:outline-none leading-relaxed"
                />
              </div>
            </div>
          )}

          {/* 3. AGENCY & CONTACTS TAB */}
          {activeTab === "agency" && (
            <div className="space-y-6 max-w-2xl bg-slate-950/60 p-6 rounded-xl border border-slate-800">
              <h3 className="font-display font-bold text-base text-white border-b border-slate-800 pb-3">
                Informazioni di Contatto & Sede
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Nome Agenzia
                  </label>
                  <input
                    type="text"
                    value={formData.agencyInfo.name}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        agencyInfo: { ...formData.agencyInfo, name: e.target.value },
                      })
                    }
                    className="w-full px-3 py-2 bg-slate-900 border border-slate-700 rounded-lg text-xs text-white focus:border-fuchsia-500 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Slogan / Tagline
                  </label>
                  <input
                    type="text"
                    value={formData.agencyInfo.tagline}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        agencyInfo: { ...formData.agencyInfo, tagline: e.target.value },
                      })
                    }
                    className="w-full px-3 py-2 bg-slate-900 border border-slate-700 rounded-lg text-xs text-white focus:border-fuchsia-500 focus:outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Email Ufficiale
                  </label>
                  <input
                    type="email"
                    value={formData.agencyInfo.email}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        agencyInfo: { ...formData.agencyInfo, email: e.target.value },
                      })
                    }
                    className="w-full px-3 py-2 bg-slate-900 border border-slate-700 rounded-lg text-xs text-white focus:border-fuchsia-500 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Telefono / WhatsApp
                  </label>
                  <input
                    type="text"
                    value={formData.agencyInfo.phone}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        agencyInfo: { ...formData.agencyInfo, phone: e.target.value },
                      })
                    }
                    className="w-full px-3 py-2 bg-slate-900 border border-slate-700 rounded-lg text-xs text-white focus:border-fuchsia-500 focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  Città & Area Geografica
                </label>
                <input
                  type="text"
                  value={formData.agencyInfo.location}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      agencyInfo: { ...formData.agencyInfo, location: e.target.value },
                    })
                  }
                  className="w-full px-3 py-2 bg-slate-900 border border-slate-700 rounded-lg text-xs text-white focus:border-fuchsia-500 focus:outline-none"
                />
              </div>
            </div>
          )}

          {/* 4. FAQ TAB */}
          {activeTab === "faq" && (
            <div className="space-y-4 max-w-3xl">
              <div className="flex items-center justify-between pb-2 border-b border-slate-800">
                <h3 className="font-display font-bold text-base text-white">
                  Modifica Domande e Risposte Frequenti (FAQ)
                </h3>
              </div>

              {formData.faqs.map((faq, index) => (
                <div key={index} className="p-4 bg-slate-950/60 rounded-xl border border-slate-800 space-y-3">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">
                      Domanda #{index + 1}
                    </label>
                    <input
                      type="text"
                      value={faq.question}
                      onChange={(e) => {
                        const updated = [...formData.faqs];
                        updated[index].question = e.target.value;
                        setFormData({ ...formData, faqs: updated });
                      }}
                      className="w-full px-3 py-2 bg-slate-900 border border-slate-700 rounded-lg text-xs text-white focus:border-fuchsia-500 focus:outline-none font-medium"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">
                      Risposta
                    </label>
                    <textarea
                      rows={3}
                      value={faq.answer}
                      onChange={(e) => {
                        const updated = [...formData.faqs];
                        updated[index].answer = e.target.value;
                        setFormData({ ...formData, faqs: updated });
                      }}
                      className="w-full px-3 py-2 bg-slate-900 border border-slate-700 rounded-lg text-xs text-white focus:border-fuchsia-500 focus:outline-none leading-relaxed"
                    />
                  </div>
                </div>
              ))}
            </div>
          )}

        </div>

        {/* Modal Footer */}
        <div className="p-4 sm:p-5 border-t border-slate-800 bg-[#0B0F1C] flex flex-wrap items-center justify-between gap-3">
          <button
            onClick={handleReset}
            className="px-3.5 py-2 text-xs font-medium text-slate-400 hover:text-rose-400 flex items-center gap-1.5 transition-colors"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Ripristina Originali di Fabbrica</span>
          </button>

          <div className="flex items-center gap-2">
            <button
              onClick={onClose}
              className="px-4 py-2 text-xs text-slate-400 hover:text-white"
            >
              Annulla
            </button>
            <button
              onClick={handleSaveAll}
              className="px-5 py-2.5 bg-gradient-to-r from-fuchsia-600 to-pink-600 hover:from-fuchsia-500 hover:to-pink-500 text-white font-bold text-xs sm:text-sm rounded-xl shadow-lg shadow-fuchsia-600/30 flex items-center gap-2 transition-all"
            >
              <Save className="w-4 h-4" />
              <span>Salva e Applica al Sito</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
