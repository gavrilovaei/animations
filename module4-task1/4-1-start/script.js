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

