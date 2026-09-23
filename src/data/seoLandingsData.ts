export interface SeoLanding {
  slug: string;
  category: "settore" | "localita";
  categoryLabel: string;
  keywordTarget: string;
  title: string;
  badge: string;
  heroHeadline: string;
  heroSubheadline: string;
  metaTitle: string;
  metaDescription: string;
  coverImage: string;
  tagline: string;
  sectorOrCityHighlights: { title: string; desc: string }[];
  includedFeatures: string[];
  metricsTarget: string;
  faqList: { q: string; a: string }[];
  geoArea?: string;
  industry?: string;
}

export const SEO_SECTOR_LANDINGS: Record<string, SeoLanding> = {
  "siti-web-ristoranti": {
    slug: "siti-web-ristoranti",
    category: "settore",
    categoryLabel: "Settore Ristorazione & Food",
    keywordTarget: "realizzazione siti web per ristoranti",
    title: "Siti Web per Ristoranti & Trattorie",
    badge: "Ristorazione & Food",
    heroHeadline: "Siti Web per Ristoranti: Menu & Prenotazioni",
    heroSubheadline: "Menu digitale sfogliabile istantaneamente da smartphone, prenotazione tavoli diretta via WhatsApp o gestionale e posizionamento Google Maps.",
    metaTitle: "Realizzazione Siti Web per Ristoranti | Moockup Studio",
    metaDescription: "Creazione siti web per ristoranti, osterie e trattorie. Menu QR veloce, prenotazione tavoli diretta e posizionamento su Google.",
    coverImage: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80",
    tagline: "Valorizza la tua proposta culinaria e accogli i tuoi clienti con un sito elegante e veloce.",
    sectorOrCityHighlights: [
      { title: "Menu Digitale Leggero & Immediato", desc: "Nessun PDF pesante da scaricare: menu interattivo con foto dei piatti, prezzi e allergeni in evidenza." },
      { title: "Prenotazione Tavoli Diretta", desc: "Ricevi le richieste direttamente su WhatsApp o gestionale con conferma immediata alla sala." },
      { title: "Integrazione Google Maps & Scheda Locale", desc: "Posizionamento per intercettare chi cerca 'ristorante vicino a me' sia a pranzo che a cena." },
      { title: "Visual Food Design", desc: "Mettiamo in risalto l'atmosfera della sala, i piatti speciali e gli ingredienti a km zero." },
    ],
    includedFeatures: [
      "Menu digitale dinamico facilmente aggiornabile dallo smartphone",
      "Pulsanti 'Prenota Tavolo' e 'Ordina d'Asporto' sempre in primo piano",
      "Integrazione recensioni Google e TripAdvisor certificate",
      "Scheda contatti con navigatore GPS one-click",
    ],
    metricsTarget: "+65% di prenotazioni dirette e menu caricato in meno di 0.7 secondi",
    faqList: [
      { q: "Posso cambiare i prezzi o i piatti del menu da solo?", a: "Sì, ti forniamo un pannello intuitivo per aggiornare piatti, prezzi del giorno, disponibilità o offerte speciali in 30 secondi direttamente dal cellulare." },
      { q: "Funziona bene con le recensioni Google e TripAdvisor?", a: "Certamente, integriamo widget ufficiali e sincronizzati che mostrano le tue migliori recensioni per rassicurare i nuovi clienti." },
      { q: "Come vengono gestite le prenotazioni dei tavoli?", a: "Le richieste arrivano in tempo reale sul WhatsApp del locale o via email con tutti i dettagli: data, orario, numero coperti e note su allergie." },
      { q: "Il menu digitale è veloce anche senza buona copertura telefonica?", a: "Sì, il codice è ultra-leggero e compresso: si apre in meno di 0.7 secondi anche con segnale 3G/4G instabile all'interno della sala." },
      { q: "Il sito rispetta le normative europee su allergeni e ingredienti?", a: "Sì, ogni piatto dispone di apposite etichette per gli allergeni (glutine, lattosio, frutta a guscio, ecc.) conformi al Regolamento UE 1169/2011." }
    ]
  },

  "siti-web-pizzerie": {
    slug: "siti-web-pizzerie",
    category: "settore",
    categoryLabel: "Settore Pizzerie & Asporto",
    keywordTarget: "realizzazione siti web per pizzerie",
    title: "Siti Web per Pizzerie & Pizza d'Asporto",
    badge: "Pizzerie & Delivery",
    heroHeadline: "Siti Web per Pizzerie: Menu & Ordini Rapidi",
    heroSubheadline: "Menu pizze chiaro con impasti speciali e ingredienti gourmet, ordini diretti via WhatsApp e visibilità su Google.",
    metaTitle: "Realizzazione Siti Web per Pizzerie | Moockup Studio",
    metaDescription: "Sviluppo siti web per pizzerie al taglio, tradizionali e d'asporto. Ordini diretti, menu pizze digitale e posizionamento Google locale.",
    coverImage: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=1200&q=80",
    tagline: "Valorizza le tue specialità gastronomiche e ricevi ordini e prenotazioni direttamente sul tuo sito web.",
    sectorOrCityHighlights: [
      { title: "Menu Pizze Intuitivo con Filtri", desc: "Classiche, speciali, pizze bianche, impasti integrali, senza glutine e senza lattosio ben evidenziati." },
      { title: "Modulo Ordini Take-Away & Domicilio", desc: "I clienti selezionano orario di ritiro o consegna e inviano l'ordine precompilato con un tocco." },
      { title: "Dominio delle Ricerche del Fine Settimana", desc: "Posizionamento per 'pizzeria aperta oggi' e 'migliore pizza vicino a me'." },
      { title: "Promozioni & Fidelity Program", desc: "Sezione dedicata a offerte infrasettimanali e tessere fedeltà digitali." },
    ],
    includedFeatures: [
      "Sistema ordini asporto rapido con carrello e invio WhatsApp",
      "Menu pizze completo con foto ad alta risoluzione",
      "Geolocalizzazione per raggio di consegna a domicilio",
      "Collegamento immediato a WhatsApp e telefonate dirette",
    ],
    metricsTarget: "Aumento costante degli ordini d'asporto e delle prenotazioni dal sito",
    faqList: [
      { q: "I clienti possono ordinare le pizze per l'asporto direttamente dal sito?", a: "Sì, possono selezionare le pizze, personalizzare gli ingredienti, scegliere l'orario di ritiro o consegna a domicilio e inviare l'ordine con un clic su WhatsApp o carrello." },
      { q: "Come arrivano le ordinazioni alla pizzeria?", a: "Le ordinazioni arrivano in tempo reale con tutti i dettagli e gli ingredienti selezionati direttamente su WhatsApp o via email alla cassa del locale." },
      { q: "Possiamo aggiornare le pizze speciali del mese o pizze gourmet stagionali?", a: "Sì, puoi aggiungere pizze del mese con foto in alta definizione, allergeni ed eventuali supplementi con estrema semplicità." },
      { q: "Il sito è visibile su Google Maps quando la gente cerca pizza nei paraggi?", a: "Ottimizziamo la geolocalizzazione locale e la scheda Google Business per intercettare chi cerca 'pizzeria vicina a me' la sera." },
      { q: "Quanto tempo serve per pubblicare il sito della mia pizzeria?", a: "In 10-14 giorni lavorativi il menu è online, testato e pronto per ricevere le prime ordinazioni." }
    ]
  },

  "siti-web-dentisti": {
    slug: "siti-web-dentisti",
    category: "settore",
    categoryLabel: "Settore Odontoiatrico",
    keywordTarget: "realizzazione siti web per dentisti",
    title: "Siti Web per Dentisti & Studi Odontoiatrici",
    badge: "Odontoiatria & Dentisti",
    heroHeadline: "Siti Web per Dentisti e Studi Odontoiatrici",
    heroSubheadline: "Design rassicurante, schede trattamenti chiare (implantologia, ortodonzia, estetica dentale) e modulo rapido per la prenotazione della prima visita.",
    metaTitle: "Realizzazione Siti Web per Dentisti e Studi Dentistici | Moockup Studio",
    metaDescription: "Siti web professionali per dentisti e studi odontoiatrici. Presentazione cure, prenotazione check-up e posizionamento Google locale.",
    coverImage: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1200&q=80",
    tagline: "La scelta del dentista si basa su fiducia, pulizia e competenza. Il tuo sito deve trasmettere serenità al primo sguardo.",
    sectorOrCityHighlights: [
      { title: "Massima Fiducia & Rassicurazione", desc: "Design pulito, colori chiari e presentazione del team medico e della tecnologia diagnostica." },
      { title: "Schede Trattamenti Chiare", desc: "Implantologia guidata, allineatori invisibili e faccette spiegati in modo semplice per il paziente." },
      { title: "Richiesta Prima Visita Rapida", desc: "Moduli semplici per prenotare una prima visita o un controllo di prevenzione." },
      { title: "Trasparenza e Chiarezza Informativa", desc: "Schede dettagliate delle tecnologie diagnostiche e del team medico dello studio." },
    ],
    includedFeatures: [
      "Sezione 'Prima Visita' con istruzioni per pazienti ansiosi o con urgenze",
      "Gallery fotografica dello studio, sale sterili e tecnologie 3D",
      "Modulo di richiesta appuntamento con scelta giorno preferito",
      "Tracciamento conversioni e telefonate per verificare il ritorno d'investimento",
    ],
    metricsTarget: "Raddoppio delle richieste di prima visita da residenti della provincia",
    faqList: [
      { q: "Come valorizzate la professionalità e le tecnologie dello studio?", a: "Presentiamo il team medico, i percorsi di formazione, i macchinari diagnostici 3D e gli ambienti dello studio per trasmettere massima serenità ai pazienti." },
      { q: "I pazienti possono prenotare una prima visita o controllo dal sito?", a: "Sì, integriamo form di prenotazione intuitivi collegati all'agenda della segreteria o a WhatsApp aziendale per conferme istantanee." },
      { q: "È possibile illustrare i casi clinici e il prima/dopo?", a: "Sì, creiamo sezioni dedicate nel pieno rispetto della privacy del paziente, spiegando terapie come implantologia, allineatori invisibili e igiene dentale." },
      { q: "Il sito si posiziona per chi cerca dentista nella mia zona?", a: "Strutturiamo pagine per le singole prestazioni (sbiancamento, parodontologia, protesi) geolocalizzate per dominare le ricerche Google locali." },
      { q: "Possiamo inserire una sezione dedicata alle convenzioni sanitarie e ai check-up di prevenzione?", a: "Sì, possiamo inserire una sezione dedicata ai fondi e alle convenzioni sanitarie con cui collabora il vostro studio, oltre a percorsi di prevenzione periodica." }
    ]
  },

  "siti-web-odontoiatri": {
    slug: "siti-web-odontoiatri",
    category: "settore",
    categoryLabel: "Cliniche & Specialisti Odontoiatri",
    keywordTarget: "realizzazione siti web per odontoiatri",
    title: "Siti Web per Odontoiatri & Cliniche Dentali",
    badge: "Cliniche Odontoiatriche",
    heroHeadline: "Siti Web per Odontoiatri e Cliniche Dentali",
    heroSubheadline: "Creiamo piattaforme digitali moderne per presentare i professionisti dello studio, le tecnologie diagnostiche avanzate e i percorsi di cura dedicati ai pazienti.",
    metaTitle: "Realizzazione Siti Web Odontoiatri e Cliniche Dentali | Moockup Studio",
    metaDescription: "Sviluppo siti web per medici odontoiatri, ortodontisti e chirurghi maxillo-facciali. Piani di cura chiari, tecnologie moderne e lead qualificati.",
    coverImage: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=1200&q=80",
    tagline: "Posiziona il tuo studio come punto di riferimento clinico d'eccellenza per la cura del sorriso.",
    sectorOrCityHighlights: [
      { title: "Presentazione Casi Prima/Dopo Rigorosa", desc: "Gallery documentate e conformi per mostrare l'eccellenza dei risultati clinici ed estetici." },
      { title: "Integrazione Gestionali & Agende", desc: "Collegamento con MioDottore, Doctolib o sistemi di prenotazione proprietari." },
      { title: "Sezione FAQ per Risolvere i Dubbi", desc: "Risposte chiare alle domande più frequenti su tempi delle cure, sedute e preparazione alle visite." },
      { title: "Piani di Cura & Percorsi Terapeutici", desc: "Presentazione esaustiva delle fasi di trattamento, materiali utilizzati e controlli periodici." },
    ],
    includedFeatures: [
      "Profili individuali dei medici specialisti e titoli accademici",
      "Sezione dedicata ai fondi sanitari e convenzioni attive nello studio",
      "Posizionamento per chirurgia avanzata e allineatori dentali",
      "Modulo richiesta informazioni e prima consulenza specialistica",
    ],
    metricsTarget: "+50% di richieste preventivo per riabilitazioni complesse",
    faqList: [
      { q: "Come gestite i protocolli di trasparenza per cliniche odontoiatriche?", a: "Inseriamo chiaramente la denominazione sociale, il Direttore Sanitario responsabile, l'autorizzazione regionale all'esercizio e i titoli professionali." },
      { q: "Possiamo inserire un tour virtuale delle sale operative?", a: "Sì, valorizziamo la clinica con fotografie ad alta definizione o virtual tour a 360° delle postazioni e delle tecnologie diagnostiche (es. TAC 3D)." },
      { q: "Come funziona la prenotazione online delle visite specialistiche?", a: "I pazienti possono scegliere il motivo della visita e inviare la richiesta alla segreteria, che conferma l'orario via messaggio o telefono." },
      { q: "Il sito è sicuro e garantisce il trattamento riservato dei dati sanitari?", a: "Applichiamo protocolli GDPR rigorosi con crittografia SSL HTTPS avanzata e server europei ad alta sicurezza." },
      { q: "Fornite supporto per la creazione dei testi medici?", a: "No, ti metteremo nella condizione di scrivere articoli e copy da pubblicare sul sito nella sezione dedicata al blog." }
    ]
  },

  "siti-web-parrucchieri": {
    slug: "siti-web-parrucchieri",
    category: "settore",
    categoryLabel: "Saloni di Bellezza & Hair Stylist",
    keywordTarget: "realizzazione siti web per parrucchieri",
    title: "Siti Web per Parrucchieri & Hair Salons",
    badge: "Hair & Beauty Salons",
    heroHeadline: "Siti Web per Parrucchieri & Hair Stylist",
    heroSubheadline: "Mostra tagli, colorazioni balayage e trattamenti curativi con un lookbook visivo impeccabile. Ricevi appuntamenti H24 senza dover rispondere al telefono mentre lavori.",
    metaTitle: "Realizzazione Siti Web per Parrucchieri e Hair Salon | Moockup Studio",
    metaDescription: "Creazione siti web per parrucchieri ed hair stylist. Lookbook sfogliabile, listino prezzi chiaro, prenotazione appuntamenti e social integration.",
    coverImage: "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1200&q=80",
    tagline: "Le clienti scelgono il parrucchiere dalle foto dei lavori. Fai brillare il talento del tuo salone.",
    sectorOrCityHighlights: [
      { title: "Lookbook Fotografico Balayage & Styling", desc: "Foto ad alta definizione categorizzate per colore, schiariture, taglio e acconciature sposa." },
      { title: "Prenotazione Appuntamenti WhatsApp / Calendario", desc: "I clienti scelgono il servizio (taglio, piega, colore) e richiedono l'orario ideale in pochi click." },
      { title: "Listino Trattamenti Trasparente", desc: "Spiega i benefici di ricostruzione cheratina, laminazione e prodotti biologici utilizzati." },
      { title: "Sincronizzazione con Instagram", desc: "Feed Instagram integrato per mostrare automaticamente gli ultimi lavori realizzati in salone." },
    ],
    includedFeatures: [
      "Listino servizi suddiviso per donna, uomo ed estetica",
      "Modulo prenotazione appuntamento attivo anche a salone chiuso",
      "Sezione pacchetti speciali per sposa e cerimonie",
      "Integrazione Google Maps per farsi trovare dai nuovi clienti",
    ],
    metricsTarget: "Diminuzione dell'80% delle telefonate di prenotazione durante il lavoro in salone",
    faqList: [
      { q: "Le clienti possono prenotare il loro appuntamento direttamente online?", a: "Sì, con selezione del servizio (taglio, piega, colore, balayage, trattamenti) e conferma via WhatsApp o calendario digitale." },
      { q: "Possiamo mostrare la gallery dei lavori e dei look realizzati in salone?", a: "Certamente, creiamo lookbook fotografici eleganti e veloci da caricare, collegati anche al feed Instagram del salone." },
      { q: "È possibile vendere i prodotti professionali per capelli online?", a: "Sì, possiamo integrare una sezione e-commerce per shampoo, maschere e finish con ritiro in salone o spedizione a casa." },
      { q: "Come aiutate il salone a farsi trovare da nuove clienti in città?", a: "Ottimizziamo il posizionamento su Google Maps e ricerchiamo keyword locali come 'miglior parrucchiere colore vicino a me'." },
      { q: "Possiamo pubblicare listino prezzi e promozioni stagionali?", a: "Sì, il listino è consultabile chiaramente da smartphone ed è aggiornabile in autonomia in qualsiasi momento." }
    ]
  },

  "siti-web-barbieri": {
    slug: "siti-web-barbieri",
    category: "settore",
    categoryLabel: "Barber Shop & Grooming Maschile",
    keywordTarget: "realizzazione siti web per barbieri",
    title: "Siti Web per Barbieri & Barber Shop",
    badge: "Barber Shop & Grooming",
    heroHeadline: "Siti Web per Barber Shop & Parrucchieri Uomo",
    heroSubheadline: "Cattura l'identità autentica del tuo barber shop: rasatura tradizionale a panno caldo, sfumature perfette e prenotazione veloce della poltrona direttamente da smartphone.",
    metaTitle: "Realizzazione Siti Web Barber Shop e Barbieri | Moockup Studio",
    metaDescription: "Sviluppo siti web per barbieri moderni e barber shop tradizionali. Prenotazione orari, listino trattamenti barba e capelli, stile vintage o streetwear.",
    coverImage: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=1200&q=80",
    tagline: "I clienti maschili vogliono prenotare in 10 secondi senza telefonare: rendi la tua poltrona sempre occupata.",
    sectorOrCityHighlights: [
      { title: "Prenotazione One-Tap per Smartphone", desc: "I clienti scelgono il barbiere preferito, il servizio e l'orario disponibile in un attimo." },
      { title: "Look & Feel Maschile Ricercato", desc: "Design di forte impatto visivo che riflette l'anima del locale (vintage, industrial, tattoo o urban)." },
      { title: "Vendita Cera, Olio Barba & Dopobarba", desc: "Vetrina prodotti per incrementare lo scontrino medio ad ogni taglio." },
      { title: "Fidelizzazione Clienti & Promozioni Barba", desc: "Piani abbonamento mensili e offerte speciali per fidelizzare la clientela del quartiere." },
    ],
    includedFeatures: [
      "Sistema di prenotazione rapido per smartphone",
      "Gallery fotografica tagli fade, modellatura barba e trattamenti relax",
      "Integrazione Google Maps per farsi trovare dai nuovi clienti",
      "Modulo WhatsApp immediato per cambio orario o disdetta",
    ],
    metricsTarget: "Agenda salone piena nei giorni infrasettimanali e azzeramento dei no-show",
    faqList: [
      { q: "I clienti possono prenotare il taglio barba e capelli in 10 secondi da smartphone?", a: "Sì, l'interfaccia è studiata per permettere al cliente di fissare l'orario dal cellulare senza chiamare o attendere in sala d'attesa." },
      { q: "Possiamo vendere pomate, oli da barba e cere artigianali?", a: "Sì, possiamo aggiungere lo shop online per i prodotti a marchio del barber shop o dei brand partner." },
      { q: "Possiamo inserire foto dell'arredamento vintage o moderno della barberia?", a: "Assolutamente sì: trasmettiamo l'atmosfera autentica del salone, dei panni caldi e della cura del dettaglio." },
      { q: "Come gestite i clienti che non si presentano all'appuntamento?", a: "Possiamo integrare promemoria automatici via SMS o WhatsApp poche ore prima dell'orario stabilito." },
      { q: "Il sito è veloce da caricare anche se contiene molte foto in alta qualità?", a: "Sì, utilizziamo formati moderni WebP ed eliminiamo qualsiasi rallentamento con caricamento istantaneo in meno di un secondo." }
    ]
  },

  "siti-web-hotel": {
    slug: "siti-web-hotel",
    category: "settore",
    categoryLabel: "Settore Alberghiero & Resort",
    keywordTarget: "realizzazione siti web per hotel",
    title: "Siti Web per Hotel, Alberghi & Resort",
    badge: "Hotel & Ospitalità",
    heroHeadline: "Siti Web per Hotel con Prenotazioni Dirette",
    heroSubheadline: "Galleria fotografica immersiva delle camere, sistema di prenotazione diretta, sito multilingua per ospiti internazionali e valorizzazione del territorio.",
    metaTitle: "Realizzazione Siti Web per Hotel e Alberghi | Moockup Studio",
    metaDescription: "Creazione siti web per hotel con booking engine integrato. Aumenta le prenotazioni dirette dal tuo sito ufficiale e posizionati su Google.",
    coverImage: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80",
    tagline: "Fai vivere l'esperienza del tuo hotel già dal sito web e accogli gli ospiti con un sistema di prenotazione intuitivo e veloce.",
    sectorOrCityHighlights: [
      { title: "Booking Engine & Channel Manager", desc: "Disponibilità sincronizzata con i tuoi canali per evitare qualsiasi rischio di overbooking." },
      { title: "Sito Multilingua Impeccabile", desc: "Versioni in inglese, tedesco, francese e spagnolo per catturare i flussi turistici internazionali." },
      { title: "Garanzia Miglior Tariffa Visibile", desc: "Badge e rassicurazioni chiare che confermano all'ospite che sul sito ufficiale spende meno." },
      { title: "Virtual Tour & Foto ad Alta Emozione", desc: "Valorizzazione di suite, piscina, ristorante interno, spa e sale meeting." },
    ],
    includedFeatures: [
      "Schede dettagliate per ogni tipologia di camera con dotazioni",
      "Modulo preventivi su misura per gruppi, matrimoni o soggiorni lunghi",
      "Guida alle attrazioni e ai monumenti del territorio",
      "Modulo WhatsApp concierge e transfer aeroporto/stazione",
    ],
    metricsTarget: "+45% di richieste e prenotazioni provenienti direttamente dal sito ufficiale",
    faqList: [
      { q: "Come funziona il sistema di prenotazione diretta sul sito dell'hotel?", a: "Integriamo un motore di prenotazione veloce e intuitivo, oppure colleghiamo il vostro channel manager attuale per consentire agli ospiti di prenotare direttamente online in pochi click." },
      { q: "Il sito è disponibile in più lingue per i turisti stranieri?", a: "Sì, configuriamo versioni in inglese, tedesco, francese o altre lingue con selettore intuitivo a bandierine." },
      { q: "Possiamo mostrare la gallery delle camere, della piscina e della colazione?", a: "Sì, con layout fotografico immersivo, virtual tour e schede dettagliate con i servizi inclusi in ogni camera." },
      { q: "Fornite indicazioni GPS e mappe interattive per raggiungere la struttura?", a: "Includiamo mappe Google Maps interattive con coordinate precise, fermate bus/treni e parcheggi convenzionati." },
      { q: "Come gestite la cancellazione delle prenotazioni e le politiche tariffarie?", a: "Pubblichiamo in modo trasparente condizioni di soggiorno, orari check-in/out e politiche di rimborso a tutela della struttura." }
    ]
  },

  "siti-web-bed-and-breakfast": {
    slug: "siti-web-bed-and-breakfast",
    category: "settore",
    categoryLabel: "B&B, Affittacamere & Case Vacanze",
    keywordTarget: "realizzazione siti web per bed and breakfast",
    title: "Siti Web per Bed and Breakfast & Case Vacanze",
    badge: "B&B & Case Vacanze",
    heroHeadline: "Siti Web per Bed and Breakfast & Strutture",
    heroSubheadline: "Presenta il calore dell'ospitalità della tua struttura, le colazioni fatte in casa e le camere accoglienti. Ricevi richieste di soggiorno dirette da viaggiatori italiani e stranieri.",
    metaTitle: "Realizzazione Siti Web per Bed and Breakfast e B&B | Moockup Studio",
    metaDescription: "Sviluppo siti web per B&B, affittacamere e dimore di charme. Calendario disponibilità, prenotazioni dirette e posizionamento Google Maps.",
    coverImage: "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=80",
    tagline: "I viaggiatori amano il contatto umano con il gestore: dai loro un motivo per contattarti direttamente.",
    sectorOrCityHighlights: [
      { title: "Sincronizzazione Calendari Rapida", desc: "Collega i calendari con i tuoi canali di prenotazione per avere date sempre aggiornate in automatico." },
      { title: "Pulsante WhatsApp per Richieste Immediate", desc: "I turisti chiedono informazioni e disponibilità in tempo reale anche last-minute." },
      { title: "Racconto del Territorio & Consigli Locali", desc: "Mappa con ristoranti convenzionati, spiagge, escursioni e collegamenti con stazioni e aeroporti." },
      { title: "Check-in Digitale & Istruzioni Ospiti", desc: "Invio automatico di codici tastierino, regole della casa e mappa turistica prima dell arrivo." },
    ],
    includedFeatures: [
      "Foto gallery camere e ambienti comuni con colazione in risalto",
      "Listino stagionale prezzi (alta, media e bassa stagione)",
      "Form richiesta preventivo con calcolo automatico notti",
      "Guida digitale PDF con i migliori posti e ristoranti tipici",
    ],
    metricsTarget: "Incremento significativo delle prenotazioni dirette e visibilità turistica",
    faqList: [
      { q: "Possiamo sincronizzare le disponibilità delle stanze con i calendari esterni?", a: "Sì, colleghiamo i calendari iCal o il channel manager per mantenere le disponibilità sempre allineate in tempo reale." },
      { q: "I viaggiatori possono verificare subito se una camera è libera?", a: "Sì, con calendario dinamico a colori e richiesta immediata via form o contatto WhatsApp diretto con l'host." },
      { q: "Possiamo inserire una guida locale con i migliori posti dove mangiare e visitare?", a: "Certamente: la guida del territorio aumenta il valore del soggiorno e migliora notevolmente il posizionamento SEO sui motori di ricerca." },
      { q: "Il sito supporta la richiesta di caparra o pagamento con carta di credito?", a: "Sì, possiamo integrare Stripe o PayPal per il versamento della caparra confirmatoria in totale sicurezza." },
      { q: "Quanto tempo occorre per avere il sito del B&B online?", a: "In circa 30-45 giorni lavorativi il sito è pronto, collaudato e indicizzato su Google." }
    ]
  },

  "siti-web-commercialisti": {
    slug: "siti-web-commercialisti",
    category: "settore",
    categoryLabel: "Studi Commercialisti & Tributari",
    keywordTarget: "realizzazione siti web per commercialisti",
    title: "Siti Web per Commercialisti & Consulenti Fiscali",
    badge: "Commercialisti & Fiscale",
    heroHeadline: "Siti Web per Commercialisti & Studi Tributari",
    heroSubheadline: "Realizziamo siti web chiari e autorevoli per presentare le aree di consulenza societaria, tributaria e strategica del tuo studio a imprese e professionisti.",
    metaTitle: "Realizzazione Siti Web per Commercialisti & Studi Fiscale | Moockup Studio",
    metaDescription: "Sviluppo siti web professionali per commercialisti, revisori contabili e consulenti fiscali. Genera contatti con imprenditori e PMI.",
    coverImage: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=1200&q=80",
    tagline: "Gli imprenditori cercano un partner che li aiuti a ottimizzare le imposte e cogliere i bandi europei.",
    sectorOrCityHighlights: [
      { title: "Consulenza ad Alto Valore Aggiunto", desc: "Sezioni dedicate a pianificazione fiscale, bandi regionali, crediti d'imposta e perizie." },
      { title: "Area Circolari & Aggiornamenti Normativi", desc: "Sezione per pubblicare novità fiscali, consolidando autorevolezza e posizionamento SEO." },
      { title: "Richiesta Consulenza Iniziale Riservata", desc: "Form di contatto discreto con domande filtro sul tipo di attività (S.r.l., forfettario, ditta)." },
      { title: "Immagine Rigorosa e Moderna", desc: "Design elegante che ispira affidabilità contabile e modernità tecnologica." },
    ],
    includedFeatures: [
      "Presentazione dei professionisti dello studio e qualifiche",
      "Form protetto con crittografia SSL per invio documenti contabili",
      "Sezione dedicate a Partite IVA forfettarie e societarie",
      "Canale prioritario per consulenza e cambio commercialista",
    ],
    metricsTarget: "+40% di richieste qualificate da aziende in cerca di cambio commercialista",
    faqList: [
      { q: "Come impostate la comunicazione e i contenuti per uno studio di commercialisti?", a: "Impostiamo una comunicazione autorevole orientata all'informazione chiara sui servizi contabili, fiscali e di consulenza societaria." },
      { q: "È possibile creare un'area riservata o di invio documenti per i clienti dello studio?", a: "Sì, possiamo predisporre link sicuri al gestionale o moduli crittografati per lo scambio di F24, bilanci e fatture." },
      { q: "Possiamo pubblicare circolari e scadenziari fiscali aggiornati?", a: "Sì, puoi condividere articoli e scadenze mensili per informare i clienti e posizionarti su Google per ricerche fiscali e societarie." },
      { q: "Come aiuta lo studio ad attirare nuove aziende e partite IVA?", a: "Creiamo pagine dedicate ai servizi specifici (consulenza societaria, contabilità forfettari, revisione legale) geolocalizzate per la tua città." },
      { q: "I potenziali clienti possono richiedere un primo colloquio conoscitivo?", a: "Sì, con apposito form per selezionare il tipo di consulenza richiesta e allegare eventuali note preliminari." }
    ]
  },

  "siti-web-avvocati": {
    slug: "siti-web-avvocati",
    category: "settore",
    categoryLabel: "Studi Legali & Forensi",
    keywordTarget: "realizzazione siti web per avvocati",
    title: "Siti Web per Avvocati & Studi Legali",
    badge: "Studi Legali & Forensi",
    heroHeadline: "Siti Web per Avvocati & Studi Legali",
    heroSubheadline: "Sviluppiamo la presenza digitale di avvocati e studi legali specializzati in ambito civile, penale, lavoro, famiglia e d'affari.",
    metaTitle: "Realizzazione Siti Web per Avvocati e Studi Legali | Moockup Studio",
    metaDescription: "Siti web eleganti e autorevoli per avvocati e studi legali. Posizionati su Google per le tue aree di competenza e ricevi contatti qualificati.",
    coverImage: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=1200&q=80",
    tagline: "Chi cerca un avvocato vive un momento delicato. Il tuo sito deve trasmettere certezza, competenza e assoluta discrezione.",
    sectorOrCityHighlights: [
      { title: "Pagine Dedicate per Branca di Diritto", desc: "Civile, penale, lavoro, famiglia, risarcimento danni e societario per presidiare ricerche Google mirate." },
      { title: "Sobrietà Informativa ed Eleganza Visiva", desc: "Linguaggio rigoroso, assenza di claim sensazionalistici e grafica istituzionale d'alto profilo." },
      { title: "Canale Riservato di Primo Contatto", desc: "Crittografia per la tutela del segreto professionale sin dal primo messaggio inviato." },
      { title: "Curriculum dei Soci & Casi di Successo", desc: "Pubblicazioni, sentenze di riferimento e fori di abilitazione dei legali dello studio." },
    ],
    includedFeatures: [
      "Pagine per singola specializzazione giuridica",
      "Mappa studio con indicazioni di arrivo",
      "Form per richiedere un appuntamento in sede o consulenza telematica",
      "Canale crittografato per pareri legali preliminari",
    ],
    metricsTarget: "Posizionamento in prima pagina per controversie e ricerche legali sul territorio",
    faqList: [
      { q: "Come strutturate la comunicazione informativa per uno studio legale?", a: "Curiamo contenuti informativi chiari, eleganti e trasparenti, focalizzati sulle aree di competenza dello studio e sulle modalità di contatto per consulenze." },
      { q: "Come vengono suddivise le aree di competenza dello studio?", a: "Creiamo pagine dedicate a ciascuna branca del diritto (civile, penale, lavoro, famiglia, tributario) per valorizzare le specializzazioni dei legali." },
      { q: "I clienti possono richiedere una prima consulenza o parere legale preliminare?", a: "Sì, con un modulo riservato e protetto da crittografia SSL conforme al segreto professionale e alla privacy GDPR." },
      { q: "Possiamo inserire il curriculum e le pubblicazioni dei professionisti dello studio?", a: "Certamente: le biografie con titoli, master e docenze aumentano la fiducia e l'autorevolezza percepita dal potenziale assistito." },
      { q: "Il sito si posiziona su Google quando un cittadino cerca assistenza legale in città?", a: "Sì, ottimizziamo la SEO locale per parole chiave territoriali come 'avvocato giuslavorista [città]' o 'studio legale diritto di famiglia'." }
    ]
  },

  "siti-web-consulenti-del-lavoro": {
    slug: "siti-web-consulenti-del-lavoro",
    category: "settore",
    categoryLabel: "Consulenza del Lavoro & Risorse Umane",
    keywordTarget: "realizzazione siti web per consulenti del lavoro",
    title: "Siti Web per Consulenti del Lavoro",
    badge: "Lavoro & HR Advisory",
    heroHeadline: "Siti Web per Consulenti del Lavoro & HR",
    heroSubheadline: "Presenta i servizi di elaborazione buste paga, contrattualistica aziendale, relazioni sindacali e welfare alle aziende del territorio in cerca di un consulente affidabile.",
    metaTitle: "Realizzazione Siti Web Consulenti del Lavoro | Moockup Studio",
    metaDescription: "Sviluppo siti web per consulenti del lavoro e studi di elaborazione paghe. Attrarre PMI e aziende per gestione del personale e contenziosi.",
    coverImage: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80",
    tagline: "Aiuta gli imprenditori a gestire il loro bene più prezioso: le persone e la conformità contrattuale.",
    sectorOrCityHighlights: [
      { title: "Servizi di Amministrazione del Personale", desc: "Elaborazione cedolini, assunzioni agevolate, ammortizzatori sociali e contrattazione di secondo livello." },
      { title: "Welfare Aziendale & Bonus Lavoratori", desc: "Piani personalizzati per ridurre il cuneo fiscale e incentivare la produttività aziendale." },
      { title: "Canale Diretto per Richiesta Preventivi Payroll", desc: "Modulo di calcolo orientativo in base al numero di dipendenti dell'azienda cliente." },
      { title: "Assistenza Ispettiva & Due Diligence", desc: "Supporto strategico per controlli INPS, ITL, salute e sicurezza sul lavoro e compliance aziendale." },
    ],
    includedFeatures: [
      "Sezione dedicate a CCNL e consulenza vertenze di lavoro",
      "Presentazione delle qualifiche e dei servizi dello studio",
      "Area download circolari e moduli per le aziende clienti",
      "Simulatore di costo aziendale del lavoratore dipendente",
    ],
    metricsTarget: "Nuovi mandati stabili di gestione paghe da PMI locali",
    faqList: [
      { q: "Come presentate i servizi di consulenza per le aziende clienti?", a: "Organizziamo le sezioni con linguaggio chiaro per titolari d'azienda e manager, valorizzando payroll, contrattualistica e welfare aziendale." },
      { q: "Possiamo illustrare i servizi dedicati a buste paga, welfare aziendale e vertenze?", a: "Sì, organizziamo le sezioni con linguaggio chiaro per imprenditori, direttori HR e titolari di piccole e medie imprese." },
      { q: "È possibile inserire un modulo per la richiesta di check-up del costo del lavoro?", a: "Sì, un lead magnet efficace che permette alle aziende di richiedere un audit preliminare sui costi del personale." },
      { q: "Possiamo pubblicare aggiornamenti sui bandi regionali di assunzione e sgravi contributivi?", a: "Certamente: pubblicare le novità su esoneri e incentivi all'assunzione attira titolari d'azienda interessati ad assumere." },
      { q: "I clienti possono scaricare circolari periodiche dello studio?", a: "Sì, tramite un archivio PDF scaricabile o protetto da password." }
    ]
  },

  "siti-web-fisioterapisti": {
    slug: "siti-web-fisioterapisti",
    category: "settore",
    categoryLabel: "Fisioterapia & Riabilitazione Motoria",
    keywordTarget: "realizzazione siti web per fisioterapisti",
    title: "Siti Web per Fisioterapisti & Centri Riabilitativi",
    badge: "Fisioterapia & Salute",
    heroHeadline: "Siti Web per Fisioterapisti & Centri Medici",
    heroSubheadline: "Progettiamo sezioni dedicate per presentare le terapie e i macchinari del tuo studio, schede informative chiare e moduli per prenotare visite e sedute direttamente dal sito.",
    metaTitle: "Realizzazione Siti Web per Fisioterapisti e Osteopati | Moockup Studio",
    metaDescription: "Creazione siti web per studi di fisioterapia, osteopatia e riabilitazione. Spiegazione terapie, prenotazione sedute e visibilità locale Google.",
    coverImage: "https://images.unsplash.com/photo-1519823551278-64ac92734fb1?auto=format&fit=crop&w=1200&q=80",
    tagline: "Chi ha dolore alla schiena o alla cervicale vuole una risposta immediata. Fatti trovare subito.",
    sectorOrCityHighlights: [
      { title: "Schede per Terapie e Servizi Trattati", desc: "Sezioni web dedicate per presentare con chiarezza i trattamenti e i percorsi riabilitativi proposti dal tuo studio." },
      { title: "Valorizzazione Tecnologie & Strumentazione", desc: "Pagine vetrina sul sito per illustrare la strumentazione all'avanguardia e i macchinari terapeutici dello studio." },
      { title: "Pulsante SOS Urgenze & Prima Seduta", desc: "Accesso diretto a WhatsApp per fissare una valutazione funzionale immediata." },
      { title: "Percorsi Preventivi & Rieducazione Posturale", desc: "Schede informative ed esercizi di mantenimento per evitare recidive e fidelizzare il paziente." },
    ],
    includedFeatures: [
      "Presentazione dei titoli professionali, specializzazioni e corsi accreditati",
      "Fotografie della palestra riabilitativa e delle cabine fisioterapiche",
      "Guida agli esercizi posturali preventivi per generare traffico organico",
      "Scheda esercizi di scarico posturale scaricabile in PDF",
    ],
    metricsTarget: "30+ nuove richieste di prima visita al mese da pazienti locali",
    faqList: [
      { q: "Come vengono presentate le terapie e i percorsi riabilitativi?", a: "Descriviamo con chiarezza e semplicità le terapie manuali e strumentali, spiegando in modo pratico i benefici per le diverse patologie." },
      { q: "I pazienti possono prenotare la prima valutazione fisioterapica dal sito?", a: "Sì, con form rapido o pulsante WhatsApp per fissare data e orario con la segreteria dello studio." },
      { q: "Possiamo descrivere le tecnologie strumentali utilizzate (Tecar, Laser, Onde d'Urto)?", a: "Sì, con spiegazioni chiare dei benefici terapeutici per patologie come mal di schiena, tendiniti e riabilitazione post-chirurgica." },
      { q: "È possibile inserire video o consigli di ginnastica posturale ed esercizi a casa?", a: "Sì, possiamo integrare video YouTube/Vimeo o schede informative per supportare il paziente durante il recupero." },
      { q: "Come posizionate lo studio per chi cerca fisioterapista vicino a casa?", a: "Ottimizziamo la scheda Google Maps e creiamo contenuti mirati alle patologie più ricercate nella tua area geografica." }
    ]
  },

  "siti-web-dietologi": {
    slug: "siti-web-dietologi",
    category: "settore",
    categoryLabel: "Medicina della Nutrizione & Dietologia",
    keywordTarget: "realizzazione siti web per dietologi",
    title: "Siti Web per Medici Dietologi",
    badge: "Medicina & Dietologia",
    heroHeadline: "Siti Web per Medici Dietologi & Nutrizione",
    heroSubheadline: "Creiamo siti web autorevoli per presentare i percorsi clinici, la metodologia medica e le aree specialistiche del tuo studio, con moduli intuitivi per la richiesta di prima visita.",
    metaTitle: "Realizzazione Siti Web Medici Dietologi | Moockup Studio",
    metaDescription: "Sviluppo siti web autorevoli per medici dietologi e specialisti in scienza dell'alimentazione. Prenotazione visita e percorsi nutrizionali clinici.",
    coverImage: "https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=1200&q=80",
    tagline: "La salute non è una moda: distinguiti dai finti esperti con la tua autorevolezza medica.",
    sectorOrCityHighlights: [
      { title: "Percorsi Clinici Basati su Evidenze", desc: "Trattamento per sindrome metabolica, intolleranze certificate, supporto nutrizionale oncologico e pediatrico." },
      { title: "Sezione Informativa Prima Visita", desc: "Spazio web chiaro per illustrare ai pazienti le modalità di svolgimento della prima visita medica e come prenotare." },
      { title: "Canale Riservato per Teleconsulti", desc: "Possibilità di prenotare visite di controllo anche in modalità videoconsulenza online." },
      { title: "Monitoraggio Progressi & Diario Alimentare", desc: "Strumenti per seguire il percorso del paziente, grafici di andamento peso e visite di controllo." },
    ],
    includedFeatures: [
      "Profilo medico del dottore con titoli accademici e pubblicazioni",
      "Form di primo contatto con raccolta esigenze preliminari",
      "Sezione informativa sugli errori delle diete fai-da-te",
      "Diario alimentare scaricabile e check-up pre-visita",
    ],
    metricsTarget: "Pazienti motivati e fidelizzati a piani terapeutici completi",
    faqList: [
      { q: "Come impostate i contenuti per un medico dietologo?", a: "Impostiamo testi scientifici ed equilibrati, con linguaggio accessibile ma rigoroso, valorizzando il metodo clinico e l'ascolto del paziente." },
      { q: "I pazienti possono richiedere una prima visita nutrizionale e anamnestica?", a: "Sì, con modulo confidenziale conforme alla privacy dei dati sanitari per raccogliere le prime indicazioni cliniche." },
      { q: "Possiamo descrivere i percorsi per patologie (diabete, ipertensione, dislipidemie)?", a: "Sì, sezioni scientifiche rigorose che spiegano come la terapia nutrizionale medica coadiuva la cura delle principali patologie." },
      { q: "È possibile integrare un servizio di telemedicina o consulenza online?", a: "Sì, possiamo collegare piattaforme sicure per video-visite e invio protetto dei piani alimentari personalizzati." },
      { q: "Il sito è leggibile e rassicurante per chi ha timore di iniziare un percorso nutrizionale?", a: "Curiamo la grafica e il tono di voce per trasmettere empatia, professionalità medica e assenza di giudizio." }
    ]
  },

  "siti-web-nutrizionisti": {
    slug: "siti-web-nutrizionisti",
    category: "settore",
    categoryLabel: "Biologia della Nutrizione",
    keywordTarget: "realizzazione siti web per nutrizionisti",
    title: "Siti Web per Biologi Nutrizionisti",
    badge: "Nutrizione & Benessere",
    heroHeadline: "Siti Web per Biologi Nutrizionisti",
    heroSubheadline: "Sviluppiamo siti web moderni ed empatici per valorizzare i percorsi nutrizionali, il metodo di consulenza e consentire la prenotazione delle visite in studio o online.",
    metaTitle: "Realizzazione Siti Web per Biologi Nutrizionisti | Moockup Studio",
    metaDescription: "Creazione siti web moderni per nutrizionisti. Piani alimentari personalizzati, testimonianze e prenotazione prima consulenza in studio o online.",
    coverImage: "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=1200&q=80",
    tagline: "Insegna un vero stile di vita sano: trasforma chi cerca una dieta in un paziente entusiasta.",
    sectorOrCityHighlights: [
      { title: "Specializzazioni Nutrizionali Mirate", desc: "Nutrizione sportiva, PCOS, gonfiore addominale, alimentazione vegetariana e menopausa." },
      { title: "Testimonianze & Successi Reali", desc: "Racconti di pazienti che hanno migliorato energia, analisi e composizione corporea." },
      { title: "Prenotazione Visita in Studio o Online", desc: "Calendario integrato per gestire appuntamenti sia in presenza sia da remoto in tutta Italia." },
      { title: "Ricettari Sani & Piani Settimanali", desc: "Sezione per scaricare menu settimanali bilanciati, liste della spesa intelligenti ed e-book di ricette." },
    ],
    includedFeatures: [
      "Integrazione profilo Instagram con ricette e consigli",
      "Calcolatore orientativo fabbisogno o modulo abitudini alimentari",
      "Mappa degli studi in cui si riceve su appuntamento",
      "Lista della spesa intelligente e guida alle etichette",
    ],
    metricsTarget: "+70% di visite private fissate direttamente dai canali digitali",
    faqList: [
      { q: "Come presentate i piani nutrizionali ed educativi sul sito?", a: "Strutturiamo sezioni specifiche per ogni tipologia (sportivi, gravidanza, intolleranze, ricomposizione corporea) con spiegazione del metodo di lavoro." },
      { q: "Possiamo illustrare i percorsi di educazione alimentare e nutrizione sportiva?", a: "Certamente, suddivisi per target: dimagrimento sano, atleti, gravidanza, intolleranze e nutrizione vegetariana/vegana." },
      { q: "I pazienti possono prenotare visite in studio o follow-up di controllo?", a: "Sì, con calendario integrato o contatto rapido WhatsApp per facilitare la gestione degli appuntamenti." },
      { q: "Possiamo pubblicare un blog con ricette sane e consigli nutrizionali?", a: "Sì, un blog culinario-nutrizionale è il miglior strumento per posizionarsi su Google e fidelizzare i pazienti." },
      { q: "Come gestite la spiegazione dell'esame bioimpedenziometrico (BIA)?", a: "Spieghiamo in modo visivo e semplice cosa misura la BIA (massa magra, massa grassa, idratazione) e perché è utile." }
    ]
  },

  "siti-web-negozi-animali": {
    slug: "siti-web-negozi-animali",
    category: "settore",
    categoryLabel: "Pet Shop & Articoli per Animali",
    keywordTarget: "realizzazione siti web per negozi di animali",
    title: "Siti Web per Negozi di Animali & Pet Shop",
    badge: "Pet Shop & Cura Animali",
    heroHeadline: "Siti Web per Pet Shop & Negozi di Animali",
    heroSubheadline: "Porta il tuo negozio per cani, gatti e animali sul web: catalogo alimenti monoproteici, prenotazione lavaggio e toelettatura, consegne a domicilio nel quartiere.",
    metaTitle: "Realizzazione Siti Web per Negozi di Animali e Pet Shop | Moockup Studio",
    metaDescription: "Sviluppo siti web ed e-commerce per pet shop. Vendita alimenti per animali, prenotazione toelettatura e fidelizzazione clienti del territorio.",
    coverImage: "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?auto=format&fit=crop&w=1200&q=80",
    tagline: "I proprietari di pet cercano solo il meglio per i propri cuccioli: diventa il punto di riferimento.",
    sectorOrCityHighlights: [
      { title: "Modulo Prenotazione Servizi e Toelettatura", desc: "Interfaccia web intuitiva dove i clienti possono prenotare orari per toelettatura, lavaggio e trattamenti offerti dal negozio." },
      { title: "Catalogo Alimenti Speciali & Diete Veterinarie", desc: "Grain-free, monoproteici e parafarmaci per animali catalogati per marca ed esigenza." },
      { title: "Consegna Sacchi Pesanti a Domicilio", desc: "Servizio di consegna rapida del mangime a casa per fidelizzare le famiglie locali." },
      { title: "Tessera Fedelta & Punti Crocchette", desc: "Programma fedelta digitale per premiare gli acquisti ricorrenti di cibo e accessori per animali." },
    ],
    includedFeatures: [
      "Catalogo prodotti con promozioni del mese sempre aggiornate",
      "Modulo per prenotare i servizi di toelettatura",
      "Consigli nutrizionali per cuccioli e cani anziani",
      "Avviso automatico WhatsApp per riordino cibo",
    ],
    metricsTarget: "Raddoppio dei passaggi in negozio e ordini ricorrenti di cibo per animali",
    faqList: [
      { q: "Possiamo vendere alimenti per cani e gatti, antiparassitari e accessori online?", a: "Sì, con catalogo suddiviso per specie (cani, gatti, roditori, volatili, acquariologia), filtri per marca e carrello sicuro." },
      { q: "I clienti possono prenotare il servizio di toelettatura direttamente dal sito?", a: "Sì, con form per scegliere il servizio (bagno igienizzante, tosatura, taglio a forbice) e taglia dell'animale." },
      { q: "Possiamo impostare la consegna a domicilio per sacchi di cibo pesanti?", a: "Sì, configuriamo zone di consegna per offrire il servizio delivery." },
      { q: "È possibile gestire una raccolta punti o fidelity card online?", a: "Sì, possiamo integrare coupon sconto e tessere fedeltà digitali per premiare i clienti abituali." },
      { q: "Il catalogo è aggiornabile facilmente con nuove marche o promozioni volantino?", a: "Sì, ti formiamo per caricare offerte speciali e marchi premium in autonomia in pochi clic." }
    ]
  },

  "siti-web-elettricisti": {
    slug: "siti-web-elettricisti",
    category: "settore",
    categoryLabel: "Impianti Elettrici & Domotica",
    keywordTarget: "realizzazione siti web per elettricisti",
    title: "Siti Web per Elettricisti & Installatori",
    badge: "Elettricità & Pronto Intervento",
    heroHeadline: "Siti Web per Elettricisti & Pronto Intervento",
    heroSubheadline: "Intercetta i clienti che hanno un guasto urgente o chi cerca professionisti abilitati per certificazione impianti, installazione colonnine di ricarica auto e fotovoltaico.",
    metaTitle: "Realizzazione Siti Web Elettricisti e Impiantisti | Moockup Studio",
    metaDescription: "Creazione siti web per ditte elettriche ed elettricisti. Pronto intervento guasti, impianti civili e industriali, domotica e preventivi rapidi.",
    coverImage: "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?auto=format&fit=crop&w=1200&q=80",
    tagline: "Quando salta la corrente o c'è un cortocircuito, la gente cerca 'elettricista urgente' sul cellulare.",
    sectorOrCityHighlights: [
      { title: "Pulsante SOS Chiamata di Emergenza", desc: "Tasto fisso per chiamare il pronto intervento in 1 secondo direttamente dallo smartphone." },
      { title: "Certificazione Impianti & Dichiarazione di Conformità", desc: "Rassicura i clienti privati e le aziende sulla piena abilitazione." },
      { title: "Nuove Tecnologie: Fotovoltaico & Wallbox", desc: "Pagine dedicate a batterie di accumulo, pannelli solari e colonnine di ricarica veicoli elettrici." },
      { title: "Impianti Antintrusione & Videosorveglianza", desc: "Installazione allarmi smart, telecamere IP collegate a smartphone e controllo accessi." },
    ],
    includedFeatures: [
      "Tracciamento chiamate telefoniche per monitorare gli interventi acquisiti",
      "Area geografica di copertura comuni e province servite",
      "Modulo richiesta preventivo gratuito per ristrutturazioni",
      "Listino trasparente interventi standard e costi orari",
    ],
    metricsTarget: "Compari primo su Google quando c'è un'urgenza elettrica nella tua zona",
    faqList: [
      { q: "Il sito permette chiamate rapide di pronto intervento in caso di guasto elettrico?", a: "Sì, con pulsante 'Pronto Intervento Elettrico - Chiama Ora' visibile costantemente in cima alla schermata su smartphone." },
      { q: "Possiamo spiegare le certificazioni di conformità impianto?", a: "Sì, evidenziamo le abilitazioni di legge e il rilascio della dichiarazione di conformità a garanzia di sicurezza e trasparenza." },
      { q: "Possiamo promuovere installazioni di fotovoltaico, colonnine di ricarica auto e domotica?", a: "Sì, con pagine dedicate ai risparmi energetici, agli incentivi statali e al controllo da smartphone." },
      { q: "Il sito ci aiuta a trovare clienti sia tra privati che tra aziende e negozi?", a: "Creiamo percorsi separati: manutenzione per civili abitazioni e impianti industriali/commerciali per aziende." },
      { q: "Come geolocalizzate il servizio nei comuni e nelle zone coperte dalla nostra squadra?", a: "Ottimizziamo il sito per comparire nelle ricerche 'elettricista vicino a me' e nei paesi limitrofi alla tua sede." }
    ]
  },

  "siti-web-notai": {
    slug: "siti-web-notai",
    category: "settore",
    categoryLabel: "Studi Notarili",
    keywordTarget: "realizzazione siti web per notai",
    title: "Siti Web per Notai & Studi Notarili",
    badge: "Studi Notarili Ufficiali",
    heroHeadline: "Siti Web per Notai e Studi Notarili",
    heroSubheadline: "Presenta le aree di competenza notarile (compravendite immobiliari, mutui, costituzione società, successioni e testamenti) facilitando l'invio dei documenti propedeutici all'atto.",
    metaTitle: "Realizzazione Siti Web Notai e Studi Notarili | Moockup Studio",
    metaDescription: "Sviluppo siti web istituzionali e autorevoli per notai. Liste documenti per atti di compravendita, mutuo, societario e successioni.",
    coverImage: "https://images.unsplash.com/photo-1505664194779-8beaceb93744?auto=format&fit=crop&w=1200&q=80",
    tagline: "Il notaio è garante di legalità e sicurezza: il sito deve rispecchiare la massima affidabilità.",
    sectorOrCityHighlights: [
      { title: "Checklist Documenti per Ogni Tipologia di Atto", desc: "I clienti scaricano subito l'elenco dei documenti necessari per rogito casa, mutuo o donazione." },
      { title: "Richiesta Preventivo Costi Atto e Imposte", desc: "Spiegazione chiara delle imposte di registro, ipotecarie e catastali riscosse per lo Stato." },
      { title: "Stile Grafico Sobrio ed Elegante", desc: "Assoluto rispetto dei doveri di dignità e decoro dell'ordinamento del Notariato." },
      { title: "Consulenza Successoria & Pianificazione Patrimoniale", desc: "Spiegazione passo dopo passo di testamenti biologici, donazioni e passaggi generazionali aziendali." },
    ],
    includedFeatures: [
      "Sedi e recapiti degli studi principali e secondari con orari di ricevimento",
      "Modulo cifrato per inoltro preliminari di compravendita e visure",
      "Profili del Notaio titolare e dei collaboratori d'ufficio",
      "Guida alle agevolazioni prima casa per giovani under 36",
    ],
    metricsTarget: "Drastica riduzione dei tempi di raccolta documentale pre-stipula",
    faqList: [
      { q: "Quale stile grafico e comunicativo adottate per un sito notarile?", a: "Adottiamo un'estetica sobria e autorevole con tipografia raffinata, sezioni informative per i cittadini e percorsi chiari per richiedere visure e fissare rogiti." },
      { q: "I clienti possono inviare la documentazione per rogiti immobiliari, mutui o successioni?", a: "Sì, predisponiamo checklist chiare e moduli protetti per caricare visure, atti di provenienza e documenti d'identità." },
      { q: "Possiamo spiegare gli atti societari (costituzione SRL, cessione quote, fusioni)?", a: "Sì, pagine informative dedicate al diritto societario per orientare imprenditori, commercialisti e startup." },
      { q: "Come viene garantita la privacy e la riservatezza dei dati personali e patrimoniali?", a: "Applichiamo protocolli di sicurezza avanzati con certificati crittografici SSL e conformità stringente al GDPR." },
      { q: "I cittadini possono richiedere un preventivo trasparente sui costi d'atto e imposte?", a: "Sì, un form guidato permette di specificare la tipologia di atto per ricevere un prospetto dettagliato delle imposte e dell'onorario." }
    ]
  },

  "siti-web-architetti": {
    slug: "siti-web-architetti",
    category: "settore",
    categoryLabel: "Architettura & Interior Design",
    keywordTarget: "realizzazione siti web per architetti",
    title: "Siti Web per Architetti & Studi di Progettazione",
    badge: "Architettura & Design",
    heroHeadline: "Siti Web per Architetti & Interior Designer",
    heroSubheadline: "Trasforma i tuoi progetti in opere d'arte visive. Mostra rendering 3D, ristrutturazioni prima e dopo, layout planimetrici e cattura committenti di fascia alta.",
    metaTitle: "Realizzazione Siti Web Architetti e Interior Designer | Moockup Studio",
    metaDescription: "Creazione siti web per architetti, studi di architettura e interior designer. Portfolio fotografico immersivo, visual design e clienti privati/contract.",
    coverImage: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
    tagline: "Un architetto progetta bellezza e armonia: il tuo sito web deve essere all'altezza della tua firma.",
    sectorOrCityHighlights: [
      { title: "Portfolio a Tutto Schermo & Alta Risoluzione", desc: "Gallerie fluide con navigazione minimale per far parlare le fotografie degli ambienti realizzati." },
      { title: "Schede Progetto Dettagliate", desc: "Concept, materiali utilizzati, sfide strutturali, metrature e foto dei dettagli architettonici." },
      { title: "Target Privati di Pregio & Settore Commerciale", desc: "Strutturazione per attrarre ville unifamiliari, uffici direzionali e locali di tendenza." },
      { title: "Sezione Servizi Tecnici & Progettazione", desc: "Spazio dedicato sul sito per illustrare i servizi di progettazione architettonica, direzione lavori e pratiche dello studio." },
    ],
    includedFeatures: [
      "Layout minimalista con tipografia raffinata",
      "Sezione 'Filosofia dello Studio' e metodo di progettazione",
      "Modulo per richiedere un sopralluogo e studio di fattibilità",
      "Rendering 3D interattivo e tavole dei materiali da capitolato",
    ],
    metricsTarget: "Attrazione di commesse di ristrutturazione con budget elevato",
    faqList: [
      { q: "Possiamo mostrare i render 3D e le fotografie dei progetti realizzati?", a: "Sì, creiamo un portfolio visuale immersivo con schede progetto che illustrano concept, materiali impiegati e planimetrie." },
      { q: "Come valorizzate il portfolio e la firma progettuale dello studio di architettura?", a: "Creiamo layout immersivi ad alta risoluzione che mettono al centro le immagini dei progetti, i materiali e la filosofia progettuale dello studio." },
      { q: "Possiamo illustrare i servizi di ristrutturazione chiavi in mano e pratiche edilizie (CILA, SCIA)?", a: "Sì, con spiegazioni chiare dei passaggi burocratici per rassicurare chi desidera ristrutturare casa o locali commerciali." },
      { q: "I potenziali clienti possono richiedere un sopralluogo o studio di fattibilità?", a: "Sì, tramite un modulo con possibilità di allegare piantine catastali o descrivere la metratura dell'immobile." },
      { q: "Il sito si adatta perfettamente alla visione da tablet e schermi ad alta risoluzione?", a: "Garantiamo resa impeccabile su display Retina e monitor 4K per valorizzare al massimo dettagli e finiture." }
    ]
  },

  "siti-web-agenzie-viaggio": {
    slug: "siti-web-agenzie-viaggio",
    category: "settore",
    categoryLabel: "Turismo & Tour Operator",
    keywordTarget: "realizzazione siti web per agenzie di viaggio",
    title: "Siti Web per Agenzie di Viaggio & Tour Operator",
    badge: "Viaggi & Tour Operator",
    heroHeadline: "Siti Web per Agenzie di Viaggio & Tour",
    heroSubheadline: "Fai sognare i viaggiatori prima della partenza. Presenta tour organizzati con date e quote, liste nozze interattive e consulenza travel designer personalizzata.",
    metaTitle: "Realizzazione Siti Web Agenzie di Viaggio e Tour Operator | Moockup Studio",
    metaDescription: "Sviluppo siti web per agenzie di viaggi e travel designer. Schede itinerari, gestione lista nozze online, viaggi di gruppo e preventivi rapidi.",
    coverImage: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=1200&q=80",
    tagline: "La consulenza di un vero agente di viaggio batte qualsiasi motore online impersonale.",
    sectorOrCityHighlights: [
      { title: "Schede Itinerari Giorno per Giorno", desc: "Mappe del viaggio, tappe incluse, hotel selezionati e quote dettagliate per persona." },
      { title: "Portale Lista Nozze con Regalo Online", desc: "Gli invitati possono regalare quote della luna di miele agli sposi pagando comodamente con carta." },
      { title: "Promozione Partenze di Gruppo & Weekend", desc: "Sezione per riempire rapidamente i posti sui viaggi organizzati in bus o aereo." },
      { title: "Assicurazioni Medico-Bagaglio & Annullamento", desc: "Trasparenza su coperture sanitarie, assistenza h24 in loco e garanzie di rimborso viaggio." },
    ],
    includedFeatures: [
      "Filtro destinazioni per continente, budget e periodo dell'anno",
      "Richiesta preventivo su misura per viaggi su misura intercontinentali",
      "Integrazione WhatsApp per assistenza rapida ai viaggiatori",
      "Assistenza viaggiatori H24 via chat in caso di imprevisti",
    ],
    metricsTarget: "Aumento del 50% delle richieste per viaggi di nozze e tour complessi",
    faqList: [
      { q: "Possiamo pubblicare le offerte per viaggi di nozze, tour guidati e crociere?", a: "Sì, con itinerari giorno per giorno, quote dettagliate, mappe e foto suggestive dei luoghi da visitare." },
      { q: "È possibile gestire una lista nozze online dove gli invitati regalano quote del viaggio?", a: "Sì, gli invitati possono scegliere la tappa da regalare, lasciare una dedica agli sposi e pagare con carta o bonifico." },
      { q: "I clienti possono richiedere un preventivo su misura per viaggi intercontinentali?", a: "Sì, con un form dettagliato che raccoglie budget, periodo, tipologia di viaggio (avventura, relax, cultura) e partecipanti." },
      { q: "Possiamo promuovere gite di gruppo in bus e weekend organizzati?", a: "Sì, con conteggio dei posti rimanenti per riempire rapidamente le partenze con prenotazione diretta." },
      { q: "Il sito include informazioni su visti, passaporti e assicurazioni sanitarie?", a: "Sì, sezioni informative chiare per viaggiare in sicurezza che aumentano l'autorevolezza dell'agenzia." }
    ]
  },

  "siti-web-agriturismi": {
    slug: "siti-web-agriturismi",
    category: "settore",
    categoryLabel: "Agriturismi & Aziende Agricole",
    keywordTarget: "realizzazione siti web per agriturismi",
    title: "Siti Web per Agriturismi & Masserie",
    badge: "Agriturismo & Natura",
    heroHeadline: "Siti Web per Agriturismi & Masserie",
    heroSubheadline: "Realizziamo siti web accoglienti per agriturismi e masserie, con sistemi integrati per prenotare tavoli e pernottamenti online, vetrina prodotti tipici ed eventi.",
    metaTitle: "Realizzazione Siti Web per Agriturismi e Masserie | Moockup Studio",
    metaDescription: "Creazione siti web per agriturismi, masserie e tenute di campagna. Ristorazione contadina, camere, booking diretto e vendita prodotti tipici.",
    coverImage: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=80",
    tagline: "Regala una boccata d'aria fresca ai cittadini: trasforma chi cerca autenticità in ospiti fissi.",
    sectorOrCityHighlights: [
      { title: "Menu Tradizionale con Prodotti Propri", desc: "Racconto dei prodotti coltivati in azienda, delle ricette della nonna e delle carni genuine." },
      { title: "Prenotazione Camere & Piscina Relax", desc: "Camere in pietra, silenzio della campagna ed escursioni a cavallo o in bicicletta." },
      { title: "E-Commerce Olio Extravergine & Marmellate", desc: "Permetti agli ospiti di continuare ad acquistare i prodotti dell'agriturismo anche da casa." },
      { title: "Laboratori Didattici & Degustazioni Guidate", desc: "Attivita esperienziali per famiglie, vendemmia didattica e corsi di cucina tipica regionale." },
    ],
    includedFeatures: [
      "Calendario prenotazione pranzi domenicali e cerimonie all'aperto",
      "Sito multilingua per intercettare i turisti del nord Europa amanti del verde",
      "Mappa stradale con coordinate precise per raggiungere la tenuta",
      "Virtual tour aereo della tenuta e dei vigneti/uliveti",
    ],
    metricsTarget: "Ristorante al completo ogni weekend e camere prenotate con largo anticipo",
    faqList: [
      { q: "Possiamo gestire le prenotazioni dei pranzi domenicali e delle camere contemporaneamente?", a: "Sì, con sezioni distinte: tavolo al ristorante tradizionale e calendario disponibilità per il pernottamento nelle camere." },
      { q: "È possibile vendere online l'olio extravergine, il vino e le confetture dell'azienda agricola?", a: "Sì, possiamo configurare un e-commerce per spedire i prodotti tipici della masseria in tutta Italia ed Europa." },
      { q: "Il sito è consultabile in inglese o tedesco per i viaggiatori internazionali?", a: "Sì, configuriamo versioni multilingua complete con foto suggestive dei vigneti, uliveti e della piscina." },
      { q: "Possiamo promuovere cerimonie all'aperto, battesimi e matrimoni campestri?", a: "Sì, con una galleria fotografica dedicata agli allestimenti tra gli ulivi e modulo per richiedere menu personalizzati." },
      { q: "Come aiutate i clienti a raggiungere la masseria in campagna?", a: "Integriamo mappa satellitare con coordinate GPS precise per Google Maps e Waze per evitare che gli ospiti sbaglino strada." }
    ]
  },

  "siti-web-agenzie-immobiliari": {
    slug: "siti-web-agenzie-immobiliari",
    category: "settore",
    categoryLabel: "Immobiliare & Real Estate",
    keywordTarget: "realizzazione siti web per agenzie immobiliari",
    title: "Siti Web per Agenzie Immobiliari",
    badge: "Real Estate & Immobili",
    heroHeadline: "Siti Web per Agenzie Immobiliari & Real Estate",
    heroSubheadline: "Valorizza il tuo brand, pubblica annunci con planimetrie interattive e attira proprietari che vogliono vendere casa con te.",
    metaTitle: "Realizzazione Siti Web Agenzie Immobiliari | Moockup Studio",
    metaDescription: "Sviluppo siti web per agenzie immobiliari con ricerca avanzata annunci, filtri zona/prezzo, acquisizione incarichi e virtual tour case.",
    coverImage: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1200&q=80",
    tagline: "I migliori affari si fanno quando i proprietari scelgono te per affidarti l'esclusiva di vendita.",
    sectorOrCityHighlights: [
      { title: "Filtro Ricerca Immobili", desc: "Filtra per vendita, affitto, quartiere, numero locali, presenza terrazzo, garage e classe energetica." },
      { title: "Funnel di Valutazione Immobile Gratuita", desc: "Modulo per spingere i proprietari a richiedere una perizia gratuita della propria abitazione." },
      { title: "Annunci ad Alto Impatto Emotivo", desc: "Virtual tour 360°, video walkthrough, planimetrie quotate e schede tecniche esaustive." },
      { title: "Gestione Permute & Consulenza Mutui", desc: "Supporto integrato con mediatori creditizi e calcolo rata per facilitare la compravendita." },
    ],
    includedFeatures: [
      "Integrazione automatica con i gestionali immobiliari",
      "Pulsante WhatsApp per richiedere visita immediata dell'immobile",
      "Sezione immobili di prestigio e nuove costruzioni in cantiere",
      "Valutatore rapido del valore di mercato al mq della casa",
    ],
    metricsTarget: "+35% di mandati di vendita acquisiti direttamente dal sito proprietario",
    faqList: [
      { q: "Possiamo sincronizzare gli annunci immobiliari con i gestionali?", a: "Sì, possiamo integrare i flussi XML per pubblicare e aggiornare automaticamente gli immobili senza doppio lavoro." },
      { q: "I visitatori possono filtrare gli immobili per zona, prezzo, metratura e numero vani?", a: "Sì, con filtri di ricerca immediati, mappa degli annunci e galleria foto ad alta risoluzione con planimetrie." },
      { q: "I proprietari possono richiedere una valutazione gratuita del loro immobile dal sito?", a: "Sì, un form di richiesta stima permette di acquisire nuovi mandati di vendita nella tua città." },
      { q: "Gli acquirenti possono prenotare una visita dell'immobile direttamente via WhatsApp?", a: "Ogni scheda immobile dispone di pulsante 'Richiedi Visita' che invia all'agente il riferimento dell'immobile in chat." }
    ]
  },

  "siti-web-centri-estetici": {
    slug: "siti-web-centri-estetici",
    category: "settore",
    categoryLabel: "Estetica Avanzata & SPA",
    keywordTarget: "realizzazione siti web per centri estetici",
    title: "Siti Web per Centri Estetici & Beauty SPA",
    badge: "Estetica & Benessere",
    heroHeadline: "Siti Web per Centri Estetici & Saloni SPA",
    heroSubheadline: "Metti in mostra i tuoi macchinari all'avanguardia (epilazione laser a diodo, pressoterapia, radiofrequenza) e consenti alle clienti di acquistare pacchetti benessere H24.",
    metaTitle: "Realizzazione Siti Web Centri Estetici e Beauty Farm | Moockup Studio",
    metaDescription: "Creazione siti web per centri estetici e SPA. Listino trattamenti, epilazione definitiva, rimodellamento corpo e prenotazione appuntamenti.",
    coverImage: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80",
    tagline: "Fai sentire le tue clienti speciali prima ancora di entrare in cabina: cura, eleganza e relax.",
    sectorOrCityHighlights: [
      { title: "Schede Trattamenti con Risultati Spiegati", desc: "Dimagrimento, cellulite, anti-age, laminazione ciglia e massaggi con indicazione di sedute necessarie." },
      { title: "Vendita Gift Card & Pacchetti Regalo", desc: "Buoni regalo acquistabili online con messaggio personalizzato per compleanni e festività." },
      { title: "Consulenza Gratuita & Check-Up Corpo", desc: "Modulo di prenotazione per la diagnosi estetica computerizzata iniziale." },
      { title: "Abbonamenti Trattamenti & Fidelity Card", desc: "Pacchetti sedute con sconti progressivi e promozioni stagionali per riempire le cabine tutto l anno." },
    ],
    includedFeatures: [
      "Listino prezzi suddiviso per tipologia di trattamento",
      "Fotografie delle cabine, profumazioni e ambiente rilassante",
      "Integrazione recensioni clienti verificate",
      "Pulsante WhatsApp per richiedere appuntamento",
    ],
    metricsTarget: "Aumento costante della vendita di percorsi e pacchetti ad alto scontrino",
    faqList: [
      { q: "Le clienti possono prenotare trattamenti viso, corpo, laser ed epilazione dal sito?", a: "Sì, con selezione del trattamento desiderato, durata e conferma orario immediata con la reception." },
      { q: "Possiamo spiegare le tecnologie di estetica avanzata (Radiofrequenza, Pressoterapia, Laser a diodo)?", a: "Sì, schede dettagliate che spiegano quante sedute occorrono, i benefici visibili e le controindicazioni." },
      { q: "Possiamo vendere cosmetici domiciliari e pacchetti regalo / voucher benessere?", a: "Sì, le clienti possono acquistare online un coupon regalo per amiche o ordinare creme e sieri da ritirare in loco." },
      { q: "Possiamo pubblicare listino prezzi completo e promozioni del mese?", a: "Sì, un listino chiaro e ben formattato da smartphone evita incomprensioni e aumenta le prenotazioni." },
      { q: "Come aiutate il centro estetico a farsi trovare da nuovi clienti in città?", a: "Ottimizziamo il posizionamento su Google per i trattamenti di punta (come epilazione laser o trattamenti viso) e curiamo la scheda Google Maps del centro." }
    ]
  },

  "siti-web-fotografi": {
    slug: "siti-web-fotografi",
    category: "settore",
    categoryLabel: "Fotografia & Video Making",
    keywordTarget: "realizzazione siti web per fotografi",
    title: "Siti Web per Fotografi & Studi Fotografici",
    badge: "Fotografia & Video",
    heroHeadline: "Siti Web per Fotografi & Creator Visivi",
    heroSubheadline: "Il tuo lavoro è visivo: il tuo sito deve valorizzare luci, colori ed emozioni senza distrazioni. Cattura coppie di sposi e aziende in cerca di servizi fotografici professionali.",
    metaTitle: "Realizzazione Siti Web per Fotografi e Videomaker | Moockup Studio",
    metaDescription: "Sviluppo siti web per fotografi professionisti. Portfolio fotografico fullscreen, reportage matrimoni, ritratti, moda e gallerie private clienti.",
    coverImage: "https://images.unsplash.com/photo-1452587925148-ce544e77e70d?auto=format&fit=crop&w=1200&q=80",
    tagline: "Le immagini parlano più di mille parole: crea un portfolio che lasci senza fiato al primo scatto.",
    sectorOrCityHighlights: [
      { title: "Gallerie Fotografiche Grid & Masonry", desc: "Visualizzazione fluida e responsive con caricamento progressivo che preserva i dettagli fotografici." },
      { title: "Reportage Matrimoni & Storytelling", desc: "Racconto completo dell'evento dalla preparazione degli sposi alla festa per mostrare la coerenza stilistica." },
      { title: "Area Riservata Privata per Clienti", desc: "Spazio protetto da password per far visionare e scegliere i provini fotografici comodamente da casa." },
      { title: "Servizi Corporate, E-Commerce & Ritratti LinkedIn", desc: "Shooting aziendali, fotografia di prodotto per shop online e ritratti professionali per professionisti." },
    ],
    includedFeatures: [
      "Modulo di verifica disponibilità data per cerimonie ed eventi",
      "Supporto per showreel e video promozionali ad alta definizione",
      "Biografia artistica e riconoscimenti o premi vinti",
      "Galleria provini protetta con selezione scatti preferiti",
    ],
    metricsTarget: "Blocco date matrimoniali con oltre un anno di anticipo",
    faqList: [
      { q: "Possiamo creare un portfolio fotografico a schermo intero ad altissima risoluzione?", a: "Sì, con gallerie fluide, caricamento lazy-load ultra-rapido e protezione anti-copia con watermark se desiderato." },
      { q: "È possibile creare un'area privata con password per far scegliere le foto agli sposi o clienti?", a: "Sì, predisponiamo gallerie riservate dove i clienti possono visionare i provini e selezionare gli scatti per l'album." },
      { q: "Come sono suddivisi i servizi fotografici (matrimoni, eventi, maternity, still-life aziendale)?", a: "Ogni specializzazione dispone di una pagina con racconto visivo, video trailer e testimonianze di clienti precedenti." },
      { q: "I futuri sposi possono verificare la disponibilità della data del matrimonio?", a: "Sì, con form rapido per indicare data dell'evento, location e tipologia di servizio richiesto." },
      { q: "Il sito preserva la perfetta fedeltà dei colori e dei contrasti su schermi Apple e PC?", a: "Ottimizziamo il profilo colore sRGB per garantire che le fotografie si vedano esattamente come inteso dall'autore." }
    ]
  },

  "siti-web-negozi-arredamento": {
    slug: "siti-web-negozi-arredamento",
    category: "settore",
    categoryLabel: "Mobili & Arredamento d'Interni",
    keywordTarget: "realizzazione siti web per negozi di arredamento",
    title: "Siti Web per Negozi di Arredamento & Showroom",
    badge: "Arredamento & Showroom",
    heroHeadline: "Siti Web per Showroom d'Arredamento & Design",
    heroSubheadline: "Porta clienti qualificati nel tuo showroom: presenta i marchi di cucine, living e camere da letto. Consenti di prenotare una consulenza di interior design con rendering 3D.",
    metaTitle: "Realizzazione Siti Web Negozi Arredamento e Mobili | Moockup Studio",
    metaDescription: "Sviluppo siti web per mobilifici, showroom di cucine e arredamento d'interni. Cataloghi arredo, marchi trattati e appuntamenti in showroom.",
    coverImage: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1200&q=80",
    tagline: "Arredare casa è una spesa importante: crea fiducia e porta i clienti a toccare con mano i mobili in showroom.",
    sectorOrCityHighlights: [
      { title: "Cataloghi Ambienti Suddivisi con Cura", desc: "Cucine su misura, divani e living, camere da letto, arredo bagno e complementi di design." },
      { title: "Prenotazione Appuntamento con Progettista", desc: "I clienti caricano la piantina di casa e prenotano una sessione di progettazione con rendering." },
      { title: "Outlet & Occasioni da Esposizione", desc: "Sezione per vendere rapidamente arredi fine serie o cambi mostra con sconti dedicati." },
      { title: "Servizio Trasporto & Montaggio Specializzato", desc: "Squadra interna di montatori qualificati, rilievo misure sul posto e assistenza post-vendita." },
    ],
    includedFeatures: [
      "Loghi dei marchi prestigiosi trattati in concessione esclusiva",
      "Virtual tour delle ambientazioni dello showroom",
      "Spiegazione di trasporto, montaggio specializzato e garanzie",
      "Guida alle detrazioni fiscali e Bonus Mobili in corso",
    ],
    metricsTarget: "+60% di visite mirate in showroom con piantina al seguito",
    faqList: [
      { q: "Possiamo mostrare i marchi di design in catalogo e le ambientazioni dello showroom?", a: "Sì, organizzato per zone della casa: cucine, zona living, zona notte, bagni e arredamento per ufficio." },
      { q: "I clienti possono prenotare una consulenza di progettazione 3D e preventivo?", a: "Sì, un modulo consente di fissare l'incontro con l'arredatore allegando anche la piantina della casa in PDF o JPG." },
      { q: "Possiamo spiegare i servizi di consegna, trasporto e montaggio con personale interno?", a: "Sì, evidenziare falegnami esperti e garanzie post-vendita fa la differenza rispetto ai mobilifici low-cost." },
      { q: "Possiamo pubblicare informazioni sul Bonus Mobili ed agevolazioni fiscali?", a: "Sì, una guida pratica alle detrazioni fiscali stimola i clienti ad acquistare prima della scadenza degli incentivi." },
      { q: "È possibile inserire una sezione outlet per rinnovi expo e pezzi unici da esposizione?", a: "Sì, per vendere rapidamente arredi scontati dello showroom con foto del prodotto reale e prezzo ribassato." }
    ]
  }
};

