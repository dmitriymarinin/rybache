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
    scrollTop: $($.attr(this, 'href')).offset().top-= 200
  }, 400);
  return false;
});

// $('.clients__container').slick({
//   infinite: true,
//   slidesToShow: 5,
//   slidesToScroll: 1,
//   variableWidth: true,
//   autoplay: true,
//   autoplaySpeed: 3000,
//   // adaptiveHeight: true,
  
//   responsive: [
//     {
//       breakpoint: 540,
//       settings: {
        
//         slidesToShow: 2,
       
//       }
//     }
    
//   ]

// });

// $(window).on('load resize', function() {
//   if ($(window).width() < 768) {
// $('.direction__list').slick({
//   infinite: true,
//   centerMode: true,
//   responsive: [
//     {
//       breakpoint: 768,
//       settings: {
//         centerMode: true,
//         centerPadding: '60px 60px 60px 60px',
//         slidesToShow: 1,
       
//       }
//     }
    
//   ]
// }); } else {
//   $("#items.slick-initialized").slick("unslick");
// }
// });