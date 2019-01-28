$(document).ready(function () {

  // Get started!
  $(".navbar-toggler").click(function () {
    $(".navbar").toggleClass("change");
  });

  function containerwidth () {
    var containerwidth = $(".container").innerWidth();
    $(".bgblue").css({
      width: containerwidth / 4,
    });
  }
  containerwidth ();
  $(window).resize(function () {
    containerwidth();
  });


  
});