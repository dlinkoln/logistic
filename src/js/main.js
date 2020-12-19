$(document).ready(function() {
  // Скролл к нужной секции по атрибуту в шапке
  $("#menu").on("click", "a", function(event) {
    event.preventDefault();
    let id = $(this).attr("href");
    let top = $(id).offset().top;
    $("body,html").animate({ scrollTop: top }, 1500);
  });
  // Скролл к нужной секции по атрибуту в футере
  $("#footer-menu").on("click", "a", function(event) {
    event.preventDefault();
    let id = $(this).attr("href");
    let top = $(id).offset().top;
    $("body,html").animate({ scrollTop: top }, 1500);
  });
  //Callback функция которая вскрывает мои вены
  function callbackFunct() {
    let cityName = $(".active > .town-name").text();
    $("#schedule__location").text(cityName);
  }
  // Карусель от которой меня уже конкретно подташнивает
  $("#carousel").carousel({}, callbackFunct);
  // Подсветка текущего числа пагинации
  $("span.current")
    .parents("li")
    .css("background", "#efefef");
});
// Гео поп-ап wheeel
$("#geo").click(function() {
  $("#geoPopUp").fadeIn(2000);
});
//Schedule pop up weeee
$("#schedule").click(function() {
  $("#schedulePopUp").fadeIn(2000);
});
// Кнопка которая откроет поп-ап с тарифами
$("#tariff-calc").click(function() {
  $("#tariffPopUp").fadeIn(2000);
});
// Закрывает все и вся
$(".closePopUp").click(function() {
  $("#geoPopUp").fadeOut(1000);
  $("#schedulePopUp").fadeOut(1000);
  $("#tariffPopUp").fadeOut(1000);
  $(".contact-feedback__first-screen").fadeOut(1000);
  $(".news-pop-up").fadeOut(1000);
  nodePost.style.display = "none";
});
//  Фидбэк окно,окошечко
$(".capture_btn").click(function() {
  $(".contact-feedback__first-screen").fadeIn(1000);
});
//  Скролл к новостям и калькулятору
$(".toCalcBtn , .newsBtn ").click(function() {
  var elementClick =
    "#" +
    $(this)
      .attr("data-target")
      .split("#")[1];
  var destination = $(elementClick).offset().top;
  jQuery("html:not(:animated),body:not(:animated)").animate(
    { scrollTop: destination },
    1500
  );
  return false;
});
// Инициализация изменения названия города при изменении слайда
$("#carousel").on("slide.bs.carousel", function(e) {
  let cityName = $(".active > .town-name").text();
  $("#schedule__location").text(cityName);
});
// Ниже идут поп-апы в секции услуги,при наведении
$("#temp-box-1")
  .mouseenter(function() {
    $(".tempWrapper1").fadeIn();
  })
  .mouseleave(function() {
    $(".tempWrapper1").fadeOut();
  });
$("#temp-box-2")
  .mouseenter(function() {
    $(".tempWrapper2").fadeIn();
  })
  .mouseleave(function() {
    $(".tempWrapper2").fadeOut();
  });
$("#temp-box-3")
  .mouseenter(function() {
    $(".tempWrapper3").fadeIn();
  })
  .mouseleave(function() {
    $(".tempWrapper3").fadeOut();
  });
$("#temp-box-4")
  .mouseenter(function() {
    $(".tempWrapper4").fadeIn();
  })
  .mouseleave(function() {
    $(".tempWrapper4").fadeOut();
  });
