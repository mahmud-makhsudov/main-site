const swiper = new Swiper('.swiper-container', {
  slidesPerView: 4,
  spaceBetween: 30,
  slidesPerGroup: 1,
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false
  },
  speed: 1000,
  breakpoints: {
    320: {
      slidesPerView: 2
    },
    650: {
      slidesPerView: 3,
      spaceBetween: 20
    },
    900: {
      slidesPerView: 4
    }
  }
});
const swiper2 = new Swiper('.slider__container', {
  slidesPerView: 4,
  spaceBetween: 30,
  slidesPerGroup: 1,
  autoHeight: true,
  speed: 1000,
  breakpoints: {
    320: {
      slidesPerView: 2,
      spaceBetween: 10
    },
    650: {
      slidesPerView: 3,
      spaceBetween: 20
    },
    900: {
      slidesPerView: 4
    }
  }
});

new WOW().init();

const mainButton = document.querySelector('.header__menu-main');
const mainSection = document.querySelector('.main-sreen');
const aboutButton = document.querySelector('.header__menu-about');
const aboutSection = document.querySelector('.about');
const portfolioButton = document.querySelector('.header__menu-portfolio');
const portfolioSection = document.querySelector('.portfolio');
const contactsButton = document.querySelector('.header__menu-contacts'); 
const contactsSection = document.querySelector('.contacts'); 
const btnContacts = document.querySelectorAll('.main-sreen__btn')

btnContacts.forEach((item) => {
  item.addEventListener('click', () => {
    contactsSection.scrollIntoView({ 
      block: "center",
      behavior: 'smooth',
    });
  })
})

mainButton.addEventListener('click', () => {
  mainSection.scrollIntoView({ 
    block: "start",
    behavior: 'smooth',
  });
});
aboutButton.addEventListener('click', () => {
  aboutSection.scrollIntoView({ 
    block: "start",
    behavior: 'smooth',
  });
});
portfolioButton.addEventListener('click', () => {
  portfolioSection.scrollIntoView({ 
    block: "center",
    behavior: 'smooth',
  });
});

contactsButton.addEventListener('click', () => {
  contactsSection.scrollIntoView({ 
    block: "center",
    behavior: 'smooth',
  });
});


const burger = document.querySelector('.header__menu-burger');
const menu = document.querySelector('.header__menu-items');

burger.addEventListener('click', () => {
  menu.classList.toggle('active')
})



// const reviewsButton = document.querySelector('.header__menu-reviews');
// const reviewsSection = document.querySelector('.reviews');

// reviewsButton.addEventListener('click', () => {
//   reviewsSection.scrollIntoView({ 
//     block: "center",
//     behavior: 'smooth',
//   });
// });
