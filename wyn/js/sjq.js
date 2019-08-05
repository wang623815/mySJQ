var mySwiper = new Swiper ('.swiper-container', {
     loop: true, // 循环模式选项
 	autoplay:true,
     
     // 分页器
    pagination: {
       el: '.swiper-pagination',
     },
    
     // 前进后退按钮
    navigation: {
       nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
     },
 
   });        
