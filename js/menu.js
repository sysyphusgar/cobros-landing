(function () {
  var menu = document.querySelector('.mobile-menu-toggle');
  if (!menu) return;

  // Close when a link inside the menu is tapped
  menu.querySelectorAll('.mobile-dropdown a').forEach(function (link) {
    link.addEventListener('click', function () {
      menu.removeAttribute('open');
    });
  });

  // Close on outside click
  document.addEventListener('click', function (e) {
    if (menu.hasAttribute('open') && !menu.contains(e.target)) {
      menu.removeAttribute('open');
    }
  });

  // Close on Escape key
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && menu.hasAttribute('open')) {
      menu.removeAttribute('open');
    }
  });
})();
