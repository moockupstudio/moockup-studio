<?php
/**
 * Testimonials Section Template Part
 *
 * @package Moockup_Studio
 */
$testimonials = array(
    array(
        'name'    => 'Dott. Marco Valente',
        'role'    => 'Titolare Studio Medico & Odontoiatrico',
        'content' => 'Ci siamo affidati a Moockup Studio per rifare il sito web e avviare le campagne Google Ads a Foggia. I risultati sono stati immediati: +240% di prime visite prenotate in appena 90 giorni. Professionalità impeccabile e report chiarissimi ogni mese.',
        'rating'  => 5,
    ),
    array(
        'name'    => 'Elena De Santis',
        'role'    => 'Founder & CEO - E-Commerce Retail',
        'content' => 'Il nuovo e-commerce si carica istantaneamente anche su smartphone vecchi. Il tasso di conversione delle landing page è raddoppiato e le campagne Performance Max hanno finalmente un ROAS oltre 6x. Consigliatissimi!',
        'rating'  => 5,
    ),
    array(
        'name'    => 'Ing. Roberto Ferri',
        'role'    => 'Direttore Commerciale B2B',
        'content' => 'Finalmente un\'agenzia che non parla per slogan ma mostra numeri e metriche precise. Abbiamo superato tutti i concorrenti storici su Google Maps e nelle ricerche organiche.',
        'rating'  => 5,
    ),
);
?>

<section id="testimonianze" class="py-20 bg-[#030712] border-t border-slate-800/80 relative">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div class="text-center max-w-3xl mx-auto mb-16">
            <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-500/10 text-pink-400 border border-pink-500/20 text-xs font-semibold uppercase tracking-wider mb-3">
                Dicono di Noi
            </div>
            <h2 class="text-3xl sm:text-4xl font-black text-white tracking-tight">
                La Voce di Chi Lavora con Moockup Studio
            </h2>
            <p class="mt-3 text-sm sm:text-base text-slate-400">
                La fiducia dei nostri clienti è il nostro asset più prezioso.
            </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <?php foreach ($testimonials as $t): ?>
                <div class="p-8 rounded-2xl bg-slate-900/50 border border-slate-800 flex flex-col justify-between">
                    <div>
                        <!-- Stars -->
                        <div class="flex items-center gap-1 text-amber-400 mb-4">
                            <?php for ($i = 0; $i < 5; $i++): ?>
                                <svg class="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                            <?php endfor; ?>
                        </div>

                        <p class="text-xs sm:text-sm text-slate-300 leading-relaxed italic mb-6">
                            "<?php echo esc_html($t['content']); ?>"
                        </p>
                    </div>

                    <div class="pt-4 border-t border-slate-800 flex items-center gap-3">
                        <div class="w-10 h-10 rounded-full bg-pink-500/20 text-pink-400 font-bold flex items-center justify-center text-sm border border-pink-500/30">
                            <?php echo esc_html(substr($t['name'], 0, 1)); ?>
                        </div>
                        <div>
                            <div class="text-sm font-bold text-white"><?php echo esc_html($t['name']); ?></div>
                            <div class="text-[11px] text-slate-400"><?php echo esc_html($t['role']); ?></div>
                        </div>
                    </div>
                </div>
            <?php endforeach; ?>
        </div>

    </div>
</section>
