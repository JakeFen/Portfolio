$(document).ready(function() {
  // Show Hide left-bar
  $(".burger").on("click", function() {
    if ($(".side-bar").css("display") === "none") {
      $(".side-bar").show();
      $(".main").css({ "padding-left": "85px" });
    } else {
      $(".side-bar").hide();
      $(".main").css({ "padding-left": "0px" });
    }
  });

  // Home button hide show
  $(".home-btn").on("click", function() {
    $(".font-icons").removeClass("font-icon-active");
    $(".home-btn").addClass("font-icon-active");
    $(".home").show();
    $(".about").hide();
    $(".portfolio").hide();
    $(".contact").hide();
  });

  // About button hide show
  $(".about-btn").on("click", function() {
    $(".font-icons").removeClass("font-icon-active");
    $(".about-btn").addClass("font-icon-active");
    $(".home").hide();
    $(".about").show();
    $(".portfolio").hide();
    $(".contact").hide();
  });

  $(".about-contact-btn").on("click", function() {
    $(".about").hide();
    $(".contact").show();
  });

  // Portfolio button hide show
  $(".portfolio-btn").on("click", function() {
    $(".font-icons").removeClass("font-icon-active");
    $(".portfolio-btn").addClass("font-icon-active");
    $(".home").hide();
    $(".about").hide();
    $(".portfolio").show();
    $(".contact").hide();
  });

  // Contact button hide show
  $(".contact-btn").on("click", function() {
    $(".font-icons").removeClass("font-icon-active");
    $(".contact-btn").addClass("font-icon-active");
    $(".home").hide();
    $(".about").hide();
    $(".portfolio").hide();
    $(".contact").show();
  });

  $(".card").hover(
    function() {
      $(this).addClass("project-card-hover");
      $(this)
        .find(".project-btns")
        .show();
      $(this)
        .find(".card-img-top")
        .addClass("lower-brightness");
    },
    function() {
      $(this).removeClass("project-card-hover");
      $(this)
        .find(".project-btns")
        .hide();
      $(this)
        .find(".card-img-top")
        .removeClass("lower-brightness");
    }
  );
});
