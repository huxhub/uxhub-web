/**
 * UX Hub - FMI Industries UI Transitions & Lenis Smooth Motion Engine
 * - Official Lenis Smooth Momentum Scroll (with self-contained standalone fallback)
 * - FMI Easing Curve: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t))
 * - IntersectionObserver Scroll Reveal & Stagger System (f-rise-in)
 * - Dynamic Header Backdrop & Blur on Scroll
 * - Interactive Magnetic / Spring Cursor Follower
 * - Mobile Navigation Drawer & Interactive Form Feedback
 */

(function () {
  'use strict';

  // --------------------------------------------------------------------------
  // 1. Lenis Smooth Momentum Scroll Engine (FMI Spec)
  // --------------------------------------------------------------------------
  let lenisInstance = null;

  function initSmoothScroll() {
    // Respect reduced-motion preferences
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return;
    }

    // If official Lenis library is present on window
    if (typeof window.Lenis !== 'undefined') {
      lenisInstance = new window.Lenis({
        duration: 1.25,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // FMI exact exponential deceleration
        orientation: 'vertical',
        gestureOrientation: 'vertical',
        smoothWheel: true,
        wheelMultiplier: 1.05,
        touchMultiplier: 1.8,
        infinite: false,
      });

      function raf(time) {
        lenisInstance.raf(time);
        requestAnimationFrame(raf);
      }
      requestAnimationFrame(raf);

      // Handle anchor link clicks smoothly via Lenis
      document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.addEventListener('click', function (e) {
          const targetId = this.getAttribute('href');
          if (targetId && targetId !== '#') {
            const targetEl = document.querySelector(targetId);
            if (targetEl) {
              e.preventDefault();
              lenisInstance.scrollTo(targetEl, { offset: -80, duration: 1.2 });
            }
          }
        });
      });
      return;
    }

    // High-performance Standalone Virtual Momentum Engine (Offline fallback)
    if ('ontouchstart' in window || navigator.maxTouchPoints > 0) {
      return; // Leave touch devices to native fluid 120Hz scrolling
    }

    let currentY = window.scrollY;
    let targetY = window.scrollY;
    const ease = 0.082; // FMI-calibrated momentum damping
    let isScrolling = false;

    window.addEventListener('wheel', (e) => {
      if (e.ctrlKey) return;
      e.preventDefault();

      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      targetY += e.deltaY * 1.1;
      targetY = Math.max(0, Math.min(targetY, maxScroll));

      if (!isScrolling) {
        isScrolling = true;
        requestAnimationFrame(renderScroll);
      }
    }, { passive: false });

    function renderScroll() {
      const diff = targetY - currentY;
      currentY += diff * ease;
      window.scrollTo(0, currentY);

      if (Math.abs(diff) > 0.5) {
        requestAnimationFrame(renderScroll);
      } else {
        currentY = targetY;
        window.scrollTo(0, targetY);
        isScrolling = false;
      }
    }
  }

  // --------------------------------------------------------------------------
  // 2. Interactive Cursor (FMI-style Orange Dot & Spring Ring)
  // --------------------------------------------------------------------------
  function initCursor() {
    if ('ontouchstart' in window || navigator.maxTouchPoints > 0 || window.innerWidth < 800) {
      return;
    }

    const dot = document.createElement('div');
    dot.className = 'fmi-cursor-dot';
    const ring = document.createElement('div');
    ring.className = 'fmi-cursor-ring';

    document.body.appendChild(dot);
    document.body.appendChild(ring);

    let mouseX = -100, mouseY = -100;
    let ringX = -100, ringY = -100;
    let isVisible = false;

    window.addEventListener('mousemove', (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      if (!isVisible) {
        dot.style.opacity = '1';
        ring.style.opacity = '1';
        isVisible = true;
      }

      dot.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0) translate(-50%, -50%)`;
    });

    function renderRing() {
      ringX += (mouseX - ringX) * 0.18;
      ringY += (mouseY - ringY) * 0.18;
      ring.style.transform = `translate3d(${ringX}px, ${ringY}px, 0) translate(-50%, -50%)`;
      requestAnimationFrame(renderRing);
    }
    requestAnimationFrame(renderRing);

    const hoverTargets = 'a, button, input, select, textarea, .industry-grid div, .why-grid article, .insight-grid article, .node, .mini-visual, .f-card-arrow';
    document.addEventListener('mouseover', (e) => {
      if (e.target.closest(hoverTargets)) {
        ring.classList.add('cursor-hover');
      }
    });

    document.addEventListener('mouseout', (e) => {
      if (e.target.closest(hoverTargets)) {
        ring.classList.remove('cursor-hover');
      }
    });

    document.addEventListener('mouseleave', () => {
      dot.style.opacity = '0';
      ring.style.opacity = '0';
      isVisible = false;
    });
  }

  // --------------------------------------------------------------------------
  // 3. Scroll Reveal Observer (f-rise-in & Stagger Animations)
  // --------------------------------------------------------------------------
  function initScrollReveals() {
    const revealSelectors = [
      '.split-heading',
      '.service-intro',
      '.capability-list',
      '.mini-visual',
      '.geo-grid',
      '.why-grid',
      '.industry-grid',
      '.insight-grid',
      '.final-cta .shell',
      '.editorial-copy',
      '.contact-grid'
    ];

    revealSelectors.forEach(sel => {
      document.querySelectorAll(sel).forEach(el => {
        if (!el.classList.contains('reveal') && !el.classList.contains('reveal-stagger')) {
          if (sel === '.industry-grid' || sel === '.why-grid' || sel === '.insight-grid') {
            el.classList.add('reveal-stagger');
          } else {
            el.classList.add('reveal');
          }
        }
      });
    });

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.12,
      rootMargin: '0px 0px -40px 0px'
    });

    document.querySelectorAll('.reveal, .reveal-stagger').forEach(el => {
      observer.observe(el);
    });
  }

  // --------------------------------------------------------------------------
  // 4. Header Scroll Dynamics
  // --------------------------------------------------------------------------
  function initHeaderScroll() {
    const header = document.querySelector('.site-header');
    if (!header) return;

    let ticking = false;
    window.addEventListener('scroll', () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          if (window.scrollY > 40) {
            header.classList.add('header-scrolled');
          } else {
            header.classList.remove('header-scrolled');
          }
          ticking = false;
        });
        ticking = true;
      }
    });
  }

  // --------------------------------------------------------------------------
  // 5. Mobile Navigation & Interactive Form Feedback
  // --------------------------------------------------------------------------
  function initMobileNav() {
    const menuButton = document.querySelector('.menu-button');
    const mobileNav = document.querySelector('.mobile-nav');

    if (menuButton && mobileNav) {
      menuButton.addEventListener('click', (e) => {
        e.stopPropagation();
        const isOpen = mobileNav.classList.toggle('open');
        menuButton.setAttribute('aria-expanded', isOpen);
        menuButton.innerHTML = isOpen 
          ? `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>`
          : `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 5h16"></path><path d="M4 12h16"></path><path d="M4 19h16"></path></svg>`;
      });

      // Close mobile drawer when clicking a navigation link
      mobileNav.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
          mobileNav.classList.remove('open');
          menuButton.setAttribute('aria-expanded', 'false');
          menuButton.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 5h16"></path><path d="M4 12h16"></path><path d="M4 19h16"></path></svg>`;
        });
      });

      document.addEventListener('click', (e) => {
        if (!mobileNav.contains(e.target) && !menuButton.contains(e.target) && mobileNav.classList.contains('open')) {
          mobileNav.classList.remove('open');
          menuButton.setAttribute('aria-expanded', 'false');
          menuButton.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 5h16"></path><path d="M4 12h16"></path><path d="M4 19h16"></path></svg>`;
        }
      });
    }
  }

  function initForm() {
    const contactForm = document.querySelector('.contact form');
    const successBox = document.getElementById('form-success');

    if (contactForm && successBox) {
      contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        contactForm.style.display = 'none';
        successBox.style.display = 'block';
      });
    }

    const categoryTags = document.querySelectorAll('.tag-row.categories span');
    categoryTags.forEach(tag => {
      tag.addEventListener('click', () => {
        categoryTags.forEach(t => t.classList.remove('active'));
        tag.classList.add('active');
      });
    });
  }

  // --------------------------------------------------------------------------
  // Initialize Everything on DOM Ready
  // --------------------------------------------------------------------------
  document.addEventListener('DOMContentLoaded', () => {
    initSmoothScroll();
    initCursor();
    initScrollReveals();
    initHeaderScroll();
    initMobileNav();
    initForm();
  });
})();
