$('.owl-carousel').owlCarousel({
  loop:true,
   dots:false,
   margin:20,
  autoplay:true,
  responsive:{
      0:{
          items:2
      },
      600:{
          items:2
      },
      1000:{
          items:3
      }
  }
})
    
      /*preloader*/
      const done=()=>{
        $('.preloader-content').hide()
      }
      /*search menu*/
      $(".search-btn").on("click", () => {
        $(".search-menu").addClass("search-menu-open");
       
      });
      $(".close-search-btn").on("click",()=>{
        $(".search-menu").removeClass("search-menu-open");
      });
      $(".menu-button").on("click", () => {
        $(".main-menu-content").addClass("main-menu-content-show");
       
      });
      $(".close-main-menu-btn").on("click", () => {
        $(".main-menu-content").removeClass("main-menu-content-show");
       
      });