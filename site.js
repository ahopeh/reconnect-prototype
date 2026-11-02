(function () {
  function $(s) { return document.querySelector(s); }
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
