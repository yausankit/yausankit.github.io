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
   Scroll-spy for the left-rail navigation.
     ------------------------------------------------------------------------ */

  function initScrollSpy() {
    var links = [];
    var sections = [];

    var anchors = document.querySelectorAll('.shell aside nav a[href^="#"]');
    for (var i = 0; i < anchors.length; i++) {
      var id = anchors[i].getAttribute('href').slice(1);
      if (!id) { continue; }
      var section = document.getElementById(id);
      if (!section) { continue; }
      links.push(anchors[i]);
      sections.push(section);
    }
    if (!sections.length) { return; }

    function mark(section) {
      for (var i = 0; i < links.length; i++) {
        if (sections[i] === section) {
          links[i].setAttribute('aria-current', 'true');
        } else {
          links[i].removeAttribute('aria-current');
        }
      }
    }

    if (!('IntersectionObserver' in window)) {
      mark(sections[0]);
      return;
    }

    var visible = [];

    var observer = new IntersectionObserver(function (entries) {
      for (var i = 0; i < entries.length; i++) {
        var target = entries[i].target;
        var at = visible.indexOf(target);
        if (entries[i].isIntersecting) {
          if (at === -1) { visible.push(target); }
        } else if (at !== -1) {
          visible.splice(at, 1);
        }
      }

      if (!visible.length) { return; }

      // The latest section in document order wins once its heading reaches the
      // reading band. Adjacent cards can briefly overlap that band together.
      var best = visible[0];
      for (var j = 1; j < visible.length; j++) {
        if (visible[j].offsetTop > best.offsetTop) { best = visible[j]; }
      }
      mark(best);
    }, {
      // Band across the upper part of the viewport: what the reader is looking
      // at, not whatever is clipping the bottom edge.
      rootMargin: '-10% 0px -70% 0px',
      threshold: 0
    });

    for (var k = 0; k < sections.length; k++) {
      observer.observe(sections[k]);
    }

    mark(sections[0]);
  }

  initScrollSpy();
})();
