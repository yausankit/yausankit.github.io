/* ==========================================================================
   HOMEPAGE SCRIPT
   Small vanilla enhancements for the custom homepage. Functions are no-ops
   when their target element is absent, so this file is safe to load anywhere.

   Loaded on its own rather than folded into main.min.js: that bundle is
   jQuery-based and built by a toolchain (npm/uglify) whose output is committed.
   Nothing here needs jQuery.
   ========================================================================== */

(function () {
  'use strict';

  /* ------------------------------------------------------------------------
     Enlarge publication figures in a modal <dialog>. The thumbnail is a link
     to the full image, so browsers without <dialog> just follow it.
     ------------------------------------------------------------------------ */

  function initFigureViewer() {
    var teasers = document.querySelectorAll('.pub-teaser');
    if (!teasers.length) { return; }

    var dialog = document.createElement('dialog');
    if (typeof dialog.showModal !== 'function') { return; }

    dialog.className = 'figure-viewer';
    var img = document.createElement('img');
    dialog.appendChild(img);
    document.body.appendChild(dialog);

    // Any click closes it, on the figure or the backdrop; Esc is native.
    dialog.addEventListener('click', function () { dialog.close(); });
    dialog.addEventListener('close', function () { img.removeAttribute('src'); });

    for (var i = 0; i < teasers.length; i++) {
      teasers[i].addEventListener('click', function (event) {
        event.preventDefault();
        var thumb = this.querySelector('img');
        img.src = this.getAttribute('href');
        img.alt = thumb ? thumb.alt : '';
        dialog.showModal();
      });
    }
  }

  /* ------------------------------------------------------------------------
     Copy a publication's BibTeX on click. The link still points at the .bib
     source, so it is followed if the clipboard is unavailable or refuses.
     ------------------------------------------------------------------------ */

  function initBibtexCopy() {
    var links = document.querySelectorAll('.bib-copy');
    if (!links.length || !navigator.clipboard) { return; }

    for (var i = 0; i < links.length; i++) {
      links[i].addEventListener('click', function (event) {
        var link = this;
        event.preventDefault();
        navigator.clipboard.writeText(link.getAttribute('data-bibtex')).then(function () {
          link.textContent = 'Copied';
          link.classList.add('is-copied');
          clearTimeout(link._reset);
          link._reset = setTimeout(function () {
            link.textContent = 'BibTeX';
            link.classList.remove('is-copied');
          }, 1600);
        }, function () {
          window.location.href = link.href;
        });
      });
    }
  }

  initFigureViewer();
  initBibtexCopy();
})();
