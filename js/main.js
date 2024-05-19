//Код для бургер меню Хэдера

document.addEventListener("DOMContentLoaded", function () {

    document.getElementById("burger").addEventListener("click", function () {
      document.querySelector("header").classList.toggle("open");
      document.querySelector('.header__bottom-wrapper').classList.toggle('header__bottom-wrapper--open');
      document.getElementById('back').classList.toggle("back--active")
      //document.querySelector("main").classList.toggle("back");
      
      // Если бургер-меню открыто, скроллинг заблокирован
      if (document.querySelector("header").classList.contains("open")) {
        document.body.style.overflow = "hidden";
      } else {
        // Если бургер-меню закрыто, скроллинг разблокирован
        document.body.style.overflow = "auto";
      }
    });

    document.addEventListener('click', function(event) {
        const isClickInsideMenu = document.querySelector("header").contains(event.target);
        const isClickOnButton = document.getElementById("burger").contains(event.target);
    
        if (!isClickInsideMenu && !isClickOnButton) {
            document.querySelector("header").classList.remove('open');
            document.querySelector("main").classList.remove("main__burger");
            document.querySelector('.header__bottom-wrapper').classList.remove('header__bottom-wrapper--open');
            document.getElementById('back').classList.remove("back--active")
            document.body.style.overflow = "auto";
        }
      });

    document.addEventListener('click', function(event) {
        const isClickInsideMenu = document.querySelector("header").contains(event.target);
        const isClickOnButton = document.getElementById("burger").contains(event.target);
    
        if (!isClickInsideMenu && !isClickOnButton) {
            document.querySelector("header").classList.remove('open');
            document.querySelector("main").classList.remove("main__burger")
            document.body.style.overflow = "auto";
        }
      });
  });

  




const swiper = new Swiper(".swiper", {
  navigation: {
    nextEl: ".swiper-button-next-un",
    prevEl: ".swiper-button-prev-un",
  },
  slidesPerView: 1.2,
  spaceBetween: 24,
  centeredSlides: true,
  loop: true,
  breakpoints: {
    1025: {
      slidesPerView: 2,
      centeredSlides: false,
    },
    759: {
      slidesPerView: 1,
    },
  },
});


document.addEventListener('DOMContentLoaded', function() {
  const sections = document.querySelectorAll('section');
  const navbarLinks = document.querySelectorAll('#nav a');

  window.addEventListener('scroll', function() {
    // Проверяем видимость каждой секции и выделяем соответствующий элемент навигации
    sections.forEach(function(section, index) {
      const rect = section.getBoundingClientRect();
      const isVisible = (rect.top <= window.innerHeight / 4) && (rect.bottom >= window.innerHeight / 4);

      if (isVisible) {
        navbarLinks.forEach(function(link) {
          link.classList.remove('active');
        });

        navbarLinks[index].classList.add('active');
      }
    });
  });
});


// const sections = document.getElementsByTagName('section');

// window.addEventListener("scroll", () => {
//     const y = window.scrollY;
//     for (const section of sections) {
//         const rect = section.getBoundingClientRect();
//         if(rect.y <= y && rect.y + rect.height > y) {
            
//             let sectionId = section.id;
//             console.log(sectionId);
          
//             // дизактивируем все активные ссылки
//             document.querySelector('.menu .menu__link--active').classList.remove("menu__link--active");
//             // активируем текущую
//             document.querySelector(`[href*=${sectionId}]`).classList.add("menu__link--active")
//         }
//     }
// });

