(function () {
  var injected = false;

  function injectLogo() {
    if (injected) return;
    var header = document.querySelector('header');
    if (!header) return;
    var logoBox = header.querySelector('.w-8.h-8');
    if (!logoBox) return;

    injected = true;

    logoBox.innerHTML = '';
    logoBox.style.background = 'none';
    logoBox.style.padding = '0';
    var img = document.createElement('img');
    img.src = '/logo.svg';
    img.alt = 'Smart Quiz Hub Logo';
    img.style.width = '36px';
    img.style.height = '36px';
    img.style.borderRadius = '9px';
    img.style.display = 'block';
    logoBox.appendChild(img);
  }

  function tryInject() {
    if (injected) return;
    injectLogo();
    if (!injected) {
      setTimeout(tryInject, 200);
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', tryInject);
  } else {
    tryInject();
  }
})();
