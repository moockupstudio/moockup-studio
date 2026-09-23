<?php
/**
 * ROI & Budget Calculator Section
 *
 * @package Moockup_Studio
 */
?>

<section id="calcolatore" class="py-20 bg-[#070b14] border-y border-slate-800/80 relative">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div class="text-center max-w-3xl mx-auto mb-14">
            <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-500/10 text-pink-400 border border-pink-500/20 text-xs font-semibold uppercase tracking-wider mb-3">
                Strumento di Stima
            </div>
            <h2 class="text-3xl sm:text-4xl font-black text-white tracking-tight">
                Simula il Ritorno sull'Investimento (ROI)
            </h2>
            <p class="mt-3 text-sm sm:text-base text-slate-400">
                Inserisci i dati del tuo business per stimare quanti nuovi contatti e fatturato potenziale puoi generare con un sito ottimizzato e campagne Google Ads.
            </p>
        </div>

        <div class="max-w-4xl mx-auto bg-slate-900/70 border border-slate-800 rounded-2xl p-6 sm:p-10 shadow-2xl backdrop-blur-sm">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                
                <!-- Controls Column -->
                <div class="space-y-6">
                    <div>
                        <div class="flex justify-between text-sm font-semibold mb-2">
                            <span class="text-slate-300">Investimento Mensile Ads:</span>
                            <span id="roi-budget-val" class="text-pink-400 font-bold">€1.000 / mese</span>
                        </div>
                        <input type="range" id="roi-budget-input" min="500" max="10000" step="250" value="1000" class="w-full accent-pink-500 cursor-pointer">
                    </div>

                    <div>
                        <div class="flex justify-between text-sm font-semibold mb-2">
                            <span class="text-slate-300">Valore Medio per Cliente / Vendita:</span>
                            <span id="roi-val-val" class="text-pink-400 font-bold">€500</span>
                        </div>
                        <input type="range" id="roi-val-input" min="100" max="5000" step="50" value="500" class="w-full accent-pink-500 cursor-pointer">
                    </div>

                    <div>
                        <div class="flex justify-between text-sm font-semibold mb-2">
                            <span class="text-slate-300">Tasso di Chiusura Preventivi:</span>
                            <span id="roi-close-val" class="text-pink-400 font-bold">20%</span>
                        </div>
                        <input type="range" id="roi-close-input" min="5" max="50" step="5" value="20" class="w-full accent-pink-500 cursor-pointer">
                    </div>

                    <div class="p-4 rounded-xl bg-slate-800/40 border border-slate-700/50 text-xs text-slate-400">
                        ⚡ <em>Stima basata su un costo medio per lead (CPA) di €22-€35 calcolato su dati storici Moockup Studio per campagne Search geolocalizzate.</em>
                    </div>
                </div>

                <!-- Outputs Column -->
                <div class="p-6 sm:p-8 rounded-xl bg-gradient-to-b from-slate-900 to-slate-950 border border-pink-500/30 text-center space-y-6">
                    <div>
                        <div class="text-xs uppercase font-bold tracking-wider text-slate-400 mb-1">Nuovi Contatti Qualificati / Mese</div>
                        <div id="roi-leads-out" class="text-4xl font-black text-white">~35 Lead</div>
                    </div>

                    <div class="border-t border-slate-800 pt-4">
                        <div class="text-xs uppercase font-bold tracking-wider text-slate-400 mb-1">Nuovi Clienti Acquisiti / Mese</div>
                        <div id="roi-clients-out" class="text-3xl font-extrabold text-pink-400">~7 Clienti</div>
                    </div>

                    <div class="border-t border-slate-800 pt-4">
                        <div class="text-xs uppercase font-bold tracking-wider text-slate-400 mb-1">Fatturato Potenziale Mensile</div>
                        <div id="roi-revenue-out" class="text-3xl font-black text-emerald-400">€3.500 / mese</div>
                    </div>

                    <div class="pt-2">
                        <a href="#contatti" class="block w-full py-3 px-4 rounded-xl text-center font-bold text-sm text-white bg-gradient-to-r from-pink-600 to-rose-600 hover:from-pink-500 hover:to-rose-500 shadow-md transition-all">
                            Richiedi Strategia su Misura
                        </a>
                    </div>
                </div>

            </div>
        </div>

    </div>
</section>
