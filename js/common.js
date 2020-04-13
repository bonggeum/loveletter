$(document).ready(function(){
    $(".center").slick({
        centerMode: true,
        slidesToShow: 1,
        arrows:false,
        adaptiveHeight: true
      });
    $('.more').click(function(){
        $(this).toggleClass('on');
        if($(this).hasClass('on')){
            $('.more_txt').slideDown(300)
           }else{
               $('.more_txt').slideUp(300)
           }
    });
    
    $('#casting .img').click(function(){
        $(this).next('.story').bPopup({});
    });


    

})
