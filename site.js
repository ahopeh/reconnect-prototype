(function () {
  function $(s) { return document.querySelector(s); }

  // Contact form: show a demo confirmation, send nothing.
  var form = $('#request-form');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var name = ($('#name') && $('#name').value || '').trim();
      var box = $('#form-confirm');
      box.querySelector('[data-name]').textContent = name || 'there';
      box.hidden = false;
      box.scrollIntoView({ block: 'nearest' });
    });
    var partner = $('#partner-inquiry');
    if (partner) {
      partner.addEventListener('click', function () {
        var sel = $('#issue');
        sel.value = 'partner';
        sel.scrollIntoView({ block: 'center' });
        sel.focus();
      });
    }
  }

  // Agreement: signing unlocks only after the box is ticked.
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

  // What to Expect: turn "Have these ready" into a tickable checklist.
  var heads = document.querySelectorAll('h2');
  for (var i = 0; i < heads.length; i++) {
    if (heads[i].textContent.trim() !== 'Have these ready') continue;
    var ul = heads[i].nextElementSibling;
    if (!ul || ul.tagName !== 'UL') break;
    var items = ul.querySelectorAll('li');
    var total = items.length;
    ul.style.paddingLeft = '0';
    var count = document.createElement('p');
    count.style.cssText = 'margin:0;font-size:14px;color:#5c5c58';
    ul.parentNode.appendChild(count);
    var update = function () {
      var done = ul.querySelectorAll('input:checked').length;
      count.textContent = done + ' of ' + total + ' ready';
    };
    for (var j = 0; j < items.length; j++) {
      var text = items[j].textContent;
      items[j].className = 'ready-row';
      items[j].innerHTML = '';
      var cb = document.createElement('input');
      cb.type = 'checkbox';
      cb.id = 'ready-' + j;
      var lb = document.createElement('label');
      lb.htmlFor = cb.id;
      lb.textContent = text;
      cb.addEventListener('change', update);
      items[j].appendChild(cb);
      items[j].appendChild(lb);
    }
    update();
    break;
  }
})();
