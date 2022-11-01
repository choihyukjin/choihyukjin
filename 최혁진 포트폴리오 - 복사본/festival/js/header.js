
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

            $(".sub_menu",this).slideToggle("fast");
            return false;
		});
	});


$(function(){
  var $header = $('header'); //헤더를 변수에 넣기
  var $page = $('.scroll_section'); //색상이 변할 부분
  var $window = $(window);
  var pageOffsetTop = $page.offset().top;//색상 변할 부분의 top값 구하기
  
  $window.resize(function(){ //반응형을 대비하여 리사이즈시 top값을 다시 계산
    pageOffsetTop = $page.offset().top;
  });
  
  $window.on('scroll', function(){ //스크롤시
    var scrolled = $window.scrollTop() >= pageOffsetTop; //스크롤된 상태; true or false
    $header.toggleClass('down', scrolled);//클래스 토글
  });
});



$(document).ready(function(){

	$(".sA").click(function(){
		$(location).attr("href", "intro.html")
	})
	
	$(".sB").click(function(){
		$(location).attr("href", "astract.html")
	})
	
	$(".sC").click(function(){
		$(location).attr("href", "timetable.html")
	})
    
    $(".sD").click(function(){
		$(location).attr("href", "character.html")
	})
    
    $(".sE").click(function(){
		$(location).attr("href", "sub_concert.html")
	})
    
    $(".sF").click(function(){
		$(location).attr("href", "sub_food.html")
	})
    
    $(".sG").click(function(){
		$(location).attr("href", "course.html")
	})
    
    $(".sH").click(function(){
		$(location).attr("href", "reward.html")
	})
    
    $(".sI").click(function(){
		$(location).attr("href", "reservation.html")
	})

})