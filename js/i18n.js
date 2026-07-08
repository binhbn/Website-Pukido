/* ============================================================
   Pukido careers — bilingual toggle (VI default / EN)
   Vietnamese text lives in the HTML (SEO + no-JS friendly).
   English overrides live in data-en="..." attributes.
   ============================================================ */
(function () {
  var KEY = 'pk-lang';

  var META = {
    vi: {
      title: 'Pukido — Gia nhập đội ngũ | Tuyển dụng',
      desc: 'Pukido Group — công ty thương mại điện tử xuyên biên giới (Amazon, Walmart) từ 2017. Tìm hiểu về công ty, văn hóa, lộ trình phát triển và các vị trí đang tuyển.'
    },
    en: {
      title: 'Pukido — Join the team | Careers',
      desc: 'Pukido Group — a cross-border e-commerce company (Amazon, Walmart) since 2017. Explore the company, culture, career paths and open roles.'
    }
  };

  function applyLang(lang) {
    if (lang !== 'en') lang = 'vi';
    document.documentElement.lang = lang;

    var nodes = document.querySelectorAll('[data-en]');
    for (var i = 0; i < nodes.length; i++) {
      var el = nodes[i];
      // Cache the original Vietnamese text once.
      if (typeof el.dataset.vi === 'undefined') el.dataset.vi = el.textContent;
      el.textContent = (lang === 'en') ? el.dataset.en : el.dataset.vi;
    }

    // Toggle button active state
    var btns = document.querySelectorAll('.lang button');
    for (var b = 0; b < btns.length; b++) {
      var on = btns[b].dataset.lang === lang;
      btns[b].classList.toggle('is-active', on);
      btns[b].setAttribute('aria-pressed', on ? 'true' : 'false');
    }

    // Document title + meta description
    var m = META[lang];
    if (m) {
      document.title = m.title;
      var desc = document.querySelector('meta[name="description"]');
      if (desc) desc.setAttribute('content', m.desc);
    }

    try { localStorage.setItem(KEY, lang); } catch (e) {}
  }

  function initLang() {
    var saved;
    try { saved = localStorage.getItem(KEY); } catch (e) {}
    applyLang(saved || 'vi');

    var btns = document.querySelectorAll('.lang button');
    for (var i = 0; i < btns.length; i++) {
      btns[i].addEventListener('click', function () {
        applyLang(this.dataset.lang);
      });
    }
  }

  // Expose for main.js (mobile menu shares the same toggle markup)
  window.PukidoI18n = { apply: applyLang };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initLang);
  } else {
    initLang();
  }
})();
