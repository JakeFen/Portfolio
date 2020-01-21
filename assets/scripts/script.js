$(document).ready(function() {
  $(".about-contact-btn").on("click", function() {
    $(".about").hide();
    $(".contact").show();
  });

  const burger = document.querySelector(".burger-container");
  const navButtons = document.querySelector(".nav-buttons");

  burger.addEventListener("click", () => {
    burger.classList.toggle("active-burger");
    navButtons.classList.toggle("active-nav-buttons")
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
