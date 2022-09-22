$(document).ready(function(){

 $('.header__burger').click(function () {
    $(this).toggleClass('header__burger_active');
    $('.header-mobile-menu').toggleClass('header-mobile-menu_active');
    $('body').toggleClass('body_hidden');
    $('header').toggleClass('header_active');
});



$(function() {

    $('.checkout__select').styler({
      selectSmartPositioning: false,
    });
  
});

});





