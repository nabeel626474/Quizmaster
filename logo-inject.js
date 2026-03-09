(function () {
  var headerDone = false;
  var footerDone = false;

  function injectLogoInto(container, label) {
    if (!container) return false;
    var logoBox = container.querySelector('.w-8.h-8');
    if (!logoBox) return false;

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
    return true;
  }

  function tryInject() {
    if (!headerDone) {
      var header = document.querySelector('header');
      if (header) headerDone = injectLogoInto(header, 'header');
    }
    if (!footerDone) {
      var footer = document.querySelector('footer');
      if (footer) footerDone = injectLogoInto(footer, 'footer');
    }
    if (!headerDone || !footerDone) {
      setTimeout(tryInject, 300);
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', tryInject);
  } else {
    tryInject();
  }
})();
