// Itod GCED — shared scripts
// Content is driven by data files so Marketing can update text without touching HTML.

document.addEventListener('DOMContentLoaded', function () {
  // Mobile nav toggle
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.querySelector('.main-nav');
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      nav.classList.toggle('open');
    });
  }

  // Mark active nav link based on current page
  var path = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.main-nav a').forEach(function (a) {
    var href = a.getAttribute('href');
    if (href === path || (path === '' && href === 'index.html')) {
      a.classList.add('active');
    }
  });

  // Photo gallery (homepage) — captions from our past outings
  var gallery = document.getElementById('photo-gallery');
  if (gallery) {
    var photos = [
      ['img/image1.jpg', 'Trip planning — mapping out our inclusive outings'],
      ['img/image2.jpg', 'Baking DIY at Happy Plane Studio'],
      ['img/image3.jpg', 'Baking DIY at Happy Plane Studio'],
      ['img/image4.jpg', 'Guangzhou Zoo outing'],
      ['img/image5.jpg', 'Guangzhou Zoo outing'],
      ['img/image6.jpg', 'Guangzhou Zoo outing'],
      ['img/image7.jpg', 'Panyu Happy Forest'],
      ['img/image8.jpg', 'Panyu Happy Forest'],
      ['img/image9.jpg', 'Panyu Happy Forest'],
      ['img/image10.jpg', 'No.8 Art Sunning Ground — art session'],
      ['img/image11.jpg', 'No.8 Art Sunning Ground — art session'],
      ['img/image12.jpg', 'No.8 Art Sunning Ground — art session'],
      ['img/image13.jpg', 'Lingnan Impression Garden'],
      ['img/image14.jpg', 'Lingnan Impression Garden'],
      ['img/image15.jpg', 'Lingnan Impression Garden']
    ];
    photos.forEach(function (p) {
      var fig = document.createElement('figure');
      fig.innerHTML = '<img src="' + p[0] + '" alt="' + p[1] + '" loading="lazy"><figcaption>' + p[1] + '</figcaption>';
      gallery.appendChild(fig);
    });

    // Photos from our Lingnan visit at Science Park campus (AISG WeChat article)
    var more = [
      ['img/wx_01.jpg', 'Welcoming 20 autistic students from Lingnan to AISG'],
      ['img/wx_04.jpg', 'Campus tour at Science Park campus'],
      ['img/wx_05.jpg', 'Art collaboration across both schools'],
      ['img/wx_07.jpg', 'Performances and artistic collaboration'],
      ['img/wx_10.jpg', 'A memorable afternoon for both schools'],
      ['img/wx_11.jpg', 'Fostering understanding, forging friendship']
    ];
    more.forEach(function (p) {
      var fig = document.createElement('figure');
      fig.innerHTML = '<img src="' + p[0] + '" alt="' + p[1] + '" loading="lazy"><figcaption>' + p[1] + '</figcaption>';
      gallery.appendChild(fig);
    });

    // Our founding years — from AISG's Community Service Spotlight article
    var history = [
      ['img/a3_1.jpg', 'Our founding years — the very beginning'],
      ['img/a3_2.jpg', 'Our founding years — building the group'],
      ['img/a3_3.jpg', 'Our founding years — first events'],
      ['img/a3_4.jpg', 'Staying flexible during COVID'],
      ['img/a3_5.jpg', 'Pandemic-era outreach continued'],
      ['img/a3_6.jpg', 'Adapting our activities'],
      ['img/a3_7.jpg', 'Small groups, big heart'],
      ['img/a3_8.jpg', 'Keeping the connection alive'],
      ['img/a3_9.jpg', 'Experience the Difference — events open to all'],
      ['img/a3_10.jpg', 'Experience the Difference — welcoming everyone'],
      ['img/a2_1.jpg', 'Caring in Action month, April'],
      ['img/a2_2.jpg', 'Acts of kindness across campus'],
      ['img/a2_3.jpg', 'Kindness in action']
    ];
    history.forEach(function (p) {
      var fig = document.createElement('figure');
      fig.innerHTML = '<img src="' + p[0] + '" alt="' + p[1] + '" loading="lazy"><figcaption>' + p[1] + '</figcaption>';
      gallery.appendChild(fig);
    });

    // From AISG WeChat archives (2022–2026)
    var archive = [
      ['img/s1_01.jpg', 'Autism center visit — from our 2022 club report'],
      ['img/s1_02.jpg', 'Autism center visit — from our 2022 club report'],
      ['img/s1_03.jpg', 'Autism center visit — from our 2022 club report'],
      ['img/s1_04.jpg', 'Autism center visit — from our 2022 club report'],
      ['img/s1_05.jpg', 'Autism center visit — from our 2022 club report'],
      ['img/s1_06.jpg', 'Canvas art project with the autism center (2022)'],
      ['img/s1_07.jpg', 'Canvas art project with the autism center (2022)'],
      ['img/s1_08.jpg', 'Canvas art project with the autism center (2022)'],
      ['img/s1_09.jpg', 'Canvas art project with the autism center (2022)'],
      ['img/s1_10.jpg', 'The canvas, painted together (2022)'],
      ['img/s1_11.jpg', 'The canvas, painted together (2022)'],
      ['img/s1_12.jpg', 'The canvas, painted together (2022)'],
      ['img/s1_13.jpg', 'Planning what is next for the club (2022)'],
      ['img/s4_43.jpg', 'Autism Center Visit — Nov 2023'],
      ['img/s4_44.jpg', 'Autism Center Visit — Nov 2023'],
      ['img/s4_45.jpg', 'Autism Center Visit — Nov 2023'],
      ['img/s4_46.jpg', 'Autism Center Visit — Nov 2023'],
      ['img/s4_47.jpg', 'Autism Center Visit — Nov 2023'],
      ['img/s5_63.jpg', 'Yuexiu Park expedition — Dec 2023'],
      ['img/s5_64.jpg', 'Yuexiu Park expedition — Dec 2023'],
      ['img/s5_65.jpg', 'Yuexiu Park expedition — Dec 2023'],
      ['img/s5_66.jpg', 'Yuexiu Park expedition — Dec 2023'],
      ['img/s7_21.jpg', 'Impact Starts Here — GCED service coordinators (Aug 2026)'],
      ['img/s7_22.jpg', 'Impact Starts Here — GCED service coordinators (Aug 2026)'],
      ['img/s7_23.jpg', 'Impact Starts Here — GCED service coordinators (Aug 2026)'],
      ['img/s7_24.jpg', 'Impact Starts Here — GCED service coordinators (Aug 2026)'],
      ['img/s7_25.jpg', 'Impact Starts Here — GCED service coordinators (Aug 2026)'],
      ['img/s7_26.jpg', 'Impact Starts Here — GCED service coordinators (Aug 2026)'],
      ['img/s2_04.jpg', 'Our club in AISG\'s GCED overview (2023)'],
      ['img/s3_03.jpg', 'From the Class of 2023 alumni spotlight — co-founder Thomas Huo']
    ];
    archive.forEach(function (p) {
      var fig = document.createElement('figure');
      fig.innerHTML = '<img src="' + p[0] + '" alt="' + p[1] + '" loading="lazy"><figcaption>' + p[1] + '</figcaption>';
      gallery.appendChild(fig);
    });
  }
});

