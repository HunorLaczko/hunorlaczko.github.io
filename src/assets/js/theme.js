(function() {
  var toggle = document.getElementById('theme-toggle');
  var sunIcon = document.getElementById('sun-icon');
  var moonIcon = document.getElementById('moon-icon');
  var html = document.documentElement;
  var theme = html.getAttribute('data-theme') || 'light';
  
  function updateIcons() {
    if (theme === 'dark') {
      sunIcon.style.display = 'block';
      moonIcon.style.display = 'none';
    } else {
      sunIcon.style.display = 'none';
      moonIcon.style.display = 'block';
    }
  }
  updateIcons();
  
  toggle.addEventListener('click', function() {
    theme = theme === 'dark' ? 'light' : 'dark';
    html.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    updateIcons();
  });

  var menuToggle = document.getElementById('menu-toggle');
  var navLinks = document.querySelector('.navlinks');
  if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', function() {
      var expanded = menuToggle.getAttribute('aria-expanded') === 'true';
      menuToggle.setAttribute('aria-expanded', !expanded);
      navLinks.classList.toggle('open');
    });
    navLinks.querySelectorAll('a').forEach(function(link) {
      link.addEventListener('click', function() {
        menuToggle.setAttribute('aria-expanded', 'false');
        navLinks.classList.remove('open');
      });
    });
    document.addEventListener('click', function(e) {
      if (!menuToggle.contains(e.target) && !navLinks.contains(e.target)) {
        menuToggle.setAttribute('aria-expanded', 'false');
        navLinks.classList.remove('open');
      }
    });
  }
})();
