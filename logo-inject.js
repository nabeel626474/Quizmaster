(function () {
  var headerDone = false;
  var footerDone = false;

  function injectLogoInto(container) {
    if (!container) return false;
    var logoBox = container.querySelector('.w-8.h-8');
    if (!logoBox) return false;
    if (logoBox.querySelector('img')) return true;

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
      headerDone = injectLogoInto(document.querySelector('header'));
    }
    if (!footerDone) {
      footerDone = injectLogoInto(document.querySelector('footer'));
    }
    if (!headerDone || !footerDone) {
      setTimeout(tryInject, 400);
    }
  }

  setTimeout(tryInject, 800);
})();
