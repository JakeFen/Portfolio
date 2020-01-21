$(document).ready(function() {
  const burger = document.querySelector(".burger-container");
  const navButtons = document.querySelector(".nav-buttons");

  burger.addEventListener("click", () => {
    burger.classList.toggle("active-burger");
    navButtons.classList.toggle("active-nav-buttons")
  });
});
