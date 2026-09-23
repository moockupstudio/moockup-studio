<?php
/**
 * Single Portfolio Project Template
 *
 * @package Moockup_Studio
 */

get_header();

$phone = get_theme_mod('moockup_phone', '+38 3486520380');
$phone_clean = preg_replace('/[^0-9+]/', '', $phone);
?>

<main id="primary" class="site-main py-16 sm:py-24 bg-[#030712] min-h-screen">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <?php while (have_posts()) : the_post();
            $client    = get_post_meta(get_the_ID(), '_portfolio_client', true) ?: get_the_title();
            $category  = get_post_meta(get_the_ID(), '_portfolio_category', true) ?: 'Sviluppo Web & Ads';
            $result    = get_post_meta(get_the_ID(), '_portfolio_result', true) ?: '+180% Lead';
            $pagespeed = get_post_meta(get_the_ID(), '_portfolio_pagespeed', true) ?: '99/100';
            $url       = get_post_meta(get_the_ID(), '_portfolio_url', true);
            $timeline  = get_post_meta(get_the_ID(), '_portfolio_timeline', true) ?: '4 Settimane';
        ?>
            <!-- Breadcrumbs -->
            <div class="mb-8">
                <a href="<?php echo esc_url(home_url('/#portfolio')); ?>" class="text-xs font-semibold text-pink-400 hover:text-pink-300 flex items-center gap-1">
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></svg>
                    <span>Torna a Tutti i Progetti</span>
                </a>
            </div>

            <!-- Header -->
            <header class="mb-10">
                <span class="text-xs font-bold uppercase tracking-wider text-pink-400 bg-pink-500/10 px-3 py-1 rounded-full border border-pink-500/20">
                    <?php echo esc_html($category); ?>
                </span>
                <h1 class="text-3xl sm:text-5xl font-black text-white tracking-tight mt-4 mb-4">
                    <?php echo esc_html($client); ?>
                </h1>
                <div class="text-base text-slate-300">
                    <?php the_excerpt(); ?>
                </div>
            </header>

            <!-- Metrics bar -->
            <div class="grid grid-cols-2 sm:grid-cols-4 gap-4 p-6 rounded-2xl bg-slate-900/60 border border-slate-800 mb-12">
                <div class="p-3 text-center">
                    <div class="text-[10px] uppercase font-bold text-slate-400">Risultato Chiave</div>
                    <div class="text-xl font-black text-emerald-400 mt-1"><?php echo esc_html($result); ?></div>
                </div>
                <div class="p-3 text-center">
                    <div class="text-[10px] uppercase font-bold text-slate-400">Google PageSpeed</div>
                    <div class="text-xl font-black text-emerald-400 mt-1"><?php echo esc_html($pagespeed); ?></div>
                </div>
                <div class="p-3 text-center">
                    <div class="text-[10px] uppercase font-bold text-slate-400">Tempistica</div>
                    <div class="text-xl font-black text-white mt-1"><?php echo esc_html($timeline); ?></div>
                </div>
                <div class="p-3 text-center">
                    <div class="text-[10px] uppercase font-bold text-slate-400">Sito Live</div>
                    <?php if ($url) : ?>
                        <a href="<?php echo esc_url($url); ?>" target="_blank" rel="noopener noreferrer" class="text-sm font-bold text-pink-400 hover:underline mt-1 block">Visita &rarr;</a>
                    <?php else : ?>
                        <div class="text-sm font-bold text-slate-500 mt-1">Privato</div>
                    <?php endif; ?>
                </div>
            </div>

            <!-- Featured image -->
            <?php if (has_post_thumbnail()) : ?>
                <div class="rounded-2xl overflow-hidden mb-12 border border-slate-800 shadow-2xl">
                    <?php the_post_thumbnail('portfolio-full', array('class' => 'w-full h-auto object-cover')); ?>
                </div>
            <?php endif; ?>

            <!-- Main Project Description -->
            <div class="prose prose-invert max-w-none text-slate-300 mb-16">
                <?php the_content(); ?>
            </div>

            <!-- CTA Box -->
            <div class="p-8 rounded-2xl bg-gradient-to-r from-pink-900/40 to-slate-900 border border-pink-500/30 text-center">
                <h3 class="text-2xl font-bold text-white mb-2">Vuoi ottenere risultati simili per la tua azienda?</h3>
                <p class="text-sm text-slate-300 mb-6">Contattaci per una consulenza senza impegno con il team di Moockup Studio.</p>
                <a href="<?php echo esc_url(home_url('/#contatti')); ?>" class="inline-block px-6 py-3 rounded-xl font-bold text-white bg-pink-600 hover:bg-pink-500 transition-all">
                    Richiedi Preventivo
                </a>
            </div>

        <?php endwhile; ?>
    </div>
</main>

<?php
get_footer();
