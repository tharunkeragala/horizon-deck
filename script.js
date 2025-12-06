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
