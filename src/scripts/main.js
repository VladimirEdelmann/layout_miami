'use strict';

const addRule = (function(style) {
  const sheet = document.head.appendChild(style).sheet;

  return function(selector, css) {
    const propText = typeof css === 'string'
      ? css : Object.keys(css).map(function(p) {
        return p + ':' + (p === 'content' ? "'" + css[p] + "'" : css[p]);
      }).join(';');

    sheet.insertRule(selector + '{' + propText + '}', sheet.cssRules.length);
  };
})(document.createElement('style'));

const headerMenu = document.querySelector('.header__menu');
const headerMenuLogo = document.querySelector('.humburger-menu__logo');

const humburgerMenuCancel
  = document.querySelector('.humburger-menu__cancel');
const navList = document.querySelector('.nav__list');

headerMenu.addEventListener('click', function() {
  addRule('.humburger-menu', {
    display: 'block',
  });
});

humburgerMenuCancel.addEventListener('click', () => {
  addRule('.humburger-menu', {
    display: 'none',
  });
});

navList.addEventListener('click', () => {
  addRule('.humburger-menu', {
    display: 'none',
  });
});

headerMenuLogo.addEventListener('click', () => {
  addRule('.humburger-menu', {
    display: 'none',
  });
});
