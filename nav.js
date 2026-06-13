// ─────────────────────────────────────────────────────────────────
//  FeelGoodNews — nav.js
//  Handles the mobile hamburger menu toggle.
//  Included on every page right after the navbar.
// ─────────────────────────────────────────────────────────────────

function toggleMobileMenu() {
  document.getElementById('nav-hamburger').classList.toggle('active');
  document.getElementById('nav-mobile-menu').classList.toggle('open');
}

// Close the mobile menu if the window is resized back to desktop width
window.addEventListener('resize', function () {
  if (window.innerWidth > 768) {
    const hamburger = document.getElementById('nav-hamburger');
    const menu = document.getElementById('nav-mobile-menu');
    if (hamburger) hamburger.classList.remove('active');
    if (menu) menu.classList.remove('open');
  }
});