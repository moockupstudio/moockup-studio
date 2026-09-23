<?php
/**
 * Services Grid Section
 *
 * @package Moockup_Studio
 */
$services = array(
    array(
        'badge'       => 'Core Service',
        'title'       => 'Creazione Siti Web & E-Commerce',
        'subtitle'    => 'Design sartoriale, velocità fulminea e architettura orientata alla conversione',
        'desc'        => 'Progettiamo siti web e negozi online veloci come un lampo. Ogni riga di codice è ottimizzata per garantire punteggi PageSpeed 95+, Core Web Vitals impeccabili e un percorso utente privo di frizioni.',
        'highlights'  => array('Punteggio PageSpeed Google 95+ garantito', 'Architettura Mobile-First & Responsive', 'Integrazione WooCommerce / E-Commerce avanzato', 'Tracciamento conversioni pre-installato'),
    ),
    array(
        'badge'       => 'Specialità di Punta',
        'title'       => 'SEM & Campagne Google Ads',
        'subtitle'    => 'Specialisti Google Ads. Acquisizione clienti scalabile e ROAS elevato',
        'desc'        => 'Massimizziamo ogni singolo euro di budget pubblicitario. Strutturiamo campagne Search, Shopping e Performance Max mirate a utenti pronti all\'acquisto, abbattendo il costo per lead (CPA).',
        'highlights'  => array('Campagne Search ad alto intento commerciale', 'Performance Max & Shopping feed ottimizzati', 'Tracciamenti Server-Side con Enhanced Conversions', 'Reportistica trasparente su Looker Studio'),
    ),
    array(
        'badge'       => 'Crescita a Lungo Termine',
        'title'       => 'SEO Organica & Posizionamento Locale',
        'subtitle'    => 'Dominio delle ricerche Google per Foggia, Puglia e su scala nazionale',
        'desc'        => 'Portiamo la tua attività tra i primissimi risultati organici e nella mappa Google Maps (Local 3-Pack). Architettura tecnica, SEO on-page, keyword research mirata e ottimizzazione Google Business Profile.',
        'highlights'  => array('Presidio Google Maps & Local 3-Pack Foggia', 'Ottimizzazione tecnica Core Web Vitals & Schema.org', 'Content strategy ad alta rilevanza di settore', 'Monitoraggio costante dei posizionamenti'),
    ),
    array(
        'badge'       => 'Data & Analytics',
        'title'       => 'Tracciamenti Server-Side GA4 & GTM',
        'subtitle'    => 'Dati precisi al 100% per nutrire gli algoritmi di machine learning',
        'desc'        => 'Senza dati accurati, le campagne pubblicitarie sparano alla cieca. Implementiamo tracciamenti server-side resistenti a cookie banner e ad-blocker, garantendo l\'attribuzione corretta di ogni vendita.',
        'highlights'  => array('Google Tag Manager Server-Side su Cloud dedicato', 'Integrazione Google Consent Mode V2 compliant', 'Tracciamento chiamate, form e carrelli e-commerce', 'Dashboard analitica su misura'),
    ),
);
?>

<section id="servizi" class="py-20 bg-[#030712] relative">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div class="text-center max-w-3xl mx-auto mb-16">
            <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-500/10 text-pink-400 border border-pink-500/20 text-xs font-semibold uppercase tracking-wider mb-3">
                Cosa Facciamo
            </div>
            <h2 class="text-3xl sm:text-4xl font-black text-white tracking-tight">
                Servizi Orientati alla Crescita del Tuo Fatturato
            </h2>
            <p class="mt-4 text-base text-slate-400 leading-relaxed">
                Non vendiamo grafica fine a se stessa: costruiamo asset digitali progettati scientificamente per generare richieste di preventivo, vendite e ritorni tangibili.
            </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <?php foreach ($services as $s): ?>
                <div class="p-8 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-pink-500/40 transition-all duration-300 group hover:-translate-y-1">
                    <div class="flex items-center justify-between mb-4">
                        <span class="text-xs font-bold px-2.5 py-1 rounded bg-pink-500/10 text-pink-400 border border-pink-500/20 uppercase tracking-wider">
                            <?php echo esc_html($s['badge']); ?>
                        </span>
                        <span class="text-slate-600 group-hover:text-pink-400 transition-colors">
                            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                        </span>
                    </div>

                    <h3 class="text-2xl font-bold text-white mb-2 group-hover:text-pink-300 transition-colors">
                        <?php echo esc_html($s['title']); ?>
                    </h3>
                    <p class="text-sm font-medium text-pink-400/90 mb-3">
                        <?php echo esc_html($s['subtitle']); ?>
                    </p>
                    <p class="text-xs text-slate-400 leading-relaxed mb-6">
                        <?php echo esc_html($s['desc']); ?>
                    </p>

                    <div class="pt-4 border-t border-slate-800/80">
                        <div class="text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-2.5">Punti di Forza:</div>
                        <ul class="space-y-2">
                            <?php foreach ($s['highlights'] as $h): ?>
                                <li class="flex items-start gap-2 text-xs text-slate-300">
                                    <svg class="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
                                    <span><?php echo esc_html($h); ?></span>
                                </li>
                            <?php endforeach; ?>
                        </ul>
                    </div>
                </div>
            <?php endforeach; ?>
        </div>

    </div>
</section>
