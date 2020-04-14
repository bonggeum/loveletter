$(document).ready(function(){
    
    
    //더보기
    $('.more').click(function(){
        $(this).toggleClass('on');
        if($(this).hasClass('on')){
            $('.more_txt').slideDown(300)
           }else{
               $('.more_txt').slideUp(300)
           }
    });
    
    //팝업
    $('#casting .btn_pop1').click(function(){
        $('.story1').bPopup();
    });
    $('#casting .btn_pop2').click(function(){
        $('.story2').bPopup();
    });
    
    //예고편
    //video slide
    $('.video_wrap').slick({
          infinite: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          speed: 1000,
          arrows: true,
    });

    //스틸컷
    $(".center").slick({
        centerMode: true,
        slidesToShow: 1,
        arrows:false,
        adaptiveHeight: true
    });
    
    $('#stillcut .like').click(function(){
       $(this).toggleClass('on'); 
    });
    
    //wow
    new WOW().init();
})
