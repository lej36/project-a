let currentIndex = 0;
let slidecount = $(".slide").length;
let prev = $("a.prev");
let next = $("a.next");

function eventNone(arrow) {
  arrow.css({ "pointer-events": "none" });
  arrow.addClass("none");
}
function eventAuto(arrow) {
  arrow.css({ "pointer-events": "auto" });
  arrow.removeClass("none");
}
function goToSlide(i) {
  $(".slideWrap").stop().animate({ left: i * -100 + "%" }, 1000, "swing");
  $(".verticalSlide").stop().animate({ top: i * -100 + "%" }, 1000, "swing");
  currentIndex = i;

  updateNav();
}
function updateNav() {
  if (currentIndex === 0) {
    eventNone(prev);
  } else {
    eventAuto(prev);
  }
  if (currentIndex === slidecount - 1) {
    eventNone(next);
  } else {
    eventAuto(next);
  }
}
function ActiveLi(i){
    $(".menu li").removeClass("on");
    $(".menu li").eq(i).addClass("on");
    $('.verticalSlide div').removeClass('on');
    $('.verticalSlide div').eq(i).addClass('on');
}

next.click(function (e) {
  e.preventDefault();
  //currentIndex: 1 < slidecount:3
  if (currentIndex < slidecount - 1) {
    console.log(`currentIndex: ${currentIndex}<=>slidecount:${slidecount}`);
    goToSlide(currentIndex + 1);
    ActiveLi(currentIndex)
  }  
});
prev.click(function (e) {
    e.preventDefault();
    if(currentIndex>0){
        goToSlide(currentIndex -1);
        ActiveLi(currentIndex)
    }
});

$(".menu li").click(function (e) {
  e.preventDefault();
  let idx = $(this).index();
  ActiveLi(idx)
  goToSlide(idx);
});
goToSlide(0);
// -------------------------------------
$(function(){
  $('#slide3').hide();
});
var swiper2 = new Swiper(".swiper2", {
  spaceBetween: 50,
  scrollbar: {
    el: ".swiper-scrollbar",
    hide: false,
  },
});
var swiper3 = new Swiper(".swiper3", {
  spaceBetween: 50,
  scrollbar: {
    el: ".swiper-scrollbar",
    hide: false,
  },
});

$('.gategory li a').click(function(e){
  e.preventDefault();
  $('.gategory li a').removeClass('on')
  $(this).addClass('on')

  let href=$(this).attr('href')
  $('#slide3').show();
  $('#sect3 .swiper').css({'opacity':'0','z-index':'90'});
  $(href).css({'opacity':'1','z-index':'100'})
  })
// ----------------------------------------

$('ul.lnb').mouseenter(function(){
  $(this).find('ul.sub').stop().fadeIn(500);
  $(this).find('span.current').stop().hide();
  $(this).find('span.over').stop().show();
  $('h1 img').hide();
})
$('ul.lnb').mouseleave(function(){
  $(this).find('ul.sub').stop().hide();
  $(this).find('span.current').stop().show();
  $(this).find('span.over').stop().hide();
  $('h1 img').show();
})

$('ul.rnb').mouseenter(function(){
  $(this).find('ul.sub').stop().fadeIn(500)
  $('h1 img').hide();
})
$('ul.rnb').mouseleave(function(){
  $(this).find('ul.sub').stop().hide()
  $('h1 img').show();
})

$(function(){
  $('ul.lnb,ul.rnb').mouseover(function(){
    $('.fullBg').slideDown(50);
  })
  $('.topMenu').mouseleave(function(){
    $('.fullBg').slideUp();
  })
})