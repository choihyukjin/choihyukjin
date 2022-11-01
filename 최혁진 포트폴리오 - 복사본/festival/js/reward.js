var current = $('.reward_list').offset().left;



$('.slider_bt span').click(function () {

    var index = $(this).index();

    $(this).addClass('on');
    $(this).siblings().removeClass('on');

    if (index == 0) {
        $('.reward_list').animate({
            left: 0
        }, 'slow');
    }

    if (index == 1) {
        $('.reward_list').animate({
            left: -450
        }, 'slow');
    }

    if (index == 2) {
        $('.reward_list').animate({
            left: -900
        }, 'slow');
    }
});


if ($(window).width() > 768) {

    $('.slider_bt span').click(function () {

        var index = $(this).index();

        $(this).addClass('on');
        $(this).siblings().removeClass('on');

        if (index == 0) {
            $('.reward_list').animate({
                left: 0
            }, 'slow');
        }

        if (index == 1) {
            $('.reward_list').animate({
                left: -600
            }, 'slow');
        }

        if (index == 2) {
            $('.reward_list').animate({
                left: -1200
            }, 'slow');
        }
    });


}





$(document).ready(function () {

    var w = ($(window).width() / 2) - ($(".modal").width() / 2);
    var h = ($(window).height() / 2) - ($(".modal").height() / 2);

    $(".modal").css({
        left: w,
        top: h

    });

   


        $(".reward_list li").click(function () {
             var num = $(this).index();
            
            $(".modal").eq(num).fadeIn("slow");
            $(".modal_bg").fadeIn("slow");
        });

        $(".modal").click(function () {
            $(".modal").fadeOut("slow");
            $(".modal_bg").fadeOut("slow");
        })

        $(".modal_bg").click(function () {
            $(".modal").fadeOut("slow");
            $(".modal_bg").fadeOut("slow");
        })

return false;
  
});



/*
$('.arr_left').click(function () {

    
        $('.reward_list').animate({
            left: -= 450
        }, 'slow');

    
    return false;
});
*/

/*
var current = 0;
var count = $('.reward_list li').size() - 1;*/



/*
$('.arr_left').click(function () {

   
    $('.reward_list').animate({
        left: '-=450px'
    }, 400);
    
    current = $('.reward_list').offset().left;
    
    
    if (current == -450) {
        $('.slider_bt span').eq(1).addClass('on');
        $('.slider_bt span').eq(1).siblings().removeClass('on');

    }


    if (current == -900){
        $('.slider_bt span').eq(2).addClass('on');
        $('.slider_bt span').eq(2).siblings().removeClass('on');

    }
    
    
    if(current > -900) {
        
        $('.reward_list').animate({
            left: 900
        }, 'slow');
        
        $('.slider_bt span').eq(2).addClass('on');
        $('.slider_bt span').eq(2).siblings().removeClass('on');
    }
    

    
    
    
    if(current < 0) {
        
        $('.reward_list').animate({
            left: 0
        }, 'slow');
        
        $('.slider_bt span').eq(0).addClass('on');
        $('.slider_bt span').eq(0).siblings().removeClass('on');
    }
    
    
    
    

        return false;
});
*/


/*$('.arr_right').click(function () {

    var current = $('.reward_list').offset().left;



    $('.reward_list').animate({
        left: '+=450px'
    }, 400);
    
    if(current < 0) {
        
        $('.reward_list').animate({
            left: 0
        }, 'slow');
        
        $('.slider_bt span').eq(0).addClass('on');
        $('.slider_bt span').eq(0).siblings().removeClass('on');
    }
    
    
    
    if(current > 900) {
        
        $('.reward_list').animate({
            left: 900
        }, 'slow');
        
        $('.slider_bt span').eq(2).addClass('on');
        $('.slider_bt span').eq(2).siblings().removeClass('on');
    }
    
    
    

    if (current == 450) {
        $('.slider_bt span').eq(1).addClass('on');
        $('.slider_bt span').eq(1).siblings().removeClass('on');

    }


    if (current == 900){
        $('.slider_bt span').eq(2).addClass('on');
        $('.slider_bt span').eq(2).siblings().removeClass('on');

    }
    
    

        return false;
});*/







window.onresize = function () {
    document.location.reload();
};
