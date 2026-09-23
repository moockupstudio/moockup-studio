<?php
/**
 * Footer template for Moockup Studio WordPress Theme
 *
 * @package Moockup_Studio
 */
$phone = get_theme_mod('moockup_phone', '+38 3486520380');
$phone_clean = preg_replace('/[^0-9+]/', '', $phone);
$whatsapp = get_theme_mod('moockup_whatsapp', '+38 3486520380');
$whatsapp_clean = preg_replace('/[^0-9]/', '', $whatsapp);
$email = get_theme_mod('moockup_email', 'moockupstudio@gmail.com');
$location = get_theme_mod('moockup_location', 'Foggia (Puglia) & Remote Everywhere');
$hours = get_theme_mod('moockup_hours', 'Lun - Ven: 09:00 - 18:30');
?>

<footer class="bg-[#020617] border-t border-slate-800/80 pt-16 pb-12 text-slate-400">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            
            <!-- Col 1: Brand & Bio -->
            <div class="space-y-4">
                <a href="<?php echo esc_url(home_url('/')); ?>" class="flex items-center gap-3">
                    <div class="w-9 h-9 rounded-xl bg-gradient-to-tr from-pink-600 via-rose-500 to-amber-400 p-[1.5px]">
                        <div class="w-full h-full bg-[#090D16] rounded-[10px] flex items-center justify-center">
                            <span class="text-lg font-black italic bg-gradient-to-br from-white via-pink-100 to-pink-500 bg-clip-text text-transparent">M</span>
                        </div>
                    </div>
                    <div class="flex flex-col">
                        <span class="text-lg font-black tracking-tight text-white">MOOCKUP <span class="text-pink-400 text-xs uppercase">STUDIO</span></span>
                        <span class="text-[10px] text-slate-400">Web Agency • Foggia</span>
                    </div>
                </a>
                <p class="text-xs text-slate-400 leading-relaxed">
                    Realizzazione siti web sartoriali, posizionamento SEO organico e campagne Google Ads orientate al massimo ritorno sull'investimento (ROI).
                </p>
                <div class="pt-2">
                    <span class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold">
                        <span class="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                        Disponibili per nuovi progetti Q3/Q4
                    </span>
                </div>
            </div>

            <!-- Col 2: Recapiti & Sede Foggia -->
            <div class="space-y-3">
                <h4 class="text-xs uppercase font-bold text-white tracking-wider mb-4">Sede & Contatti</h4>
                <ul class="space-y-2.5 text-xs">
                    <li class="flex items-start gap-2.5">
                        <span class="text-pink-400 font-bold">📍</span>
                        <span><?php echo esc_html($location); ?></span>
                    </li>
                    <li class="flex items-center gap-2.5">
                        <span class="text-pink-400 font-bold">📞</span>
                        <a href="tel:<?php echo esc_attr($phone_clean); ?>" class="hover:text-white transition-colors font-medium">
                            <?php echo esc_html($phone); ?>
                        </a>
                    </li>
                    <li class="flex items-center gap-2.5">
                        <span class="text-emerald-400 font-bold">💬</span>
                        <a href="https://wa.me/<?php echo esc_attr($whatsapp_clean); ?>" target="_blank" rel="noopener noreferrer" class="hover:text-white transition-colors font-medium text-emerald-400">
                            WhatsApp Diretto (Risposta Rapida)
                        </a>
                    </li>
                    <li class="flex items-center gap-2.5">
                        <span class="text-pink-400 font-bold">✉️</span>
                        <a href="mailto:<?php echo esc_attr($email); ?>" class="hover:text-white transition-colors">
                            <?php echo esc_html($email); ?>
                        </a>
                    </li>
                    <li class="flex items-center gap-2.5">
                        <span class="text-slate-500 font-bold">🕒</span>
                        <span><?php echo esc_html($hours); ?></span>
                    </li>
                </ul>
            </div>

            <!-- Col 3: Servizi Principali -->
            <div>
                <h4 class="text-xs uppercase font-bold text-white tracking-wider mb-4">Soluzioni Digitali</h4>
                <ul class="space-y-2 text-xs">
                    <li><a href="<?php echo esc_url(home_url('/#servizi')); ?>" class="hover:text-white transition-colors">Creazione Siti Web & E-Commerce</a></li>
                    <li><a href="<?php echo esc_url(home_url('/#servizi')); ?>" class="hover:text-white transition-colors">SEM & Campagne Google Ads</a></li>
                    <li><a href="<?php echo esc_url(home_url('/#servizi')); ?>" class="hover:text-white transition-colors">SEO Organica & Posizionamento Locale</a></li>
                    <li><a href="<?php echo esc_url(home_url('/#servizi')); ?>" class="hover:text-white transition-colors">Tracciamenti GA4 & Tag Manager Server-Side</a></li>
                    <li><a href="<?php echo esc_url(home_url('/#servizi')); ?>" class="hover:text-white transition-colors">Ottimizzazione Conversioni (CRO)</a></li>
                    <li><a href="<?php echo esc_url(home_url('/#calcolatore')); ?>" class="hover:text-pink-400 transition-colors font-semibold">Calcolatore Preventivo ROI</a></li>
                </ul>
            </div>

            <!-- Col 4: Standard & Garanzie -->
            <div>
                <h4 class="text-xs uppercase font-bold text-white tracking-wider mb-4">Garanzie & Standard</h4>
                <div class="space-y-3 text-xs">
                    <div class="p-3 rounded-lg bg-slate-900 border border-slate-800">
                        <div class="font-semibold text-white">Google Ads & GA4</div>
                        <div class="text-[11px] text-slate-400">Tracciamenti avanzati e ROAS elevato</div>
                    </div>
                    <div class="p-3 rounded-lg bg-slate-900 border border-slate-800">
                        <div class="font-semibold text-white">Core Web Vitals Verified</div>
                        <div class="text-[11px] text-slate-400">Punteggi PageSpeed 95+ garantiti</div>
                    </div>
                    <div class="p-3 rounded-lg bg-slate-900 border border-slate-800">
                        <div class="font-semibold text-white">Zero Vincoli / Proprietà 100%</div>
                        <div class="text-[11px] text-slate-400">Codice e domini intestati direttamente a te</div>
                    </div>
                </div>
            </div>

        </div>

        <!-- Bottom copyright -->
        <div class="mt-14 pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
            <div>
                © <?php echo date('Y'); ?> Moockup Studio (www.moockup.it) • Foggia (FG). Tutti i diritti riservati. P.IVA e dati societari registrati.
            </div>
            <div class="flex items-center gap-6">
                <a href="<?php echo esc_url(home_url('/privacy-policy/')); ?>" class="hover:text-slate-400">Privacy Policy</a>
                <a href="<?php echo esc_url(home_url('/cookie-policy/')); ?>" class="hover:text-slate-400">Cookie Policy</a>
                <a href="<?php echo esc_url(admin_url()); ?>" class="hover:text-pink-400">Accedi a WordPress (Bacheca)</a>
            </div>
        </div>
    </div>
</footer>

<?php wp_footer(); ?>
</body>
</html>
