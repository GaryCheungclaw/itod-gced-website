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
  }
});
