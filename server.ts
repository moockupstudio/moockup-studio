import express from "express";
import path from "path";
import fs from "fs";
import { createServer as createViteServer } from "vite";
import dotenv from "dotenv";
import { GoogleGenAI } from "@google/genai";

dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.json({ limit: "50mb" }));

// In-memory storage for leads & audit requests
interface LeadEntry {
  id: string;
  type: "audit" | "contact" | "quote";
  data: Record<string, any>;
  createdAt: string;
}

const leadsStorage: LeadEntry[] = [];

// Gemini client initialization helper
function getGeminiClient(): GoogleGenAI | null {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    return null;
  }
  return new GoogleGenAI({
    apiKey,
    httpOptions: {
      headers: {
        "User-Agent": "aistudio-build",
      },
    },
  });
}

// Health check
app.get("/api/health", (req, res) => {
  res.json({
    status: "ok",
    agency: "Moockup Studio",
    website: "https://www.moockup.it",
    timestamp: new Date().toISOString(),
  });
});

// Live Chat API with Gemini
app.post("/api/chat", async (req, res) => {
  try {
    const { message, history = [] } = req.body;

    if (!message || typeof message !== "string") {
      return res.status(400).json({ error: "Messaggio richiesto" });
    }

    const ai = getGeminiClient();

    // Context instructions for the Moockup Studio consultant
    const systemInstruction = `Sei l'assistente consulente virtuale di "Moockup Studio" (riferimento: www.moockup.it, email: moockupstudio@gmail.com), agenzia italiana di alto livello specializzata in:
1. Creazione e Sviluppo Siti Web & E-Commerce ad altissime prestazioni (PageSpeed 95+, UX studiata per la massima conversione, design moderno e mobile-first, Shopify, WooCommerce, Headless/Next.js/React).
2. SEO & Posizionamento su Google (SEO tecnica, ottimizzazione on-page/off-page, Keyword research strategica, local SEO e aumento traffico organico qualificato).
3. SEM & Google Ads (Specialisti in Google Ads: campagne Search mirate all'intento d'acquisto, Performance Max, Google Shopping, tracciamenti avanzati Server-Side GA4/GTM, abbattimento del Costo per Acquisizione / CPA e massimizzazione del ROAS).

Il tuo obiettivo è:
- Rispondere in italiano in modo professionale, caloroso, chiaro, competente e orientato alla conversione.
- Spiegare come Moockup Studio aiuta aziende, professionisti ed e-commerce a vendere di più e ad acquisire lead qualificati.
- Offrire sempre valore pratico (es. spiegare perché la velocità del sito incide sulle conversioni, come scegliere le giuste parole chiave su Google Ads, o come richiedere l'Audit Gratuito).
- Se l'utente chiede un preventivo o tempi, dai stime orientative trasparenti e invitalo calorosamente a richiedere un Audit Gratuito tramite il form del sito o a lasciare la propria email/numero per una call strategica di 15 minuti senza impegno con il team di Moockup Studio (moockupstudio@gmail.com).
- Mantieni risposte snelle, formattate bene con elenchi puntati quando opportuno. Non essere prolisso.`;

    if (!ai) {
      // Fallback smart response if GEMINI_API_KEY is not configured yet
      let reply = "Grazie per aver contattato Moockup Studio! Siamo specializzati nella creazione di siti web moderni ad alta conversione, SEO su Google e campagne Google Ads. ";
      const lower = message.toLowerCase();
      if (lower.includes("prezzo") || lower.includes("costo") || lower.includes("preventivo")) {
        reply += "I nostri progetti sono su misura in base agli obiettivi aziendali: siti vetrina professionali da 1.200€, e-commerce completi da 2.500€ e gestione campagne Google Ads con strategia ROI. Puoi anche usare il calcolatore interattivo sul sito o richiederci un audit gratuito!";
      } else if (lower.includes("google ads") || lower.includes("ads") || lower.includes("campagn")) {
        reply += "Siamo specialisti nella gestione di campagne Google Ads. Strutturiamo campagne Search, Shopping e Performance Max con tracciamento avanzato delle conversioni (GA4 e Server-Side) per massimizzare il ROAS e abbassare il CPA.";
      } else if (lower.includes("seo") || lower.includes("posizionamento") || lower.includes("google")) {
        reply += "Lavoriamo sulla SEO a 360°: audit tecnico dei Core Web Vitals, architettura delle informazioni, keyword strategy focalizzata sull'intento di acquisto e link building di qualità per portarti ai primi posti di Google.";
      } else {
        reply += "Come possiamo aiutarti oggi a far crescere il tuo business online? Puoi anche prenotare una call strategica o lasciarci il tuo contatto per essere ricontattato in 15 minuti.";
      }
      return res.json({ response: reply });
    }

    // Format chat history for Gemini
    const formattedContents: any[] = [];
    
    // Add past conversation turns
    for (const h of history.slice(-6)) {
      if (h.sender === "user") {
        formattedContents.push({ role: "user", parts: [{ text: h.text }] });
      } else if (h.sender === "bot") {
        formattedContents.push({ role: "model", parts: [{ text: h.text }] });
      }
    }
    
    // Add current user prompt
    formattedContents.push({ role: "user", parts: [{ text: message }] });

    const geminiResponse = await ai.models.generateContent({
      model: "gemini-3.8-flash",
      contents: formattedContents,
      config: {
        systemInstruction,
        temperature: 0.7,
      },
    });

    const replyText = geminiResponse.text || "Grazie per il messaggio. Il nostro team di Moockup Studio ti risponderà al più presto.";
    return res.json({ response: replyText });
  } catch (error: any) {
    console.error("Chat error:", error);
    return res.status(500).json({
      error: "Errore durante la generazione della risposta",
      details: error?.message || "Errore sconosciuto",
    });
  }
});

