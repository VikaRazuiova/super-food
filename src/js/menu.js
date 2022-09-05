
(() => {
  const refs = {
    openMenuBtn: document.querySelector('.header__button'),
    closeMenuBtn: document.querySelector('.header__button-close'),
    menu: document.querySelector('.header__nav'),
    body: document.querySelector('body'),
    menuList: document.querySelector('.navigation__list'),
  };

  refs.openMenuBtn.addEventListener('click', toggleMenu);
  refs.closeMenuBtn.addEventListener('click', toggleMenu);
  refs.menuList.addEventListener('click', removeMenu);

  function toggleMenu() {
    refs.menu.classList.toggle('is-hidden');
    refs.body.classList.toggle('no-scroll');
  }

  function removeMenu() {
    refs.menu.classList.add('is-hidden');
  }
})();