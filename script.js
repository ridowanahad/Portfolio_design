$(document).ready(function () {
  // typing text animation script
  var typed = new Typed(".typing", {
    strings: [
      "Frontend Developer",
      "Application Developer",
      "Designer",
      "Freelancer",
    ],
    typeSpeed: 80,
    backSpeed: 30,
    loop: true,
  });
});

$(document).ready(function () {
  $("#clickme").click((burger) => {
    if (burger.target.defaultValue === "yes") {
      $(".menu-items").toggleClass("translateZero");
    }
  });
});

function scrollValue() {
  var navbar = document.getElementById("nav-section");
  var scroll = window.scrollY;
  if (scroll < 100) {
    navbar.classList.remove("BgColour");
  } else {
    navbar.classList.add("BgColour");
  }
}
window.addEventListener("scroll", scrollValue);
// function scrollValue2() {
//   var menuButton = document.getElementById("menu-round-black");
//   var scroll = window.scrollY;
//   if (scroll < 100) {
//     menuButton.classList.remove("menu-round-white");
//   } else {
//     menuButton.classList.add("menu-round-white");
//   }
// }

// window.addEventListener("scroll", scrollValue2);

// hamburger menu
