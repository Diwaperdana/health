$(document).ready(function() {
  $(".navbar-toggler").click(function () {
    $(".navbar").toggleClass("change");
  });

  $('.slider').slick({
    dots: true,
    arrows: true,
    nextArrow: '<i class="next"></i>',
    prevArrow: '<i class="prev"></i>'
  });
  $(function () {
    $(window).on("scroll", function () {
      if ($(window).scrollTop() > 50) {
        $(".navbar").addClass("active");
      } else {
        //remove the background property so it comes transparent again (defined in your css)
        $(".navbar").removeClass("active");
      }
    });
  });


});
