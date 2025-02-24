const menuButton = document.querySelector('.js-menu-button');
const sidebar = document.querySelector('.js-sidebar');
menuButton.addEventListener('click', () => {
  sidebar.classList.toggle('visible');
});