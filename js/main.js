/* ============================================================
   Pukido careers — interactions
   Icons (Lucide), mobile nav, scroll reveal, footer year.
   ============================================================ */
(function () {
  function ready(fn) {
    if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', fn);
    else fn();
  }

  ready(function () {
    // —— Lucide icons ——
    if (window.lucide && typeof window.lucide.createIcons === 'function') {
      window.lucide.createIcons();
      // Icons are decorative — hide from assistive tech and take them out of tab order.
      var svgs = document.querySelectorAll('svg.lucide');
      for (var s = 0; s < svgs.length; s++) {
        svgs[s].setAttribute('aria-hidden', 'true');
        svgs[s].setAttribute('focusable', 'false');
      }
    }

    // —— Footer year ——
    var y = document.getElementById('year');
    if (y) y.textContent = new Date().getFullYear();

    // —— Mobile nav ——
    var burger = document.getElementById('burger');
    var mnav = document.getElementById('mnav');
    var scrim = document.getElementById('scrim');
    var mclose = document.getElementById('mclose');

    function setNav(open) {
      if (!mnav || !scrim) return;
      mnav.classList.toggle('open', open);
      scrim.classList.toggle('open', open);
      document.body.style.overflow = open ? 'hidden' : '';
    }
    function openNav() { setNav(true); if (mclose) mclose.focus(); }
    function closeNav(restoreFocus) { setNav(false); if (restoreFocus && burger) burger.focus(); }

    if (burger) burger.addEventListener('click', openNav);
    if (mclose) mclose.addEventListener('click', function () { closeNav(true); });
    if (scrim) scrim.addEventListener('click', function () { closeNav(true); });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && mnav && mnav.classList.contains('open')) closeNav(true);
    });
    if (mnav) {
      var links = mnav.querySelectorAll('a');
      for (var i = 0; i < links.length; i++) links[i].addEventListener('click', function () { closeNav(false); });
    }

    // —— Scroll reveal ——
    var revealables = document.querySelectorAll('.reveal:not(.in)');
    if ('IntersectionObserver' in window && revealables.length) {
      var io = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('in');
            io.unobserve(entry.target);
          }
        });
      }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
      for (var r = 0; r < revealables.length; r++) io.observe(revealables[r]);
    } else {
      for (var k = 0; k < revealables.length; k++) revealables[k].classList.add('in');
    }
  });
})();
