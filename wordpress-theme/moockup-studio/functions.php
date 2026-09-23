<?php
/**
 * Moockup Studio Theme Functions and Definitions
 *
 * @package Moockup_Studio
 */

if (!defined('ABSPATH')) {
    exit; // Exit if accessed directly
}

/**
 * 1. THEME SETUP
 */
function moockup_theme_setup() {
    // Let WordPress manage the document title
    add_theme_support('title-tag');

    // Enable Featured Images (Post Thumbnails)
    add_theme_support('post-thumbnails');
    add_image_size('portfolio-thumb', 800, 500, true);
    add_image_size('portfolio-full', 1400, 900, true);

    // Custom Logo Support
    add_theme_support('custom-logo', array(
        'height'      => 60,
        'width'       => 240,
        'flex-height' => true,
        'flex-width'  => true,
    ));

    // HTML5 markup support
    add_theme_support('html5', array(
        'search-form',
        'comment-form',
        'comment-list',
        'gallery',
        'caption',
        'style',
        'script',
    ));

    // Register Navigation Menus
    register_nav_menus(array(
        'primary' => __('Menu Principale Header', 'moockup-studio'),
        'footer'  => __('Menu Footer', 'moockup-studio'),
    ));
}
add_action('after_setup_theme', 'moockup_theme_setup');

/**
 * 2. ENQUEUE SCRIPTS & STYLES
 */
function moockup_enqueue_assets() {
    // Google Font: Plus Jakarta Sans
    wp_enqueue_style(
        'moockup-fonts',
        'https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,400;1,700&display=swap',
        array(),
        null
    );

    // Tailwind Play CDN (for rapid styling without build step)
    wp_enqueue_script(
        'tailwind-cdn',
        'https://cdn.tailwindcss.com',
        array(),
        '3.4.1',
        false
    );

    // Theme Custom Styles
    wp_enqueue_style(
        'moockup-custom-css',
        get_template_directory_uri() . '/assets/css/theme.css',
        array(),
        '1.0.0'
    );

    // Main Theme Stylesheet
    wp_enqueue_style(
        'moockup-main-style',
        get_stylesheet_uri(),
        array('moockup-custom-css'),
        '1.0.0'
    );

    // Interactive Vanilla JS (ROI Calculator, FAQ Accordion, Mobile Menu, Filter)
    wp_enqueue_script(
        'moockup-theme-js',
        get_template_directory_uri() . '/assets/js/theme.js',
        array(),
        '1.0.0',
        true
    );

    // Localize script with AJAX URL & Agency info
    wp_localize_script('moockup-theme-js', 'moockupData', array(
        'ajax_url' => admin_url('admin-ajax.php'),
        'nonce'    => wp_create_nonce('moockup_nonce'),
        'phone'    => get_theme_mod('moockup_phone', '+38 3486520380'),
        'email'    => get_theme_mod('moockup_email', 'moockupstudio@gmail.com'),
        'location' => get_theme_mod('moockup_location', 'Foggia (Puglia) & Remote Everywhere'),
    ));
}
add_action('wp_enqueue_scripts', 'moockup_enqueue_assets');

/**
 * 3. CUSTOM POST TYPE: PORTFOLIO / PROGETTI
 * Consente la gestione facile da bacheca di tutti i progetti Moockup Studio
 */
function moockup_register_portfolio_cpt() {
    $labels = array(
        'name'               => __('Progetti Portfolio', 'moockup-studio'),
        'singular_name'      => __('Progetto', 'moockup-studio'),
        'menu_name'          => __('Portfolio', 'moockup-studio'),
        'name_admin_bar'     => __('Progetto Portfolio', 'moockup-studio'),
        'add_new'            => __('Aggiungi Progetto', 'moockup-studio'),
        'add_new_item'       => __('Aggiungi Nuovo Progetto', 'moockup-studio'),
        'new_item'           => __('Nuovo Progetto', 'moockup-studio'),
        'edit_item'          => __('Modifica Progetto', 'moockup-studio'),
        'view_item'          => __('Visualizza Progetto', 'moockup-studio'),
        'all_items'          => __('Tutti i Progetti', 'moockup-studio'),
        'search_items'       => __('Cerca Progetti', 'moockup-studio'),
        'not_found'          => __('Nessun progetto trovato.', 'moockup-studio'),
    );

    $args = array(
        'labels'             => $labels,
        'public'             => true,
        'publicly_queryable' => true,
        'show_ui'            => true,
        'show_in_menu'       => true,
        'query_var'          => true,
        'rewrite'            => array('slug' => 'portfolio', 'with_front' => false),
        'capability_type'    => 'post',
        'has_archive'        => true,
        'hierarchical'       => false,
        'menu_position'      => 5,
        'menu_icon'          => 'dashicons-portfolio',
        'show_in_rest'       => true,
        'supports'           => array('title', 'editor', 'thumbnail', 'excerpt'),
    );

    register_post_type('portfolio', $args);

    // Taxonomy: Categorie Portfolio
    $tax_labels = array(
        'name'              => __('Categorie Portfolio', 'moockup-studio'),
        'singular_name'     => __('Categoria Portfolio', 'moockup-studio'),
        'search_items'      => __('Cerca Categorie', 'moockup-studio'),
        'all_items'         => __('Tutte le Categorie', 'moockup-studio'),
        'edit_item'         => __('Modifica Categoria', 'moockup-studio'),
        'update_item'       => __('Aggiorna Categoria', 'moockup-studio'),
        'add_new_item'      => __('Aggiungi Nuova Categoria', 'moockup-studio'),
        'new_item_name'     => __('Nome Nuova Categoria', 'moockup-studio'),
        'menu_name'         => __('Categorie', 'moockup-studio'),
    );

    register_taxonomy('portfolio_category', array('portfolio'), array(
        'hierarchical'      => true,
        'labels'            => $tax_labels,
        'show_ui'           => true,
        'show_admin_column' => true,
        'query_var'         => true,
        'rewrite'           => array('slug' => 'portfolio-categoria'),
        'show_in_rest'      => true,
    ));
}
add_action('init', 'moockup_register_portfolio_cpt');

