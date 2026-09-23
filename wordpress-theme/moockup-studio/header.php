<?php
/**
 * Header template for Moockup Studio WordPress Theme
 *
 * @package Moockup_Studio
 */
$phone = get_theme_mod('moockup_phone', '+38 3486520380');
$phone_clean = preg_replace('/[^0-9+]/', '', $phone);
$email = get_theme_mod('moockup_email', 'moockupstudio@gmail.com');
$location = get_theme_mod('moockup_location', 'Foggia (Puglia) & Remote Everywhere');
?>
<!DOCTYPE html>
<html <?php language_attributes(); ?> class="scroll-smooth">
<head>
    <meta charset="<?php bloginfo('charset'); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="profile" href="https://gmpg.org/xfn/11">
    
    <!-- Schema.org LocalBusiness JSON-LD for Foggia Local SEO -->
    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "ProfessionalService",
      "name": "Moockup Studio",
      "image": "<?php echo esc_url(get_template_directory_uri() . '/assets/images/logo.png'); ?>",
      "@id": "https://www.moockup.it/#organization",
      "url": "https://www.moockup.it",
      "telephone": "<?php echo esc_js($phone); ?>",
      "email": "<?php echo esc_js($email); ?>",
      "priceRange": "€€",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Via Foggia Centro",
        "addressLocality": "Foggia",
        "postalCode": "71121",
        "addressRegion": "FG",
        "addressCountry": "IT"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 41.4622,
        "longitude": 15.5447
      },
      "openingHoursSpecification": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "09:00",
        "closes": "18:30"
      },
      "sameAs": [
        "https://www.instagram.com/moockupstudio"
      ],
      "areaServed": [
        { "@type": "City", "name": "Foggia" },
        { "@type": "AdministrativeArea", "name": "Puglia" },
        { "@type": "Country", "name": "Italia" }
      ]
    }
    </script>

    <?php wp_head(); ?>
</head>

<body <?php body_class('bg-[#030712] text-slate-100 antialiased selection:bg-fuchsia-500 selection:text-white'); ?>>
<?php wp_body_open(); ?>

