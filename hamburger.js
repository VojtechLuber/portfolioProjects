function toggleMenu() {
  let menu = document.querySelector("nav ul");
  menu.classList.toggle("show");
}

document.addEventListener("DOMContentLoaded", function () {
  let menuToggle = document.querySelector(".menu-toggle");
  menuToggle.addEventListener("click", toggleMenu);

  let menuLinks = document.querySelectorAll("nav ul li a");
  menuLinks.forEach(function (link) {
    link.addEventListener("click", function () {
      let menu = document.querySelector("nav ul");
      menu.classList.remove("show");
    });
  });
});
