// ================================password
$(document).ready(function() {
    const passwordInput = $("#password");
    const toggleButton = $("#togglePassword");

    toggleButton.on("click", function() {
        if (passwordInput.attr("type") === "password") {
            passwordInput.attr("type", "text");
            toggleButton.removeClass("far fa-eye").addClass("far fa-eye-slash");
        } else {
            passwordInput.attr("type", "password");
            toggleButton.removeClass("far fa-eye-slash").addClass("far fa-eye");
        }
    });
});

// ================================password


window.addEventListener('scroll', function () {
  const header = document.querySelector('.navigation');
  const scrollY = window.scrollY;

  // Adjust this value to set the scroll threshold
  const scrollThreshold = 100;

  if (scrollY > scrollThreshold) {
      header.classList.add('sticky');
  } else {
      header.classList.remove('sticky');
  }
});


// ================================slider-1

$('#myNft').owlCarousel({
  stagePadding: 100,
  loop:true,
  margin:30,
  nav:false,
  dots:false,
  responsive:{
      0:{
        stagePadding: 0,
          items:1,
          dots:true,
      },
      600:{
          items:2,
          dots:true,
      },
      1000:{
          items:3,
          dots:true,
      },
      1280:{
          items:4,
          dots:true,
      }
  }
})
// ================================slider-1
// ================================slider-2
$('#myPartner').owlCarousel({
  loop:true,
  margin:10,
  // nav:true,
  dots:false,
  responsive:{
      0:{
          items:1
      },
      320:{
          items:2
      },
      600:{
          items:3
      },
      1000:{
          items:5
      }
  }
})
// ================================slider-2
// ================================slider-3
$('#myServices').owlCarousel({
  loop:true,
  margin:30,
  // nav:true,
  dots:true,
  responsive:{
      0:{
          items:1
      },
      600:{
          items:3
      },
      1000:{
          items:3
      }
  }
})
// ================================slider-3
// ================================slider-4
$('#myTrading').owlCarousel({
  loop:true,
  margin:20,
  // nav:true,
  dots:false,
  responsive:{
      0:{
          items:1
      },
      320:{
        items:2
      },
      600:{
          items:3
      },
      1000:{
          items:5
      }
  }
})
// ================================slider-4
// ================================slider-5
$('#heroSec').owlCarousel({
  loop:true,
  margin:10,
  // nav:true,
  dots:true,
  responsive:{
      0:{
          items:1
      },
      600:{
          items:1
      },
      1000:{
          items:1
      }
  }
})
// ================================slider-5
// ================================slider-6
$('#myTestmonial').owlCarousel({
  loop:true,
  margin:10,
  nav:false,
  dots:false,
  responsive:{
      0:{
          items:1
      },
      600:{
          items:1
      },
      1000:{
          items:2
      }
  }
})

// ================================slider-6
// var swiper = new Swiper(".mySwiper", {
//   loop: true,
//   pagination: {
//     el: ".swiper-pagination",
//     clickable: true,
//   },
//   autoplay: {
//     delay: 3555000,
//     disableOnInteraction: false,
//   },
// });

// // ============slider-2
// var swiper = new Swiper(".myTrading", {
//   slidesPerView: 5,
//   spaceBetween: 30,
//   loop: true,
//   autoplay: {
//     delay: 2500,
//     disableOnInteraction: false,
//   },
//   breakpoints: {
//     320: {
//       slidesPerView: 2,
//       spaceBetween: 20,
//     },
//     768: {
//       slidesPerView: 3,
//       spaceBetween: 40,
//     },
//     1024: {
//       slidesPerView: 5,
//       spaceBetween: 50,
//     },
//   },
// });
// // ============slider-2

// // ============slider-3
// var swiper = new Swiper(".myServices", {
//   loop: true,
//   slidesPerView: 4,
//   spaceBetween: 40,
//   pagination: {
//     el: ".swiper-pagination",
//     clickable: true,
//   },
//   autoplay: {
//     delay: 3500,
//     disableOnInteraction: false,
//   },
//   breakpoints: {
//     320: {
//       slidesPerView: 1,
//     },
//     768: {
//       slidesPerView: 2,
//     },
//     1024: {
//       slidesPerView: 4,
//     },
//   },
// });
// // ============slider-3
// // ============slider-4
// var swiper = new Swiper(".myTestmonial", {
//   loop: true,
//   slidesPerView: 2,
//   spaceBetween: 30,
//   autoplay: {
//     delay: 3500,
//     disableOnInteraction: false,
//   },
//   breakpoints: {
//     320: {
//       slidesPerView: 1,
//       spaceBetween: 20,
//     },
//     768: {
//       slidesPerView: 2,
//       spaceBetween: 40,
//     },
//     1024: {
//       slidesPerView: 2,
//       spaceBetween: 50,
//     },
//   },
// });
// // ============slider-4
// // ============slider-5
// var swiper = new Swiper(".myPartner", {
//   slidesPerView: 5,
//   spaceBetween: 30,
//   loop: true,
//   autoplay: {
//     delay: 2500,
//     disableOnInteraction: false,
//   },
//   breakpoints: {
//     320: {
//       slidesPerView: 2,
//       spaceBetween: 20,
//     },
//     768: {
//       slidesPerView: 3,
//       spaceBetween: 40,
//     },
//     1024: {
//       slidesPerView: 5,
//       spaceBetween: 50,
//     },
//   },
// });
// // ============slider-5

