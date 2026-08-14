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
  }
});
