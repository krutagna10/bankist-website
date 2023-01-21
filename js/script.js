'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const header = document.querySelector('.header');
const operationTabsWrapper = document.querySelector('.operations__tab-wrapper');
const operationTabs = document.querySelectorAll('.operations__tab');
const operationContents = document.querySelectorAll('.operations__content');
const nav = document.querySelector('.nav');
const section1 = document.querySelector('#section--1');

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

// Tabbed Component
operationTabsWrapper.addEventListener('click', (event) => {
  const clickedButton = event.target.closest('.operations__tab');

  // Guard Clause
  if (!clickedButton) {
    return;
  }

  // Removing Active Classes
  operationTabs.forEach(tab => tab.classList.remove('operations__tab--active'));
  operationContents.forEach(content => content.classList.remove('operations__content--active'));

  // Active tab
  clickedButton.classList.add('operations__tab--active');

  // Active content area
  const value = clickedButton.dataset.tab;
  document.querySelector(`.operations__content--${value}`).classList.add('operations__content--active');
});

// Menu Fade Animation
const handleHover = function (event) {
  if (event.target.classList.contains('nav__link')) {
    const link = event.target;
    const siblings = link.closest('.nav').querySelectorAll('.nav__link');
    const logo = link.closest('.nav').querySelector('img');

    siblings.forEach((sibling) => {
      if (sibling !== link) {
        sibling.style.opacity = this;
      }
    });
    logo.style.opacity = this;
  }
}

// Passing 'argument' into handler
nav.addEventListener('mouseover', handleHover.bind(0.5));
nav.addEventListener('mouseout', handleHover.bind(1));

// Sticky Navigation
const navHeight = nav.getBoundingClientRect().height;

const stickyNav = (entries) => {
  const entry = entries[0];

  if (!entry.isIntersecting) {
    nav.classList.add('sticky');
  } else {
    nav.classList.remove('sticky');
  }
};

const navObj = {
  root: null,
  threshold: 0,
  rootMargin: `${-Math.abs(navHeight)}px`,
};


const headerObserver = new IntersectionObserver(stickyNav, navObj);
headerObserver.observe(header);

// Reveal Section
const sections = document.querySelectorAll('.section');

const revealSection = (entries, observer) => {
  const entry = entries[0];

  if (entry.isIntersecting) {
    entry.target.classList.remove('section--hidden');
    observer.unobserve(entry.target);
  }
};

const revealObj = {
  root: null,
  threshold: 0.15,
};

const sectionObserver = new IntersectionObserver(revealSection, revealObj);

sections.forEach((section) => {
  sectionObserver.observe(section);
  section.classList.add('section--hidden');
})
