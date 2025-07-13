// Theme toggle functionality
function initThemeToggle() {
  const themeToggle = document.getElementById('theme-toggle');
  
  // Get saved theme or default to light
  const savedTheme = localStorage.getItem('theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const currentTheme = savedTheme || (prefersDark ? 'dark' : 'light');
  
  // Apply theme on load
  applyTheme(currentTheme);
  
  // Add event listener to the toggle
  if (themeToggle) {
    themeToggle.addEventListener('click', toggleTheme);
  }
}

function toggleTheme() {
  const currentTheme = document.documentElement.getAttribute('data-theme');
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
  
  applyTheme(newTheme);
  localStorage.setItem('theme', newTheme);
}

function applyTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  
  // Update emoji icons
  const themeIcons = document.querySelectorAll('.theme-icon');
  themeIcons.forEach(icon => {
    icon.textContent = theme === 'dark' ? '☀️' : '🌙';
  });
}

// Navigation functionality
document.addEventListener('DOMContentLoaded', function() {
  // Initialize theme toggle
  initThemeToggle();
  
  const hamburger = document.querySelector('.hamburger');
  const navDrawer = document.querySelector('.menu');
  const navOverlay = document.querySelector('.nav-overlay');

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

  if (navOverlay) {
    navOverlay.addEventListener('click', closeMobileMenu);
  }

  // Close menu when clicking on drawer links
  const drawerLinks = document.querySelectorAll('.menu nav a');
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
