/*--SLIDER--*/

var swiper = new Swiper(".mySwiper", {});

document.querySelector('.home').addEventListener('click', () => {
  swiper.slideTo(0);
});
document.querySelector('.home-me').addEventListener('click', () => {
  swiper.slideTo(0);
});

document.querySelector('.about').addEventListener('click', () => {
  swiper.slideTo(1);
});
document.querySelector('.about-me').addEventListener('click', () => {
  swiper.slideTo(1);
});

document.querySelector('.skills').addEventListener('click', () => {
  swiper.slideTo(2);
});
document.querySelector('.skills-me').addEventListener('click', () => {
  swiper.slideTo(2);
});

document.querySelector('.portf').addEventListener('click', () => {
  swiper.slideTo(3);
});
document.querySelector('.portf-me').addEventListener('click', () => {
  swiper.slideTo(3);
});

document.addEventListener('DOMContentLoaded', function() {
   let modalButtons = document.querySelectorAll('.js-open-modal'),
       closeButtons = document.querySelectorAll('.js-modal-close');

   modalButtons.forEach(function(item){
      item.addEventListener('click', function(e) {
         e.preventDefault();
         let modalId = this.getAttribute('data-modal');
             modalElem = document.querySelector('.modal[data-modal="' + modalId + '"]');
             modalElem.classList.add('active');
      });

   });


   closeButtons.forEach(function(item){

      item.addEventListener('click', function(e) {
         let parentModal = this.closest('.modal');

         parentModal.classList.remove('active');
      });

   });
});

