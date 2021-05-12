"use strict";



// let vacationRight = document.querySelector(".vacancion__right");
// let currentVacationImage;
// findCurrentVacationImage();

// var liElems = document.querySelectorAll(".vacancion__item");
// // let output = document.querySelector('.vacancion__img');
// // output.src = "img/vacancion/vacancion1.png";

// for (var i = 0; i < liElems.length; i++) {
//   liElems[i].addEventListener("mouseenter", function(e) {
//     // output.src = this.dataset.img;
//     // output.classList.add("vacancion__img--hidden")
//     appendNewVacationImage(vacationRight, e.target.dataset.img);
//     hideAndRemove(currentVacationImage);
//     findCurrentVacationImage();
//   });
// }



// function findCurrentVacationImage() {
//   currentVacationImage = document.querySelector(".vacancion__img--current");
// }


// function hideAndRemove(current) {
//   current.classList.remove("vacancion__img--current");
//   current.classList.add("vacancion__img--hidden");

//   setTimeout(() => {
//     current.remove();
//   }, 1000) 
// }


// function appendNewVacationImage(targetElem, src) {
//   let img = document.createElement("img");
//   img.src = src;
//   img.classList.add("vacancion__img");
//   img.classList.add("vacancion__img--current");

//   targetElem.prepend(img);
// }

var $page = $('html, body');
$('a[href*="#"]').click(function () {
  $page.animate({
    scrollTop: $($.attr(this, 'href')).offset().top -= 200
  }, 400);
  return false;
});

$('.hero__slider-title').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: '.hero__slider-img',
	 autoplay: true
});

$('.hero__slider-number').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: '.hero__slider-img',
	 autoplay: true
});

$('.hero__img-slider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: '.hero__slider-img',
	 autoplay: true
});

$('.hero__slider-img').slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  variableWidth: true,
  autoplay: true,
  autoplaySpeed: 3000,
  
  asNavFor: '.hero__slider-title, .hero__slider-number, .hero__img-slider ',



});

// // НОМЕРА
// $('.number__list').slick({
//   infinite: false,
//   slidesToShow: 1,
//   slidesToScroll: 1,
//   variableWidth: true,
//   clickable: true,
//   focusOnSelect: true
//   // asNavFor: '.hero__slider-title, .hero__slider-number, .hero__img-slider ',



// });


//   headerScroll
function headerScroll(){
  let header = document.querySelector('.header');
    if (window.pageYOffset > 50) {
       header.classList.add('header-active');
    } else {
      header.classList.remove('header-active');
    }
}

window.onscroll=headerScroll;
headerScroll();

//   headerScroll

