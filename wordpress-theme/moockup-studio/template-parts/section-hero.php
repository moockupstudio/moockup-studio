<?php
/**
 * Hero Section Template Part
 * All texts are customizable via WordPress Customizer (Appearance -> Customize)
 *
 * @package Moockup_Studio
 */

$badge     = get_theme_mod('moockup_hero_badge', 'Web Agency & Performance Marketing • Foggia');
$title     = get_theme_mod('moockup_hero_title', 'Siti Web ad Alte Prestazioni, SEO & Google Ads Orientati al ROI');
$desc      = get_theme_mod('moockup_hero_desc', 'Aiutiamo aziende e professionisti a dominare Google, acquisire contatti qualificati e trasformare il traffico web in fatturato misurabile. Nessun template preconfezionato, solo codice su misura e strategie data-driven.');
$cta_text  = get_theme_mod('moockup_hero_cta_text', 'Richiedi Preventivo Gratuito');
$cta_url   = get_theme_mod('moockup_hero_cta_url', '#contatti');
$cta2_text = get_theme_mod('moockup_hero_cta2_text', 'Calcola il tuo ROI');
$cta2_url  = get_theme_mod('moockup_hero_cta2_url', '#calcolatore');
?>

<section id="hero" class="relative pt-20 pb-20 md:pt-28 md:pb-28 overflow-hidden bg-[#030712]">
    <!-- Ambient Background Glows -->
    <div class="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-pink-600/15 rounded-full blur-[130px] pointer-events-none"></div>
    <div class="absolute top-1/3 left-1/4 w-[350px] h-[250px] bg-rose-500/10 rounded-full blur-[100px] pointer-events-none"></div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div class="text-center max-w-4xl mx-auto">
            
            <!-- Top pill badge -->
            <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/80 border border-slate-700/80 shadow-inner mb-6 backdrop-blur-sm">
                <span class="w-2 h-2 rounded-full bg-pink-500 animate-ping"></span>
                <span class="text-xs font-semibold tracking-wide text-pink-300 uppercase">
                    <?php echo esc_html($badge); ?>
                </span>
            </div>

            <!-- Main Heading H1 -->
            <h1 class="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.15] mb-6">
                <?php echo wp_kses_post($title); ?>
            </h1>

            <!-- Subheading description -->
            <p class="text-lg sm:text-xl text-slate-300 font-normal leading-relaxed max-w-3xl mx-auto mb-10">
                <?php echo esc_html($desc); ?>
            </p>

            <!-- Call to Actions -->
            <div class="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
                <a href="<?php echo esc_url($cta_url); ?>" class="w-full sm:w-auto px-8 py-4 rounded-xl font-bold text-base text-white bg-gradient-to-r from-pink-600 via-rose-600 to-pink-500 hover:from-pink-500 hover:to-rose-500 shadow-lg shadow-pink-600/30 hover:shadow-pink-600/50 hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2">
                    <span><?php echo esc_html($cta_text); ?></span>
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                </a>

                <a href="<?php echo esc_url($cta2_url); ?>" class="w-full sm:w-auto px-7 py-4 rounded-xl font-semibold text-base text-slate-200 bg-slate-900/80 hover:bg-slate-800 border border-slate-700/80 hover:border-slate-600 hover:text-white transition-all flex items-center justify-center gap-2">
                    <svg class="w-5 h-5 text-pink-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"></path></svg>
                    <span><?php echo esc_html($cta2_text); ?></span>
                </a>
            </div>

            <!-- Trust Metrics Bar -->
            <div class="grid grid-cols-2 md:grid-cols-4 gap-4 p-6 rounded-2xl bg-slate-900/40 border border-slate-800/80 backdrop-blur-md">
                <div class="p-3 text-center border-r border-slate-800/60 last:border-none">
                    <div class="text-2xl sm:text-3xl font-black text-white bg-gradient-to-r from-pink-400 to-rose-400 bg-clip-text text-transparent">&lt; 1.0s</div>
                    <div class="text-xs text-slate-400 font-medium mt-1">Caricamento PageSpeed</div>
                </div>
                <div class="p-3 text-center border-r border-slate-800/60 last:border-none">
                    <div class="text-2xl sm:text-3xl font-black text-white bg-gradient-to-r from-pink-400 to-rose-400 bg-clip-text text-transparent">3.4x</div>
                    <div class="text-xs text-slate-400 font-medium mt-1">ROAS Medio Google Ads</div>
                </div>
                <div class="p-3 text-center border-r border-slate-800/60 last:border-none">
                    <div class="text-2xl sm:text-3xl font-black text-white bg-gradient-to-r from-pink-400 to-rose-400 bg-clip-text text-transparent">100%</div>
                    <div class="text-xs text-slate-400 font-medium mt-1">Codice Su Misura</div>
                </div>
                <div class="p-3 text-center">
                    <div class="text-2xl sm:text-3xl font-black text-white bg-gradient-to-r from-pink-400 to-rose-400 bg-clip-text text-transparent">Foggia</div>
                    <div class="text-xs text-slate-400 font-medium mt-1">Sede Locale & Nazionale</div>
                </div>
            </div>

        </div>
    </div>
</section>
