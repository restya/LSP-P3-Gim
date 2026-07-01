import './index.css';

document.addEventListener('DOMContentLoaded', () => {
  const btn = document.getElementById('mobile-menu-btn');
  const menu = document.getElementById('mobile-menu');
  const iconOpen = document.getElementById('menu-icon-open');
  const iconClose = document.getElementById('menu-icon-close');
  const links = document.querySelectorAll('.mobile-link');

  let isOpen = false;

  function toggleMenu() {
    isOpen = !isOpen;
    if (isOpen) {
      menu?.classList.remove('hidden');
      iconOpen?.classList.add('hidden');
      iconClose?.classList.remove('hidden');
    } else {
      menu?.classList.add('hidden');
      iconOpen?.classList.remove('hidden');
      iconClose?.classList.add('hidden');
    }
  }

  btn?.addEventListener('click', toggleMenu);

  links.forEach(link => {
    link.addEventListener('click', () => {
      if (isOpen) {
        toggleMenu();
      }
    });
  });
});