/**
 * 4. METABOX PER DETTAGLI PROGETTO PORTFOLIO (Cliente, Metriche, Risultati)
 */
function moockup_add_portfolio_metaboxes() {
    add_meta_box(
        'moockup_portfolio_meta',
        __('Dati & Risultati del Progetto (Moockup Studio)', 'moockup-studio'),
        'moockup_portfolio_metabox_callback',
        'portfolio',
        'normal',
        'high'
    );
}
add_action('add_meta_boxes', 'moockup_add_portfolio_metaboxes');

function moockup_portfolio_metabox_callback($post) {
    wp_nonce_field('moockup_save_portfolio_meta', 'moockup_portfolio_meta_nonce');

    $client    = get_post_meta($post->ID, '_portfolio_client', true);
    $category  = get_post_meta($post->ID, '_portfolio_category', true);
    $result    = get_post_meta($post->ID, '_portfolio_result', true);
    $pagespeed = get_post_meta($post->ID, '_portfolio_pagespeed', true);
    $url       = get_post_meta($post->ID, '_portfolio_url', true);
    $timeline  = get_post_meta($post->ID, '_portfolio_timeline', true);
    ?>
    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 15px; margin-top: 10px;">
        <div>
            <label for="portfolio_client"><strong>Nome Cliente / Brand:</strong></label><br>
            <input type="text" id="portfolio_client" name="portfolio_client" value="<?php echo esc_attr($client); ?>" style="width: 100%; padding: 6px; margin-top: 4px;" placeholder="es. Clinica Dentale Smart">
        </div>
        <div>
            <label for="portfolio_category"><strong>Tipologia / Servizio:</strong></label><br>
            <input type="text" id="portfolio_category" name="portfolio_category" value="<?php echo esc_attr($category); ?>" style="width: 100%; padding: 6px; margin-top: 4px;" placeholder="es. Sito Web + Google Ads">
        </div>
        <div>
            <label for="portfolio_result"><strong>Risultato Principale (Metrica Evidenziata):</strong></label><br>
            <input type="text" id="portfolio_result" name="portfolio_result" value="<?php echo esc_attr($result); ?>" style="width: 100%; padding: 6px; margin-top: 4px;" placeholder="es. +240% Pazienti Prenotati">
        </div>
        <div>
            <label for="portfolio_pagespeed"><strong>Punteggio Google PageSpeed (0-100):</strong></label><br>
            <input type="text" id="portfolio_pagespeed" name="portfolio_pagespeed" value="<?php echo esc_attr($pagespeed ? $pagespeed : '98/100'); ?>" style="width: 100%; padding: 6px; margin-top: 4px;" placeholder="99/100 Mobile">
        </div>
        <div>
            <label for="portfolio_url"><strong>Link al Sito Live (opzionale):</strong></label><br>
            <input type="url" id="portfolio_url" name="portfolio_url" value="<?php echo esc_url($url); ?>" style="width: 100%; padding: 6px; margin-top: 4px;" placeholder="https://www.cliente.it">
        </div>
        <div>
            <label for="portfolio_timeline"><strong>Tempistica di Realizzazione:</strong></label><br>
            <input type="text" id="portfolio_timeline" name="portfolio_timeline" value="<?php echo esc_attr($timeline); ?>" style="width: 100%; padding: 6px; margin-top: 4px;" placeholder="es. 4 Settimane">
        </div>
    </div>
    <p style="margin-top: 15px; color: #64748b; font-size: 12px;">
        💡 <em>Questi dati verranno visualizzati automaticamente nelle schede portfolio, con badge e colori grafici di Moockup Studio.</em>
    </p>
    <?php
}

