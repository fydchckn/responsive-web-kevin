const primaryheader = document.querySelector(".primary-header");
const navtoggle = document.querySelector(".mobile-nav");
const primarynav = document.querySelector(".primary-navigation");

navtoggle.addEventListener('click', () => {
    primarynav.hasAttribute("nav-opened") ? navtoggle.setAttribute("aria-expanded", false) : navtoggle.setAttribute("aria-expanded", true)
    primarynav.classList.toggle("nav-opened");
    primaryheader.toggleAttribute("data-overlay");
})

