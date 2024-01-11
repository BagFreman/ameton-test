"use strict"

document.addEventListener('DOMContentLoaded', () => {
   const swiper = new Swiper('.swiper', {

      loop: false,
      spaceBetween: 24,
      slidesPerView: 4,

      navigation: {
         nextEl: '.swiper-button-next',
         prevEl: '.swiper-button-prev',
      },

      breakpoints: {

         320: {
            slidesPerView: 1.2,
            spaceBetween: 20
         },

         520: {
            slidesPerView: 2,
            spaceBetween: 20
         },

         720: {
            slidesPerView: 2.2,
            spaceBetween: 20
         },

         900: {
            slidesPerView: 3,
            spaceBetween: 30
         },

         1200: {
            slidesPerView: 4,
         }
      },
   });

   let referenceElement = document.querySelectorAll('.reference__item');

   referenceElement.forEach(element => {
      element.addEventListener('click', () => {
         element.classList.toggle('reference__item--active');
      })
   });
})