function moockup_save_portfolio_meta($post_id) {
    if (!isset($_POST['moockup_portfolio_meta_nonce']) || !wp_verify_nonce($_POST['moockup_portfolio_meta_nonce'], 'moockup_save_portfolio_meta')) {
        return;
    }
    if (defined('DOING_AUTOSAVE') && DOING_AUTOSAVE) {
        return;
    }
    if (!current_user_can('edit_post', $post_id)) {
        return;
    }

    $fields = array('portfolio_client', 'portfolio_category', 'portfolio_result', 'portfolio_pagespeed', 'portfolio_url', 'portfolio_timeline');
    foreach ($fields as $field) {
        if (isset($_POST[$field])) {
            update_post_meta($post_id, '_' . $field, sanitize_text_field($_POST[$field]));
        }
    }
}
add_action('save_post_portfolio', 'moockup_save_portfolio_meta');

/**
 * 5. WORDPRESS CUSTOMIZER: CONTROLLI TOTALI SUI TESTI E DIV ON/OFF
 * Permette di modificare testi, recapiti e nascondere/mostrare qualsiasi div da Aspetto -> Personalizza
 */
function moockup_customize_register($wp_customize) {
    // 1. PANNELLO PRINCIPALE MOOCKUP STUDIO
    $wp_customize->add_panel('moockup_theme_options', array(
        'title'       => __('🎨 Moockup Studio - Opzioni Tema & Div', 'moockup-studio'),
        'description' => __('Personalizza tutti i testi, i recapiti di Foggia e attiva/disattiva le sezioni e i div dell\'homepage.', 'moockup-studio'),
        'priority'    => 20,
    ));

    // SEZIONE A: VISIBILITÀ DEI DIV / SEZIONI (ON/OFF)
    $wp_customize->add_section('moockup_section_visibility', array(
        'title'    => __('⚡ Mostra / Nascondi Div & Sezioni', 'moockup-studio'),
        'panel'    => 'moockup_theme_options',
        'priority' => 10,
    ));

    $toggles = array(
        'moockup_show_hero'         => array('label' => 'Mostra Sezione Hero Principale', 'default' => true),
        'moockup_show_roi'          => array('label' => 'Mostra Calcolatore ROI Interattivo', 'default' => true),
        'moockup_show_services'     => array('label' => 'Mostra Griglia Servizi', 'default' => true),
        'moockup_show_portfolio'    => array('label' => 'Mostra Sezione Portfolio Progetti', 'default' => true),
        'moockup_show_casestudies'  => array('label' => 'Mostra Casi Studio Dettagliati', 'default' => true),
        'moockup_show_process'      => array('label' => 'Mostra Metodo & Processo di Lavoro', 'default' => true),
        'moockup_show_testimonials' => array('label' => 'Mostra Testimonianze Clienti', 'default' => true),
        'moockup_show_faq'          => array('label' => 'Mostra Sezione FAQ Accordion', 'default' => true),
        'moockup_show_contact'      => array('label' => 'Mostra Form e Recapiti Contatto', 'default' => true),
        'moockup_show_audit_modal'  => array('label' => 'Attiva Finestra Modale Audit Gratuito', 'default' => true),
    );

    foreach ($toggles as $id => $info) {
        $wp_customize->add_setting($id, array(
            'default'           => $info['default'],
            'sanitize_callback' => 'wp_validate_boolean',
        ));
        $wp_customize->add_control($id, array(
            'type'        => 'checkbox',
            'section'     => 'moockup_section_visibility',
            'label'       => __($info['label'], 'moockup-studio'),
        ));
    }

    // SEZIONE B: RECAPITI AGENZIA & SEDE FOGGIA
    $wp_customize->add_section('moockup_contact_settings', array(
        'title'    => __('📍 Dati di Contatto & Sede Foggia', 'moockup-studio'),
        'panel'    => 'moockup_theme_options',
        'priority' => 20,
    ));

    $contact_fields = array(
        'moockup_phone'     => array('label' => 'Numero di Telefono', 'default' => '+38 3486520380'),
        'moockup_whatsapp'  => array('label' => 'Numero WhatsApp', 'default' => '+38 3486520380'),
        'moockup_email'     => array('label' => 'Email di Contatto', 'default' => 'moockupstudio@gmail.com'),
        'moockup_location'  => array('label' => 'Sede Agenzia', 'default' => 'Foggia (Puglia) & Remote Everywhere'),
        'moockup_hours'     => array('label' => 'Orari di Lavoro', 'default' => 'Lun - Ven: 09:00 - 18:30'),
    );

    foreach ($contact_fields as $id => $info) {
        $wp_customize->add_setting($id, array(
            'default'           => $info['default'],
            'sanitize_callback' => 'sanitize_text_field',
        ));
        $wp_customize->add_control($id, array(
            'type'        => 'text',
            'section'     => 'moockup_contact_settings',
            'label'       => __($info['label'], 'moockup-studio'),
        ));
    }

    // SEZIONE C: TESTI PRINCIPALI HERO HOMEPAGE
    $wp_customize->add_section('moockup_hero_texts', array(
        'title'    => __('🚀 Testi Hero Homepage', 'moockup-studio'),
        'panel'    => 'moockup_theme_options',
        'priority' => 30,
    ));

    $hero_texts = array(
        'moockup_hero_badge'    => array('label' => 'Badge Superiore', 'default' => 'Web Agency & Performance Marketing • Foggia'),
        'moockup_hero_title'    => array('label' => 'Titolo Principale (H1)', 'default' => 'Siti Web ad Alte Prestazioni, SEO & Google Ads Orientati al ROI'),
        'moockup_hero_desc'     => array('label' => 'Descrizione Sottotitolo', 'default' => 'Aiutiamo aziende e professionisti a dominare Google, acquisire contatti qualificati e trasformare il traffico web in fatturato misurabile. Nessun template preconfezionato, solo codice su misura e strategie data-driven.'),
        'moockup_hero_cta_text' => array('label' => 'Testo Pulsante Principale', 'default' => 'Richiedi Audit Gratuito del Tuo Sito'),
        'moockup_hero_cta_url'  => array('label' => 'Link Pulsante Principale', 'default' => '#contatti'),
        'moockup_hero_cta2_text'=> array('label' => 'Testo Pulsante Secondario', 'default' => 'Calcola il tuo ROI'),
        'moockup_hero_cta2_url' => array('label' => 'Link Pulsante Secondario', 'default' => '#calcolatore'),
    );

    foreach ($hero_texts as $id => $info) {
        $wp_customize->add_setting($id, array(
            'default'           => $info['default'],
            'sanitize_callback' => 'sanitize_text_field',
        ));
        $type = (strpos($id, '_desc') !== false) ? 'textarea' : 'text';
        $wp_customize->add_control($id, array(
            'type'        => $type,
            'section'     => 'moockup_hero_texts',
            'label'       => __($info['label'], 'moockup-studio'),
        ));
    }
}
add_action('customize_register', 'moockup_customize_register');

