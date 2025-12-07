// Get elements
const navbar = document.querySelector(".custom-navbar");
const searchForm = document.querySelector(".search-form");
const searchBtn = document.querySelector(".search-icon-btn");
const searchInput = document.querySelector(".search-input");
const searchIcon = document.querySelector(".search-icon");

// Expand/collapse search box
searchBtn.addEventListener("click", () => {
    searchForm.classList.toggle("active");

    if (searchForm.classList.contains("active")) {
        searchInput.focus();
    }
});

// Scroll-based color change (single clean version)
window.addEventListener("scroll", () => {
    // Mobile vs Desktop scroll trigger
    let trigger = window.innerWidth <= 768 ? 340 : 930;

    if (window.scrollY > trigger) {
        navbar.classList.add("scrolled");
        searchIcon.classList.add("scrolled");  // turn black
    } else {
        navbar.classList.remove("scrolled");
        searchIcon.classList.remove("scrolled"); // turn white
    }
});

//open the image overlay and close at the same place 

// JavaScript to fix scroll position issue
document.querySelectorAll('.gallery a').forEach((link) => {
  link.addEventListener('click', function (event) {
    const targetId = this.getAttribute('href').substring(1); // Get lightbox id
    const lightbox = document.getElementById(targetId);

    // Record the scroll position before opening the lightbox
    const scrollPosition = window.scrollY;

    // Open lightbox
    lightbox.style.opacity = 1;
    lightbox.style.pointerEvents = 'inherit';
    lightbox.style.transform = 'scale(1)';

    // When closing the lightbox, restore the scroll position
    const closeButton = lightbox.querySelector('.close');
    closeButton.addEventListener('click', function (e) {
      e.preventDefault();
      lightbox.style.opacity = 0;
      lightbox.style.pointerEvents = 'none';
      lightbox.style.transform = 'scale(0.8)';

      // Scroll back to the original position
      window.scrollTo(0, scrollPosition);
    });
  });
});




