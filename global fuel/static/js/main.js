/**
 * Global Fuel Analytics - Client-Side Interactive JavaScript
 */

document.addEventListener('DOMContentLoaded', function () {
  console.log("Global Fuel Analytics loaded successfully.");

  // 1. Initialize Bootstrap Tooltips if available
  if (typeof bootstrap !== 'undefined' && bootstrap.Tooltip) {
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    tooltipTriggerList.map(function (tooltipTriggerEl) {
      return new bootstrap.Tooltip(tooltipTriggerEl);
    });
  }

  // 2. Tableau Visualization Loading & Handler
  initTableauVizHandlers();

  // 3. Fullscreen Toggle for Tableau Cards
  initFullscreenToggle();

  // 4. Contact Form Validation feedback
  initContactFormFeedback();
});

/**
 * Handles Tableau Web Component / Iframe Loading, Spinner Removal, and Fallbacks
 */
function initTableauVizHandlers() {
  const vizElements = document.querySelectorAll('tableau-viz');
  const overlays = document.querySelectorAll('.viz-loading-overlay');
  const reloadBtns = document.querySelectorAll('[data-action="reload-viz"]');

  // Handle Tableau Embedding API v3 custom element events
  vizElements.forEach(viz => {
    // When the viz finishes first interactive rendering
    viz.addEventListener('firstinteractive', function () {
      console.log('Tableau viz loaded and is interactive.');
      hideAllOverlays();
    });

    // If an error occurs
    viz.addEventListener('vizloaderror', function (err) {
      console.warn('Tableau viz encountered a load error:', err);
      showFallbackAlert();
      hideAllOverlays();
    });
  });

  // Also handle iframes if used as fallback
  const iframes = document.querySelectorAll('.tableau-iframe-fallback');
  iframes.forEach(iframe => {
    iframe.addEventListener('load', function () {
      hideAllOverlays();
    });
  });

  // Safety Timeout: In case Tableau events fire early or network is slow, hide spinner after 6s
  setTimeout(function () {
    hideAllOverlays();
  }, 6000);

  // Reload Viz button click
  reloadBtns.forEach(btn => {
    btn.addEventListener('click', function (e) {
      e.preventDefault();
      const parentCard = this.closest('.tableau-outer-card');
      if (!parentCard) return;

      const overlay = parentCard.querySelector('.viz-loading-overlay');
      if (overlay) {
        overlay.classList.remove('hidden');
      }

      const viz = parentCard.querySelector('tableau-viz');
      const iframe = parentCard.querySelector('.tableau-iframe-fallback');

      if (viz) {
        const currentSrc = viz.getAttribute('src');
        viz.setAttribute('src', '');
        setTimeout(() => {
          viz.setAttribute('src', currentSrc);
        }, 150);
      } else if (iframe) {
        const currentSrc = iframe.getAttribute('src');
        iframe.setAttribute('src', '');
        setTimeout(() => {
          iframe.setAttribute('src', currentSrc);
        }, 150);
      }

      setTimeout(() => {
        hideAllOverlays();
      }, 4000);
    });
  });
}

function hideAllOverlays() {
  const overlays = document.querySelectorAll('.viz-loading-overlay');
  overlays.forEach(overlay => {
    overlay.classList.add('hidden');
  });
}

function showFallbackAlert() {
  const fallbackBoxes = document.querySelectorAll('.viz-fallback-notice');
  fallbackBoxes.forEach(box => {
    box.classList.remove('d-none');
  });
}

/**
 * Allows the user to toggle fullscreen mode for the Tableau viz card
 */
function initFullscreenToggle() {
  const toggleBtns = document.querySelectorAll('[data-action="toggle-fullscreen"]');

  toggleBtns.forEach(btn => {
    btn.addEventListener('click', function (e) {
      e.preventDefault();
      const parentCard = this.closest('.tableau-outer-card');
      if (!parentCard) return;

      parentCard.classList.toggle('is-fullscreen');

      const isFull = parentCard.classList.contains('is-fullscreen');
      const icon = this.querySelector('i');
      const text = this.querySelector('.btn-label');

      if (isFull) {
        document.body.style.overflow = 'hidden';
        if (icon) {
          icon.className = 'bi bi-fullscreen-exit';
        }
        if (text) {
          text.textContent = 'Exit Fullscreen';
        }
      } else {
        document.body.style.overflow = '';
        if (icon) {
          icon.className = 'bi bi-arrows-fullscreen';
        }
        if (text) {
          text.textContent = 'Fullscreen';
        }
      }
    });
  });

  // ESC key exits fullscreen
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
      const activeFullscreen = document.querySelector('.tableau-outer-card.is-fullscreen');
      if (activeFullscreen) {
        activeFullscreen.classList.remove('is-fullscreen');
        document.body.style.overflow = '';
        const btn = activeFullscreen.querySelector('[data-action="toggle-fullscreen"]');
        if (btn) {
          const icon = btn.querySelector('i');
          const text = btn.querySelector('.btn-label');
          if (icon) icon.className = 'bi bi-arrows-fullscreen';
          if (text) text.textContent = 'Fullscreen';
        }
      }
    }
  });
}

/**
 * Simple client-side form validation helper for contact form
 */
function initContactFormFeedback() {
  const form = document.querySelector('#contactForm');
  if (form) {
    form.addEventListener('submit', function (e) {
      const submitBtn = form.querySelector('button[type="submit"]');
      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.innerHTML = '<span class="spinner-border spinner-border-sm me-2"></span>Sending...';
      }
    });
  }
}

