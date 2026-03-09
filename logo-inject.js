(function () {
  function injectLogo() {
    var header = document.querySelector('header');
    if (!header) return;
    var logoBox = header.querySelector('.w-8.h-8');
    if (!logoBox) return;
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

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function () {
      setTimeout(injectLogo, 100);
    });
  } else {
    setTimeout(injectLogo, 100);
  }

  var observer = new MutationObserver(function () {
    injectLogo();
  });
  observer.observe(document.body, { childList: true, subtree: true });
  setTimeout(function () { observer.disconnect(); }, 5000);
})();
