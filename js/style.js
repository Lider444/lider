const menu = document.querySelector('#menuu')

let page = 0

document.addEventListener('scroll',()=>{
    page = window.scrollY
    menu.style.transition = "all .7s"
    if(page < 50){
        menu.style.background = "none"
        menu.style.height = "auto"

        
    }
    else{
        menu.style.background = "black"
        menu.style.height = "auto"
        
       
        
    }

})
    window.onscroll = () => {
        const header = document.querySelector('#menuu')
        const Y = window.scrollY

        if (Y > 50) {
            header.style.position = "fixed"
        }
    }
    
    document.querySelector("#team > div > div.row.position-relative")
 
 
    const prevBtn = document.querySelector('.slider__btn--prev');
    const nextBtn = document.querySelector('.slider__btn--next');
    const slides = document.querySelector('.slider__slides');
    const slideWidth = slides.clientWidth / 6;
    const maxOffset = slideWidth *2
    let offset = 0;
  function autoClick(){
    if (offset === -maxOffset) {
        offset = 0;
       } else {
        offset -= slideWidth;
       }
       slides.style.transform = `translateX(${offset}px)`;
       
 }
    prevBtn.addEventListener('click', function() {
     if (offset === 0) {
      offset = -maxOffset;
     } else {
      offset += slideWidth;
     }
     slides.style.transform = `translateX(${offset}px)`;
    }); 

    setInterval(()=>{
autoClick()
    },4000)
  
    nextBtn.addEventListener('click', function() {
     if (offset === -maxOffset) {
      offset = 0;
     } else {
      offset -= slideWidth;
     }
     slides.style.transform = `translateX(${offset}px)`;
    });
    $(document).ready(function(){
         
        $(window).scroll(function(){
        if ($(this).scrollTop() > 300) {
        $('.scrollup').fadeIn();
        } else {
        $('.scrollup').fadeOut() ;
        }
        });
        $('.scrollup').click(function(){
        $("html, body").animate({ scrollTop: 0 }, 600);
        return false;
        });
         
        });
    

        function burgerMenu(icon) {
            icon.classList.toggle("change");
          }

$(document).ready(function() {
    $('.container_burg').click(function(event) {
        $('.container_burg,.menu_ul_li').toggleClass('active');
    })

});