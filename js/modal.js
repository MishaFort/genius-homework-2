const modal = document.querySelector('.backdrop');
const modalBtnOpen = document.querySelector('.modal-btn-open');
const modalBtnClose = document.querySelector('.modal-btn-close');
const modalBtnOpenHero = document.querySelector('.modal-btn-open-hero');
const modalBtnOpenMobileMenu = document.querySelector(
  '.modal-btn-open-mobile-menu'
);

const toggleModal = () => modal.classList.toggle('is-hidden');

modalBtnOpen.addEventListener('click', toggleModal);
modalBtnClose.addEventListener('click', toggleModal);
modalBtnOpenHero.addEventListener('click', toggleModal);
modalBtnOpenMobileMenu.addEventListener('click', toggleModal);

// Close the modal window by clicking outside of it
document.addEventListener('click', event => {
  if (event.target === modal) {
    toggleModal();
  }
});
