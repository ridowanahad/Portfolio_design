$(document).ready(function(){


  // typing text animation script
  var typed = new Typed(".typing", {
    strings: ["Frontend Developer", "YouTuber", "Designer", "Freelancer"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
});
});

function scrollValue() {
  var navbar = document.getElementById('nav-section');
  var scroll = window.scrollY;
  if (scroll < 200) {
      navbar.classList.remove('BgColour');
  } else {
      navbar.classList.add('BgColour');
  }
}

window.addEventListener('scroll', scrollValue);