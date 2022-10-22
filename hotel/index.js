$('.timeList li').click(function(){
    // index는 현재의 순서를 가져오는 것
    let idx=$(this).index()
    // alert(idx)
    $('.timeList li').removeClass('on')
    $(this).addClass('on')

    $('.timeImg li').stop().fadeOut()
    $('.timeImg li').eq(idx).stop().fadeIn()

    $('.desc li').stop().fadeOut()
    $('.desc li').eq(idx).stop().fadeIn()
})