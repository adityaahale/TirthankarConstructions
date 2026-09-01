// Mobile nav toggle
const navToggle = document.getElementById('nav-toggle');
const siteNav = document.getElementById('site-nav');

if (navToggle && siteNav) {
  navToggle.addEventListener('click', () => {
    const isOpen = siteNav.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });

  siteNav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      siteNav.classList.remove('open');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

// Footer year
const yearEl = document.getElementById('year');
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

// Contact form — UI only, no backend wired up yet.
// TODO: once a form backend (e.g. Formspree) is connected via the <form action="...">,
// remove preventDefault() below and let the form submit normally.
const contactForm = document.getElementById('contact-form');
const formNote = document.getElementById('form-note');

if (contactForm && formNote) {
  contactForm.addEventListener('submit', (event) => {
    event.preventDefault();
    formNote.textContent = "Thanks! This form isn't connected to email yet — please call or WhatsApp us for now, and we'll respond right away.";
    formNote.classList.remove('error');
    contactForm.reset();
  });
}