<!-- Sticky Navbar -->
<header id="main-header" class="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-[#090D16]/90 backdrop-blur-md border-b border-slate-800/80 shadow-lg shadow-black/20 py-3">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between">
            
            <!-- Brand Logo -->
            <a href="<?php echo esc_url(home_url('/')); ?>" class="flex items-center gap-3 group focus:outline-none py-1" aria-label="Moockup Studio Home">
                <!-- Official Moockup M Icon -->
                <div class="relative flex items-center justify-center">
                    <div class="w-10 h-10 rounded-xl bg-gradient-to-tr from-pink-600 via-rose-500 to-amber-400 p-[1.5px] shadow-lg shadow-pink-500/20 group-hover:shadow-pink-500/40 transition-shadow">
                        <div class="w-full h-full bg-[#090D16] rounded-[10px] flex items-center justify-center overflow-hidden">
                            <span class="text-xl font-black italic tracking-tighter bg-gradient-to-br from-white via-pink-100 to-pink-500 bg-clip-text text-transparent transform group-hover:scale-110 transition-transform">
                                M
                            </span>
                        </div>
                    </div>
                </div>

                <!-- Brand Name & Tagline -->
                <div class="flex flex-col">
                    <span class="text-xl font-black tracking-tight text-white flex items-center gap-1.5">
                        MOOCKUP <span class="text-xs font-bold px-1.5 py-0.5 rounded bg-pink-500/10 text-pink-400 border border-pink-500/20 uppercase tracking-widest">STUDIO</span>
                    </span>
                    <span class="text-[10px] font-medium tracking-wider text-slate-400 uppercase">
                        Web Agency • Foggia
                    </span>
                </div>
            </a>

            <!-- Desktop Navigation Links -->
            <nav class="hidden lg:flex items-center gap-1 xl:gap-2" aria-label="Navigazione Principale">
                <?php
                if (has_nav_menu('primary')) {
                    wp_nav_menu(array(
                        'theme_location' => 'primary',
                        'container'      => false,
                        'menu_class'     => 'flex items-center gap-1',
                        'fallback_cb'    => false,
                        'items_wrap'     => '<ul id="%1$s" class="%2$s">%3$s</ul>',
                    ));
                } else {
                    // Fallback navigation with smooth section scroll
                    ?>
                    <a href="<?php echo esc_url(home_url('/#servizi')); ?>" class="px-3.5 py-2 text-sm font-medium text-slate-300 hover:text-white rounded-lg hover:bg-slate-800/60 transition-colors">Servizi</a>
                    <a href="<?php echo esc_url(home_url('/#portfolio')); ?>" class="px-3.5 py-2 text-sm font-medium text-slate-300 hover:text-white rounded-lg hover:bg-slate-800/60 transition-colors">Portfolio</a>
                    <a href="<?php echo esc_url(home_url('/#casi-studio')); ?>" class="px-3.5 py-2 text-sm font-medium text-slate-300 hover:text-white rounded-lg hover:bg-slate-800/60 transition-colors">Casi Studio</a>
                    <a href="<?php echo esc_url(home_url('/#calcolatore')); ?>" class="px-3.5 py-2 text-sm font-medium text-slate-300 hover:text-white rounded-lg hover:bg-slate-800/60 transition-colors">Calcola ROI</a>
                    <a href="<?php echo esc_url(home_url('/#processo')); ?>" class="px-3.5 py-2 text-sm font-medium text-slate-300 hover:text-white rounded-lg hover:bg-slate-800/60 transition-colors">Metodo</a>
                    <a href="<?php echo esc_url(home_url('/#faq')); ?>" class="px-3.5 py-2 text-sm font-medium text-slate-300 hover:text-white rounded-lg hover:bg-slate-800/60 transition-colors">FAQ</a>
                    <?php
                }
                ?>
            </nav>

            <!-- CTA Buttons -->
            <div class="hidden sm:flex items-center gap-3">
                <a href="tel:<?php echo esc_attr($phone_clean); ?>" class="flex items-center gap-2 px-3 py-2 rounded-lg text-xs font-semibold text-slate-300 hover:text-white hover:bg-slate-800/70 border border-slate-700/60 transition-all">
                    <svg class="w-3.5 h-3.5 text-pink-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                    <span><?php echo esc_html($phone); ?></span>
                </a>

                <a href="<?php echo esc_url(home_url('/#contatti')); ?>" class="relative inline-flex items-center justify-center p-0.5 overflow-hidden text-xs font-bold rounded-lg group bg-gradient-to-r from-pink-500 to-rose-600 group-hover:from-pink-500 group-hover:to-rose-600 hover:text-white text-white shadow-md shadow-pink-500/20 hover:shadow-pink-500/40 transition-all">
                    <span class="px-4 py-2 transition-all ease-in duration-75 bg-[#090D16] rounded-[6px] group-hover:bg-opacity-0">
                        Richiedi Preventivo
                    </span>
                </a>
            </div>

            <!-- Mobile Menu Toggle Button -->
            <button id="mobile-menu-btn" type="button" class="lg:hidden p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 focus:outline-none" aria-label="Apri Menu">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
            </button>
        </div>
    </div>

    <!-- Mobile Menu Drawer -->
    <div id="mobile-menu" class="hidden lg:hidden bg-[#090D16] border-b border-slate-800 px-4 pt-3 pb-6 space-y-2">
        <a href="<?php echo esc_url(home_url('/#servizi')); ?>" class="block px-3 py-2 rounded-md text-base font-medium text-slate-300 hover:text-white hover:bg-slate-800">Servizi</a>
        <a href="<?php echo esc_url(home_url('/#portfolio')); ?>" class="block px-3 py-2 rounded-md text-base font-medium text-slate-300 hover:text-white hover:bg-slate-800">Portfolio</a>
        <a href="<?php echo esc_url(home_url('/#casi-studio')); ?>" class="block px-3 py-2 rounded-md text-base font-medium text-slate-300 hover:text-white hover:bg-slate-800">Casi Studio</a>
        <a href="<?php echo esc_url(home_url('/#calcolatore')); ?>" class="block px-3 py-2 rounded-md text-base font-medium text-slate-300 hover:text-white hover:bg-slate-800">Calcola ROI</a>
        <a href="<?php echo esc_url(home_url('/#processo')); ?>" class="block px-3 py-2 rounded-md text-base font-medium text-slate-300 hover:text-white hover:bg-slate-800">Metodo</a>
        <a href="<?php echo esc_url(home_url('/#faq')); ?>" class="block px-3 py-2 rounded-md text-base font-medium text-slate-300 hover:text-white hover:bg-slate-800">FAQ</a>
        <div class="pt-4 border-t border-slate-800 flex flex-col gap-3">
            <a href="tel:<?php echo esc_attr($phone_clean); ?>" class="text-center py-2.5 rounded-lg border border-slate-700 text-slate-200 text-sm font-semibold">
                Chiama: <?php echo esc_html($phone); ?>
            </a>
            <a href="<?php echo esc_url(home_url('/#contatti')); ?>" class="text-center py-2.5 rounded-lg bg-gradient-to-r from-pink-500 to-rose-600 text-white font-bold text-sm">
                Richiedi Audit Gratuito
            </a>
        </div>
    </div>
</header>
<div class="h-16"></div> <!-- Spacer for fixed header -->
