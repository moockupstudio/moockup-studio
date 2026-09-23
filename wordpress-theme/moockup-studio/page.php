<?php
/**
 * The standard page template
 *
 * @package Moockup_Studio
 */

get_header();
?>

<main id="primary" class="site-main py-16 sm:py-24 bg-[#030712] min-h-screen">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <?php while (have_posts()) : the_post(); ?>
            <header class="mb-10 text-center">
                <h1 class="text-3xl sm:text-4xl font-black text-white tracking-tight">
                    <?php the_title(); ?>
                </h1>
            </header>

            <div class="prose prose-invert max-w-none text-slate-300">
                <?php the_content(); ?>
            </div>
        <?php endwhile; ?>
    </div>
</main>

<?php
get_footer();
