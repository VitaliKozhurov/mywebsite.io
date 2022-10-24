// BURGER-MENU
(function () {
   const burger_menu = document.querySelector('.burger_menu');
   const nav_header = document.querySelector('.nav_header');
   burger_menu.addEventListener("click", mobileMenu);
   function mobileMenu() {
      burger_menu.classList.toggle("active");
      nav_header.classList.toggle("active");
   }
   const nav_link = document.querySelectorAll(".nav_link");

   nav_link.forEach(n => n.addEventListener("click", closeMenu));

   function closeMenu() {
      burger_menu.classList.remove("active");
      nav_header.classList.remove("active");
   }
}());

//POP-UP
const openPopUp = document.querySelector('.icon-user');
const closePopUp = document.querySelector('.pop_up_close');
const popUp = document.querySelector('.wrapper-pop_up');

openPopUp.addEventListener('click', function (e) {
   e.preventDefault();
   popUp.classList.add('active');
})
closePopUp.addEventListener('click', () => {
   popUp.classList.remove('active');
})

//Акардеон на странице информация
const accordion = document.getElementsByClassName('inform-content-box');
for (i = 0; i < accordion.length; i++) {
   accordion[i].addEventListener('click', function () {
      this.classList.toggle('active')
   })
}

//Слайдеры
new Swiper('.order-swiper', {
   navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
   },
   pagination: {
      el: ".swiper-pagination",
      type: "fraction",
   },
   breakpoints: {
      1300: {
         slidesPerView: 3,
         spaceBetween: 30
      },
      798: {
         slidesPerView: 4,
         spaceBetween: 10
      },
      580: {
         slidesPerView: 3,
         spaceBetween: 10
      },
      480: {
         slidesPerView: 2,
         spaceBetween: 10
      },
      320: {
         slidesPerView: 1,
         spaceBetween: 30
      },
   }
});
/*===Слайдер для раздела сотрудничество===*/
new Swiper(".cooperate-swiper", {
   navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
   },
   breakpoints: {
      998: {
         slidesPerView: 5,
         spaceBetween: 40
      },
      768: {
         slidesPerView: 3,
         spaceBetween: 40
      },
      480: {
         slidesPerView: 2,
         spaceBetween: 40
      },
   }
});

/*===Слайдер для раздела все продукты, слайдер для рекламного текста===*/
new Swiper(".swiper-all_product", {
   spaceBetween: 30,
   centeredSlides: true,
   loop: true, speed: 1000,
   autoplay: {
      delay: 5500,
      disableOnInteraction: false,
   },

});

/*===Слайдер для карточек с товарами===*/
new Swiper(".product-item-card-swiper", {
   slidesPerView: 1,
   spaceBetween: 30,
   loop: true,
   navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
   },
});

