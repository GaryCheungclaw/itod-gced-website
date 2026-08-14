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
