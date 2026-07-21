// Footer year
document.getElementById('year').textContent = new Date().getFullYear();

// Mobile nav toggle
const navToggle = document.querySelector('.nav-toggle');
const mainNav = document.querySelector('.main-nav');
if (navToggle) {
  navToggle.addEventListener('click', () => {
    const isOpen = mainNav.classList.toggle('is-open');
    navToggle.setAttribute('aria-expanded', isOpen);
  });
  mainNav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      mainNav.classList.remove('is-open');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

// Scroll reveal
const revealTargets = document.querySelectorAll(
  '.about-grid, .materials-grid, .product-grid, .capabilities-grid, .contact-grid'
);
revealTargets.forEach(el => el.classList.add('reveal'));

const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (!prefersReducedMotion && 'IntersectionObserver' in window) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  revealTargets.forEach(el => observer.observe(el));
} else {
  revealTargets.forEach(el => el.classList.add('is-visible'));
}

// Basic quote form handling (client-side only until Formspree ID is set)
const form = document.getElementById('quote-form');
if (form) {
  form.addEventListener('submit', (e) => {
    if (form.action.includes('YOUR_FORM_ID')) {
      e.preventDefault();
      alert('Form is not connected yet. See the README for how to activate it with Formspree.');
    }
  });
}

// Product gallery: click a thumbnail to swap it into the main image
const galleryMainImg = document.querySelector('.gallery-main img');
const galleryThumbs = document.querySelectorAll('.gallery-thumbs img');

if (galleryMainImg && galleryThumbs.length) {
  galleryThumbs.forEach(thumb => {
    thumb.style.cursor = 'pointer';
    thumb.addEventListener('click', () => {
      const newMainSrc = thumb.src;
      const newMainAlt = thumb.alt;

      // Swap: the clicked thumbnail becomes the main image,
      // and the old main image takes its place in the thumbnail row.
      thumb.src = galleryMainImg.src;
      thumb.alt = galleryMainImg.alt;
      galleryMainImg.src = newMainSrc;
      galleryMainImg.alt = newMainAlt;
    });
  });
}

// Image lightbox: click the main product image to view an enlarged version
const zoomableImgs = document.querySelectorAll('.gallery-main img');
if (zoomableImgs.length) {
  const lightbox = document.createElement('div');
  lightbox.className = 'lightbox-overlay';
  lightbox.innerHTML = '<button class="lightbox-close" aria-label="Close enlarged image">&times;</button><img class="lightbox-img" alt="">';
  document.body.appendChild(lightbox);

  const lightboxImg = lightbox.querySelector('.lightbox-img');
  const lightboxClose = lightbox.querySelector('.lightbox-close');

  function openLightbox(src, alt) {
    lightboxImg.src = src;
    lightboxImg.alt = alt || '';
    lightbox.classList.add('is-open');
    document.body.style.overflow = 'hidden';
  }
  function closeLightbox() {
    lightbox.classList.remove('is-open');
    document.body.style.overflow = '';
  }

  zoomableImgs.forEach(img => {
    img.addEventListener('click', () => openLightbox(img.currentSrc || img.src, img.alt));
  });
  lightboxClose.addEventListener('click', closeLightbox);
  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) closeLightbox();
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && lightbox.classList.contains('is-open')) closeLightbox();
  });
}
