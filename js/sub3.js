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