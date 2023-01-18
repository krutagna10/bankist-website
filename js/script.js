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

message.style.backgroundColor = '#37383d';
message.style.width = '120%';
message.style.height = Number.parseFloat(getComputedStyle(message).height) + 30 + 'px';

// Smooth Animation for links
document.querySelector('.nav__list').addEventListener('click', function (event) {
  event.preventDefault();
  if (event.target.classList.contains('nav__link')) {
    const id = event.target.getAttribute('href');
    document.querySelector(id).scrollIntoView({
      behavior: 'smooth',
    })
  }
});

// Tabbed Component
const operationTabsWrapper = document.querySelector('.operations__tab-wrapper');
const operationTabs = document.querySelectorAll('.operations__tab');
const operationContents = document.querySelectorAll('.operations__content');

operationTabsWrapper.addEventListener('click', (event) => {
  const clickedButton = event.target.closest('.operations__tab');

  // Guard Clause
  if (!clickedButton) {
    return;
  }

  // Active tab
  operationTabs.forEach(tab => tab.classList.remove('operations__tab--active'));
  clickedButton.classList.add('operations__tab--active');

  // Active content area
  const value = clickedButton.getAttribute('data-tab');
  operationContents.forEach(content => content.classList.remove('operations__content--active'));
  document.querySelector(`.operations__content--${value}`).classList.add('operations__content--active');
})

