export interface ServiceLanding {
  slug: string;
  title: string;
  heroHeadline: string;
  heroSubheadline: string;
  badge: string;
  metaTitle: string;
  metaDescription: string;
  coverImage: string;
  tagline: string;
  whyChoosePoints: { title: string; desc: string }[];
  deliverables: string[];
  metricsTarget: string;
  faqList: { q: string; a: string }[];
  schemaType?: string;
}

export const SERVICE_LANDINGS: Record<string, ServiceLanding> = {
  "siti-web": {
    slug: "siti-web",
    title: "Creazione Siti Web & E-Commerce",
    badge: "Web Design Sartoriale",
    heroHeadline: "Siti Web Ultra-Veloci, Mobile-First e Progettati per Convertire",
    heroSubheadline: "Non realizziamo semplici vetrine: creiamo piattaforme ad altissime prestazioni con PageSpeed 95+, UX studiata su misura e codice di tua esclusiva proprietà.",
    metaTitle: "Creazione Siti Web Foggia & Italia | Moockup Studio",
    metaDescription: "Realizziamo siti web professionali ultra-veloci, responsive e ottimizzati per generare conversioni. Scopri i nostri standard a Foggia e in tutta Italia.",
    coverImage: "https://images.unsplash.com/photo-1519222970733-f546218fa6d7?auto=format&fit=crop&w=1200&q=80",
    tagline: "Un sito web lento o mal strutturato costa clienti ogni giorno. Noi creiamo la tua macchina da vendite digitale.",
    whyChoosePoints: [
      { title: "PageSpeed 95+ Garantito", desc: "Tempi di caricamento sotto a 1 secondo su mobile per massimizzare la soddisfazione utente e favorire il posizionamento Google." },
      { title: "Codice 100% Tuo", desc: "Nessun canone periodico obbligatorio, nessun vincolo e massima indipendenza per la tua azienda." },
      { title: "Design Figma Esclusivo", desc: "Prototipazione grafica su misura per riflettere l'identità del tuo brand senza template preconfezionati generici." },
      { title: "Tracciamenti Già Inclusi", desc: "Google Tag Manager e Google Analytics 4 preconfigurati per misurare subito contatti, telefonate e acquisti." },
    ],
    deliverables: [
      "Architettura responsive adattata per smartphone, tablet e monitor 4K",
      "Ottimizzazione completa Core Web Vitals (LCP, CLS, INP)",
      "Pannello di gestione contenuti intuitivo con formazione video dedicata",
      "Setup certificati SSL e conformità Privacy & Cookie GDPR",
    ],
    metricsTarget: "3x Tasso di conversione medio e tempi di caricamento < 0.9 secondi",
    faqList: [
      { q: "Quanto tempo occorre per la realizzazione di un sito web?", a: "In media consegniamo un sito completo, testato e pronto al lancio tra le 2 e le 4 settimane, condividendo ogni avanzamento con te." },
      { q: "Il sito sarà visibile e veloce anche da smartphone?", a: "Certamente. Progettiamo con approccio Mobile-First rigoroso, garantendo fluidità totale su ogni dispositivo." },
      { q: "Dopo il lancio il sito rimane di mia proprietà?", a: "Assolutamente sì. Tutto il codice sorgente, le grafiche e i contenuti appartengono al 100% alla tua azienda." },
      { q: "Fornite formazione per gestire i testi e le immagini in autonomia?", a: "Sì, rilasciamo un pannello di gestione intuitivo e video tutorial personalizzati per permetterti di effettuare aggiornamenti in totale semplicità." },
      { q: "Come gestite la sicurezza e la conformità al GDPR?", a: "Tutti i nostri siti includono certificati crittografici SSL HTTPS, cookie banner a norma europea con Registro del Consenso e conformità alle direttive Privacy." }
    ]
  },
  "sem": {
    slug: "sem",
    title: "SEM & Campagne Google Ads",
    badge: "Specialisti Gestione Campagne Google Ads",
    heroHeadline: "Campagne Google Ads ad Alto Rendimento: Più Lead Qualificati, Meno Sprechi",
    heroSubheadline: "Gestiamo campagne Search, Shopping e Performance Max con approccio scientifico orientato al ROAS e monitoraggio avanzato sia Client-Side che Server-Side.",
    metaTitle: "Campagne Google Ads & SEM Foggia | Moockup Studio",
    metaDescription: "Specialisti in campagne Google Ads. Massimizza il ritorno sull'investimento pubblicitario con campagne Search e Performance Max ad alto rendimento.",
    coverImage: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?auto=format&fit=crop&w=1200&q=80",
    tagline: "Basta bruciare budget con click curiosi: intercettiamo solo persone con un chiaro e immediato intento di acquisto.",
    whyChoosePoints: [
      { title: "Oltre 2.4M€ di Spesa Gestita", desc: "Esperienza consolidata su decine di settori B2B e B2C con metodologie testate sul campo." },
      { title: "Tracciamento Server-Side", desc: "Monitoriamo il 100% delle conversioni reali senza perdite dovute a blocchi cookie o aggiornamenti iOS." },
      { title: "Copywriting Persuasivo", desc: "Annunci ad altissimo Quality Score per ottimizzare il costo per click (CPC) e massimizzare il rendimento del budget." },
      { title: "Report su Looker Studio", desc: "Cruscotto trasparente accessibile 24/7 per verificare vendite, costo per lead e fatturato generato." },
    ],
    deliverables: [
      "Keyword research maniacale ed esclusione capillare di termini negativi",
      "Setup campagne Google Search, Shopping e Performance Max",
      "Integrazione conversioni avanzate Google Tag Manager e GA4",
      "Creazione landing page con A/B test e revisione mensile dedicata",
    ],
    metricsTarget: "ROAS medio tra 4.5x e 8.2x con riduzione del costo di acquisizione del 38%",
    faqList: [
      { q: "Qual è il budget minimo consigliato per iniziare con Google Ads?", a: "Consigliamo di iniziare con un budget pubblicitario di almeno 400-600€/mese per raccogliere dati significativi e ottimizzare il costo per conversione." },
      { q: "In quanto tempo si iniziano a vedere i primi contatti?", a: "Le campagne Google Ads intercettano le ricerche attive dal primo giorno di pubblicazione degli annunci, portando lead qualificati fin dalle prime 48 ore." },
      { q: "Come verificate che i click si trasformino in clienti reali?", a: "Installiamo tracciamenti avanzati (anche Server-Side) su Google Analytics 4 e Google Tag Manager per misurare telefonate, form inviati e vendite." },
      { q: "Posso decidere in quali città o regioni mostrare gli annunci?", a: "Sì, la geolocalizzazione è precisissima: possiamo limitare la visibilità a singoli comuni, province, regioni o estenderla a tutta Italia ed estero." },
      { q: "Fornite report periodici sui risultati e sulle spese pubblicitarie?", a: "Offriamo un cruscotto Looker Studio accessibile h24 con aggiornamento dati in tempo reale e una revisione mensile dedicata con il vostro account manager." }
    ]
  },
  "seo-organica": {
    slug: "seo-organica",
    title: "SEO & Posizionamento su Google",
    badge: "Visibilità Naturale Scalabile",
    heroHeadline: "Conquista la Prima Pagina di Google e Ricevi Clienti Ogni Giorno Senza Pagare i Click",
    heroSubheadline: "Strategie di Search Engine Optimization tecnica, architettura informativa semantica e contenuti ad altissimo intento commerciale per dominare il tuo mercato.",
    metaTitle: "Consulenza SEO & Posizionamento Google Foggia | Moockup Studio",
    metaDescription: "Scala i primi posti su Google con strategie SEO tecniche, audit approfonditi e ottimizzazione per la ricerca locale e nazionale.",
    coverImage: "https://images.unsplash.com/photo-1616499452581-cc7f8e3dd3c9?auto=format&fit=crop&w=1200&q=80",
    tagline: "Il traffico organico è l'asset digitale più profittevole e duraturo per qualsiasi azienda.",
    whyChoosePoints: [
      { title: "Audit Tecnico da 80+ Fattori", desc: "Risolviamo errori di scansione, cannibalizzazione, lentezza e problemi di indicizzazione." },
      { title: "Search Intent Focus", desc: "Non posizioniamo parole generiche: puntiamo solo a ricerche compiute da utenti pronti ad acquistare." },
      { title: "Pronti per Google AI Overviews", desc: "Ottimizziamo i contenuti con dati strutturati Schema.org per essere citati dai modelli di intelligenza artificiale di Google." },
      { title: "Local SEO Dominante", desc: "Ottimizzazione capillare del profilo Google Business Profile per catturare ricerche locali e geolocalizzate." },
    ],
    deliverables: [
      "Audit SEO Tecnico iniziale con piano d'azione prioritario",
      "Albero di navigazione e mappatura semantica delle parole chiave",
      "Interventi on-page su tag title, gerarchia e Schema.org JSON-LD",
      "Monitoraggio posizionamenti settimanale con reportistica trasparente",
    ],
    metricsTarget: "+280% di traffico organico qualificato in 6-9 mesi",
    faqList: [
      { q: "Quanto tempo serve per vedere i risultati del posizionamento SEO su Google?", a: "I primi miglioramenti di indicizzazione e traffico organico si osservano generalmente tra il 2° e il 4° mese, consolidando posizioni di vertice e stabilità nei mesi successivi." },
      { q: "Quali risultati è realistico attendersi con una strategia SEO?", a: "I motori di ricerca evolvono costantemente, ma le nostre metodologie tecniche, semantiche e di contenuti posizionano costantemente i clienti nelle prime posizioni per le parole chiave commerciali più rilevanti." },
      { q: "Qual è la differenza tra posizionamento SEO e campagne Google Ads?", a: "Google Ads richiede di pagare ogni singolo click e termina quando finisce il budget; la SEO crea un asset organico duraturo che continua a generare visite e clienti a costo zero per click." },
      { q: "Come scegliete le parole chiave per la mia attività?", a: "Analizziamo il volume di ricerca mensile, l'intento di acquisto degli utenti e la domanda di mercato locale e nazionale per selezionare i termini che portano contatti e fatturato reale." },
      { q: "L'ottimizzazione SEO include anche la scheda Google Maps?", a: "Sì, l'ottimizzazione della scheda Google Business Profile (Local SEO) è parte integrante della nostra strategia per dominare le ricerche geolocalizzate." }
    ]
  },
  "e-commerce": {
    slug: "e-commerce",
    title: "Sviluppo E-Commerce Shopify & Custom",
    badge: "Vendite Online Efficaci",
    heroHeadline: "E-Commerce Veloci e Intuitivi che Abbattono l'Abbandono del Carrello",
    heroSubheadline: "Progettiamo store online Shopify e piattaforme su misura studiate per semplificare l'acquisto da smartphone e moltiplicare il valore medio del carrello.",
    metaTitle: "Creazione E-Commerce Shopify & Custom | Moockup Studio",
    metaDescription: "Sviluppiamo store e-commerce ad alte conversioni su Shopify e tecnologie custom con checkout rapido e integrazione pagamenti sicuri.",
    coverImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
    tagline: "Un bell'e-commerce non serve se non vende. Noi uniamo estetica d'eccellenza a funnel di acquisto collaudati.",
    whyChoosePoints: [
      { title: "Checkout a 1-Step", desc: "Riduciamo al minimo i passaggi tra aggiunta al carrello e completamento dell'ordine con Apple Pay e Google Pay." },
      { title: "Gestione Magazzino Semplice", desc: "Interfaccia facile per aggiungere prodotti, varianti, gestire ordini e spedizioni senza programmatori." },
      { title: "Upsell & Cross-Sell Nativi", desc: "Strategie integrate per aumentare il valore medio dell'ordine al momento del checkout." },
      { title: "Sincronizzazione Marketplace", desc: "Possibilità di sincronizzare il catalogo con Google Shopping, Meta Commerce e gestionali aziendali." },
    ],
    deliverables: [
      "Configurazione completa piattaforma e-commerce",
      "Grafica personalizzata su misura con UX ottimizzata",
      "Integrazione gateway di pagamento sicuri (Stripe, PayPal, Klarna)",
      "Setup tracciamenti conversioni e-commerce avanzate GA4",
    ],
    metricsTarget: "+45% Carrelli completati e tasso di abbandono ridotto di oltre un terzo",
    faqList: [
      { q: "Quali piattaforme utilizzate per lo sviluppo degli e-commerce?", a: "Sviluppiamo store su misura ad alte prestazioni utilizzando Shopify, WooCommerce o architetture Custom headless a seconda del volume catalogo e delle esigenze aziendali." },
      { q: "Quali metodi di pagamento possono utilizzare i clienti?", a: "Configuriamo pagamenti con carte di credito, debito e prepagate, Apple Pay, Google Pay, PayPal, gateway BNPL e bonifico bancario." },
      { q: "Come vengono calcolate le spese di spedizione?", a: "Impostiamo regole su misura per peso, volume, destinazione (Italia ed estero) e soglie per la spedizione gratuita con collegamento ai principali corrieri (BRT, GLS, DHL, SDA)." },
      { q: "Posso gestire il magazzino e la fatturazione elettronica dal sito?", a: "Sì, integriamo lo scarico magazzino in tempo reale e il collegamento con i principali gestionali di fatturazione (es. Fatture in Cloud, Danea Easyfatt)." },
      { q: "Il negozio online è protetto contro tentativi di frode e attacchi hacker?", a: "Applichiamo protocolli PCI-DSS di massimo livello, crittografia avanzata a 256-bit e sistemi di verifica 3D Secure per ogni transazione." }
    ]
  },
  "brand-identity": {
    slug: "brand-identity",
    title: "Brand Identity & Naming",
    badge: "Posizionamento di Marca",
    heroHeadline: "Costruiamo l'Identità del Tuo Brand per Renderlo Memorabile e Unico",
    heroSubheadline: "Naming, logo design vettoriale, palette cromatica e manuale di stile coerente su tutti i canali per valorizzare al massimo la tua unicità sul mercato.",
    metaTitle: "Brand Identity & Naming | Moockup Studio",
    metaDescription: "Crea un'identità visiva memorabile con Moockup Studio: naming, logo design, immagine coordinata e linee guida di marca.",
    coverImage: "https://images.unsplash.com/photo-1633533452148-a9657d2c9a5f?auto=format&fit=crop&w=1200&q=80",
    tagline: "Il tuo brand è la promessa che fai ai tuoi clienti. Noi la rendiamo visivamente irresistibile.",
    whyChoosePoints: [
      { title: "Logo Vettoriale Infinitamente Scalabile", desc: "Perfetto sia per favicon e smartphone che per maxi-affissioni e merchandising." },
      { title: "Brand Guidelines Complete", desc: "Manuale di stile con font, codici colore (HEX, RGB, CMYK, Pantone) e regole di applicazione." },
      { title: "Studio Psicologia dei Colori", desc: "Scelte cromatiche mirate a suscitare fiducia, dinamismo e autorevolezza nel tuo target." },
      { title: "Format Pronti per i Social", desc: "Avatar, copertine e template per post pronti all'uso su Instagram, LinkedIn e Facebook." },
    ],
    deliverables: [
      "Proposte di logo design esclusive",
      "File vettoriali ad alta definizione (SVG, PDF, EPS, PNG)",
      "Brand Book digitale con linee guida e palette",
      "Kit stationery di base (biglietti da visita, carta intestata)",
    ],
    metricsTarget: "Riconoscibilità immediata e percezione di valore premium",
    faqList: [
      { q: "Cosa comprende il progetto completo di Brand Identity?", a: "Comprende studio e progettazione del Logo (varianti primaria, secondaria e monogramma), palette colori istituzionale, abbinamenti tipografici, Brand Guidelines (Manuale d'Uso) e mockup coordinati." },
      { q: "In quali formati grafici riceverò i file del mio nuovo logo?", a: "Riceverai i file vettoriali originali (.AI, .SVG, .PDF) per stampe tipografiche in qualsiasi dimensione senza perdita di risoluzione, oltre a versioni raster (.PNG con sfondo trasparente e .JPG ad alta definizione)." },
      { q: "Quante proposte grafiche iniziali vengono presentate?", a: "Presentiamo 3 direzioni creative distinte e concettualmente argomentate, sulle quali affiniamo la scelta migliore fino alla perfezione." },
      { q: "Realizzate anche la grafica per biglietti da visita, carta intestata e packaging?", a: "Sì, forniamo tutti i file esecutivi pronti per la tipografia per biglietti da visita, brochure aziendali, cartellette, divise e packaging di prodotto." },
      { q: "Quanto tempo richiede la creazione di una Brand Identity completa?", a: "Il processo richiede solitamente dalle 2 alle 3 settimane, includendo briefing strategico, ricerca visiva, sviluppo proposte e rifinitura finale." }
    ]
  },
  "cro-tracking": {
    slug: "cro-tracking",
    title: "CRO & Tracciamento Avanzato",
    badge: "Ottimizzazione Conversioni",
    heroHeadline: "Moltiplica le Conversioni a Parità di Spesa Pubblicitaria",
    heroSubheadline: "Analisi euristica, mappe di calore e test A/B per eliminare le frizioni che bloccano gli utenti prima del contatto o dell'acquisto.",
    metaTitle: "CRO & Ottimizzazione Tasso di Conversione | Moockup Studio",
    metaDescription: "Migliora le conversioni del tuo sito con analisi CRO, heatmaps e setup di tracciamento avanzato Server-Side.",
    coverImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
    tagline: "Il traffico costa. La CRO ti consente di guadagnare di più senza dover aumentare il budget pubblicitario.",
    whyChoosePoints: [
      { title: "Mappe di Calore & Registrazioni", desc: "Capisci esattamente dove gli utenti cliccano, esitano o abbandonano le pagine." },
      { title: "GTM Server-Side", desc: "Traccia tutte le azioni chiave anche su browser che bloccano i cookie di terze parti." },
      { title: "A/B Testing Continuo", desc: "Decisioni basate su dati statistici certi, non su opinioni personali." },
      { title: "Funnel Optimization", desc: "Riduci gli step superflui e aumenta la chiarezza delle call to action." },
    ],
    deliverables: [
      "Audit CRO dettagliato con mappa delle criticità",
      "Configurazione container Google Tag Manager Server-Side",
      "Implementazione modifiche grafiche e di copy ad alta conversione",
      "Dashboard personalizzata con andamento del tasso di conversione",
    ],
    metricsTarget: "+35% incremento medio del tasso di conversione",
    faqList: [
      { q: "Cos'è la CRO (Conversion Rate Optimization)?", a: "È la disciplina che analizza scientificamente il comportamento degli utenti sul tuo sito per eliminare gli ostacoli all'acquisto e trasformare una percentuale più alta di visitatori in clienti paganti." },
      { q: "Perché il tracciamento Server-Side è fondamentale oggi?", a: "Perché gli ad-blocker e le restrizioni browser (es. Apple Safari ITP) bloccano fino al 35% dei dati tracciati via browser; il Server-Side recupera il 100% delle conversioni reali alimentando correttamente gli algoritmi pubblicitari." },
      { q: "Quali strumenti utilizzate per monitorare il comportamento degli utenti?", a: "Utilizziamo Google Tag Manager, GA4, mappe di calore (Heatmap), registrazioni anonime delle sessioni e test A/B per confrontare diverse versioni di una pagina." },
      { q: "Posso monitorare anche le telefonate e i messaggi WhatsApp?", a: "Sì, tracciamo ogni clic sul numero di telefono, sui pulsanti WhatsApp e su ogni modulo di contatto con attribuzione della campagna di provenienza." },
      { q: "I dati e i report sono facili da consultare per chi non è tecnico?", a: "Creiamo cruscotti su misura su Looker Studio con grafici chiari, visualizzando solo le metriche che contano: lead generati, tasso di conversione e fatturato." }
    ]
  },
  "social-media": {
    slug: "social-media",
    title: "Social Media Marketing & Meta Ads",
    badge: "Acquisizione Social",
    heroHeadline: "Campagne Meta & TikTok Ads che Convertono Attenzione in Fatturato",
    heroSubheadline: "Strategie di paid social e content creation per costruire community fedeli e generare contatti profilati con creatività visive ad alto impatto.",
    metaTitle: "Social Media Marketing & Ads Foggia | Moockup Studio",
    metaDescription: "Campagne Meta Ads (Facebook & Instagram) e TikTok Ads mirate alla crescita di lead e vendite e-commerce.",
    coverImage: "https://images.unsplash.com/photo-1645849017333-abc9c24522b2?auto=format&fit=crop&w=1200&q=80",
    tagline: "Non limitarti ai 'mi piace': trasforma il pubblico dei social in clienti ricorrenti.",
    whyChoosePoints: [
      { title: "Creatività Grafiche & Video Coinvolgenti", desc: "Contenuti studiati per fermare lo scroll degli utenti nei primi 3 secondi." },
      { title: "Retargeting Multicanale", desc: "Riconnettiti con chi ha già visitato il tuo sito o visto i tuoi post." },
      { title: "Targeting di Precisione", desc: "Segmentazione per interessi, comportamenti e liste clienti Lookalike." },
      { title: "Integrazione con WhatsApp Business", desc: "Annunci 'Click to WhatsApp' per avviare subito chat dirette con i potenziali clienti." },
    ],
    deliverables: [
      "Setup Account Pubblicitario e Meta Pixel Server-Side",
      "Pianificazione piano editoriale e format grafici",
      "Copywriting orientato all'azione e video brevi (Reels / TikTok)",
      "Monitoraggio ROAS e reportistica mensile",
    ],
    metricsTarget: "Ottimizzazione continua del costo per lead e lead generation costante",
    faqList: [
      { q: "Quali canali social gestite per la mia azienda?", a: "Gestiamo strategie complete su Meta (Instagram e Facebook), TikTok, LinkedIn per il B2B e YouTube, scegliendo i canali con il più alto potenziale di ritorno per il tuo settore." },
      { q: "Chi si occupa della creazione dei testi e dei contenuti grafici?", a: "Il nostro team interno cura copy, grafiche, reel e video professionali, sottoponendo sempre un piano editoriale mensile per la tua approvazione preventiva." },
      { q: "Le sponsorizzate a pagamento sono incluse nel servizio?", a: "Sì, gestiamo le campagne pubblicitarie per massimizzare la copertura, generare nuovi follower profilati e acquisire contatti commerciali qualificati." },
      { q: "Con quale frequenza vengono pubblicati i post?", a: "Definiamo una frequenza ottimale (solitamente 3-4 contenuti a settimana tra post, caroselli e reel/video) privilegiando la qualità visiva rispetto alla quantità sterile." },
      { q: "Fornite report sull'andamento delle pagine e dei contatti acquisiti?", a: "Ogni mese riceverai un report dettagliato con analisi di engagement, crescita della community, messaggi ricevuti e ritorno sugli investimenti adv." }
    ]
  },
  "local-marketing": {
    slug: "local-marketing",
    title: "Local Marketing & Cartellonistica",
    badge: "Presidio del Territorio",
    heroHeadline: "Domina il Tuo Territorio tra Digitale, Cartellonistica e Pensiline",
    heroSubheadline: "Campagne integrate a Foggia, in Puglia e su scala locale: impianti stradali ad alto traffico combinati con geofencing su smartphone.",
    metaTitle: "Local Marketing & Cartellonistica Foggia | Moockup Studio",
    metaDescription: "Visibilità locale potente: cartelloni 6x3, pensiline e campagne geolocalizzate per dominare a Foggia e nel tuo territorio.",
    coverImage: "https://images.unsplash.com/photo-1585306235015-334715af0c2d?auto=format&fit=crop&w=1200&q=80",
    tagline: "Fatti notare nel mondo reale e trasforma la visibilità stradale in contatti digitali immediati.",
    whyChoosePoints: [
      { title: "Posizioni Strategiche a Foggia e Dintorni", desc: "Impianti 6x3 e arredo urbano posizionati sulle arterie a maggior traffico veicolare e pedonale." },
      { title: "Grafica Pubblicitaria ad Alta Leggibilità", desc: "Design visivo calibrato per essere compreso e ricordato in meno di 2 secondi di passaggio." },
      { title: "QR Code Dinamici e Tracciabili", desc: "Collega i cartelloni fisici direttamente alla tua chat WhatsApp o alla landing page." },
      { title: "Campagne Geofence Concomitanti", desc: "Mostra annunci su Instagram e Google a chi transita vicino al tuo punto vendita." },
    ],
    deliverables: [
      "Studio delle migliori posizioni outdoor disponibili",
      "Progettazione grafica vettoriale per maxi-formati",
      "Gestione pratiche autorizzative e affissione",
      "Sinergia con campagne locali su Google Maps",
    ],
    metricsTarget: "Decine di migliaia di impressioni visive quotidiane sul tuo target locale",
    faqList: [
      { q: "In cosa consiste la strategia di Local Marketing?", a: "È un insieme coordinato di azioni (ottimizzazione Google Maps, recensioni certificate, geofencing ads e cartellonistica) per dominare le ricerche nella tua città e provincia." },
      { q: "Come fate a far salire la mia scheda Google Business Profile su Maps?", a: "Ottimizziamo categorie primarie e secondarie, attributi locali, foto geolocalizzate, orari, catalogo prodotti e impostiamo un sistema di richiesta recensioni ai tuoi clienti soddisfatti." },
      { q: "È possibile combinare la pubblicità online con cartelloni stradali o pensiline?", a: "Sì, operiamo direttamente a Foggia e in Puglia con concessioni pubblicitarie per cartelloni 6x3 e arredo urbano posizionati nei punti ad alto transito." },
      { q: "Quanto tempo serve per vedere più clienti entrare in negozio o chiamare?", a: "Con le campagne geolocalizzate e la scheda Maps ottimizzata i primi incrementi di chiamate e indicazioni stradali si registrano entro le prime 2-3 settimane." },
      { q: "Come gestite le recensioni negative o false su Google?", a: "Forniamo supporto per segnalare recensioni illecite a Google e formulare risposte professionali ed empatiche che trasformano una critica in dimostrazione di serietà." }
    ]
  },
  "blog-content": {
    slug: "blog-content",
    title: "Blog & Content Marketing",
    badge: "Contenuti Autorevoli",
    heroHeadline: "Articoli Persuasivi e Ottimizzati SEO per Costruire la Tua Autorevolezza",
    heroSubheadline: "Scriviamo guide e articoli approfonditi che rispondono ai dubbi del tuo pubblico e scalano le ricerche su Google.",
    metaTitle: "Blog & Content Marketing SEO | Moockup Studio",
    metaDescription: "Piani editoriali e articoli SEO scritti da professionisti per scalare il ranking e informare i tuoi potenziali clienti.",
    coverImage: "https://images.unsplash.com/photo-1522199755839-a2bacb67c546?auto=format&fit=crop&w=1200&q=80",
    tagline: "Un buon contenuto educa, ispira e trasforma un lettore occasionale in un cliente fedele.",
    whyChoosePoints: [
      { title: "Parole Chiave Strategiche", desc: "Intercettiamo le domande più cercate dagli utenti nel tuo settore." },
      { title: "Formattazione Accattivante", desc: "Titoli magnetici, elenchi puntati e immagini per una lettura scorrevole e piacevole." },
      { title: "Autorevolezza E-E-A-T per Google", desc: "Testi scritti per valorizzare competenza ed esperienza nel settore." },
      { title: "Internal Linking Strategico", desc: "Collegamenti interni mirati verso le tue landing di conversione." },
    ],
    deliverables: [
      "Piano editoriale trimestrale basato su keyword research mirata",
      "Articoli SEO chiavi in mano completi di title e meta tag",
      "Immagini di copertina ottimizzate e grafiche di supporto",
      "Caricamento diretto sul CMS e formattazione tipografica curata",
    ],
    metricsTarget: "Crescita del tempo di permanenza sul sito e link naturali in ingresso",
    faqList: [
      { q: "A cosa serve avere un blog aziendale sul sito?", a: "Il blog risponde alle domande e ai dubbi dei tuoi potenziali clienti, posiziona il sito su centinaia di parole chiave su Google e posiziona la tua azienda come punto di riferimento autorevole del settore." },
      { q: "Chi scrive gli articoli del blog?", a: "I nostri copywriter specializzati in SEO e comunicazione tecnica redigono articoli approfonditi, unici e documentati, verificati con le fonti del tuo settore." },
      { q: "Quanti articoli vengono pubblicati al mese?", a: "Solitamente pianifichiamo da 2 a 4 articoli al mese, ottimizzati per keyword ad alto volume di ricerca e con call-to-action chiare verso i tuoi servizi." },
      { q: "Gli articoli sono scritti solo per Google o sono piacevoli per le persone?", a: "Scriviamo per le persone prima che per gli algoritmi: linguaggio scorrevole, formattazione chiara con elenchi e titoletti, e risposte concrete senza giri di parole." },
      { q: "Posso proporre argomenti specifici o novità della mia azienda?", a: "Assolutamente sì: accogliamo le tue proposte e integriamo le novità aziendali all'interno della strategia editoriale SEO." }
    ]
  },
  "digital-pr": {
    slug: "digital-pr",
    title: "Digital PR & Link Building",
    badge: "Reputazione & Stampa",
    heroHeadline: "Fai Parlare del Tuo Brand sulle Più Importanti Testate Nazionali",
    heroSubheadline: "Articoli pubbliredazionali, interviste e link di qualità su giornali e portali autorevoli per blindare la credibilità della tua azienda.",
    metaTitle: "Digital PR & Link Building | Moockup Studio",
    metaDescription: "Servizi di Digital PR e pubblicazione su grandi testate per aumentare la Domain Authority e la fiducia nel tuo brand.",
    coverImage: "https://images.unsplash.com/photo-1584714268709-c3dd9c92b378?auto=format&fit=crop&w=1200&q=80",
    tagline: "Quando i giornali parlano di te, i tuoi clienti comprano con occhi chiusi.",
    whyChoosePoints: [
      { title: "Accesso a Testate Nazionali e Locali", desc: "Contatti diretti con giornalisti e network editoriali di primo piano." },
      { title: "Boost Autorevolezza SEO", desc: "Backlink follow permanenti da domini storici ad altissimo trust." },
      { title: "Gestione Reputazione & Notiziabilità", desc: "Creazione di comunicati stampa che i giornalisti desiderano pubblicare." },
      { title: "Link Profiling Naturale & Sicuro", desc: "Strategie white-hat che proteggono il tuo dominio da penalizzazioni." },
    ],
    deliverables: [
      "Rassegna stampa digitale e cartella stampa aziendale",
      "Articoli redatti da giornalisti professionisti di settore",
      "Pubblicazione su testate con backlink permanente",
      "Monitoraggio uscite e calcolo del valore pubblicitario equivalente",
    ],
    metricsTarget: "Impulso immediato alla reputazione aziendale e alla Domain Rating",
    faqList: [
      { q: "Cosa sono le Digital PR e come aiutano il mio business?", a: "Sono attività di ufficio stampa digitale e link building editoriale su testate giornalistiche, magazine di settore e blog autorevoli per aumentare la notorietà e l'autorevolezza del brand." },
      { q: "I link ottenuti su giornali e magazine migliorano la SEO?", a: "Sì, i backlink da domini autorevoli e storici sono uno dei fattori più potenti che l'algoritmo di Google utilizza per attribuire fiducia e prime posizioni nei risultati." },
      { q: "Su quali testate e portali è possibile pubblicare?", a: "Disponiamo di un network di oltre 1.500 testate registrate sia a diffusione nazionale (ANSA, Corriere, Repubblica, Forbes) sia quotidiani locali e magazine verticali di settore." },
      { q: "Chi si occupa di redigere il comunicato stampa o l'articolo editoriale?", a: "Il nostro team di giornalisti e copywriter redige comunicati stampa con taglio giornalistico accattivante, pronti per la pubblicazione." },
      { q: "Come viene certificata la pubblicazione degli articoli?", a: "Al termine di ogni campagna rilasciamo una rassegna stampa digitale completa con tutti i link diretti, screenshot e metriche di visibilità ottenuta." }
    ]
  },
  "newsletter-edm": {
    slug: "newsletter-edm",
    title: "Newsletter & Email Marketing",
    badge: "Fidelizzazione Clienti",
    heroHeadline: "Flussi Email Automatici che Generano Ordini Mentre Ti Dedichi al Tuo Lavoro",
    heroSubheadline: "Segmentazione avanzata, email di benvenuto e recupero carrelli per trasformare contatti freddi in acquirenti regolari.",
    metaTitle: "Email Marketing & Automation | Moockup Studio",
    metaDescription: "Campagne newsletter e sequenze automatiche su misura per aumentare retention e lifetime value dei tuoi clienti.",
    coverImage: "https://images.unsplash.com/photo-1583142305729-5cb119ce5d3e?auto=format&fit=crop&w=1200&q=80",
    tagline: "L'email marketing ha ancora oggi uno dei tassi di ritorno economico più alti in assoluto: oltre 36€ per ogni euro speso.",
    whyChoosePoints: [
      { title: "Sequenze Automatiche (Flows)", desc: "Welcome series, recupero carrello e follow-up post acquisto completamente automatizzati." },
      { title: "Design Responsive per Smartphone", desc: "Template email puliti con deliverability massima (inbox, mai spam)." },
      { title: "Segmentazione Avanzata del Database", desc: "Invii mirati per comportamenti di acquisto e interessi specifici dei clienti." },
      { title: "Deliverability & Anti-Spam Rigorosi", desc: "Configurazione DKIM, SPF e DMARC per atterrare sempre nella posta in arrivo." },
    ],
    deliverables: [
      "Setup piattaforma (Klaviyo, Mailchimp o Brevo) e autenticazione domini",
      "Creazione template grafici personalizzati e coordinati al brand",
      "Copywriting e automazione delle sequenze di accoglienza e vendita",
      "Moduli di iscrizione newsletter GDPR compliant per il sito web",
    ],
    metricsTarget: "Open rate > 35% e fatturato ricorrente generato in automatico",
    faqList: [
      { q: "L'email marketing funziona ancora oggi?", a: "È ancora il canale con il più alto ritorno sull'investimento (fino a 36€ per ogni euro speso): a differenza dei social network, l'indirizzo email dei tuoi clienti è un bene di tua diretta proprietà." },
      { q: "Come raccogliamo gli indirizzi email nel pieno rispetto del GDPR?", a: "Implementiamo moduli di iscrizione con doppio consenso (Double Opt-In), incentivi etici (es. guida gratuita o sconto di benvenuto) e tracciamento a norma di legge." },
      { q: "Quali piattaforme di invio utilizzate?", a: "Configuriamo account professionali su piattaforme affidabili come MailerLite, Klaviyo, Brevo o ActiveCampaign garantendo altissimi tassi di recapito (deliverability)." },
      { q: "Cosa sono le sequenze email automatizzate (funnel)?", a: "Sono email automatiche inviate in base al comportamento dell'utente: benvenuto per i nuovi iscritti, recupero carrelli abbandonati, auguri di compleanno e riattivazione clienti dormienti." },
      { q: "Come fate a evitare che le email finiscano nello Spam?", a: "Configuriamo correttamente i record DNS del tuo dominio (DKIM, SPF, DMARC) e curiamo il testo evitando parole vietate dai filtri antispam dei provider." }
    ]
  },
  "tv-ads": {
    slug: "tv-ads",
    title: "TV Ads & Spot Video",
    badge: "Produzione Video",
    heroHeadline: "Spot Pubblicitari Coinvolgenti per TV Locali e Video Marketing Digitale",
    heroSubheadline: "Sceneggiatura, riprese professionali e montaggio per comunicare l'eccellenza della tua attività con impatto cinematografico.",
    metaTitle: "Spot Video Pubblicitari & TV Ads | Moockup Studio",
    metaDescription: "Realizzazione video spot promozionali per canali TV e social advertising ad altissima risoluzione.",
    coverImage: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=1200&q=80",
    tagline: "Le persone acquistano con le emozioni: un video professionale racconta la tua storia come nessun testo può fare.",
    whyChoosePoints: [
      { title: "Riprese in 4K con Attrezzatura Cinema", desc: "Illuminazione di livello, audio cristallino e riprese con drone se necessarie." },
      { title: "Sceneggiatura Orientata alla Vendita", desc: "Storyboard chiaro che evidenzia il valore unico del tuo prodotto o servizio." },
      { title: "Color Grading & Post-Produzione", desc: "Resa cromatica cinematografica ed effetti visivi che valorizzano il brand." },
      { title: "Speakeraggio Professionale", desc: "Voci radio e televisive nazionali per un audio che cattura l'attenzione." },
    ],
    deliverables: [
      "Master video 4K broadcast per emittenti televisive e cinema",
      "Tagli verticali 9:16 ad alta risoluzione per Reels, TikTok e Stories",
      "Licenze e diritti per colonna sonora e suoni commerciali",
      "File sottotitolati ottimizzati per la visione senza audio su mobile",
    ],
    metricsTarget: "Massimo coinvolgimento emotivo e ricordo spontaneo del brand",
    faqList: [
      { q: "Su quali canali televisivi e formati è possibile pianificare?", a: "Pianifichiamo su emittenti locali e regionali pugliesi di punta, oltre a canali nazionali su Sky e digitale terrestre, con spot da 15, 30 o 60 secondi e format redazionali." },
      { q: "Vi occupate anche della produzione video dello spot TV?", a: "Sì, curiamo l'intero ciclo: ideazione creativa, sceneggiatura, riprese con troupe professionale in 4K, doppiaggio con speaker professionisti e montaggio audio/video conforme alle specifiche broadcast." },
      { q: "Come si integra la televisione con il sito web e il digitale?", a: "Inseriamo grafiche con URL chiaro, QR code dinamici in sovrimpressione e avviamo campagne digitali sincronizzate per intercettare chi cerca il brand dal cellulare durante la messa in onda." },
      { q: "Quali fasce orarie sono più efficaci per la mia attività?", a: "Selezioniamo fasce orarie ad alta concentrazione di pubblico in target (es. telegiornali regionali, programmi di attualità, eventi sportivi o trasmissioni tematiche)." },
      { q: "Fornite i certificati di avvenuta trasmissione dello spot?", a: "Sì, l'emittente rilascia i borderò e la certificazione notarile delle messe in onda effettive concordate nel piano media." }
    ]
  }
};
