document.addEventListener('DOMContentLoaded', function () {
  loadFragment('header-placeholder', 'header.html');
  loadFragment('nav-placeholder', 'nav.html');
  loadFragment('footer-placeholder', 'footer.html')
    .then(function (loaded) {
      if (loaded) {
        updateLastModified();
      }
    });

  if (typeof initPeopleRendering === 'function') {
    initPeopleRendering();
  }
});
