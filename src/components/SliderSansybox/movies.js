Fancybox.bind('[data-fancybox="gallery"]', {});
//sliderMovies
const swiperMovies = new Swiper('.swiperMovies', {
    slidesPerView: 6,
    // If we need pagination
    slidesPerView: 'auto',
    loop: true,
    autoplay: {
      delay: 7000,
      disableOnInteraction: false,
    },
    // Responsive breakpoints
    breakpoints: {
      // when window width is >= 320px
      360: {
        slidesPerView: 2,
        spaceBetween: 10
      },
      // when window width is >= 480px
      480: {
        slidesPerView: 3,
      },
      660: {
        slidesPerView: 4,
        spaceBetween: 20
      },
      768: {
        slidesPerView: 5,
        spaceBetween: 20
      },
      992: {
        slidesPerView: 4,
        spaceBetween: 41
      },
      1100: {
        slidesPerView: 5,
        spaceBetween: 41
      },
      1500: {
        slidesPerView: 6,
        spaceBetween: 41
      },
  
    }
  
  });