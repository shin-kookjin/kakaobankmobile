<<<<<<< HEAD
$(function () {
  $(".all > li > a").click(function () {
    $(this).toggleClass("active");
    $(this).next().toggle();

    return false;
  });

  $(".qna li a").click(function () {
    $(this).toggleClass("active");
    $(this).next().slideToggle();

    return false;
  });

  $("#sword").keyup(function () {
    var val = $(this).val();
    if (val !== "") {
      $(".qna li a").filter(function () {
        $(".qna").show();
        $(this).toggle($(this).text().indexOf(val) > -1);
      });
    } else {
      $(".qna").hide();
    }
  });
});
=======
$(function(){
   $(".all > li >a,.qna li a").click(function(){
    $(this).toggleClass("active");
    $(this).next().slideToggle();
    return false;
   }); 

   $("#sword").keyup(function(){
    var val =$(this).val();
    if(val !==''){

    $('.qna li a').filter(function(){
       $(this).toggle($(this).text().indexOf(val) > -1 );
    });

}else{
    $(".qna").hide();
}
});
});
>>>>>>> d59f4163d3b224d769d9b75fca51900e25892ce7
