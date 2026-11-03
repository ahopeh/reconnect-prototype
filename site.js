(function () {
  function $(s) { return document.querySelector(s); }
  // Photos: drop a file named like img/hero.jpg into the img folder and it appears automatically.
  Array.prototype.forEach.call(document.querySelectorAll('[data-img]'), function (box) {
    var name = box.getAttribute('data-img'), exts = ['jpg', 'jpeg', 'png', 'webp'], i = 0;
    function tryNext() {
      if (i >= exts.length) { return; }
      var im = new Image(), src = 'img/' + name + '.' + exts[i++];
      im.onload = function () {
        im.alt = box.getAttribute('data-alt') || '';
        im.setAttribute('style', box.getAttribute('style') + ';object-fit:cover;max-width:100%;display:block');
        if (box.parentNode) { box.parentNode.replaceChild(im, box); }
      };
      im.onerror = tryNext;
      im.src = src;
    }
    tryNext();
  });
  // Agreement page: signing unlocks only after the box is ticked.
  var ack = $('#ack'), sign = $('#sign-btn');
  if (ack && sign) {
    sign.disabled = !ack.checked;
    ack.addEventListener('change', function () { sign.disabled = !ack.checked; });
    sign.addEventListener('click', function () {
      var name = ($('#n') && $('#n').value || '').trim();
      var box = $('#sign-confirm');
      box.querySelector('[data-name]').textContent = name || 'borrower';
      box.hidden = false;
      box.scrollIntoView({ block: 'nearest' });
    });
  }
})();