particlesJS("particles-js", {
  particles: {
    number: {
      value: 150,
      density: {
        enable: true,
        value_area: 800,
      },
    },
    color: {
      value: "#ffffff",
    },
    shape: {
      type: "circle",
      stroke: {
        width: 0,
        color: "#000000",
      },
      polygon: {
        nb_sides: 4,
      },
      image: {
        src: "img/github.svg",
        width: 10000,
        height: 100,
      },
    },
    opacity: {
      value: 0.5,
      random: false,
      anim: {
        enable: false,
        speed: 1,
        opacity_min: 0.1,
        sync: false,
      },
    },
    size: {
      value: 2,
      random: true,
      anim: {
        enable: false,
        speed: 40,
        size_min: 0.1,
        sync: false,
      },
    },
    line_linked: {
      enable: true,
      distance: 175,
      color: "#ffffff",
      opacity: 0.4,
      width: 0,
    },
    move: {
      enable: true,
      speed: 6,
      direction: "none",
      random: true,
      straight: false,
      out_mode: "out",
      bounce: false,
      attract: {
        enable: false,
        rotateX: 600,
        rotateY: 1200,
      },
    },
  },
  interactivity: {
    detect_on: "window",
    events: {
      onhover: {
        enable: true,
        mode: "repulse",
      },
      onclick: {
        enable: false,
        mode: "push",
      },
      resize: true,
    },
    modes: {
      grab: {
        distance: 400,
        line_linked: {
          opacity: 1,
        },
      },
      bubble: {
        distance: 400,
        size: 40,
        duration: 2,
        opacity: 8,
        speed: 3,
      },
      repulse: {
        distance: 100,
        duration: 0.4,
      },
      push: {
        particles_nb: 4,
      },
      remove: {
        particles_nb: 2,
      },
    },
  },
  retina_detect: true,
});

// function removeEntities {
//   if()
// }

//Carousel slider

// Select all slides
// const slides = document.querySelectorAll(".slide");

// // loop through slides and set each slides translateX property to index * 100% 
// slides.forEach((slide, indx) => {
//   slide.style.transform = `translateX(${indx * 100}%)`;
// });

// // current slide counter
// let curSlide = 0;

// // select next slide button
// const nextSlide = document.querySelector(".btn-next");

// // add event listener and next slide functionality
// nextSlide.addEventListener("click", function () {
//      curSlide++;

//   slides.forEach((slide, indx) => {
//     slide.style.transform = `translateX(${100 * (indx - curSlide)}%)`;
//   });
// });

// // maximum number of slides
// let maxSlide = slides.length - 1;

// // add event listener and navigation functionality
// nextSlide.addEventListener("click", function () {
//   // check if current slide is the last and reset current slide
//   if (curSlide === maxSlide) {
//     curSlide = 0;
//   } else {
//     curSlide++;
//   }

// //   move slide by -100%
//   slides.forEach((slide, indx) => {
//     slide.style.transform = `translateX(${100 * (indx - curSlide)}%)`;
//   });
// });
// // select prev slide button
// const prevSlide = document.querySelector(".btn-prev");

// // add event listener and navigation functionality
// prevSlide.addEventListener("click", function () {
//   // check if current slide is the first and reset current slide to last
//   if (curSlide === 0) {
//     curSlide = maxSlide;
//   } else {
//     curSlide--;
//   }

//   //   move slide by 100%
//   slides.forEach((slide, indx) => {
//     slide.style.transform = `translateX(${100 * (indx - curSlide)}%)`;
//   });
// });