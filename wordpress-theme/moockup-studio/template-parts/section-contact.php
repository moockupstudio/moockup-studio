<?php
/**
 * Contact Form & Direct Contacts Section
 *
 * @package Moockup_Studio
 */
$phone = get_theme_mod('moockup_phone', '+38 3486520380');
$phone_clean = preg_replace('/[^0-9+]/', '', $phone);
$whatsapp = get_theme_mod('moockup_whatsapp', '+38 3486520380');
$whatsapp_clean = preg_replace('/[^0-9]/', '', $whatsapp);
$email = get_theme_mod('moockup_email', 'moockupstudio@gmail.com');
$location = get_theme_mod('moockup_location', 'Foggia (Puglia) & Remote Everywhere');
$hours = get_theme_mod('moockup_hours', 'Lun - Ven: 09:00 - 18:30');
?>

<section id="contatti" class="py-20 bg-[#030712] border-t border-slate-800/80 relative">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            <!-- Left Column: Agency Info & Location Foggia -->
            <div class="lg:col-span-5 space-y-8">
                <div>
                    <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-500/10 text-pink-400 border border-pink-500/20 text-xs font-semibold uppercase tracking-wider mb-3">
                        Contatto Diretto
                    </div>
                    <h2 class="text-3xl sm:text-4xl font-black text-white tracking-tight">
                        Parla con i Nostri Specialisti a Foggia
                    </h2>
                    <p class="mt-3 text-sm text-slate-400 leading-relaxed">
                        Compila il form per ricevere un preventivo dettagliato o un audit gratuito del tuo sito web attuale entro 24 ore lavorative.
                    </p>
                </div>

                <div class="space-y-4 text-sm">
                    <!-- Phone -->
                    <a href="tel:<?php echo esc_attr($phone_clean); ?>" class="p-4 rounded-xl bg-slate-900/60 border border-slate-800 hover:border-pink-500/40 flex items-center gap-4 transition-all group">
                        <div class="p-3 rounded-lg bg-pink-500/10 text-pink-400 border border-pink-500/20 group-hover:bg-pink-500 group-hover:text-white transition-colors">
                            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                        </div>
                        <div>
                            <div class="text-xs text-slate-400 font-medium">Telefono Ufficio</div>
                            <div class="text-base font-bold text-white"><?php echo esc_html($phone); ?></div>
                        </div>
                    </a>

                    <!-- WhatsApp -->
                    <a href="https://wa.me/<?php echo esc_attr($whatsapp_clean); ?>" target="_blank" rel="noopener noreferrer" class="p-4 rounded-xl bg-slate-900/60 border border-slate-800 hover:border-emerald-500/40 flex items-center gap-4 transition-all group">
                        <div class="p-3 rounded-lg bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 group-hover:bg-emerald-500 group-hover:text-white transition-colors">
                            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path></svg>
                        </div>
                        <div>
                            <div class="text-xs text-slate-400 font-medium">WhatsApp Diretto</div>
                            <div class="text-base font-bold text-emerald-400"><?php echo esc_html($whatsapp); ?></div>
                        </div>
                    </a>

                    <!-- Location -->
                    <div class="p-4 rounded-xl bg-slate-900/60 border border-slate-800 flex items-center gap-4">
                        <div class="p-3 rounded-lg bg-slate-800 text-pink-400">
                            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                        </div>
                        <div>
                            <div class="text-xs text-slate-400 font-medium">Sede Operativa</div>
                            <div class="text-sm font-bold text-white"><?php echo esc_html($location); ?></div>
                        </div>
                    </div>

                    <!-- Email -->
                    <a href="mailto:<?php echo esc_attr($email); ?>" class="p-4 rounded-xl bg-slate-900/60 border border-slate-800 hover:border-pink-500/40 flex items-center gap-4 transition-all">
                        <div class="p-3 rounded-lg bg-slate-800 text-slate-300">
                            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                        </div>
                        <div>
                            <div class="text-xs text-slate-400 font-medium">Email Ufficiale</div>
                            <div class="text-sm font-bold text-white"><?php echo esc_html($email); ?></div>
                        </div>
                    </a>
                </div>
            </div>

            <!-- Right Column: Contact Form -->
            <div class="lg:col-span-7 bg-slate-900/70 border border-slate-800 rounded-2xl p-6 sm:p-10 shadow-2xl">
                <form id="moockup-contact-form" class="space-y-5">
                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div>
                            <label for="cf-name" class="block text-xs font-semibold text-slate-300 mb-1.5">Nome e Cognome *</label>
                            <input type="text" id="cf-name" name="name" required placeholder="Mario Rossi" class="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white placeholder-slate-500 focus:outline-none focus:border-pink-500 text-sm">
                        </div>
                        <div>
                            <label for="cf-email" class="block text-xs font-semibold text-slate-300 mb-1.5">Email Aziendale *</label>
                            <input type="email" id="cf-email" name="email" required placeholder="mario@azienda.it" class="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white placeholder-slate-500 focus:outline-none focus:border-pink-500 text-sm">
                        </div>
                    </div>

                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div>
                            <label for="cf-phone" class="block text-xs font-semibold text-slate-300 mb-1.5">Numero di Telefono *</label>
                            <input type="tel" id="cf-phone" name="phone" required placeholder="+39 348 0000000" class="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white placeholder-slate-500 focus:outline-none focus:border-pink-500 text-sm">
                        </div>
                        <div>
                            <label for="cf-website" class="block text-xs font-semibold text-slate-300 mb-1.5">Sito Web Attuale (se esistente)</label>
                            <input type="url" id="cf-website" name="website" placeholder="https://www.tuosito.it" class="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white placeholder-slate-500 focus:outline-none focus:border-pink-500 text-sm">
                        </div>
                    </div>

                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div>
                            <label for="cf-service" class="block text-xs font-semibold text-slate-300 mb-1.5">Servizio Principale</label>
                            <select id="cf-service" name="service" class="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white focus:outline-none focus:border-pink-500 text-sm">
                                <option value="Sito Web">Realizzazione Sito Web / E-Commerce</option>
                                <option value="Google Ads">Campagne SEM & Google Ads</option>
                                <option value="SEO">Posizionamento SEO Organico & Locale</option>
                                <option value="Audit">Audit Completo Sito Esistente</option>
                                <option value="Altro">Altro / Pacchetto Integrato</option>
                            </select>
                        </div>
                        <div>
                            <label for="cf-budget" class="block text-xs font-semibold text-slate-300 mb-1.5">Budget Previsto</label>
                            <select id="cf-budget" name="budget" class="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white focus:outline-none focus:border-pink-500 text-sm">
                                <option value="1.5k-3k">€1.500 - €3.000</option>
                                <option value="3k-6k">€3.000 - €6.000</option>
                                <option value="6k-15k">€6.000 - €15.000</option>
                                <option value="15k+">Oltre €15.000</option>
                            </select>
                        </div>
                    </div>

                    <div>
                        <label for="cf-message" class="block text-xs font-semibold text-slate-300 mb-1.5">Descrivi il tuo progetto / obiettivi</label>
                        <textarea id="cf-message" name="message" rows="4" placeholder="Parlaci della tua azienda, dei clienti che vorresti acquisire o dei problemi con il sito attuale..." class="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white placeholder-slate-500 focus:outline-none focus:border-pink-500 text-sm"></textarea>
                    </div>

                    <div id="contact-feedback" class="hidden p-4 rounded-xl text-sm font-medium"></div>

                    <button type="submit" id="contact-submit-btn" class="w-full py-4 px-6 rounded-xl font-bold text-white bg-gradient-to-r from-pink-600 to-rose-600 hover:from-pink-500 hover:to-rose-500 shadow-lg shadow-pink-600/30 transition-all flex items-center justify-center gap-2">
                        <span>Invia Richiesta Preventivo</span>
                        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                    </button>
                </form>
            </div>

        </div>

    </div>
</section>
