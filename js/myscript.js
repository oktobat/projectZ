$(function(){

$("#commHeader").load("header.html")
$("#commFooter").load("footer.html")


// 슬릭슬라이더 연결
$(".mainSlide").slick({
    autoplay:true,
    autoplaySpeed:3000, // 지연시간
    dots:true, // 동그라미버튼
    pauseOnFocus:false,  // 동그라미버튼 클릭시 자동실행 멈춤여부
    prevArrow:'<button class="prevArrow marrow"><i class="fas fa-angle-left"></i></button>',
    nextArrow:'<button class="nextArrow marrow"><i class="fas fa-angle-right"></i></button>',
})

$(".papl").on("click", function(){
    if ( $(this).find("i").hasClass("fa-pause") ) {
        $(this).find("i").removeClass("fa-pause")
        $(this).find("i").addClass("fa-play")
        $(".mainSlide").slick("slickPause")
    } else {
        $(this).find("i").removeClass("fa-play")
        $(this).find("i").addClass("fa-pause")
        $(".mainSlide").slick("slickPlay")
    }
})



$(".mainSec02 .tab > li").on("click", function(){
    var num = $(this).index()
    $(this).addClass("on").siblings().removeClass("on")
    $(".tabType05 .tabbox .tabCon").eq(num)
    .addClass("on fromBottom").siblings()
    .removeClass("on fromBottom")
})


$(".mainSec07 .tab > li").on("click", function(){
    var num = $(this).index()
    $(this).addClass("on").siblings().removeClass("on")
    $(".tabType06 .tabContent .tabCon").eq(num)
    .addClass("on fromBottom").siblings()
    .removeClass("on fromBottom")
})




})