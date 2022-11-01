(function(){



    new fullpage('#fullpage', {
        //options here
        autoScrolling:true,
        scrollHorizontally: true,
        navigation:true,


        licenseKey: '1C803096-FF9049FC-A4123F52-D747BA3D',

    });




}())

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
});

//// 벛꽃내리기
//$(window).load(function () {
//    $('.first_page').sakura();
//});