/* ===== Premium interactions (ASD-friendly, reduced-motion aware) ===== */
document.documentElement.classList.add('js');

(function () {
  var reduceMotion = window.matchMedia &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Stagger children inside .stagger grids, then reveal all
  document.querySelectorAll('.stagger').forEach(function (grid) {
    Array.prototype.forEach.call(grid.children, function (child, idx) {
      child.classList.add('reveal');
      child.style.transitionDelay = ((idx % 6) * 70) + 'ms';
    });
  });

  var revealEls = document.querySelectorAll('.reveal');
  function show(el) { el.classList.add('is-visible'); }

  if (!reduceMotion && 'IntersectionObserver' in window && revealEls.length) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) { show(entry.target); io.unobserve(entry.target); }
      });
    }, { threshold: 0.01, rootMargin: '0px 0px -6% 0px' });
    revealEls.forEach(function (el) { io.observe(el); });
  } else {
    revealEls.forEach(show);
  }

  // Animated stat counters (count up when scrolled into view)
  var statNums = document.querySelectorAll('.stat-num[data-count]');
  function countUp(el) {
    var target = parseInt(el.getAttribute('data-count'), 10) || 0;
    var suffix = el.getAttribute('data-suffix') || '';
    var dur = 1200, start = null;
    function frame(ts) {
      if (!start) start = ts;
      var p = Math.min((ts - start) / dur, 1);
      var eased = 1 - Math.pow(1 - p, 3);
      el.textContent = Math.round(eased * target) + suffix;
      if (p < 1) requestAnimationFrame(frame);
    }
    requestAnimationFrame(frame);
  }
  if (!reduceMotion && statNums.length && 'IntersectionObserver' in window) {
    var io2 = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) { countUp(entry.target); io2.unobserve(entry.target); }
      });
    }, { threshold: 0.4 });
    statNums.forEach(function (el) { io2.observe(el); });
  }

  // Frosted header on scroll
  var header = document.querySelector('.site-header');
  if (header) {
    var onScroll = function () { header.classList.toggle('is-scrolled', window.scrollY > 10); };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
  }
})();

