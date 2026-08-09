/* ==========================================================================
   HOMEPAGE SCRIPT
   Two independent pieces, both vanilla and both no-ops when their target
   element is absent, so this file is safe to load on any page.

   Loaded on its own rather than folded into main.min.js: that bundle is
   jQuery-based and built by a toolchain (npm/uglify) whose output is committed,
   which means editing its source without running the build would ship a stale
   bundle. Nothing here needs jQuery.
   ========================================================================== */

(function () {
  'use strict';

  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ------------------------------------------------------------------------
     Rain over the skyline banner.
     Ported from the design source. One static frame under reduced-motion
     rather than nothing at all, so the pane still reads as weather.
     ------------------------------------------------------------------------ */

  function initRain() {
    var canvas = document.getElementById('rain');
    if (!canvas || !canvas.getContext) { return; }

    var ctx = canvas.getContext('2d');
    var dpr = Math.min(window.devicePixelRatio || 1, 2);
    var drops = [];
    var w = 0;
    var h = 0;

    function seed() {
      var count = Math.max(28, Math.round(w / 7));
      drops = [];
      for (var i = 0; i < count; i++) {
        drops.push({
          x: Math.random() * w,
          y: Math.random() * h,
          len: 10 + Math.random() * 25,
          v: 2.4 + Math.random() * 4.4,
          a: 0.08 + Math.random() * 0.3,
          width: Math.random() > 0.84 ? 1.4 : 0.75
        });
      }
    }

    function draw() {
      ctx.clearRect(0, 0, w, h);
      ctx.lineCap = 'round';
      for (var i = 0; i < drops.length; i++) {
        var d = drops[i];
        ctx.strokeStyle = 'rgba(160, 185, 205, ' + d.a + ')';
        ctx.lineWidth = d.width;
        ctx.beginPath();
        ctx.moveTo(d.x, d.y);
        ctx.lineTo(d.x - 1.6, d.y + d.len);
        ctx.stroke();
      }
    }

    function resize() {
      w = canvas.clientWidth;
      h = canvas.clientHeight;
      if (!w || !h) { return; }
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      seed();
      if (reduceMotion) { draw(); }
    }

    function tick() {
      for (var i = 0; i < drops.length; i++) {
        var d = drops[i];
        d.y += d.v;
        d.x -= d.v * 0.16;
        if (d.y > h) {
          d.y = -d.len;
          d.x = Math.random() * w;
        }
      }
      draw();
      window.requestAnimationFrame(tick);
    }

    window.addEventListener('resize', resize);
    resize();
    if (!reduceMotion) { window.requestAnimationFrame(tick); }
  }

  /* ------------------------------------------------------------------------
     Scroll-spy for the rail nav.
     The design mocked the active state with a hardcoded aria-current, which on
     a real page would claim "About Me" no matter where the reader is. This
     tracks the section actually in view.
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

      // Topmost section currently in the band wins, so scrolling down promotes
      // the next heading only once it has actually arrived.
      var best = visible[0];
      for (var j = 1; j < visible.length; j++) {
        if (visible[j].offsetTop < best.offsetTop) { best = visible[j]; }
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

  initRain();
  initScrollSpy();
})();
