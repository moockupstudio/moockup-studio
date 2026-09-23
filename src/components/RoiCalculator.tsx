import React, { useState, useId } from "react";
import { 
  Calculator, 
  TrendingUp, 
  Sparkles, 
  ArrowRight, 
  ShieldCheck, 
  Info,
  CheckCircle2,
  DollarSign,
  Send
} from "lucide-react";

interface RoiCalculatorProps {
  onOpenAudit: () => void;
  onRequestQuote: (quoteData: any) => void;
}

export const RoiCalculator: React.FC<RoiCalculatorProps> = ({ 
  onOpenAudit, 
  onRequestQuote 
}) => {
  const projectTypeId = useId();
  const adBudgetId = useId();
  const customerValueId = useId();
  const emailInputId = useId();
  const nameInputId = useId();

  const [projectType, setProjectType] = useState<string>("all-in-one");
  const [adBudget, setAdBudget] = useState<number>(1500);
  const [customerValue, setCustomerValue] = useState<number>(350);
  const [clientEmail, setClientEmail] = useState<string>("");
  const [clientName, setClientName] = useState<string>("");
  const [submitted, setSubmitted] = useState<boolean>(false);

  // Dynamic calculations based on industry benchmarks & Moockup typical metrics
  const getProjectBaseCost = () => {
    switch (projectType) {
      case "vetrina":
        return 1600;
      case "ecommerce":
        return 2900;
      case "ads-only":
        return 950;
      case "all-in-one":
      default:
        return 3400;
    }
  };

  // Estimated conversion rates & metrics
  const avgCpc = 1.25; // Estimated average Cost Per Click
  const estimatedClicks = Math.round(adBudget / avgCpc);
  const estimatedConvRate = projectType.includes("ecommerce") ? 0.028 : 0.052; // 2.8% ecommerce, 5.2% lead gen
  const estimatedConversions = Math.round(estimatedClicks * estimatedConvRate);
  
  // Projected Revenue
  const projectedRevenue = Math.round(estimatedConversions * customerValue);
  const estimatedRoas = adBudget > 0 ? (projectedRevenue / adBudget).toFixed(1) : "0";
  const estimatedProfit = projectedRevenue - adBudget;

  const handleSubmitQuote = (e: React.FormEvent) => {
    e.preventDefault();
    if (!clientEmail) return;
    
    onRequestQuote({
      projectType,
      adBudget,
      customerValue,
      projectedRevenue,
      estimatedRoas,
      clientEmail,
      clientName,
      baseCost: getProjectBaseCost(),
    });

    setSubmitted(true);
  };

  return (
    <section id="calcolatore" className="py-24 bg-[#090D16] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-fuchsia-500/10 border border-fuchsia-500/20 text-fuchsia-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <Calculator className="w-3.5 h-3.5" />
            <span>Calcolatore Interattivo ROI & Preventivo</span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight mb-4">
            Stima il Tuo Ritorno sull'Investimento{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 via-pink-400 to-rose-400">
              Prima di Iniziare
            </span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Trasparenza totale. Configura il tipo di progetto e il tuo budget pubblicitario mensile per stimare lead qualificati, fatturato previsto e ROAS atteso.
          </p>
        </div>

        {/* Interactive Calculator Body */}
        <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-6 sm:p-10 lg:p-12 shadow-2xl backdrop-blur-xl max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Left Column: Sliders & Controls */}
            <div className="lg:col-span-7 space-y-8">
              {/* Option 1: Project Type Selection */}
              <div>
                <label htmlFor={projectTypeId} className="block text-xs uppercase font-bold text-slate-300 tracking-wider mb-3">
                  1. Tipologia di Progetto
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3" id={projectTypeId}>
                  {[
                    { id: "all-in-one", label: "Sito Web + Google Ads + SEO", tag: "Consigliato" },
                    { id: "vetrina", label: "Sito Vetrina & Lead Gen", tag: "PMI / Servizi" },
                    { id: "ecommerce", label: "E-Commerce ad Alta Conversione", tag: "Shopify / Custom" },
                    { id: "ads-only", label: "Gestione Google Ads Esclusiva", tag: "SEM & Tracking" },
                  ].map((item) => (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => setProjectType(item.id)}
                      className={`p-3.5 rounded-xl text-left border transition-all text-xs sm:text-sm font-semibold flex flex-col justify-between ${
                        projectType === item.id
                          ? "bg-fuchsia-600/20 border-fuchsia-500 text-white shadow-md shadow-fuchsia-500/10"
                          : "bg-slate-950/60 border-slate-800 text-slate-400 hover:text-white hover:border-slate-700"
                      }`}
                    >
                      <span>{item.label}</span>
                      <span className="text-[10px] text-fuchsia-400 mt-1 font-mono uppercase font-bold">
                        {item.tag}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Option 2: Monthly Google Ads Budget Slider */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <label htmlFor={adBudgetId} className="text-xs uppercase font-bold text-slate-300 tracking-wider">
                    2. Budget Pubblicitario Mensile Google Ads
                  </label>
                  <span className="text-lg font-display font-extrabold text-fuchsia-400">
                    {adBudget.toLocaleString()} € / mese
                  </span>
                </div>
                <input
                  id={adBudgetId}
                  type="range"
                  min="400"
                  max="10000"
                  step="100"
                  value={adBudget}
                  onChange={(e) => setAdBudget(Number(e.target.value))}
                  className="w-full h-2 bg-slate-950 rounded-lg appearance-none cursor-pointer accent-fuchsia-500"
                />
                <div className="flex justify-between text-[11px] text-slate-500 mt-1 font-mono">
                  <span>Min: 400 €</span>
                  <span>5.000 €</span>
                  <span>Max: 10.000 €</span>
                </div>
              </div>

              {/* Option 3: Customer Value / Scontrino Medio Slider */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <label htmlFor={customerValueId} className="text-xs uppercase font-bold text-slate-300 tracking-wider">
                    3. Valore Medio di un Cliente / Scontrino
                  </label>
                  <span className="text-lg font-display font-extrabold text-emerald-400">
                    {customerValue.toLocaleString()} €
                  </span>
                </div>
                <input
                  id={customerValueId}
                  type="range"
                  min="40"
                  max="3000"
                  step="20"
                  value={customerValue}
                  onChange={(e) => setCustomerValue(Number(e.target.value))}
                  className="w-full h-2 bg-slate-950 rounded-lg appearance-none cursor-pointer accent-emerald-500"
                />
                <div className="flex justify-between text-[11px] text-slate-500 mt-1 font-mono">
                  <span>Min: 40 € (Retail)</span>
                  <span>1.000 € (Servizi)</span>
                  <span>Max: 3.000 € (B2B/Impianti)</span>
                </div>
              </div>
            </div>

            {/* Right Column: Projected ROI Dashboard Card */}
            <div className="lg:col-span-5 bg-gradient-to-b from-[#0B0F1C] to-slate-950 border border-slate-800 rounded-2xl p-6 sm:p-7 flex flex-col justify-between shadow-xl">
              <div>
                <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-800">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    Stima Risultati Mensili
                  </span>
                  <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 text-[11px] font-bold">
                    ROAS Previsto: {estimatedRoas}x
                  </span>
                </div>

                <div className="space-y-4">
                  {/* Gross Revenue Estimation */}
                  <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800/90">
                    <div className="text-xs text-slate-400 mb-1">Fatturato Lordo Stimato Generato</div>
                    <div className="font-display font-extrabold text-2xl sm:text-3xl text-emerald-400 flex items-center gap-1">
                      <span>{projectedRevenue.toLocaleString()} €</span>
                      <span className="text-xs text-slate-400 font-normal">/ mese</span>
                    </div>
                  </div>

                  {/* Estimated Conversions / Leads */}
                  <div className="grid grid-cols-2 gap-3">
                    <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800 text-center">
                      <div className="font-display font-bold text-xl text-white">
                        ~{estimatedConversions}
                      </div>
                      <div className="text-[11px] text-slate-400 font-medium">
                        Ordini / Lead al Mese
                      </div>
                    </div>
                    <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800 text-center">
                      <div className="font-display font-bold text-xl text-fuchsia-400">
                        ~{estimatedClicks}
                      </div>
                      <div className="text-[11px] text-slate-400 font-medium">
                        Visitatori Target / Clic
                      </div>
                    </div>
                  </div>

                  {/* Base cost indication */}
                  <div className="p-3 rounded-xl bg-slate-900/40 border border-slate-800 flex items-center justify-between text-xs">
                    <span className="text-slate-400">Sviluppo & Setup da:</span>
                    <span className="font-bold text-white font-mono">
                      ~{getProjectBaseCost().toLocaleString()} € (una tantum)
                    </span>
                  </div>
                </div>
              </div>

              {/* Lead Capture Form to Lock Quote */}
              <div className="mt-6 pt-4 border-t border-slate-800">
                {submitted ? (
                  <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-center space-y-2">
                    <CheckCircle2 className="w-6 h-6 text-emerald-400 mx-auto" />
                    <p className="text-xs font-semibold text-white">
                      Preventivo inviato con successo a {clientEmail}!
                    </p>
                    <p className="text-[11px] text-slate-400">
                      Un nostro esperto ti contatterà con il piano esecutivo dettagliato.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmitQuote} className="space-y-3">
                    <div className="text-xs font-semibold text-white">
                      Ricevi la proposta completa & il breakdown dei costi
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      <input
                        id={nameInputId}
                        type="text"
                        value={clientName}
                        onChange={(e) => setClientName(e.target.value)}
                        placeholder="Il tuo nome..."
                        className="px-3 py-2 bg-slate-950 border border-slate-800 rounded-lg text-xs text-white placeholder-slate-500 focus:outline-none focus:border-fuchsia-500"
                        required
                      />
                      <input
                        id={emailInputId}
                        type="email"
                        value={clientEmail}
                        onChange={(e) => setClientEmail(e.target.value)}
                        placeholder="La tua email aziendale..."
                        className="px-3 py-2 bg-slate-950 border border-slate-800 rounded-lg text-xs text-white placeholder-slate-500 focus:outline-none focus:border-fuchsia-500"
                        required
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full py-3 px-4 bg-gradient-to-r from-fuchsia-600 to-pink-600 hover:from-fuchsia-500 hover:to-pink-500 text-white font-semibold text-xs rounded-xl shadow-lg shadow-fuchsia-600/30 transition-all flex items-center justify-center gap-2 active:scale-95"
                    >
                      <Send className="w-3.5 h-3.5 shrink-0" />
                      <span>Invia Proposta & Breakdown Costi</span>
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
