<?php
/**
 * Detailed Case Studies Template Part
 *
 * @package Moockup_Studio
 */
$cases = array(
    array(
        'client'    => 'Studio Dentistico Odontoiatrico Foggia',
        'sector'    => 'Sanità & Odontoiatria Locale',
        'challenge' => 'Sito vecchio non ottimizzato per smartphone, zero contatti online e budget sprecato in campagne generiche.',
        'solution'  => 'Nuovo sito web ultraveloce (PageSpeed 99/100), presidio Local SEO Google Maps su Foggia e campagne Google Ads su parole chiave ad altissimo intento d\'urgenza.',
        'metrics'   => array('+240% Pazienti Prenotati', 'CPA sceso a €18', 'Prima posizione su Google Maps Foggia'),
    ),
    array(
        'client'    => 'E-Commerce Arredamento & Design',
        'sector'    => 'Retail & Commercio Elettronico',
        'challenge' => 'Tasso di abbandono carrello all\'82% e ROAS di Google Shopping fermo a 1.8x con margine negativo.',
        'solution'  => 'Riprogettazione completa del checkout a 1-step, tracciamenti GA4 Server-Side e ristrutturazione campagne Performance Max con feed segmentato per marginalità.',
        'metrics'   => array('ROAS cresciuto a 6.8x', '+94% Vendite Nette', 'Tempo di caricamento: 0.8s'),
    ),
);
?>

<section id="casi-studio" class="py-20 bg-[#030712] border-t border-slate-800/80 relative">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div class="text-center max-w-3xl mx-auto mb-16">
            <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-500/10 text-pink-400 border border-pink-500/20 text-xs font-semibold uppercase tracking-wider mb-3">
                Casi Studio Approfonditi
            </div>
            <h2 class="text-3xl sm:text-4xl font-black text-white tracking-tight">
                La Trasformazione dei Nostri Clienti
            </h2>
            <p class="mt-3 text-sm sm:text-base text-slate-400">
                Come abbiamo preso siti web poco performanti o fermi al palo e li abbiamo trasformati in macchine da lead generation.
            </p>
        </div>

        <div class="space-y-8 max-w-5xl mx-auto">
            <?php foreach ($cases as $c): ?>
                <div class="p-8 rounded-2xl bg-slate-900/40 border border-slate-800 hover:border-slate-700 transition-all">
                    <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-6">
                        <div>
                            <span class="text-xs font-bold text-pink-400 uppercase tracking-wider"><?php echo esc_html($c['sector']); ?></span>
                            <h3 class="text-2xl font-bold text-white"><?php echo esc_html($c['client']); ?></h3>
                        </div>
                    </div>

                    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                        <div class="p-4 rounded-xl bg-slate-950/60 border border-rose-500/20">
                            <div class="text-xs font-bold text-rose-400 uppercase tracking-wider mb-1">❌ La Sfida Iniziale:</div>
                            <p class="text-xs text-slate-300 leading-relaxed"><?php echo esc_html($c['challenge']); ?></p>
                        </div>
                        <div class="p-4 rounded-xl bg-slate-950/60 border border-emerald-500/20">
                            <div class="text-xs font-bold text-emerald-400 uppercase tracking-wider mb-1">✅ La Strategia Moockup Studio:</div>
                            <p class="text-xs text-slate-300 leading-relaxed"><?php echo esc_html($c['solution']); ?></p>
                        </div>
                    </div>

                    <div class="pt-6 border-t border-slate-800/80">
                        <div class="text-xs uppercase font-bold text-slate-400 mb-3">I Risultati Raggiunti:</div>
                        <div class="grid grid-cols-1 sm:grid-cols-3 gap-3">
                            <?php foreach ($c['metrics'] as $m): ?>
                                <div class="p-3 rounded-lg bg-slate-800/60 border border-slate-700 text-center font-bold text-emerald-400 text-sm">
                                    <?php echo esc_html($m); ?>
                                </div>
                            <?php endforeach; ?>
                        </div>
                    </div>
                </div>
            <?php endforeach; ?>
        </div>

    </div>
</section>
