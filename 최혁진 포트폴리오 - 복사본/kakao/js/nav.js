$(function(){
   
    const HEADER = $('header');
     //mobile
    const MOB_MENU =$('.mob_menu');
    const BODY =$ ('body');
   
    const MOB_SUB_BTN = $('.m_sub_tit');
    const MOB_SUB_LIST = $('.m_sub_list');

    //desktop
    const D_NAV_ITEM=$('.d_Nave_item')
    const D_SUB_LIST=$('.d_Sub_list')
    //fixed,scroll
    const LINK =$('.link');
    const FIXED =$('.fixed');

    D_NAV_ITEM.mouseenter(function(){
        D_NAV_ITEM.removeClass('act');
    

        HEADER.addClass('Hover');
        $(this).addClass('act');
    })

    D_SUB_LIST.mouseleave(function(){
        setTimeout(deskTop_reset,1000)
    })

    function deskTop_reset(){
     D_NAV_ITEM.removeClass('act');
     HEADER.removeClass('Hover');

    }


    
    $(window).scroll(function(){
        if($(this).scrollTop()>300){
            FIXED.fadeIn(300);
        }
        else{
            FIXED.fadeOut(300);
        }
    })

    LINK.smoothScroll(300);

    MOB_SUB_BTN.click(function(e){
        e.preventDefault();
        $(this).next(MOB_SUB_LIST).slideToggle()

    })


    MOB_MENU.click(function(e){
        e.preventDefault();
        BODY.toggleClass('noneScroll');
        HEADER.toggleClass('mob_Nav');
    })

    function mobile_reset(){
        BODY.removeClass('nonScroll');
        HEADER.removeClass('mob_Nav');

    }

$(window).resize(function(){
    mobile_reset()
    deskTop_reset()
})






})