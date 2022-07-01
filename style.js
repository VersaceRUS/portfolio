/*--SLIDER--*/

var swiper = new Swiper(".mySwiper", {
  allowTouchMove: false,
});

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

//--HEADER

document.querySelectorAll('.header-list > li > button').forEach((n, i, a) => {
  n.addEventListener('click', () => a.forEach(m => m.classList.toggle('active', m === n)));
});


//--ABOUT

document.querySelectorAll('.about-list > li').forEach((n, i, a) => {
  n.addEventListener('click', () => a.forEach(m => m.classList.toggle('active', m === n)));
});

let selectors = document.querySelectorAll('.about-item'),
    blocks = document.querySelectorAll('.about-sub');

Array.prototype.forEach.call(selectors, function(selector, index) {
  selector.addEventListener('click', function(evt){
    evt.preventDefault();
    clickButtonHandler(blocks[index])
  })
})

function clickButtonHandler(currentBlock) {

  Array.prototype.forEach.call(blocks, function(block) {
    if (block.classList.contains('opened')) {
      block.classList.remove('opened');
    }
  })
  currentBlock.classList.add('opened')
}


//--SKULLS

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


