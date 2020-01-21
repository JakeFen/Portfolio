$(document).ready(function() {
  const burger = document.querySelector(".burger-container");
  const navButtons = document.querySelector(".nav-buttons");

  burger.addEventListener("click", () => {
    burger.classList.toggle("active-burger");
    navButtons.classList.toggle("active-nav-buttons")
  });

  const contactButton = document.querySelector('.submit-button');

  contactButton.addEventListener('click', function(e) {
    var required = document.querySelectorAll('input[required]');
    
    required.forEach(function(element) {
        if(element.value.trim() == "") {
            element.style.borderColor = "red";
        }
    });
});
});
