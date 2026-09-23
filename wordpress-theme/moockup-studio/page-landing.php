<?php
/**
 * Template Name: Landing Page Moockup - Ads & Local SEO
 * Description: Modello ad altissima conversione per creare infinite landing page dedicate a campagne Google Ads o all'indicizzazione SEO locale (es. Foggia, Bari, settori specifici).
 *
 * @package Moockup_Studio
 */

get_header();

$phone = get_theme_mod('moockup_phone', '+38 3486520380');
$phone_clean = preg_replace('/[^0-9+]/', '', $phone);
$location = get_theme_mod('moockup_location', 'Foggia (Puglia) & Remote Everywhere');
?>

<main id="primary" class="site-main py-16 sm:py-24 bg-[#030712] min-h-screen">
    <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <?php while (have_posts()) : the_post(); ?>
            
            <!-- Landing Header -->
            <div class="text-center max-w-3xl mx-auto mb-12">
                <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-500/10 text-pink-400 border border-pink-500/20 text-xs font-semibold uppercase tracking-wider mb-4">
                    📍 <?php echo esc_html($location); ?>
                </div>

                <h1 class="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight mb-6">
                    <?php the_title(); ?>
                </h1>

                <?php if (has_excerpt()) : ?>
                    <p class="text-lg text-slate-300 font-normal leading-relaxed">
                        <?php the_excerpt(); ?>
                    </p>
                <?php endif; ?>
            </div>

            <!-- Featured image (if set) -->
            <?php if (has_post_thumbnail()) : ?>
                <div class="rounded-2xl overflow-hidden mb-12 border border-slate-800 shadow-2xl">
                    <?php the_post_thumbnail('full', array('class' => 'w-full h-auto object-cover')); ?>
                </div>
            <?php endif; ?>

            <!-- Page Content (Gutenberg blocks or classic editor) -->
            <div class="prose prose-invert max-w-none mb-16 text-slate-300 prose-headings:text-white prose-a:text-pink-400 prose-strong:text-white">
                <?php the_content(); ?>
            </div>

            <!-- Conversion Action Box for this Landing -->
            <div class="p-8 sm:p-12 rounded-3xl bg-gradient-to-b from-slate-900 to-slate-950 border border-pink-500/30 text-center shadow-2xl relative overflow-hidden">
                <div class="absolute -top-24 -right-24 w-60 h-60 bg-pink-500/10 rounded-full blur-3xl pointer-events-none"></div>
                
                <h2 class="text-2xl sm:text-3xl font-black text-white mb-4">
                    Pronto a Far Crescere il Tuo Business a <?php echo esc_html($location); ?>?
                </h2>
                <p class="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto mb-8">
                    Richiedi un'analisi gratuita della tua presenza online o un preventivo personalizzato. Rispondiamo entro poche ore lavorative.
                </p>

                <div class="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <a href="<?php echo esc_url(home_url('/#contatti')); ?>" class="w-full sm:w-auto px-8 py-4 rounded-xl font-bold text-white bg-gradient-to-r from-pink-600 to-rose-600 hover:from-pink-500 hover:to-rose-500 shadow-lg shadow-pink-600/30 transition-all">
                        Richiedi Consulenza Gratuita
                    </a>
                    <a href="tel:<?php echo esc_attr($phone_clean); ?>" class="w-full sm:w-auto px-7 py-4 rounded-xl font-semibold text-slate-200 bg-slate-800 hover:bg-slate-700 border border-slate-700 transition-all flex items-center justify-center gap-2">
                        <span>Chiama: <?php echo esc_html($phone); ?></span>
                    </a>
                </div>
            </div>

        <?php endwhile; ?>

    </div>
</main>

<?php
get_footer();
