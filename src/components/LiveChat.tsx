import React, { useState, useRef, useEffect, useId } from "react";
import { ChatMessage } from "../types";
import { AGENCY_INFO } from "../data/agencyData";
import { 
  MessageSquare, 
  X, 
  Send, 
  Sparkles, 
  Phone, 
  Mail, 
  CheckCircle2, 
  User, 
  Bot,
  Minimize2,
  ChevronDown
} from "lucide-react";

interface LiveChatProps {
  isOpen: boolean;
  onToggle: () => void;
  onOpenAudit: () => void;
}

export const LiveChat: React.FC<LiveChatProps> = ({ isOpen, onToggle, onOpenAudit }) => {
  const leadEmailId = useId();
  const leadPhoneId = useId();

  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: "msg-1",
      sender: "bot",
      text: "Ciao! Benvenuto in Moockup Studio. Come possiamo aiutarti oggi a far crescere il tuo business online?",
      timestamp: "Ora",
      actionSuggestions: [
        "Quanto costa un sito web?",
        "Come funziona l'Audit Gratuito?",
        "Qual è il budget per Google Ads?",
        "Posizionamento SEO su Google",
      ],
    },
  ]);

  const [inputMessage, setInputMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showLeadBox, setShowLeadBox] = useState(false);
  const [leadContact, setLeadContact] = useState({ email: "", phone: "" });
  const [leadSubmitted, setLeadSubmitted] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

  const handleSendMessage = async (textToSend?: string) => {
    const text = (textToSend || inputMessage).trim();
    if (!text || isLoading) return;

    const userMsg: ChatMessage = {
      id: `user-${Date.now()}`,
      sender: "user",
      text,
      timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputMessage("");
    setIsLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message: text,
          history: messages.map((m) => ({ sender: m.sender, text: m.text })),
        }),
      });

      const data = await response.json();
      const botReply = data.response || "Grazie per il messaggio. Un nostro consulente ti risponderà al più presto.";

      const botMsg: ChatMessage = {
        id: `bot-${Date.now()}`,
        sender: "bot",
        text: botReply,
        timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      };

      setMessages((prev) => [...prev, botMsg]);
    } catch (error) {
      console.error("Live chat error:", error);
      const fallbackMsg: ChatMessage = {
        id: `bot-err-${Date.now()}`,
        sender: "bot",
        text: "Siamo sempre a tua disposizione per analizzare il tuo progetto. Puoi scriverci anche direttamente a moockupstudio@gmail.com o richiedere l'Audit Gratuito dal sito!",
        timestamp: "Ora",
      };
      setMessages((prev) => [...prev, fallbackMsg]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleQuickSuggestion = (suggestion: string) => {
    if (suggestion === "Come funziona l'Audit Gratuito?") {
      onOpenAudit();
    }
    handleSendMessage(suggestion);
  };

  const handleSaveLead = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!leadContact.email && !leadContact.phone) return;

    try {
      await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: "Contatto da Live Chat",
          email: leadContact.email,
          phone: leadContact.phone,
          service: "Supporto Live Chat",
          message: "Richiesta di ricontatto rapido dalla Live Chat di Moockup Studio.",
        }),
      });
      setLeadSubmitted(true);
      setShowLeadBox(false);

      const confirmMsg: ChatMessage = {
        id: `bot-lead-${Date.now()}`,
        sender: "bot",
        text: `Perfetto! Abbiamo registrato i tuoi recapiti. Un nostro specialista di Moockup Studio ti contatterà all'indirizzo ${leadContact.email || leadContact.phone} entro poche ore.`,
        timestamp: "Ora",
      };
      setMessages((prev) => [...prev, confirmMsg]);
    } catch (e) {
      setLeadSubmitted(true);
    }
  };

  return (
    <>
      {/* Floating WhatsApp Launcher Button */}
      <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3">
        <a
          href="https://wa.me/393486520380?text=salve%20ho%20bisogno%20di%20una%20consulenza"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden sm:flex items-center gap-2 px-3.5 py-2 bg-slate-900/90 hover:bg-slate-900 border border-emerald-500/40 text-xs font-medium text-emerald-300 rounded-xl shadow-xl backdrop-blur-md transition-all hover:border-emerald-400 group cursor-pointer"
        >
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span>Chatta su WhatsApp</span>
        </a>

        <a
          href="https://wa.me/393486520380?text=salve%20ho%20bisogno%20di%20una%20consulenza"
          target="_blank"
          rel="noopener noreferrer"
          id="open-whatsapp-floating-btn"
          className="w-14 h-14 rounded-full bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-white flex items-center justify-center shadow-2xl shadow-emerald-500/40 hover:scale-105 active:scale-95 transition-all duration-200 relative group cursor-pointer"
          aria-label="Scrivici su WhatsApp (+39 348 6520380)"
        >
          <span className="relative flex h-3.5 w-3.5 absolute -top-1 -right-1">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-500 border-2 border-[#090D16]"></span>
          </span>
          <MessageSquare className="w-6 h-6 text-white" />
        </a>
      </div>

      {/* Chat Window */}
      {isOpen && (
        <div 
          id="live-chat-modal-window"
          className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 w-[94vw] sm:w-[410px] h-[580px] max-h-[90vh] bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl flex flex-col overflow-hidden backdrop-blur-2xl"
        >
          {/* Header */}
          <div className="p-4 bg-[#090D16] border-b border-slate-800 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-fuchsia-500 to-pink-600 flex items-center justify-center text-white font-bold text-sm shadow-md">
                  M
                </div>
                <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full bg-emerald-500 border-2 border-[#090D16]" />
              </div>
              <div>
                <div className="flex items-center gap-1.5 font-display font-bold text-sm text-white">
                  <span>Moockup Assistant</span>
                  <span className="text-[10px] px-1.5 py-0.2 rounded bg-fuchsia-500/20 text-fuchsia-300 font-normal">
                    AI & Team
                  </span>
                </div>
                <div className="text-[11px] text-emerald-400 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span>Online ora • Risposta istantanea</span>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-1">
              <button
                onClick={() => setShowLeadBox(!showLeadBox)}
                title="Richiedi ricontatto telefonico o email"
                className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors text-xs flex items-center gap-1"
              >
                <Phone className="w-4 h-4 text-emerald-400" />
              </button>
              <button
                onClick={onToggle}
                className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors"
                aria-label="Chiudi chat"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Quick Lead Capture Dropdown (Optional Prompt) */}
          {showLeadBox && !leadSubmitted && (
            <div className="p-3 bg-slate-950 border-b border-slate-800 animate-fade-in">
              <div className="text-xs font-semibold text-white mb-1.5 flex items-center justify-between">
                <span>Preferisci parlare direttamente con un esperto?</span>
                <button
                  onClick={() => setShowLeadBox(false)}
                  className="text-slate-400 hover:text-white text-[10px]"
                >
                  Chiudi
                </button>
              </div>
              <form onSubmit={handleSaveLead} className="space-y-2">
                <div className="grid grid-cols-2 gap-1.5">
                  <input
                    id={leadEmailId}
                    type="email"
                    placeholder="Email aziendale..."
                    value={leadContact.email}
                    onChange={(e) => setLeadContact({ ...leadContact, email: e.target.value })}
                    className="px-2.5 py-1.5 bg-slate-900 border border-slate-800 rounded-lg text-xs text-white placeholder-slate-500 focus:outline-none focus:border-fuchsia-500"
                    required
                  />
                  <input
                    id={leadPhoneId}
                    type="tel"
                    placeholder="Numero telefono..."
                    value={leadContact.phone}
                    onChange={(e) => setLeadContact({ ...leadContact, phone: e.target.value })}
                    className="px-2.5 py-1.5 bg-slate-900 border border-slate-800 rounded-lg text-xs text-white placeholder-slate-500 focus:outline-none focus:border-fuchsia-500"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-1.5 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs rounded-lg transition-all"
                >
                  Richiedi Call Strategica di 15 Minuti
                </button>
              </form>
            </div>
          )}

          {/* Messages Container */}
          <div className="flex-1 p-4 overflow-y-auto space-y-4 bg-slate-900/60">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex flex-col ${
                  msg.sender === "user" ? "items-end" : "items-start"
                }`}
              >
                <div className="flex items-end gap-2 max-w-[85%]">
                  {msg.sender === "bot" && (
                    <div className="w-6 h-6 rounded-full bg-fuchsia-600/30 text-fuchsia-400 flex items-center justify-center shrink-0 mb-1 text-xs font-bold border border-fuchsia-500/30">
                      M
                    </div>
                  )}
                  <div
                    className={`p-3.5 rounded-2xl text-xs sm:text-sm leading-relaxed ${
                      msg.sender === "user"
                        ? "bg-fuchsia-600 text-white rounded-br-none shadow-md shadow-fuchsia-600/20"
                        : "bg-slate-800 text-slate-200 rounded-bl-none border border-slate-700/60 shadow-md whitespace-pre-wrap"
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>

                <span className="text-[10px] text-slate-500 mt-1 px-1">
                  {msg.timestamp}
                </span>

                {/* Quick action chips below message */}
                {msg.actionSuggestions && msg.actionSuggestions.length > 0 && (
                  <div className="mt-2.5 flex flex-wrap gap-1.5 max-w-[95%]">
                    {msg.actionSuggestions.map((sug, i) => (
                      <button
                        key={i}
                        onClick={() => handleQuickSuggestion(sug)}
                        className="text-[11px] px-2.5 py-1 rounded-full bg-slate-800 hover:bg-fuchsia-600/30 text-fuchsia-300 border border-fuchsia-500/30 hover:border-fuchsia-400 transition-colors text-left"
                      >
                        {sug}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}

            {/* Typing Indicator */}
            {isLoading && (
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-full bg-fuchsia-600/30 text-fuchsia-400 flex items-center justify-center shrink-0 text-xs border border-fuchsia-500/30">
                  M
                </div>
                <div className="p-3 bg-slate-800 rounded-2xl rounded-bl-none border border-slate-700/60 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-fuchsia-400 animate-bounce" style={{ animationDelay: '0ms' }} />
                  <span className="w-1.5 h-1.5 rounded-full bg-fuchsia-400 animate-bounce" style={{ animationDelay: '150ms' }} />
                  <span className="w-1.5 h-1.5 rounded-full bg-fuchsia-400 animate-bounce" style={{ animationDelay: '300ms' }} />
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Bottom Chat Input */}
          <div className="p-3 bg-[#090D16] border-t border-slate-800">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSendMessage();
              }}
              className="flex items-center gap-2"
            >
              <input
                type="text"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                placeholder="Scrivi una domanda o chiedi un parere..."
                disabled={isLoading}
                className="flex-1 px-3.5 py-2.5 bg-slate-900 border border-slate-800 rounded-xl text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-fuchsia-500 disabled:opacity-50 transition-colors"
                id="live-chat-input-field"
              />
              <button
                type="submit"
                disabled={isLoading || !inputMessage.trim()}
                className="p-2.5 rounded-xl bg-fuchsia-600 hover:bg-fuchsia-500 text-white disabled:opacity-40 transition-all active:scale-95 shadow-md shadow-fuchsia-600/30"
                id="live-chat-send-btn"
                aria-label="Invia messaggio"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>
            <div className="flex items-center justify-between text-[10px] text-slate-500 mt-2 px-1">
              <span>Moockup Studio • www.moockup.it</span>
              <button
                onClick={onOpenAudit}
                className="text-fuchsia-400 hover:underline"
              >
                Audit Gratuito (450€)
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
