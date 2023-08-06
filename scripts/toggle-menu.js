const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('nav>ul');

hamburger.addEventListener('click', () => {
  menu.classList.toggle('active');
  hamburger.textContent === '☰' ? hamburger.textContent = '✕' : hamburger.textContent = '☰';
})