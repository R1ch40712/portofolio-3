// event saat link di klik
$(".page-scroll").on("click", function (e) {
  // get isis href
  var href = $(this).attr("href");
  //   get element
  var elementHref = $(href);

  //   pindahkan scroll
  $("body").animate(
    {
      scrollTop: elementHref.offset().top,
    },
    1250,
    "easeInOutExpo"
  );
  e.preventDefault;
});

// paralax
// about
$(window).on("load", function () {
  $(".pKiri").addClass("pMuncul");
  $(".pKanan").addClass("pMuncul");
});

$(window).scroll(function () {
  var wScroll = $(this).scrollTop();
  $(".section img").css({
    transform: "translate(0px, " + wScroll / 4 + "%)",
  });
  $(".section h1").css({
    transform: "translate(0px, " + wScroll / 2 + "%)",
  });
  $(".section h1").css({
    transform: "translate(0px, " + wScroll / 1.1 + "%)",
  });

  //   portofolio
  if (wScroll > $(".portofolio").offset().top - 250) {
    $(".portofolio .img-thumbnail").each(function (i) {
      setTimeout(function () {
        $(".portofolio .img-thumbnail").eq(i).addClass("muncul");
      }, 300 * (i + 1));
    });
  }
});
