$(document).ready(function(){
    function scrollDisable(){
        $('html, body').addClass('hidden');
    }
    function scrollAble(){
        $('html, body').removeClass('hidden');
    }
});
$(document).ready(function(){
	var typingBool = false; 
	var typingIdx=0; 
	var liIndex = 0;
	var liLength = $(".typing_txt>ul>li").length;


	var typingTxt = $(".typing_txt>ul>li").eq(liIndex).text(); 
	typingTxt=typingTxt.split("");  
	if(typingBool==false){ 
		typingBool=true; 
		var tyInt = setInterval(typing,100); 
	} 

	function typing(){ 
	  $(".typing ul li").removeClass("on");
	  $(".typing ul li").eq(liIndex).addClass("on");
	  if(typingIdx<typingTxt.length){
		  if(typingTxt[typingIdx]=="ㅇ"){
			 $(".typing ul li").eq(liIndex).append("<span class=\"point\">최혁진</span>");
			  typingIdx++; 
		  }
		  else{
			$(".typing ul li").eq(liIndex).append(typingTxt[typingIdx]);
         	typingIdx++; 
		  }
	   }
	   else{ 
		   if(liIndex<liLength-1){
				liIndex++; 
				typingIdx=0;
				typingBool = false; 
				typingTxt = $(".typing_txt>ul>li").eq(liIndex).text(); 

				clearInterval(tyInt);

				setTimeout(function(){
				  tyInt = setInterval(typing,100);
				},1000);
			}
		   else if(liIndex==liLength-1){
			   clearInterval(tyInt);
		   }
		} 
	}    
	
	$('.menu_bar a').click(function(){
        if($('.menu_bar').attr('class') == 'menu_bar active'){remove();}
        else{active();}
    })
    $('.sub_menu a').click(function(){remove();});
    $('.menu_bg_back').click(function(){remove();});
});
function active(){
    $('.menu_bar').addClass('active');
    $('.sub_menu').addClass('active');
    $('.menu_bg').addClass('active');
    $('.menu_bg_back').addClass('active');

    $('body').on('scroll touchmove mousewheel', function(e){
        e.preventDefault();
        e.stopPropagation(); 
        return false;
    });
}
function remove(){
    $('.menu_bar').removeClass('active');
    $('.sub_menu').removeClass('active');
    $('.menu_bg').removeClass('active');
    $('.menu_bg_back').removeClass('active');
    $('body').off('scroll touchmove mousewheel');
}
$(document).ready(function(){
	
    $('#fullpage').fullpage({
        licenseKey: 'OPEN-SOURCE-GPLV3-LICENSE', 
        css3: false, 
        anchors: ['home', 'about', 'skill', 'portfolio', 'contact'], 
        menu: '#myMenu', 
        easing: 'easeOutBack', 
        afterLoad: function(origin, destination, direction){
            if(destination.index == 4){
                $('footer').addClass('active');
            }
        },
        onLeave : function(origin, destination, direction){
            $('footer').removeClass('active');
        }
    });
    
    $('.return').click(function(){
        alert("준비 중입니다.");
        return false;
    });
    
    $('.site_box').hover(function(){
        $(this).addClass('active');
    },function(){
        $(this).removeClass('active');
    });
});


$( window ).resize(function() {
    //$('.size').text(window.innerWidth);
});