// Burger
let burger = document.querySelector('.burger');
let menu = document.querySelector('.header__nav');
let menuLinks = menu.querySelectorAll('.nav__link');
let close = document.querySelector('.nav__close');

burger.addEventListener('click',

function() {

  burger.classList.toggle('burger--active');

  menu.classList.toggle('header__nav--active');

  document.body.classList.toggle('stop-scroll');
});

menuLinks.forEach(function(el){
  el.addEventListener('click', function() {

    menu.classList.remove('header__nav--active');

    document.body.classList.remove('stop-scroll')
  })
});

close.addEventListener('click',

function() {

  menu.classList.remove('header__nav--active');
});

// Search
document.querySelector('.form-btn__open').addEventListener('click', function() {
  document.querySelector('.form-search').classList.add('form__active');
  this.classList.add('active');
})
document.querySelector('.form-close').addEventListener('click', function() {
   let form = document.querySelector('.form-search');
  form.classList.remove('form__active');
    form.querySelector('input').value = "";
    document.querySelector('.form-btn__open').classList.remove('active')
});

document.addEventListener('click', function(e) {
  let target = e.target;
  let form = document.querySelector('.form-search');
  if (!target.closest('.header__container')) {
  form.classList.remove('form__active');
    form.querySelector('input').value = "";
    document.querySelector('.form-btn__open').classList.remove('active')
  }
})

// Slider
const hero = document.querySelector('.hero-slider_content')
const swiper = new Swiper('.hero__swiper', {
  speed: 300,
  pagination: {
    el: '.hero__pagination',
    type: 'bullets',
    clickable: true
  },
  loop: true,
});

// Steps Work
let tabsBtn = document.querySelectorAll('.work__tabs-btn');
let tabsItem = document.querySelectorAll('.work-tabs__item');

tabsBtn.forEach(function(element){
  element.addEventListener('click', function(e){
    const path = e.currentTarget.dataset.path;

    tabsBtn.forEach(function(btn){
      btn.classList.remove('work__tabs-btn--active')
    });
    e.currentTarget.classList.add('work__tabs-btn--active');

    tabsItem.forEach(function(element){
      element.classList.remove('work-tabs__item--active')});
      document.querySelector(`[data-target="${path}"]`).classList.add('work-tabs__item--active');
  })
})

// Accordion
new Accordion('.accordion-list', {
  elementClass: 'accordion',
  triggerClass: 'accordion__control',
  panelClass: 'accordion__content',
  activeClass: 'accordion--active',
  icons: false,
  heightStyle: 'content',
  collapssible: true,
  active: false
});
