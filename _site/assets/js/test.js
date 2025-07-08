console.log('Test loaded');

// Navigation functionality
document.addEventListener('DOMContentLoaded', function() {
  const hamburger = document.querySelector('.hamburger');
  const navDrawer = document.querySelector('aside');
  const navOverlay = document.querySelector('.nav-overlay');
  const closeBtn = document.querySelector('aside button');

  // Toggle mobile menu
  function toggleMobileMenu() {
    hamburger.classList.toggle('active');
    navDrawer.classList.toggle('active');
    navOverlay.classList.toggle('active');
    document.body.style.overflow = navDrawer.classList.contains('active') ? 'hidden' : '';
  }

  // Close mobile menu
  function closeMobileMenu() {
    hamburger.classList.remove('active');
    navDrawer.classList.remove('active');
    navOverlay.classList.remove('active');
    document.body.style.overflow = '';
  }

  // Event listeners
  if (hamburger) {
    hamburger.addEventListener('click', toggleMobileMenu);
  }

  if (closeBtn) {
    closeBtn.addEventListener('click', closeMobileMenu);
  }

  if (navOverlay) {
    navOverlay.addEventListener('click', closeMobileMenu);
  }

  // Close menu when clicking on drawer links
  const drawerLinks = document.querySelectorAll('aside nav a');
  drawerLinks.forEach(link => {
    link.addEventListener('click', closeMobileMenu);
  });

  // Close menu on window resize to desktop
  window.addEventListener('resize', function() {
    if (window.innerWidth > 768) {
      closeMobileMenu();
    }
  });

  // Escape key to close menu
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
      closeMobileMenu();
    }
  });
});
