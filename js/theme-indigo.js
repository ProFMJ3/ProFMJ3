/**
 * THEME INDIGO/AMBRE — TRANSFORMATION DYNAMIQUE
 * Applique le design moderne sur toutes les pages
 */

// ===================================
// 1. ANIMATIONS FADE-IN AU SCROLL
// ===================================
function initFadeInAnimations() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(el => {
      if (el.isIntersecting) {
        el.target.classList.add('visible');
      }
    });
  }, { threshold: 0.1 });

  // Ajouter fade-in-up sur toutes les cards
  document.querySelectorAll('.card, [class*="card-"]').forEach(el => {
    el.classList.add('fade-in-up');
    observer.observe(el);
  });

  // Ajouter fade-in-up sur les sections principales
  document.querySelectorAll('section > div').forEach((el, index) => {
    if (index > 0) { // Skip hero
      el.classList.add('fade-in-up');
      observer.observe(el);
    }
  });
}

// ===================================
// 2. COMPTEURS ANIMÉS (FIX BUG 0)
// ===================================
function animateCounter(el) {
  const target = parseInt(el.getAttribute('data-target'));
  const duration = 1800;
  const step = target / (duration / 16);
  let current = 0;

  const timer = setInterval(() => {
    current += step;
    if (current >= target) {
      el.textContent = target;
      clearInterval(timer);
    } else {
      el.textContent = Math.floor(current);
    }
  }, 16);
}

function initCounters() {
  const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !entry.target.dataset.animated) {
        entry.target.dataset.animated = 'true';
        animateCounter(entry.target);
      }
    });
  }, { threshold: 0.5 });

  document.querySelectorAll('[data-target]').forEach(el => {
    counterObserver.observe(el);
  });
}

// ===================================
// 3. TRANSFORMER LES SECTIONS
// ===================================
function applyDarkLightAlternance() {
  const sections = document.querySelectorAll('section');
  sections.forEach((section, index) => {
    // Skip navigation et hero (déjà sombres)
    if (section.querySelector('nav') || section.classList.contains('hero')) {
      return;
    }

    // Alternance : pair = clair, impair = sombre
    if (index % 2 === 0) {
      // Section claire
      section.style.background = 'var(--bg-light)';
      section.style.color = 'var(--text-dark)';
    } else {
      // Section sombre
      section.style.background = 'var(--bg-dark-2)';
      section.style.color = 'var(--text-primary)';
    }
  });
}

// ===================================
// 4. AMÉLIORER LES CARDS
// ===================================
function enhanceCards() {
  document.querySelectorAll('.card').forEach(card => {
    const parentBg = window.getComputedStyle(card.closest('section')).backgroundColor;
    const isDark = parentBg.includes('rgb(17') || parentBg.includes('rgb(11'); // bg-dark ou bg-dark-2

    if (isDark) {
      card.classList.add('card-dark');
    } else {
      card.classList.add('card-light');
    }
  });
}

// ===================================
// 5. TYPEWRITER EFFECT (HOMEPAGE)
// ===================================
function initTypewriter() {
  const typewriterEl = document.getElementById('typewriter');
  if (!typewriterEl) return;

  const texts = [
    'Développeur Full-Stack Backend',
    'Data Analyst Junior',
    'Spécialiste Agritech & Fintech',
    'Passionné par Django & Flutter'
  ];

  let textIndex = 0;
  let charIndex = 0;
  let isDeleting = false;

  function type() {
    const currentText = texts[textIndex];

    if (!isDeleting) {
      typewriterEl.textContent = currentText.substring(0, charIndex + 1);
      charIndex++;

      if (charIndex === currentText.length) {
        isDeleting = true;
        setTimeout(type, 2000); // Pause avant suppression
        return;
      }
    } else {
      typewriterEl.textContent = currentText.substring(0, charIndex - 1);
      charIndex--;

      if (charIndex === 0) {
        isDeleting = false;
        textIndex = (textIndex + 1) % texts.length;
      }
    }

    setTimeout(type, isDeleting ? 50 : 100);
  }

  type();
}

// ===================================
// 6. INIT AU CHARGEMENT
// ===================================
document.addEventListener('DOMContentLoaded', () => {
  console.log('🎨 Theme Indigo/Ambre activé');

  initFadeInAnimations();
  initCounters();
  // applyDarkLightAlternance(); // Décommenter si besoin d'alternance auto
  enhanceCards();
  initTypewriter();

  // Mobile menu toggle
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
    });
  }
});
