$(function () {
  //윈도우에 스크롤 이벤트 등록
  $(window).scroll(function () {
    //스크롤을 con4의 위치까지 하면
    if ($(window).scrollTop() + 200 > $(".con4").offset().top) {
      //.con4에 .bgdark를 추가
      $(".con4").addClass("bgdark");
    } else {
      $(".con4").removeClass("bgdark");
    }
  });
});