// Audit Request API (Lead Magnet)
app.post("/api/audit", (req, res) => {
  const { url, goal, email, name, phone, notes } = req.body;
  if (!url || !email) {
    return res.status(400).json({ error: "URL del sito ed email sono obbligatori" });
  }

  const lead: LeadEntry = {
    id: `audit_${Date.now()}`,
    type: "audit",
    data: { url, goal, email, name, phone, notes },
    createdAt: new Date().toISOString(),
  };

  leadsStorage.push(lead);
  console.log("Nuova richiesta Audit ricevuta per Moockup Studio:", lead);

  return res.json({
    success: true,
    message: "Richiesta di audit ricevuta con successo! Il team di Moockup Studio analizzerà il tuo sito e ti invierà il report entro 24 ore.",
    leadId: lead.id,
  });
});

// Contact / Quote Request API
app.post("/api/contact", (req, res) => {
  const { name, email, phone, company, service, budget, message } = req.body;
  if (!name || !email) {
    return res.status(400).json({ error: "Nome ed email sono obbligatori" });
  }

  const lead: LeadEntry = {
    id: `contact_${Date.now()}`,
    type: "contact",
    data: { name, email, phone, company, service, budget, message },
    createdAt: new Date().toISOString(),
  };

  leadsStorage.push(lead);
  console.log("Nuovo contatto ricevuto per Moockup Studio:", lead);

  return res.json({
    success: true,
    message: "Grazie per averci contattato! Un nostro specialista senior ti risponderà entro poche ore.",
    leadId: lead.id,
  });
});

// File-based persistence for custom site content so ALL end users see modifications
const CONTENT_FILE_PATH = path.join(process.cwd(), "site-content.json");

app.get("/api/content", (req, res) => {
  try {
    if (fs.existsSync(CONTENT_FILE_PATH)) {
      const data = fs.readFileSync(CONTENT_FILE_PATH, "utf-8");
      return res.json({ success: true, content: JSON.parse(data) });
    }
  } catch (err) {
    console.error("Error reading site-content.json:", err);
  }
  return res.json({ success: false, content: null });
});

app.post("/api/content", (req, res) => {
  try {
    const { content } = req.body;
    if (!content) {
      return res.status(400).json({ error: "Contenuto mancante" });
    }
    fs.writeFileSync(CONTENT_FILE_PATH, JSON.stringify(content, null, 2), "utf-8");
    console.log("Contenuti del sito salvati con successo per tutti gli utenti finali.");
    return res.json({ success: true, message: "Contenuto salvato per tutti gli utenti finali." });
  } catch (err: any) {
    console.error("Error writing site-content.json:", err);
    return res.status(500).json({ error: "Errore durante il salvataggio su server." });
  }
});

// List leads (internal mock for agency monitoring)
app.get("/api/leads", (req, res) => {
  res.json({
    count: leadsStorage.length,
    leads: leadsStorage,
  });
});

// Start server with Vite middleware integration
async function startServer() {
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Moockup Studio server running on http://localhost:${PORT}`);
  });
}

startServer();
