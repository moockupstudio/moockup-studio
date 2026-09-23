<?php
/**
 * Portfolio Section Template Part
 * Dynamically queries projects from the Custom Post Type 'portfolio'
 *
 * @package Moockup_Studio
 */

$args = array(
    'post_type'      => 'portfolio',
    'posts_per_page' => 6,
    'post_status'    => 'publish',
);
$portfolio_query = new WP_Query($args);
?>

<section id="portfolio" class="py-20 bg-[#060913] border-t border-slate-800/80 relative">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div class="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
            <div>
                <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-500/10 text-pink-400 border border-pink-500/20 text-xs font-semibold uppercase tracking-wider mb-3">
                    Portfolio Lavori
                </div>
                <h2 class="text-3xl sm:text-4xl font-black text-white tracking-tight">
                    Progetti Realizzati & Risultati Concreti
                </h2>
                <p class="mt-2 text-sm sm:text-base text-slate-400">
                    Non solo grafica: ogni progetto è accompagnato da metriche reali di fatturato e conversioni.
                </p>
            </div>
            
            <a href="#contatti" class="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-bold transition-all border border-slate-700 self-start md:self-auto">
                <span>Vuoi un risultato simile? Parliamone</span>
                <svg class="w-4 h-4 text-pink-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
            </a>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <?php
            if ($portfolio_query->have_posts()) :
                while ($portfolio_query->have_posts()) : $portfolio_query->the_post();
                    $client    = get_post_meta(get_the_ID(), '_portfolio_client', true) ?: get_the_title();
                    $category  = get_post_meta(get_the_ID(), '_portfolio_category', true) ?: 'Sviluppo Web & SEO';
                    $result    = get_post_meta(get_the_ID(), '_portfolio_result', true) ?: '+180% Conversioni';
                    $pagespeed = get_post_meta(get_the_ID(), '_portfolio_pagespeed', true) ?: '98/100';
                    $url       = get_post_meta(get_the_ID(), '_portfolio_url', true);
                    ?>
                    <div class="rounded-2xl bg-slate-900/60 border border-slate-800 overflow-hidden hover:border-pink-500/40 transition-all group flex flex-col justify-between">
                        <!-- Thumbnail -->
                        <div class="relative h-48 bg-slate-950 overflow-hidden">
                            <?php if (has_post_thumbnail()) : ?>
                                <?php the_post_thumbnail('portfolio-thumb', array('class' => 'w-full h-full object-cover group-hover:scale-105 transition-transform duration-500')); ?>
                            <?php else : ?>
                                <div class="w-full h-full flex items-center justify-center bg-gradient-to-tr from-slate-900 to-slate-800 text-slate-600">
                                    <span class="text-xs uppercase font-bold tracking-wider">Moockup Studio Project</span>
                                </div>
                            <?php endif; ?>
                            
                            <div class="absolute top-3 right-3 px-2.5 py-1 rounded-md bg-black/80 backdrop-blur-md border border-slate-700/80 text-[11px] font-bold text-emerald-400">
                                PageSpeed: <?php echo esc_html($pagespeed); ?>
                            </div>
                        </div>

                        <!-- Info -->
                        <div class="p-6 flex-1 flex flex-col justify-between">
                            <div>
                                <div class="text-[11px] uppercase font-bold tracking-wider text-pink-400 mb-1">
                                    <?php echo esc_html($category); ?>
                                </div>
                                <h3 class="text-xl font-bold text-white mb-2 group-hover:text-pink-300 transition-colors">
                                    <?php echo esc_html($client); ?>
                                </h3>
                                <p class="text-xs text-slate-400 line-clamp-3 mb-4">
                                    <?php echo esc_html(get_the_excerpt() ?: get_the_title()); ?>
                                </p>
                            </div>

                            <div class="pt-4 border-t border-slate-800 flex items-center justify-between">
                                <div>
                                    <div class="text-[10px] uppercase font-bold text-slate-500">Risultato Ottenuto</div>
                                    <div class="text-sm font-black text-emerald-400"><?php echo esc_html($result); ?></div>
                                </div>
                                <?php if ($url) : ?>
                                    <a href="<?php echo esc_url($url); ?>" target="_blank" rel="noopener noreferrer" class="p-2 rounded-lg bg-slate-800 hover:bg-pink-600 text-white transition-colors" title="Visita il sito">
                                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>
                                    </a>
                                <?php endif; ?>
                            </div>
                        </div>
                    </div>
                    <?php
                endwhile;
                wp_reset_postdata();
            else :
                // Default fallback projects if none created in WordPress yet
                $defaults = array(
                    array('client' => 'Clinica Dentale Foggia', 'cat' => 'Sito Web + Local SEO', 'res' => '+240% Pazienti Prenotati', 'speed' => '99/100'),
                    array('client' => 'Valente & Partners Legale', 'cat' => 'Restyling + Google Ads', 'res' => 'CPA Ridotto del -48%', 'speed' => '97/100'),
                    array('client' => 'Aura E-Commerce Fashion', 'cat' => 'E-Commerce + PMax Ads', 'res' => 'ROAS 6.8x su Google Ads', 'speed' => '96/100'),
                );
                foreach ($defaults as $d) :
                    ?>
                    <div class="rounded-2xl bg-slate-900/60 border border-slate-800 overflow-hidden p-6 flex flex-col justify-between">
                        <div>
                            <div class="flex items-center justify-between mb-4">
                                <span class="text-xs font-bold text-pink-400 uppercase"><?php echo esc_html($d['cat']); ?></span>
                                <span class="text-xs font-bold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">PageSpeed <?php echo esc_html($d['speed']); ?></span>
                            </div>
                            <h3 class="text-xl font-bold text-white mb-2"><?php echo esc_html($d['client']); ?></h3>
                            <p class="text-xs text-slate-400 mb-6 leading-relaxed">
                                Progetto ottimizzato per la conversione. Architettura ultra-veloce su misura e campagne mirate su Google.
                            </p>
                        </div>
                        <div class="pt-4 border-t border-slate-800 flex justify-between items-center">
                            <span class="text-xs text-slate-500">Risultato:</span>
                            <span class="text-sm font-black text-emerald-400"><?php echo esc_html($d['res']); ?></span>
                        </div>
                    </div>
                    <?php
                endforeach;
            endif;
            ?>
        </div>

    </div>
</section>
