<?php
/**
 * Single post template (Articoli Blog / SEO Guide)
 *
 * @package Moockup_Studio
 */

get_header();
?>

<main id="primary" class="site-main py-16 sm:py-24 bg-[#030712] min-h-screen">
    <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <?php while (have_posts()) : the_post(); ?>
            <header class="mb-10 text-center">
                <div class="text-xs font-bold text-pink-400 uppercase tracking-wider mb-3">
                    <?php the_category(', '); ?> • <?php echo get_the_date(); ?>
                </div>
                <h1 class="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight mb-4">
                    <?php the_title(); ?>
                </h1>
            </header>

            <?php if (has_post_thumbnail()) : ?>
                <div class="rounded-2xl overflow-hidden mb-10 border border-slate-800 shadow-2xl">
                    <?php the_post_thumbnail('large', array('class' => 'w-full h-auto object-cover')); ?>
                </div>
            <?php endif; ?>

            <div class="prose prose-invert max-w-none text-slate-300 mb-16 prose-headings:text-white prose-a:text-pink-400">
                <?php the_content(); ?>
            </div>

            <!-- Author / Callout -->
            <div class="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 flex items-center justify-between">
                <div>
                    <div class="text-xs text-slate-400">Autore:</div>
                    <div class="text-sm font-bold text-white">Moockup Studio Team</div>
                </div>
                <a href="<?php echo esc_url(home_url('/#contatti')); ?>" class="px-4 py-2 rounded-lg bg-pink-600 hover:bg-pink-500 text-white font-bold text-xs">
                    Consulenza Gratuita
                </a>
            </div>
        <?php endwhile; ?>
    </div>
</main>

<?php
get_footer();
