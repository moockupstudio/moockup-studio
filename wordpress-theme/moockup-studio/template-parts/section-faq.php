<?php
/**
 * FAQ Accordion Section Template Part
 *
 * @package Moockup_Studio
 */
$faqs = array(
    array(
        'q' => 'Quanto tempo richiede la realizzazione di un nuovo sito web?',
        'a' => 'Per un sito web aziendale o professionale personalizzato, i tempi medi sono di 3-4 settimane dalla ricezione dei contenuti. Per e-commerce complessi o piattaforme su misura, solitamente 5-7 settimane. Garantiamo consegne puntuali stabilite per iscritto nel contratto.',
    ),
    array(
        'q' => 'Qual è il budget minimo per avviare campagne Google Ads con voi?',
        'a' => 'Consigliamo un budget pubblicitario minimo da destinare a Google di almeno €600-€1.000 al mese per avere dati statisticamente rilevanti e permettere al machine learning di ottimizzare le conversioni. La nostra fee di gestione è trasparente e slegata da percentuali che incentivano lo spreco.',
    ),
    array(
        'q' => 'Siete fisicamente a Foggia o lavorate solo da remoto?',
        'a' => 'Moockup Studio ha sede a Foggia (Puglia). Possiamo incontrarci di persona presso i nostri uffici o presso la tua azienda sul territorio, oppure gestire l\'intero progetto da remoto con clienti in tutta Italia tramite video-call e report condivisi.',
    ),
    array(
        'q' => 'Il sito sarà di mia proprietà o dovrò pagare canoni di licenza per sempre?',
        'a' => 'Il sito, il dominio, i codici sorgente e gli account pubblicitari Google sono al 100% di tua esclusiva proprietà. Nessun vincolo o riscatto futuro: crediamo nella fidelizzazione basata sui risultati, non sui contratti capestro.',
    ),
    array(
        'q' => 'Come viene gestita la SEO locale su Foggia e provincia?',
        'a' => 'Ottimizziamo l\'architettura tecnica on-page, configuriamo dati strutturati Schema.org LocalBusiness, curiamo la scheda Google Business Profile (ex Google My Business) e presidiamo le keyword geolocalizzate con landing page dedicate per scalare il Local 3-Pack.',
    ),
);
?>

<section id="faq" class="py-20 bg-[#060913] border-t border-slate-800/80 relative">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div class="text-center mb-14">
            <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-500/10 text-pink-400 border border-pink-500/20 text-xs font-semibold uppercase tracking-wider mb-3">
                Domande Frequenti
            </div>
            <h2 class="text-3xl sm:text-4xl font-black text-white tracking-tight">
                Tutto Quello che Devi Sapere
            </h2>
            <p class="mt-3 text-sm text-slate-400">
                Risposte chiare, trasparenti e senza giri di parole.
            </p>
        </div>

        <div class="space-y-4">
            <?php foreach ($faqs as $idx => $f): ?>
                <div class="rounded-xl bg-slate-900/60 border border-slate-800 overflow-hidden">
                    <button type="button" class="faq-toggle w-full px-6 py-4 text-left flex items-center justify-between gap-4 text-white font-bold text-sm sm:text-base hover:text-pink-300 transition-colors focus:outline-none" aria-expanded="false">
                        <span><?php echo esc_html($f['q']); ?></span>
                        <svg class="faq-icon w-5 h-5 text-slate-400 transform transition-transform shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
                    </button>
                    <div class="faq-content hidden px-6 pb-5 pt-1 text-xs sm:text-sm text-slate-400 leading-relaxed border-t border-slate-800/60">
                        <?php echo esc_html($f['a']); ?>
                    </div>
                </div>
            <?php endforeach; ?>
        </div>

    </div>
</section>
