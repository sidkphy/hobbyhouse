document.addEventListener("DOMContentLoaded", function () {
  var toggle = document.querySelector(".nav-toggle");
  var navList = document.querySelector(".nav-list");

  if (toggle && navList) {
    toggle.addEventListener("click", function () {
      navList.classList.toggle("is-open");
      var expanded = navList.classList.contains("is-open");
      toggle.setAttribute("aria-expanded", expanded);
    });
  }
});