/* ===== v1.7: cinematic scroll layer ===== */
(function () {
  var reduceMotion = window.matchMedia &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var isTouch = window.matchMedia &&
    window.matchMedia('(hover: none)').matches;
  var smoothActive = !reduceMotion && !isTouch;

  // --- Infinite marquee fill (2 identical copies for seamless loop) ---
  var track = document.getElementById('marquee-track');
  if (track) {
    var phrases = ['Indifferent to Difference', 'Autism Awareness',
                   'Inclusion in Action', 'Service & Advocacy'];
    var build = function () {
      var frag = document.createDocumentFragment();
      phrases.forEach(function (p) {
        var s = document.createElement('span');
        s.className = 'marquee-item'; s.textContent = p;
        var sep = document.createElement('span');
        sep.className = 'marquee-sep'; sep.textContent = '\u2726';
        frag.appendChild(s); frag.appendChild(sep);
      });
      return frag;
    };
    track.appendChild(build());
    track.appendChild(build());
  }

  // --- Headline word-mask reveal ---
  var wordEls = document.querySelectorAll('.words-reveal');
  wordEls.forEach(function (el) {
    var text = el.textContent.trim().replace(/\s+/g, ' ');
    el.setAttribute('aria-label', text);
    el.textContent = '';
    text.split(' ').forEach(function (w, i) {
      var span = document.createElement('span');
      span.className = 'word';
      var inner = document.createElement('span');
      inner.className = 'word-inner';
      inner.textContent = w;
      inner.style.transitionDelay = (i * 55) + 'ms';
      span.appendChild(inner);
      el.appendChild(span);
      if (i < text.split(' ').length - 1) el.appendChild(document.createTextNode(' '));
    });
  });
  function showWords(el) { el.classList.add('is-visible'); }
  if (!reduceMotion && wordEls.length && 'IntersectionObserver' in window) {
    var iw = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { showWords(en.target); iw.unobserve(en.target); }
      });
    }, { threshold: 0.35 });
    wordEls.forEach(function (el) {
      if (el.closest('.hero, .page-hero')) {
        // page hero: animate on load (double rAF so the masked state paints first)
        requestAnimationFrame(function () {
          requestAnimationFrame(function () { showWords(el); });
        });
      } else {
        iw.observe(el);
      }
    });
  } else {
    wordEls.forEach(showWords);
  }

  // --- Gallery figures reveal when their image loads ---
  function wireFigure(img) {
    var fig = img.closest('figure');
    if (!fig || fig.classList.contains('reveal')) return;
    fig.classList.add('reveal');
    var showFig = function () { fig.classList.add('is-visible'); };
    if (img.complete && img.naturalWidth > 0) showFig();
    else img.addEventListener('load', showFig);
  }
  document.querySelectorAll('.gallery figure img').forEach(wireFigure);
  if ('MutationObserver' in window) {
    var mo = new MutationObserver(function (muts) {
      muts.forEach(function (m) {
        m.addedNodes.forEach(function (n) {
          if (n.nodeType !== 1) return;
          if (n.matches && n.matches('.gallery figure img')) wireFigure(n);
          if (n.querySelectorAll) n.querySelectorAll('.gallery figure img').forEach(wireFigure);
        });
      });
    });
    mo.observe(document.body, { childList: true, subtree: true });
  }
  var figs = document.querySelectorAll('.gallery figure.reveal');
  figs.forEach(function (f, i) { f.style.transitionDelay = ((i % 10) * 45) + 'ms'; });

  // --- One rAF loop: smooth scroll + progress bar + parallax ---
  var parallaxEls = document.querySelectorAll('.parallax');
  var bar = document.querySelector('.scroll-progress');
  var target = window.scrollY, current = target, raf = null, frameCount = 0;

  function maxScroll() {
    return Math.max(0, document.documentElement.scrollHeight - window.innerHeight);
  }

  function tick() {
    raf = requestAnimationFrame(tick);
    if (document.hidden) return;
    frameCount++;
    var y = window.scrollY;
    if (smoothActive) {
      if (Math.abs(y - current) > 2) {
        // native scroll won (scrollbar / keyboard / touch) — resync
        current = y; target = y;
      } else {
        current += (target - current) * 0.11;
        if (Math.abs(target - current) < 0.4) current = target;
        if (Math.abs(current - y) > 0.2) window.scrollTo(0, current);
      }
    }
    if (bar) bar.style.width = (y / maxScroll() * 100) + '%';
    // Safety net: fast jumps (scrollbar drag, End key) can skip IntersectionObserver
    if (frameCount % 20 === 0) {
      var vh2 = window.innerHeight;
      for (var wi = 0; wi < wordEls.length; wi++) {
        var w = wordEls[wi];
        if (w.classList.contains('is-visible')) continue;
        var wr = w.getBoundingClientRect();
        if (wr.top < vh2 * 0.9 && wr.bottom > 0) showWords(w);
      }
    }
    var vh = window.innerHeight;
    for (var i = 0; i < parallaxEls.length; i++) {
      var el = parallaxEls[i];
      var r = el.parentElement.getBoundingClientRect();
      if (r.bottom < -80 || r.top > vh + 80) continue;
      var rate = parseFloat(el.getAttribute('data-rate') || '-0.15');
      el.style.transform = 'translate3d(0,' + Math.round(r.top * rate) + 'px,0) scale(1.15)';
    }
  }

  if (smoothActive) {
    document.documentElement.style.scrollBehavior = 'auto';
    // nav anchor links glide instead of jumping
    document.querySelectorAll('a[href^="#"]').forEach(function (a) {
      a.addEventListener('click', function (e) {
        var id = a.getAttribute('href').slice(1);
        var el = id && document.getElementById(id);
        if (!el) return;
        e.preventDefault();
        target = Math.max(0, el.getBoundingClientRect().top + window.scrollY - 80);
        if (!raf) raf = requestAnimationFrame(tick);
      });
    });
    // wheel → lerped target (ctrlKey wheel = pinch zoom, leave alone)
    window.addEventListener('wheel', function (e) {
      if (e.ctrlKey) return;
      var d = e.deltaY;
      if (e.deltaMode === 1) d *= 16;
      else if (e.deltaMode === 2) d *= window.innerHeight;
      target = Math.max(0, Math.min(maxScroll(), target + d));
      e.preventDefault();
      if (!raf) raf = requestAnimationFrame(tick);
    }, { passive: false });
  }

  if (smoothActive || bar || parallaxEls.length) raf = requestAnimationFrame(tick);

  // --- Magnetic buttons (desktop pointer only) ---
  if (!reduceMotion && !isTouch && window.matchMedia('(pointer: fine)').matches) {
    document.querySelectorAll('.btn, .brand').forEach(function (el) {
      el.addEventListener('mousemove', function (e) {
        var r = el.getBoundingClientRect();
        var dx = e.clientX - (r.left + r.width / 2);
        var dy = e.clientY - (r.top + r.height / 2);
        el.style.transform = 'translate(' + (dx * 0.14).toFixed(1) + 'px,' +
                             (dy * 0.14).toFixed(1) + 'px)';
      });
      el.addEventListener('mouseleave', function () { el.style.transform = ''; });
    });
  }
})();

