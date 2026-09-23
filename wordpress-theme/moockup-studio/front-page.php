<?php
/**
 * Template Name: Homepage Moockup Studio
 *
 * The main front-page template for Moockup Studio.
 * Every section is completely modular and can be toggled ON or OFF
 * from WordPress Admin: Appearance -> Customize -> Moockup Studio - Opzioni Tema & Div
 *
 * @package Moockup_Studio
 */

get_header();
?>

<main id="primary" class="site-main">

    <?php
    // 1. HERO SECTION (H1, badge, CTA, trust metrics)
    if (get_theme_mod('moockup_show_hero', true)) {
        get_template_part('template-parts/section', 'hero');
    }

    // 2. INTERACTIVE ROI & BUDGET CALCULATOR
    if (get_theme_mod('moockup_show_roi', true)) {
        get_template_part('template-parts/section', 'roi');
    }

    // 3. CORE SERVICES (Siti Web, Google Ads, SEO, Tracking)
    if (get_theme_mod('moockup_show_services', true)) {
        get_template_part('template-parts/section', 'services');
    }

    // 4. PORTFOLIO & PROGETTI (Custom Post Type Query)
    if (get_theme_mod('moockup_show_portfolio', true)) {
        get_template_part('template-parts/section', 'portfolio');
    }

    // 5. DETAILED CASE STUDIES (Metrics, Before/After)
    if (get_theme_mod('moockup_show_casestudies', true)) {
        get_template_part('template-parts/section', 'casestudies');
    }

    // 6. PROCESS & METHODOLOGY (Analisi, Sviluppo, Lancio, Scalabilità)
    if (get_theme_mod('moockup_show_process', true)) {
        get_template_part('template-parts/section', 'process');
    }

    // 7. CLIENT TESTIMONIALS & REVIEWS
    if (get_theme_mod('moockup_show_testimonials', true)) {
        get_template_part('template-parts/section', 'testimonials');
    }

    // 8. FAQ ACCORDION
    if (get_theme_mod('moockup_show_faq', true)) {
        get_template_part('template-parts/section', 'faq');
    }

    // 9. CONTACT FORM & RECAPITI FOGGIA
    if (get_theme_mod('moockup_show_contact', true)) {
        get_template_part('template-parts/section', 'contact');
    }
    ?>

</main>

<?php
get_footer();
