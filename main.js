// Mobile menu toggle
function toggleMenu() {
  const menu = document.getElementById('mobileMenu');
  menu.classList.toggle('open');
}

// Scroll reveal
const reveals = document.querySelectorAll('section > *:not(.hero-left):not(.hero-right), .skill-card, .project-card, .exp-card, .edu-card');

reveals.forEach(el => {
  if (!el.classList.contains('animate-in')) {
    el.classList.add('reveal');
  }
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => {
        entry.target.classList.add('visible');
      }, i * 80);
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

// Active nav link on scroll
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(sec => {
    if (window.scrollY >= sec.offsetTop - 200) {
      current = sec.getAttribute('id');
    }
  });
  navLinks.forEach(a => {
    a.style.color = a.getAttribute('href') === `#${current}` ? '#f0f0f0' : '';
  });
});
