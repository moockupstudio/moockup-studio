<?php
/**
 * Main index fallback template
 *
 * @package Moockup_Studio
 */

get_header();
?>

<main id="primary" class="site-main py-16 sm:py-24 bg-[#030712] min-h-screen">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <?php if (have_posts()) : ?>
            <div class="space-y-8">
                <?php while (have_posts()) : the_post(); ?>
                    <article class="p-6 rounded-2xl bg-slate-900/60 border border-slate-800">
                        <h2 class="text-2xl font-bold text-white mb-2">
                            <a href="<?php the_permalink(); ?>" class="hover:text-pink-400"><?php the_title(); ?></a>
                        </h2>
                        <div class="text-xs text-slate-400 mb-4">Pubblicato il <?php echo get_the_date(); ?></div>
                        <div class="text-sm text-slate-300"><?php the_excerpt(); ?></div>
                    </article>
                <?php endwhile; ?>
            </div>
        <?php else : ?>
            <p class="text-slate-400 text-center">Nessun contenuto trovato.</p>
        <?php endif; ?>
    </div>
</main>

<?php
get_footer();
