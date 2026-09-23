/**
 * Interactive Scripts for Moockup Studio WordPress Theme
 */

document.addEventListener('DOMContentLoaded', function () {
  
  // 1. MOBILE MENU TOGGLE
  const mobileBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');

  if (mobileBtn && mobileMenu) {
    mobileBtn.addEventListener('click', function () {
      mobileMenu.classList.toggle('hidden');
    });

    // Close mobile menu on link click
    const mobileLinks = mobileMenu.querySelectorAll('a');
    mobileLinks.forEach(function (link) {
      link.addEventListener('click', function () {
        mobileMenu.classList.add('hidden');
      });
    });
  }

  // 2. FAQ ACCORDION
  const faqToggles = document.querySelectorAll('.faq-toggle');
  faqToggles.forEach(function (btn) {
    btn.addEventListener('click', function () {
      const content = this.nextElementSibling;
      const icon = this.querySelector('.faq-icon');
      const isExpanded = this.getAttribute('aria-expanded') === 'true';

      // Close all other FAQs
      faqToggles.forEach(function (otherBtn) {
        if (otherBtn !== btn) {
          otherBtn.setAttribute('aria-expanded', 'false');
          if (otherBtn.nextElementSibling) {
            otherBtn.nextElementSibling.classList.add('hidden');
          }
          const otherIcon = otherBtn.querySelector('.faq-icon');
          if (otherIcon) otherIcon.classList.remove('rotate-180');
        }
      });

      // Toggle current
      if (isExpanded) {
        this.setAttribute('aria-expanded', 'false');
        content.classList.add('hidden');
        if (icon) icon.classList.remove('rotate-180');
      } else {
        this.setAttribute('aria-expanded', 'true');
        content.classList.remove('hidden');
        if (icon) icon.classList.add('rotate-180');
      }
    });
  });

  // 3. INTERACTIVE ROI CALCULATOR
  const budgetInput = document.getElementById('roi-budget-input');
  const budgetVal = document.getElementById('roi-budget-val');
  const valInput = document.getElementById('roi-val-input');
  const valVal = document.getElementById('roi-val-val');
  const closeInput = document.getElementById('roi-close-input');
  const closeVal = document.getElementById('roi-close-val');

  const leadsOut = document.getElementById('roi-leads-out');
  const clientsOut = document.getElementById('roi-clients-out');
  const revenueOut = document.getElementById('roi-revenue-out');

  function updateRoi() {
    if (!budgetInput || !valInput || !closeInput) return;

    const budget = parseFloat(budgetInput.value) || 1000;
    const clientVal = parseFloat(valInput.value) || 500;
    const closeRate = parseFloat(closeInput.value) || 20;

    // Display formatted labels
    budgetVal.textContent = '€' + budget.toLocaleString('it-IT') + ' / mese';
    valVal.textContent = '€' + clientVal.toLocaleString('it-IT');
    closeVal.textContent = closeRate + '%';

    // Calculation formulas based on realistic Moockup Studio data
    const cpaEstimate = 28; // Cost per lead estimated around €28
    const estimatedLeads = Math.max(1, Math.round(budget / cpaEstimate));
    const estimatedClients = Math.max(1, Math.round(estimatedLeads * (closeRate / 100)));
    const estimatedRevenue = estimatedClients * clientVal;

    if (leadsOut) leadsOut.textContent = '~' + estimatedLeads + ' Lead';
    if (clientsOut) clientsOut.textContent = '~' + estimatedClients + ' Clienti';
    if (revenueOut) revenueOut.textContent = '€' + estimatedRevenue.toLocaleString('it-IT') + ' / mese';
  }

  if (budgetInput && valInput && closeInput) {
    budgetInput.addEventListener('input', updateRoi);
    valInput.addEventListener('input', updateRoi);
    closeInput.addEventListener('input', updateRoi);
    updateRoi();
  }

  // 4. AJAX CONTACT FORM SUBMISSION
  const contactForm = document.getElementById('moockup-contact-form');
  const feedback = document.getElementById('contact-feedback');
  const submitBtn = document.getElementById('contact-submit-btn');

  if (contactForm && feedback) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();

      const originalBtnText = submitBtn.innerHTML;
      submitBtn.disabled = true;
      submitBtn.innerHTML = '<span>Invio in corso...</span>';

      feedback.className = 'hidden';

      const formData = new FormData(contactForm);
      formData.append('action', 'moockup_contact');
      if (window.moockupData && window.moockupData.nonce) {
        formData.append('security', window.moockupData.nonce);
      }

      const ajaxUrl = (window.moockupData && window.moockupData.ajax_url) ? window.moockupData.ajax_url : '/wp-admin/admin-ajax.php';

      fetch(ajaxUrl, {
        method: 'POST',
        body: formData
      })
      .then(function (response) { return response.json(); })
      .then(function (data) {
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalBtnText;

        feedback.classList.remove('hidden');
        if (data.success) {
          feedback.className = 'p-4 rounded-xl text-sm font-medium bg-emerald-500/20 text-emerald-300 border border-emerald-500/30';
          feedback.textContent = data.data.message || 'Richiesta inviata con successo!';
          contactForm.reset();
        } else {
          feedback.className = 'p-4 rounded-xl text-sm font-medium bg-rose-500/20 text-rose-300 border border-rose-500/30';
          feedback.textContent = (data.data && data.data.message) ? data.data.message : 'Errore nell\'invio. Riprova o chiamaci.';
        }
      })
      .catch(function (err) {
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalBtnText;
        feedback.classList.remove('hidden');
        feedback.className = 'p-4 rounded-xl text-sm font-medium bg-rose-500/20 text-rose-300 border border-rose-500/30';
        feedback.textContent = 'Errore di connessione. Puoi contattarci direttamente al ' + ((window.moockupData && window.moockupData.phone) ? window.moockupData.phone : '+38 3486520380');
      });
    });
  }

});
