/* Async font loader — cumple CSP sin inline event handlers */
// Cuando el stylesheet de Google Fonts termine de cargar,
// cambiar su media de "print" a "all" para que se aplique
(function () {
  var fontLink = document.getElementById('async-font');
  if (!fontLink) return;
  fontLink.addEventListener('load', function () {
    fontLink.media = 'all';
  });
  // Si falla la carga (offline, etc.), cambiar a all de todas formas
  // para que al menos se vea el CSS sin las fonts custom
  setTimeout(function () {
    if (fontLink.media === 'print') {
      fontLink.media = 'all';
    }
  }, 3000);
})();