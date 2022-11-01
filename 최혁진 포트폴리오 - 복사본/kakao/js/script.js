$(document).ready(function(){
//실행문

const scrollBody= $('#kakaowrap');//부모 스크롤 엘리먼트 
let content =scrollBody.find('section');//변수에 모션 그래픽 캐릭터 지정
const NAV_LI =$('nav ul li')


// 1. selector의 변수 처리
const SEC01_IMG= $('.sec01_img');  
const SEC02_IMG= $('.sec02_img');
const SEC03_IMG02 =$('.sec03_img02');
const SEC04_IMG=$('.sec04_img');
const SEC05_IMG=$('.sec05_img');
const SEC06_IMG=$('.sec06_img');
const SEC07_SKY_BLUE=$('.sky .blue');
const SEC07_CONT=$('.cont_loan');
const SEC08_SLIDER=$('.sec08_slider')



//스크롤 할대 변해야 할 값들
let windScrollTop;//스크롤 할때 높이값을 담을 변수
let headerHeight = $('header').height();

//2. 각 섹션의 시작하는 값을 구해줄 변수 생성

const sec1Top=$('#sec01').offset().top + headerHeight;
const sec2Top=$('#sec02').offset().top + headerHeight;
const sec3Top=$('#sec03').offset().top + headerHeight;
const sec4Top=$('#sec04').offset().top + headerHeight;
const sec5Top=$('#sec05').offset().top + headerHeight;
const sec6Top=$('#sec06').offset().top + headerHeight;
const sec7Top=$('#sec07').offset().top + headerHeight;
const sec8Top=$('#sec08').offset().top + headerHeight;
const sec9Top=$('#sec09').offset().top + headerHeight;


//3. 최초 실행함수 만들기
function init(){
  motion();//4.motion함수 호출
}
 init()

 $(window).scroll(init)
 
 //motion 함수
function motion(){
   setProperty()//스크롤할때 변해야 할 높이값들 모음
   changeSection()//스크롤 조건이 들어가는 함수
}

//6.스크롤할때 변해야 할 값들의 변수를 포함 한 함수.
 function setProperty(){
 windScrollTop=$(window).scrollTop();
 }
function setContent(index){
   content.removeClass('active');
   content.eq(index-1).addClass('active');
    
   NAV_LI.removeClass('active')
   NAV_LI.eq(index-1).addClass('active')
}

//9.change/Section 함수 
function changeSection(){
   if(windScrollTop<sec1Top){
      setContent(1)
      sec01()
   }
   else if(windScrollTop>=sec1Top && windScrollTop < sec2Top){
      setContent(2)
      sec02()
   }
   else if(windScrollTop>=sec2Top && windScrollTop < sec3Top){
      setContent(3)
      sec03()
   }
   else if(windScrollTop>=sec3Top && windScrollTop < sec4Top){
      setContent(4)
      sec04()
   }
   else if(windScrollTop>=sec4Top && windScrollTop < sec5Top){
      setContent(5)
      sec05()
   }
   else if(windScrollTop>=sec5Top && windScrollTop < sec6Top){
      setContent(6)
      sec06()
   }
   else if(windScrollTop>=sec6Top && windScrollTop < sec7Top){
      setContent(7)
      sec07()
   }
   else if(windScrollTop>=sec7Top && windScrollTop < sec8Top){
      setContent(8)
      sec08()
   }
   else if(windScrollTop>=sec8Top && windScrollTop < sec9Top){
      setContent(9)
      sec09()
   }
}









// 함수 호출


// 01 section
 function sec01(){
    SEC01_IMG.transition({opacity:1},1000);
 }


// 02 section
 function sec02(){
    SEC02_IMG.transition({
        opacity:1 , 
        x:20
    },1000);   
 }


// 03  section
 function sec03(){
    SEC03_IMG02.transition({
        opacity:1,
        x:-30
    },1000);
    
 }

// 04 section
// SEC04_IMG.delay(1000).transition({
//     opacity:1     
// },1000)

 function sec04(){
    SEC04_IMG.transition({
        opacity:1     
    },1000);
    
 }

// 05 section
 function sec05(){
    SEC05_IMG.transition({
        opacity:1,
        y:-40
    },1000);    
 }


// 06 section
 function sec06(){
    SEC06_IMG.transition({
        opacity:1,
        x:120
      },1000);   
 }


// 07 section
 function sec07(){
    SEC07_SKY_BLUE.transition({
        'height':0},1000)
        
        // setTimeout(함수명 ,시간), 시간을 지연 시킨다
        setTimeout(function(){
         SEC07_CONT.addClass('night')   
        },1000)
        
 }
 //08 section
function sec08(){

}
//09 section
function sec09(){

}
//08 slider
SEC08_SLIDER.slick({
   slidesToShow: 3,
   slidesToScroll: 1,
   arrows:true,
   centerMode:true,
   variableWidth: true,
   responsive:[
      {
         breakpoint: 900,
         settings: {
          arrows: true, 
         }
       },
   ]
})











})