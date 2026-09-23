<?php
/**
 * Process & Methodology Template Part
 *
 * @package Moockup_Studio
 */
$steps = array(
    array('num' => '01', 'title' => 'Audit Tecnico & Business Plan', 'desc' => 'Analizziamo i competitor locali e nazionali, la situazione SEO, il codice attuale e definiamo gli obiettivi di conversione reali.'),
    array('num' => '02', 'title' => 'Design Sartoriale & UX Conversion', 'desc' => 'Niente template lenti. Progettiamo interfacce moderne studiate per guidare l\'utente verso la richiesta di preventivo o l\'acquisto.'),
    array('num' => '03', 'title' => 'Sviluppo Pulito & Velocità Estrema', 'desc' => 'Scriviamo codice ottimizzato per raggiungere 95+ su Google PageSpeed e superare tutti i Core Web Vitals a pieni voti.'),
    array('num' => '04', 'title' => 'Lancio, Campagne Ads & Scalabilità', 'desc' => 'Colleghiamo tracciamenti server-side avanzati, avviamo le campagne Google Ads e monitoriamo i numeri su dashboard in tempo reale.'),
);
?>

<section id="processo" class="py-20 bg-[#060913] border-t border-slate-800/80 relative">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div class="text-center max-w-3xl mx-auto mb-16">
            <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-500/10 text-pink-400 border border-pink-500/20 text-xs font-semibold uppercase tracking-wider mb-3">
                Come Lavoriamo
            </div>
            <h2 class="text-3xl sm:text-4xl font-black text-white tracking-tight">
                Il Metodo Moockup Studio
            </h2>
            <p class="mt-3 text-sm sm:text-base text-slate-400">
                Un processo collaudato in 4 fasi per consegnare progetti puntuali, sicuri e fin da subito pronti a convertire.
            </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <?php foreach ($steps as $s): ?>
                <div class="p-6 rounded-2xl bg-slate-900/50 border border-slate-800 relative hover:border-pink-500/30 transition-all">
                    <div class="text-3xl font-black text-pink-500/30 mb-3"><?php echo esc_html($s['num']); ?></div>
                    <h3 class="text-lg font-bold text-white mb-2"><?php echo esc_html($s['title']); ?></h3>
                    <p class="text-xs text-slate-400 leading-relaxed"><?php echo esc_html($s['desc']); ?></p>
                </div>
            <?php endforeach; ?>
        </div>

    </div>
</section>
