'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const header = document.querySelector('.header');

const openModal = () => {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = () => {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach((btnOpenModal) => {
  btnOpenModal.addEventListener('click', openModal);
});

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

// Creating and inserting elements
const message = document.createElement('div');
message.classList.add('message');
// message.textContent = 'We use cookies for improved functionality and analytics.';
message.innerHTML = `
          We use cookies for improved functionality and analytics.
          <button class='btn btn--close-cookie'>Got it!</button>
`;
header.append(message);

// Delete element
document.querySelector('.btn--close-cookie').addEventListener('click', () => {
  message.remove();
})



