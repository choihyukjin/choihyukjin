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


$(function(){
// 	이미지 클릭시 해당 이미지 모달
	$(".food01").click(function(){
		$(".modal").show();
		// 해당 이미지 가겨오기
		$(".modalBox img").attr("src");
		$(".modalBox img").attr("alt", imgAlt);
		
//		// 해당 이미지 텍스트 가져오기
//		var imgTit =  $(this).children("p").text();
//		$(".modalBox p").text(imgTit);
		
   // 해당 이미지에 alt값을 가져와 제목으로
		//$(".modalBox p").text(imgAlt);
	});
	
	//.modal안에 button을 클릭하면 .modal닫기
	$(".modal button").click(function(){
		$(".modal").hide();
	});
	
	//.modal밖에 클릭시 닫힘
	$(".modal").click(function (e) {
    if (e.target.className != "modal") {
      return false;
    } else {
      $(".modal").hide();
    }
  });
});





$(function(){
// 	이미지 클릭시 해당 이미지 모달
	$(".food02").click(function(){
		$(".modal02").show();
		// 해당 이미지 가겨오기
		$(".modalBox02 img").attr("src");
		$(".modalBox02 img").attr("alt", imgAlt);
		
//		// 해당 이미지 텍스트 가져오기
//		var imgTit =  $(this).children("p").text();
//		$(".modalBox p").text(imgTit);
		
   // 해당 이미지에 alt값을 가져와 제목으로
		//$(".modalBox p").text(imgAlt);
	});
	
	//.modal안에 button을 클릭하면 .modal닫기
	$(".modal02 button").click(function(){
		$(".modal02").hide();
	});
	
	//.modal밖에 클릭시 닫힘
	$(".modal02").click(function (e) {
    if (e.target.className != "modal02") {
      return false;
    } else {
      $(".modal02").hide();
    }
  });
});







$(function(){
// 	이미지 클릭시 해당 이미지 모달
	$(".food03").click(function(){
		$(".modal03").show();
		// 해당 이미지 가겨오기
		$(".modalBox03 img").attr("src");
		$(".modalBox03 img").attr("alt", imgAlt);
		
//		// 해당 이미지 텍스트 가져오기
//		var imgTit =  $(this).children("p").text();
//		$(".modalBox p").text(imgTit);
		
   // 해당 이미지에 alt값을 가져와 제목으로
		//$(".modalBox p").text(imgAlt);
	});
	
	//.modal안에 button을 클릭하면 .modal닫기
	$(".modal03 button").click(function(){
		$(".modal03").hide();
	});
	
	//.modal밖에 클릭시 닫힘
	$(".modal03").click(function (e) {
    if (e.target.className != "modal03") {
      return false;
    } else {
      $(".modal03").hide();
    }
  });
});

