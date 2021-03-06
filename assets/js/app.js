const sections = document.querySelectorAll('section')
const navLi = document.querySelectorAll('.header-link')
const btnMenu = document.querySelector('.menu-mobile')
const menuList = document.querySelector('.header-list')
const btnClose = document.querySelector('.icon-close')

const handlerEvents = () => {
    
    menuList.onclick = (e) =>{
        console.log()
        document.querySelector(`#${e.target.closest(".header-link").getAttribute('data-id')}`).scrollIntoView({behavior: "smooth", block: "center", inline: "nearest"});
    }
    // Show hide menu Mobile
    btnMenu.onclick = () =>{
        menuList.classList.add('active')
    }
    btnClose.onclick = () =>{
        
        menuList.classList.remove('active')

    }

    

    document.querySelectorAll('.header-link').forEach(item =>{
        item.onclick = () =>{
            menuList.classList.remove('active')
        }
    })

    window.addEventListener('scroll', () =>{
        let current = '';

        sections.forEach( section =>{
            const sectionTop = section.offsetTop
            const sectionHeight = section.clientHeight
            if(pageYOffset >=  (sectionTop - sectionHeight) ){
                current = section.getAttribute('id')
            }
        })
        navLi.forEach( item =>{
            item.classList.remove('active')
            if(item.getAttribute('data-id') == current){
                item.classList.add('active')
            }
        })
    })
    
}



window.addEventListener('load', () =>{
// Custom Slider
new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 20,
    slidesPerGroup: 3,
    loopFillGroupWithBlank: true,
    
    pagination: {
      clickable: true,
    },
    breakpoints: {
        640: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 40,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 20,
        },},
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
  handlerEvents()
})
