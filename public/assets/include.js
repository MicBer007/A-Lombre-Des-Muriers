// Shared section loader for A l'ombre des Muriers
(function() {
  // Find the base URL from the script's own location
  var scripts = document.getElementsByTagName('script');
  var currentScript = scripts[scripts.length - 1];
  var scriptSrc = currentScript.getAttribute('src') || '';
  var basePath = scriptSrc.replace(/assets\/include\.js.*$/, '');

  // Find all elements with data-include attribute
  var includes = document.querySelectorAll('[data-include]');

  // Track loading for active nav highlighting
  var loadCount = 0;
  var totalCount = includes.length;

  for (var i = 0; i < includes.length; i++) {
    (function(el) {
      var src = el.getAttribute('data-include');
      var url = basePath + src;

      fetch(url)
        .then(function(response) { return response.text(); })
        .then(function(html) {
          el.innerHTML = html;
          loadCount++;

          // After header-nav loads, highlight current page
          if (src.indexOf('header-nav') !== -1) {
            highlightCurrentPage(el);
          }
        })
        .catch(function(err) {
          console.warn('Failed to load shared section:', src, err);
        });
    })(includes[i]);
  }

  function highlightCurrentPage(navContainer) {
    var currentPath = window.location.pathname.replace(/\/$/, '') || '/';
    var links = navContainer.querySelectorAll('a[href]');
    var bestMatch = null;
    var bestLen = 0;
    for (var j = 0; j < links.length; j++) {
      try {
        var linkPath = new URL(links[j].getAttribute('href')).pathname.replace(/\/$/, '') || '/';
        if (currentPath === linkPath || currentPath.startsWith(linkPath + '/')) {
          if (linkPath.length > bestLen) {
            bestMatch = links[j];
            bestLen = linkPath.length;
          }
        }
      } catch(e) {}
    }
    if (bestMatch) {
      bestMatch.classList.add('selected');
      if (bestMatch.closest('li')) {
        bestMatch.closest('li').classList.add('selected');
      }
      bestMatch.setAttribute('aria-current', 'page');
    }
  }
})();
