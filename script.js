// Scroll-based color change
window.onscroll = function () {
  let navbar = document.querySelector(".custom-navbar");
  let trigger = window.innerHeight; // Trigger at 100% screen height

  if (window.scrollY > trigger) {
    navbar.classList.add("scrolled");
    searchIcon.classList.add("scrolled"); // turn black
  } else {
    navbar.classList.remove("scrolled");
    searchIcon.classList.remove("scrolled"); // turn white
  }
};


