$(document).ready(function () {

    $('.menu_toggle_btn').on('click', function () {
        $('.menu_bg').show();
        $('.gnb').show().animate({
            right: 0
        });
    });
    $('.close_btn>a ').on('click', function () {
        $('.menu_bg').hide();
        $('.gnb').animate({
            right: '-' + 50 + '%'
        }, function () {
            $('.gnb').hide();
        });
    });
    
    
});


$(document).ready(function(){
		$(".sub_menu").hide();
		$(".gnb li").click(function(){
			$("ul",this).slideToggle("fast");
		});
	});