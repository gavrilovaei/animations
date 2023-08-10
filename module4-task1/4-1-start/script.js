'use strict'

// header
const menu = document.querySelector('.menu');
const burgerBtn = menu.querySelector('.burger');

burgerBtn.addEventListener('click', () => {
   menu.classList.toggle('menu--open');
});

// slider
const sliderBox = document.querySelector('.slider');
const slides = sliderBox.querySelectorAll('.slider__item');
const btnPrev = sliderBox.querySelector('.slider__btn--prev');
const btnNext = sliderBox.querySelector('.slider__btn--next');

let counter = 0;
const maxStep = slides.length - 1;
slides[counter].classList.add("slider__item--current");

function isFirst(counter) {
   if (counter === 0) {
      btnPrev.setAttribute("disabled", "disabled");
   } else {
      btnPrev.removeAttribute("disabled", "disabled");
   }
}

function isLast(counter) {
   if (counter === maxStep) {
      btnNext.setAttribute("disabled", "disabled");
   } else {
      btnNext.removeAttribute("disabled", "disabled");
   }
}

function nextBtnHandler() {
   slides[counter].classList.remove('slider__item--current');
   slides[counter].setAttribute('style', 'transform: translate(0%)');

   counter++;
   isLast(counter);
   isFirst(counter);

   slides[counter].classList.add('slider__item--current');
}

function prevBtnHandler() {
   slides[counter].classList.remove('slider__item--current');

   counter--;
   isLast(counter);
   isFirst(counter);

   slides[counter].classList.add('slider__item--current');
   slides[counter].removeAttribute('style');
}

btnNext.addEventListener('click', nextBtnHandler);
btnPrev.addEventListener('click', prevBtnHandler);

// modal
const btnOpen = document.querySelector('.slider__modal-btn');
const btnClose = document.querySelector('.modal__close-btn');
const modal = document.querySelector('.modal');
const modalWindow = modal.querySelector('.modal__wrap');

const animateIn = () => {
   modalWindow.classList.remove('modal-in');
   modalWindow.removeEventListener('animationend', animateIn);
};

const modalOpenHandler = () => {
   modalWindow.addEventListener('animationend', animateIn);
   modal.classList.add('modal--open');
   modalWindow.classList.add('modal-in');
}

const animateOut = () => {
   modalWindow.classList.remove('modal-out');
   modal.classList.remove('modal--open');
   modalWindow.removeEventListener('animationend', animateOut);
};

const modalCloseHandler = () => {
   modalWindow.addEventListener('animationend', animateOut);
   modalWindow.classList.add('modal-out');
}

btnOpen.addEventListener('click', modalOpenHandler);
btnClose.addEventListener('click', modalCloseHandler);

