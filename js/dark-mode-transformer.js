/**
 * DARK MODE COMPLET - TRANSFORMATION AGGRESSIVE
 * Élimine tous les fonds blancs et applique le thème sombre partout
 */

document.addEventListener('DOMContentLoaded', () => {
  console.log('🌑 Transformation Dark Mode en cours...');

  // 1. TRANSFORMER TOUTES LES SECTIONS BLANCHES
  document.querySelectorAll('section').forEach(section => {
    const classes = section.className;
    
    // Remplacer bg-white par bg-dark-2
    if (classes.includes('bg-white')) {
      section.className = classes.replace('bg-white', 'bg-dark-2')
                                   .replace('text-text-secondary', 'text-secondary')
                                   .replace('text-primary', 'text-primary');
      section.style.background = 'var(--bg-dark-2)';
      section.style.color = 'var(--text-primary)';
    }
    
    // Remplacer bg-surface par bg-dark
    if (classes.includes('bg-surface')) {
      section.className = classes.replace('bg-surface', 'bg-dark');
      section.style.background = 'var(--bg-dark)';
      section.style.color = 'var(--text-primary)';
    }
    
    // Remplacer les gradients clairs par sombres
    if (classes.includes('from-primary-50') || classes.includes('to-secondary-50')) {
      section.style.background = 'var(--bg-dark-2)';
      section.style.color = 'var(--text-primary)';
    }
  });

  // 2. TRANSFORMER LES TITRES EN TEXTE CLAIR
  document.querySelectorAll('h1, h2, h3, h4, h5, h6').forEach(heading => {
    const parent = heading.closest('section');
    if (parent) {
      const parentBg = window.getComputedStyle(parent).backgroundColor;
      const isDark = parentBg.includes('rgb(11') || parentBg.includes('rgb(17') || parentBg.includes('rgb(26');
      
      if (isDark && !heading.classList.contains('text-gradient')) {
        heading.style.color = 'var(--text-primary)';
      }
    }
  });

  // 3. TRANSFORMER LES PARAGRAPHES
  document.querySelectorAll('p').forEach(p => {
    const parent = p.closest('section');
    if (parent) {
      const parentBg = window.getComputedStyle(parent).backgroundColor;
      const isDark = parentBg.includes('rgb(11') || parentBg.includes('rgb(17') || parentBg.includes('rgb(26');
      
      if (isDark) {
        p.style.color = 'var(--text-secondary)';
      }
    }
  });

  // 4. TRANSFORMER LES CARDS BLANCHES
  document.querySelectorAll('.card, [class*="card"]').forEach(card => {
    if (card.style.backgroundColor === 'rgb(255, 255, 255)' || 
        card.style.backgroundColor === 'white' ||
        window.getComputedStyle(card).backgroundColor === 'rgb(255, 255, 255)') {
      card.style.background = 'var(--bg-dark-card)';
      card.style.borderColor = 'var(--border-dark)';
      card.style.color = 'var(--text-primary)';
    }
  });

  // 5. TRANSFORMER LES BADGES BLANCS EN BADGES SOMBRES
  document.querySelectorAll('[class*="bg-white"]').forEach(el => {
    if (el.classList.contains('rounded-full') || el.classList.contains('rounded')) {
      el.style.background = 'var(--bg-dark-card)';
      el.style.borderColor = 'var(--border-accent)';
      el.style.color = 'var(--color-primary-light)';
    }
  });

  console.log('✅ Dark Mode appliqué sur toutes les sections');
});
