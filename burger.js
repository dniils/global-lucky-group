const body = document.querySelector('body');
const container = document.querySelector('.container');
const overlay = document.querySelector('.overlay');
const burgerButton = document.querySelector('.button-burger-icon');
const burgerMenu = document.querySelector('.header__links');
const burgerMenuListItems = document.querySelectorAll('.header__links li');
const headerButton = document.querySelector('.header__button');

let menuIsOpen = false;

function controlOverflow() {
  return menuIsOpen ? 'hidden' : 'unset';
}

function toggleBurgerMenu() {
  burgerButton.classList.toggle('button-burger-icon_active');
  burgerMenu.classList.toggle('header__links_active');
  overlay.classList.toggle('overlay_active');

  menuIsOpen = !menuIsOpen;
  container.style.overflowY = controlOverflow();
}

burgerButton.addEventListener('click', () => toggleBurgerMenu());

overlay.addEventListener('click', () => {
  if (menuIsOpen) toggleBurgerMenu();
});

headerButton.addEventListener('click', () => {
  if (menuIsOpen) toggleBurgerMenu();
});

for (let i = 0; i < burgerMenuListItems.length; i++) {
  burgerMenuListItems[i].addEventListener('click', () => {
    if (menuIsOpen) toggleBurgerMenu();
  });
}

window.addEventListener('resize', () => {
  if (menuIsOpen) toggleBurgerMenu();
});