/**
 * 6. GESTIONE FORM CONTATTI VIA AJAX (o fallback mail nativa)
 */
function moockup_handle_ajax_contact() {
    check_ajax_referer('moockup_nonce', 'security');

    $name    = sanitize_text_field($_POST['name'] ?? '');
    $email   = sanitize_email($_POST['email'] ?? '');
    $phone   = sanitize_text_field($_POST['phone'] ?? '');
    $website = esc_url_raw($_POST['website'] ?? '');
    $service = sanitize_text_field($_POST['service'] ?? '');
    $budget  = sanitize_text_field($_POST['budget'] ?? '');
    $message = sanitize_textarea_field($_POST['message'] ?? '');

    if (empty($name) || empty($email)) {
        wp_send_json_error(array('message' => 'Nome ed email sono obbligatori.'));
    }

    $to      = get_theme_mod('moockup_email', 'moockupstudio@gmail.com');
    $subject = "[Moockup Studio] Nuova Richiesta da " . $name;
    $body    = "Hai ricevuto una nuova richiesta dal sito web Moockup Studio:\n\n"
             . "Nome: $name\n"
             . "Email: $email\n"
             . "Telefono: $phone\n"
             . "Sito Web Attuale: $website\n"
             . "Servizio Richiesto: $service\n"
             . "Budget: $budget\n\n"
             . "Messaggio:\n$message\n\n"
             . "Data: " . current_time('d/m/Y H:i');

    $headers = array('Content-Type: text/plain; charset=UTF-8', 'From: ' . $name . ' <' . $email . '>');

    $sent = wp_mail($to, $subject, $body, $headers);

    if ($sent) {
        wp_send_json_success(array('message' => 'Grazie! La tua richiesta è stata inviata con successo. Ti risponderemo entro poche ore.'));
    } else {
        wp_send_json_error(array('message' => 'Si è verificato un errore durante l\'invio. Puoi scriverci direttamente a ' . $to));
    }
}
add_action('wp_ajax_moockup_contact', 'moockup_handle_ajax_contact');
add_action('wp_ajax_nopriv_moockup_contact', 'moockup_handle_ajax_contact');
