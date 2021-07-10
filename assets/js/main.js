$(function(){
  $(window).scroll(function(){
    $(".cover-slide").each(function(){
      var scroll=$(window).scrollTop();
      var pos=$(this).offset().top;
      var delay=600;
      if(scroll>pos-delay){
        $(this).addClass("inview");
      }
    });
  });
})
$(function(){
  $(window).scroll(function(){
    $(".text-slide").each(function(){
      var scroll=$(window).scrollTop();
      var pos=$(this).offset().top;
      var delay=500;
      if(scroll>pos-delay){
        $(this).addClass("text-view");
      }
    });
  });
})
$("h2 > .text-slide").addClass("text-view");
$(".mobile-menu").on("click",()=>{
  $("#sidemenu").addClass("sidemenu-view");
});
$(".mobile-menu").on("click",()=>{
  $(".mobile-content").toggleClass("opened");
  $(".mobile-menu").toggleClass("opened");
});
// $(".hover-parent").on("mouseover",()=>{
//   $(".item2").toggleClass("item2-hover")
// });