// Local landings maintained for direct local search traffic (Foggia, Lucera, San Severo, San Giovanni Rotondo, Bari)
// Note: Intentionally not linked in site navigation menus or visible buttons, per user instructions.
export const SEO_LOCAL_LANDINGS: Record<string, SeoLanding> = {
  "realizzazione-siti-web-foggia": {
    slug: "realizzazione-siti-web-foggia",
    category: "localita",
    categoryLabel: "Presidio Territoriale Foggia",
    keywordTarget: "realizzazione siti web foggia",
    title: "Realizzazione Siti Web a Foggia",
    badge: "Web Agency a Foggia",
    heroHeadline: "Realizzazione Siti Web e SEO a Foggia",
    heroSubheadline: "Siamo un'agenzia digitale con sede a Foggia: conosciamo il tessuto economico della Capitanata e realizziamo siti web veloci, e-commerce e strategie SEO per farti trovare subito da clienti di Foggia e provincia.",
    metaTitle: "Realizzazione Siti Web Foggia | Web Agency Moockup Studio",
    metaDescription: "Agenzia web a Foggia specializzata nella creazione di siti web moderni, veloci e posizionati su Google. Incontra il nostro team in sede a Foggia.",
    coverImage: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80",
    tagline: "Nessun fornitore irreperibile: parli direttamente con chi programma e cura il tuo progetto a Foggia.",
    sectorOrCityHighlights: [
      { title: "Incontro di Persona a Foggia", desc: "Vieni a trovarci o raggiungiamo noi la tua azienda per definire la strategia a quattr'occhi." },
      { title: "Dominio delle Ricerche Locali su Google", desc: "Posizioniamo la tua attività per le parole chiave ricercate dagli utenti di Foggia e provincia." },
      { title: "Supporto Tecnico Rapido e Continuo", desc: "Interventi entro 2 ore: non lasciamo mai il tuo sito offline o senza assistenza." },
      { title: "Integrazione con Cartellonistica Locale", desc: "Possibilità di combinare il sito web con cartelloni 6x3 e pensiline cittadine ad alto transito a Foggia." },
    ],
    includedFeatures: [
      "Sito web sviluppato su misura per il mercato locale ed extra-provinciale",
      "Setup e ottimizzazione completa della scheda Google Business Profile (Google Maps Foggia)",
      "Tracciamento telefonate e lead da cellulare",
      "Velocità PageSpeed 95+ testata sui server italiani",
    ],
    metricsTarget: "Top 3 su Google per le ricerche commerciali di settore a Foggia",
    faqList: [
      { q: "Possiamo incontrarci di persona a Foggia per parlare del progetto?", a: "Certamente! Siamo operativi a Foggia. Possiamo vederci presso la tua sede aziendale o nel nostro studio per analizzare obiettivi e strategie senza impegno." },
      { q: "Lavorate sia con negozi del centro che con aziende della zona industriale ASI di Foggia?", a: "Sì, possiamo affiancare attività storiche foggiane, studi professionali, ristoranti e realtà industriali e manifatturiere della provincia." },
      { q: "Come posizionate la mia azienda per chi cerca su Google a Foggia e in Capitanata?", a: "Curiamo la SEO geolocalizzata per Foggia, ottimizziamo la scheda Google Business Profile e presidiamo le parole chiave commerciali locali." },
      { q: "È possibile abbinare il sito a campagne pubblicitarie o cartellonistica su Foggia?", a: "Sì, possiamo sincronizzare le campagne digitali (Google e Meta Ads) con la cartellonistica stradale 6x3 e pensiline ad alto transito in città." },
      { q: "Quali sono i tempi di risposta per assistenza tecnica a Foggia?", a: "Garantiamo supporto tempestivo con risposte entro 2 ore via telefono o WhatsApp: parli direttamente con chi cura il tuo progetto." }
    ],
    geoArea: "Foggia (FG) - Puglia",
  },
  "realizzazione-siti-web-lucera": {
    slug: "realizzazione-siti-web-lucera",
    category: "localita",
    categoryLabel: "Presidio Territoriale Lucera",
    keywordTarget: "realizzazione siti web lucera",
    title: "Realizzazione Siti Web a Lucera",
    badge: "Sviluppo Web Lucera",
    heroHeadline: "Realizzazione Siti Web e SEO a Lucera",
    heroSubheadline: "Porta la tua attività di Lucera online con un sito moderno e performante. Raggiungi nuovi clienti nei Monti Dauni, a Foggia e su tutto il territorio nazionale.",
    metaTitle: "Realizzazione Siti Web Lucera | Agenzia Moockup Studio",
    metaDescription: "Creazione siti web per imprese e professionisti di Lucera. SEO locale, e-commerce e visibilità su Google Maps a Lucera e provincia di Foggia.",
    coverImage: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80",
    tagline: "Fai crescere il tuo business a Lucera con una presenza digitale moderna, elegante e visibile su Google.",
    sectorOrCityHighlights: [
      { title: "Vicinanza Geografica Immediata", desc: "A pochissimi chilometri da te per consulenze dirette e assistenza immediata." },
      { title: "Posizionamento per le Ricerche a Lucera", desc: "Ottimizzazione per intercettare residenti e turisti che cercano i tuoi servizi nel territorio lucerino." },
      { title: "Vendita Online per Prodotti Tipici e Artigianato", desc: "Soluzioni e-commerce per spedire le eccellenze di Lucera in tutta Italia ed Europa." },
      { title: "Strategie Social & Promozione Monti Dauni", desc: "Campagne mirate per attrarre clienti dalle cittadine limitrofe e turisti in visita al borgo federiciano." },
    ],
    includedFeatures: [
      "Sito web responsive e ultraveloce",
      "Ottimizzazione scheda Google Maps a Lucera",
      "Modulo di contatto WhatsApp integrato",
      "Integrazione Google Maps e schede locali per il territorio di Lucera",
    ],
    metricsTarget: "Primi risultati su Google per chi cerca la tua categoria a Lucera",
    faqList: [
      { q: "Quali sono i tempi di realizzazione per un sito a Lucera?", a: "In media in 4-6 settimane lavorative il tuo sito è online, testato e pronto per ricevere visite e contatti da Lucera e dintorni." },
      { q: "Lavorate anche con imprese dei Monti Dauni e dell'agroalimentare lucerino?", a: "Certamente: aiutiamo cantine, produttori tipici, strutture ricettive ed artigiani a farsi trovare su Google e vendere in tutta Italia." },
      { q: "Possiamo incontrarci a Lucera per definire i contenuti?", a: "Sì, la vicinanza territoriale ci permette di raggiungerti rapidamente a Lucera per concordare foto, testi e strategie." },
      { q: "Il sito aiuta la mia attività a farsi trovare sui motori di ricerca a Lucera?", a: "Applichiamo tecniche SEO locali mirate per posizionare il tuo sito tra i primi risultati per chi cerca prodotti e servizi nel territorio di Lucera." },
      { q: "Fornite formazione per insegnarmi a gestire il sito in autonomia?", a: "Sì, rilasciamo video-tutorial personalizzati di 10 minuti per permetterti di aggiornare testi e immagini senza dipendere da nessuno." }
    ],
    geoArea: "Lucera (FG) - Puglia",
  },
  "realizzazione-siti-web-san-severo": {
    slug: "realizzazione-siti-web-san-severo",
    category: "localita",
    categoryLabel: "Presidio Territoriale San Severo",
    keywordTarget: "realizzazione siti web san severo",
    title: "Realizzazione Siti Web a San Severo",
    badge: "Web Design San Severo",
    heroHeadline: "Realizzazione Siti Web a San Severo",
    heroSubheadline: "Soluzioni digitali per aziende agricole, cantine, studi professionali e attività commerciali di San Severo. Siti web ad alta velocità che convertono visite in clienti reali.",
    metaTitle: "Realizzazione Siti Web San Severo | Moockup Studio",
    metaDescription: "Creazione siti web ed e-commerce a San Severo. Agenzia web specializzata in SEO locale, vendita online di vini/olio e servizi per PMI.",
    coverImage: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1200&q=80",
    tagline: "San Severo ha un tessuto imprenditoriale vitale: aiutiamo le imprese locali a farsi trovare su Google e vendere oltre i confini comunali.",
    sectorOrCityHighlights: [
      { title: "Specialisti E-Commerce per Cantine & Agroalimentare", desc: "Piattaforme di vendita online per valorizzare i vini e le produzioni d'eccellenza di San Severo." },
      { title: "SEO Locale a San Severo", desc: "Posiziona il tuo negozio o studio per le parole chiave chiave del territorio dell'Alto Tavoliere." },
      { title: "Grafica Distintiva e Personalizzata", desc: "Nessun sito generico copiato: design curato che valorizza la storia e la reputazione del tuo marchio." },
      { title: "Campagne Pubblicitarie Google per l'Alto Tavoliere", desc: "Annunci geolocalizzati per comparire sempre primi quando un cliente cerca prodotti e servizi in zona." },
    ],
    includedFeatures: [
      "Architettura mobile-first per smartphone",
      "Configurazione pagamenti sicuri per e-commerce",
      "Supporto tecnico telefonico e WhatsApp diretto",
      "Configurazione pagamenti sicuri con carta di credito e bonifico bancario",
    ],
    metricsTarget: "Crescita tangibile dei contatti e ordini provenienti dal territorio",
    faqList: [
      { q: "Potete sviluppare un e-commerce per spedire vini e prodotti di San Severo all'estero?", a: "Sì, configuriamo piattaforme e-commerce con calcolo automatico di spedizioni imballate sicure per bottiglie, IVA comunitaria e pagamenti sicuri." },
      { q: "Seguite anche studi professionali e attività commerciali dell'Alto Tavoliere?", a: "Sì, realizziamo siti per studi legali, commercialisti, negozi e officine con presidio delle ricerche locali a San Severo." },
      { q: "Come fate a garantire che il sito sia veloce da smartphone?", a: "Utilizziamo codice pulito, architetture moderne e hosting su server europei ultra-veloci, ottenendo punteggi PageSpeed 95+." },
      { q: "Possiamo integrare campagne pubblicitarie Google Ads geolocalizzate su San Severo?", a: "Sì, creiamo annunci mirati a San Severo, Apricena, Torremaggiore e dintorni per massimizzare il ritorno economico dell'investimento." },
      { q: "Il sito resta di mia proprietà dopo la pubblicazione?", a: "Al 100%. Ti forniamo tutti gli accessi di amministrazione, il dominio e il codice sorgente senza canoni periodici nascosti." }
    ],
    geoArea: "San Severo (FG) - Puglia",
  },
  "realizzazione-siti-web-san-giovanni-rotondo": {
    slug: "realizzazione-siti-web-san-giovanni-rotondo",
    category: "localita",
    categoryLabel: "Presidio Gargano & San Giovanni Rotondo",
    keywordTarget: "realizzazione siti web san giovanni rotondo",
    title: "Realizzazione Siti Web a San Giovanni Rotondo",
    badge: "Web Design San Giovanni Rotondo",
    heroHeadline: "Siti Web a San Giovanni Rotondo",
    heroSubheadline: "Dalla ricezione turistica legata a San Pio e al Gargano, alle strutture sanitarie e ai servizi per la comunità: creiamo siti web multilingua veloci e con prenotazioni dirette.",
    metaTitle: "Realizzazione Siti Web San Giovanni Rotondo | Moockup Studio",
    metaDescription: "Sviluppo siti web per hotel, B&B e professionisti a San Giovanni Rotondo. Prenotazioni dirette, visibilità multilingua e posizionamento Google.",
    coverImage: "https://images.unsplash.com/photo-1542314831-c6a4d2729a75?auto=format&fit=crop&w=1200&q=80",
    tagline: "Intercetta i milioni di pellegrini e viaggiatori che cercano strutture e servizi a San Giovanni Rotondo ogni anno.",
    sectorOrCityHighlights: [
      { title: "Prenotazioni Dirette per Strutture Ricettive", desc: "Sistema di prenotazione e richiesta disponibilità rapido dal sito ufficiale del tuo hotel o B&B." },
      { title: "Sito Multilingua per Pellegrini Internazionali", desc: "Versioni in inglese, polacco, spagnolo e tedesco per accogliere visitatori da tutto il mondo." },
      { title: "SEO Turistica & Georeferenziata", desc: "Compari in alto su Google Maps per chi cerca 'dove dormire vicino al Santuario di San Pio'." },
      { title: "Canale Diretto WhatsApp per Prenotazioni Rapide", desc: "Contatto immediato con la reception o lo studio per confermare disponibilita in tempo reale." },
    ],
    includedFeatures: [
      "Prenotazioni dirette con calendario disponibilità",
      "Galleria foto HD con virtual tour dello studio o delle stanze",
      "Mappa interattiva con indicazioni stradali per navette e parcheggi",
      "Integrazione recensioni TripAdvisor e Google per rassicurare i pellegrini",
    ],
    metricsTarget: "Aumento costante delle prenotazioni dirette e visibilità organica nazionale",
    faqList: [
      { q: "È possibile realizzare il sito in più lingue per i pellegrini e turisti internazionali?", a: "Sì, configuriamo il sito in italiano, inglese, polacco, spagnolo e tedesco per accogliere al meglio visitatori da ogni parte del mondo." },
      { q: "Collegate il sito con sistemi di prenotazione diretta per hotel e B&B a San Giovanni Rotondo?", a: "Sì, abilitiamo moduli di richiesta disponibilità e prenotazione diretta dal sito, con conferma immediata via email o WhatsApp." },
      { q: "Possiamo inserire una mappa con itinerari religiosi, orari messe e parcheggi bus?", a: "Certamente: fornire informazioni pratiche ai fedeli e pellegrini fa salire il sito sui primi risultati di Google Search." },
      { q: "Lavorate anche con studi medici e attività commerciali di San Giovanni Rotondo?", a: "Sì, realizziamo soluzioni digitali sia per l'indotto turistico-religioso sia per le imprese locali e sanitarie della zona." },
      { q: "Come gestite l'assistenza post-lancio per eventi speciali o festività di San Pio?", a: "Offriamo supporto continuo per pubblicare offerte speciali, pacchetti pellegrinaggi e avvisi in concomitanza degli eventi patronali." }
    ],
    geoArea: "San Giovanni Rotondo (FG) - Gargano",
  },
  "realizzazione-siti-web-bari": {
    slug: "realizzazione-siti-web-bari",
    category: "localita",
    categoryLabel: "Presidio Capoluogo di Regione",
    keywordTarget: "realizzazione siti web bari",
    title: "Realizzazione Siti Web a Bari & Provincia",
    badge: "Web Agency per Bari",
    heroHeadline: "Realizzazione Siti Web e SEO a Bari",
    heroSubheadline: "Per le imprese di Bari e provincia realizziamo siti web ultraveloci, progettati per convertire le visite in contatti commerciali e posizionarsi in alto su Google.",
    metaTitle: "Realizzazione Siti Web Bari | Web Agency Moockup Studio",
    metaDescription: "Sviluppo siti web veloci ed e-commerce scalabili per imprese di Bari e provincia. Strategie SEO aggressive e campagne pubblicitarie orientate al ROI.",
    coverImage: "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&w=1200&q=80",
    tagline: "Offriamo alle aziende di Bari una presenza digitale solida, con caricamento in meno di 1 secondo e strategie pubblicitarie orientate ai risultati.",
    sectorOrCityHighlights: [
      { title: "Caricamento Istantaneo PageSpeed 95+", desc: "Codice pulito e ottimizzato per garantire caricamenti in meno di 1 secondo su smartphone e desktop." },
      { title: "Campagne Google Ads & SEO per Bari", desc: "Intercettiamo le migliaia di ricerche quotidiane dell'area metropolitana di Bari per la tua attività." },
      { title: "E-Commerce Scalabili per Grandi Volumi", desc: "Architetture robuste capaci di gestire centinaia di ordini al giorno senza rallentamenti." },
      { title: "Esperienza B2B e Servizi Aziendali", desc: "Consulenza mirata per PMI della zona industriale di Bari, Modugno e provincia." },
    ],
    includedFeatures: [
      "Design esclusivo progettato in esclusiva per il cliente",
      "Ottimizzazione SEO avanzata per l'area metropolitana di Bari",
      "Integrazione WhatsApp per chiusura immediata delle trattative",
      "Audit e reportistica mensile sull'andamento delle conversioni",
    ],
    metricsTarget: "Posizionamento competitivo in prima pagina per parole chiave commerciali ad alto valore a Bari",
    faqList: [
      { q: "Lavorate anche da remoto con imprese di Bari e della provincia metropolitana?", a: "Sì, gestiamo regolarmente progetti su Bari con incontri di persona o videocall su Google Meet, garantendo tempi di reazione immediati." },
      { q: "Come posizionate un sito web nell'area metropolitana di Bari?", a: "Con un mix di architettura tecnica ottimizzata (PageSpeed 95+), studio approfondito delle parole chiave di mercato e cura minuziosa della SEO on-page e locale." },
      { q: "Realizzate e-commerce e portali B2B per aziende della zona industriale di Bari e Modugno?", a: "Sì, sviluppiamo architetture scalabili per cataloghi con migliaia di prodotti, listini personalizzati per rivenditori e gestione ordini massiva." },
      { q: "Quali garanzie offrite sulla velocità di caricamento e sicurezza?", a: "Garantiamo caricamento sotto a 1 secondo, certificati crittografici SSL attivi, firewall e backup automatici giornalieri su cloud sicuro." },
      { q: "Fornite report periodici sui contatti generati dal sito a Bari?", a: "Sì, colleghiamo Google Analytics 4 e Looker Studio per monitorare in tempo reale telefonate, lead e vendite arrivate dall'area barese." }
    ],
    geoArea: "Bari (BA) - Puglia",
  }
};

export const ALL_SEO_LANDINGS = {
  ...SEO_SECTOR_LANDINGS,
  ...SEO_LOCAL_LANDINGS,
};
