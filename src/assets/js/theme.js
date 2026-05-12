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
})();
