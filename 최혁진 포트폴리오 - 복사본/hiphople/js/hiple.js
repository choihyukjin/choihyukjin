$(document).ready(function(){


    $('.menu_toggle_btn').click(function () {

        $('.gnb').stop().slideToggle('fast');

    });
});

$(document).ready(function () {

    $('.slider_list li').last().prependTo('.slider_list');

    $('.slider_list').css('left', -1000);

    setInterval(function () {

        $('.slider_list').animate({
            left: '-=' + 1000
        }, 'slow', function () {

            $('.slider_list li').first().appendTo(
                '.slider_list');

            $('.slider_list').css('left', -1000);
        });
    }, 3000);

});

$(document).ready(function(){
            $('ul.community_sub_menu_list li').click(function(){
                
                var tab_id = $(this).attr('data-tab');

                $('ul.community_sub_menu_list li').removeClass('current');
                $('.tab-content').removeClass('current');

                $(this).addClass('current');
                $("#"+tab_id).addClass('current');
                
            });

        });




/*var current = 0;
var count = $('.slider_list li').size() - 1;

$('.control a').click(function () {

    var check = $(this).hasclass('prev');
    
    if (check == true) {
        current -= 1;
    } else {
        current += 1;
    }

    if (current < 0) {
        current = count;
    }

    if (current > count) {
        current = 0;
    }

});*/
