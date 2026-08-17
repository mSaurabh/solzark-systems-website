/* Solzark Systems */
document.addEventListener('DOMContentLoaded', function () {
  var hamburger = document.getElementById('hamburger');
  var mobileNav = document.getElementById('mobileNav');
  if (hamburger && mobileNav) {
    hamburger.addEventListener('click', function () {
      var open = !mobileNav.classList.contains('open');
      mobileNav.classList.toggle('open', open);
      hamburger.setAttribute('aria-expanded', String(open));
    });
    mobileNav.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () {
        mobileNav.classList.remove('open');
        hamburger.setAttribute('aria-expanded', 'false');
      });
    });
  }

  var form = document.getElementById('contactForm');
  var success = document.getElementById('form-success');
  if (form) {
    form.addEventListener('submit', async function (e) {
      e.preventDefault();
      var btn = form.querySelector('button[type=submit]');
      var label = btn.textContent;
      btn.textContent = 'Sending…';
      btn.disabled = true;
      try {
        var res = await fetch(form.action, { method: 'POST', body: new FormData(form), headers: { Accept: 'application/json' } });
        if (res.ok) { form.style.display = 'none'; success.style.display = 'block'; return; }
        btn.textContent = 'Try again'; btn.disabled = false;
      } catch (err) {
        btn.textContent = 'Try again'; btn.disabled = false;
      }
    });
  }
});