/* ===== v1.8: immersive interactions (particles + cursor glow + 3D tilt) ===== */
(function () {
  var reduceMotion = window.matchMedia &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var isTouch = window.matchMedia &&
    window.matchMedia('(hover: none)').matches;
  var finePointer = window.matchMedia && window.matchMedia('(pointer: fine)').matches;

  // --- Hero particle field (drift + mouse repel + gold links) ---
  var hero = document.querySelector('.hero');
  var canvas = document.getElementById('particle-canvas');
  if (hero && canvas && !reduceMotion && canvas.getContext) {
    var ctx = canvas.getContext('2d');
    var DPR = Math.min(window.devicePixelRatio || 1, 2);
    var W = 0, H = 0, parts = [];
    var COUNT = isTouch ? 36 : Math.min(90, Math.floor(window.innerWidth / 14));
    var mx = -9999, my = -9999;

    function resize() {
      W = hero.offsetWidth; H = hero.offsetHeight;
      canvas.width = Math.max(1, W * DPR);
      canvas.height = Math.max(1, H * DPR);
      ctx.setTransform(DPR, 0, 0, DPR, 0, 0);
      parts = [];
      for (var i = 0; i < COUNT; i++) {
        parts.push({
          x: Math.random() * W,
          y: Math.random() * H,
          vx: (Math.random() - 0.5) * 0.35,
          vy: (Math.random() - 0.5) * 0.35,
          r: Math.random() * 1.8 + 0.8,
          col: Math.random() > 0.45 ? '232,200,126' : '255,255,255'
        });
      }
    }
    resize();
    window.addEventListener('resize', resize);
    window.addEventListener('load', resize);
    setTimeout(resize, 1200); // hero height may shift as images load

    window.addEventListener('mousemove', function (e) {
      mx = e.clientX; my = e.clientY;
    }, { passive: true });

    (function draw() {
      requestAnimationFrame(draw);
      if (document.hidden || !W) return;
      ctx.clearRect(0, 0, W, H);
      var hRect = hero.getBoundingClientRect();
      var i, j, p, dxm, dym, dm, f, dx, dy, d2;
      for (i = 0; i < parts.length; i++) {
        p = parts[i];
        p.x += p.vx; p.y += p.vy;
        // cursor repel
        dxm = p.x - (mx - hRect.left);
        dym = p.y - (my - hRect.top);
        dm = Math.sqrt(dxm * dxm + dym * dym);
        if (dm < 110 && dm > 0.01) {
          f = (110 - dm) / 110 * 0.9;
          p.x += (dxm / dm) * f;
          p.y += (dym / dm) * f;
        }
        if (p.x < -10) p.x = W + 10; else if (p.x > W + 10) p.x = -10;
        if (p.y < -10) p.y = H + 10; else if (p.y > H + 10) p.y = -10;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(' + p.col + ',0.7)';
        ctx.fill();
      }
      // links between close particles
      for (i = 0; i < parts.length; i++) {
        for (j = i + 1; j < parts.length; j++) {
          dx = parts[i].x - parts[j].x;
          dy = parts[i].y - parts[j].y;
          d2 = dx * dx + dy * dy;
          if (d2 < 130 * 130) {
            ctx.strokeStyle = 'rgba(232,200,126,' + ((1 - Math.sqrt(d2) / 130) * 0.2).toFixed(3) + ')';
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(parts[i].x, parts[i].y);
            ctx.lineTo(parts[j].x, parts[j].y);
            ctx.stroke();
          }
        }
      }
    })();
  }

  // --- Cursor glow (lerped follow, all pages, desktop only) ---
  if (!reduceMotion && !isTouch && finePointer) {
    var glow = document.createElement('div');
    glow.className = 'cursor-glow';
    glow.style.left = '-600px'; glow.style.top = '-600px';
    document.body.appendChild(glow);
    var gx = -600, gy = -600, tgx = -600, tgy = -600;
    document.addEventListener('mousemove', function (e) {
      tgx = e.clientX; tgy = e.clientY;
    }, { passive: true });
    (function glowLoop() {
      requestAnimationFrame(glowLoop);
      gx += (tgx - gx) * 0.16;
      gy += (tgy - gy) * 0.16;
      if (Math.abs(gx - tgx) < 0.5 && Math.abs(gy - tgy) < 0.5) { gx = tgx; gy = tgy; }
      glow.style.transform = 'translate(' + (gx - 280).toFixed(1) + 'px,' + (gy - 280).toFixed(1) + 'px)';
    })();
  }

  // --- 3D tilt on cards (desktop pointer only) ---
  if (!reduceMotion && !isTouch && finePointer) {
    document.querySelectorAll('.campus-card, .team-card').forEach(function (card) {
      card.addEventListener('mousemove', function (e) {
        var r = card.getBoundingClientRect();
        var px = (e.clientX - r.left) / r.width - 0.5;
        var py = (e.clientY - r.top) / r.height - 0.5;
        card.style.transition = 'transform 0.12s ease';
        card.style.transform = 'perspective(900px) rotateX(' + (-py * 5).toFixed(2) +
          'deg) rotateY(' + (px * 6).toFixed(2) + 'deg) translateY(-4px)';
      });
      card.addEventListener('mouseleave', function () {
        card.style.transition = 'transform 0.55s ease, box-shadow 0.35s ease';
        card.style.transform = '';
      });
    });
  }

  // --- Night-sky stars for the quote block (index only) ---
  var sky = document.getElementById('quote-sky');
  if (sky) {
    var starColors = ['#FFFFFF', '#E8C87E', '#BFD7EF'];
    var starCount = 42;
    for (var s = 0; s < starCount; s++) {
      var star = document.createElement('span');
      star.className = 'qb-star';
      star.style.left = (Math.random() * 100).toFixed(2) + '%';
      star.style.top = (Math.random() * 100).toFixed(2) + '%';
      var sz = (Math.random() * 1.8 + 1).toFixed(1);
      star.style.width = sz + 'px';
      star.style.height = sz + 'px';
      star.style.background = starColors[Math.floor(Math.random() * starColors.length)];
      star.style.animationDelay = (-Math.random() * 4.5).toFixed(2) + 's';
      sky.insertBefore(star, sky.firstChild);
    }
  }
})();
