// Nav Icon
const navIconBtn = document.querySelector('.nav-icon-btn');
const navIcon = document.querySelector('.nav-icon');
const nav = document.querySelector('.header-top__row');

navIconBtn.addEventListener('click', () => {
  navIcon.classList.toggle('nav-icon--active');
  nav.classList.toggle('header-top__row--mobile');
  document.body.classList.toggle('no-scroll');
});
