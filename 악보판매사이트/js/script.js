const main=new Swiper('.main_slide',{
    loop:true,//슬라이드 순환
    navigation: {
        nextEl: ".next",
        prevEl: ".prev",
      },
    pagination:{el:'.main_slide .swiper-pagination',
    type: "fraction",},
    autoplay: {
        delay: 5000,
        disableOnInteraction: false
      },
})

const contents=new Swiper('.con1_slide',{
    slidesPerView: 6,
      centeredSlides: true,
      spaceBetween: 30,
      pagination: {
       
        type: "fraction",
      },
      navigation: {
        nextEl: ".con_next",
        prevEl: ".con_prev",
      },
      loop:true,

      breakpoints: {
        100: { slidesPerView: 2,},
        640: { slidesPerView: 3,},
        740: { slidesPerView: 3,},
        900: { slidesPerView: 3,},
        1000: { slidesPerView: 4,},
        1240: { slidesPerView: 6,},
      }
})
const contents2=new Swiper('.con2_slide',{
  slidesPerView: 6,
    centeredSlides: true,
    spaceBetween: 30,
    pagination: {
      
      type: "fraction",
    },
    navigation: {
      nextEl: ".con_next",
      prevEl: ".con_prev",
    },
    loop:true,
    breakpoints: {
      100: { slidesPerView: 2,},
      640: { slidesPerView: 3,},
      740: { slidesPerView: 3,},
      900: { slidesPerView: 3,},
      1000: { slidesPerView: 4,},
      1240: { slidesPerView: 6,},
    }
})

$(window).scroll(function(){
    
  scrTop=$("html").scrollTop();
  if(scrTop>50){
      $(".top_btn").fadeIn();
  }else{
      $(".top_btn").fadeOut();
  }
})
$(".top_btn").click(function(){

  $("html").animate({scrollTop:0},500)

})



$(".m_menubg").hide()

$(".spot_bar").click(function(){
  $(".m_menubg").fadeIn();
})
$(".close").click(function(){
  $(".m_menubg").fadeOut();
})

$(".m_button2").hide()
$(".m_button1").click(function(){
  $(".nav").animate({marginLeft:'-135px'},500);
  $(".m_button1").hide();
  $(".m_button2").show();
})
$(".m_button2").click(function(){
  $(".nav").animate({marginLeft:'0'},500);
  $(".m_button1").show();
  $(".m_button2").hide();
})

$(window).scroll(function(){
  
  let top=0
  $(top).scrollTop();
  if(scrTop>250){
      $(".textbox").css({"position": 'fixed',"z-index":'1000',
        "margin":'0 auto',"width":'50%',"top":'10px'
      });
  }else{
    $(".textbox").css({"position": 'absolute',"z-index":'5',
    "margin":'0 auto',"width":'50%',"top":'75px'
  });
  }
})
