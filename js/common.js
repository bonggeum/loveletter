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
    

})
