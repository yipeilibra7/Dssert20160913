$(document).ready(function(){

  $('.bxslider').bxSlider({
  auto: true,
});
  $('#MenuIcon').click(function(){

    if($('#PrimaryNavigation').hasClass('switch')){
      //顯示
      $('#PrimaryNavigation').slideDown();
      $('#PrimaryNavigation').removeClass('switch');
    } else{
      //滑出
      $('#PrimaryNavigation').slideUp();
      $('#PrimaryNavigation').addClass('switch');
    }

  });


// -----------------------------------------------
// -----------------------------------------------

  $(window).scroll(function(){
    var window_scroll = $(window).scrollTop();
    // $('p').text(window_scroll);
    if(window_scroll > 500){
        $('#PageTop').fadeIn();
    }else{
        $('#PageTop').fadeOut();
    }
  });//window end
// ---------------------------------------------
  $('#PageTop>a').click(function(){
    $('body,html').animate({scrollTop:0,},1000);
  });//#PageTop>a end --------------------------
  // ---------------------------------------------
    $('#NewsBtn').click(function(){
      $('body,html').animate({
        scrollTop:$('#News').offset().top
      ,},1000);
    });//#NewsBtn end --------------------------
    // ---------------------------------------------
      $('#ProductBtn').click(function(){
        $('body,html').animate({
          scrollTop:$('#Product').offset().top
        ,},1000);
      });//#NewsBtn end --------------------------
});//document end
