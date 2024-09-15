const primaryheader = document.querySelector(".primary-header");
const navtoggle = document.querySelector(".mobile-nav");
const primarynav = document.querySelector(".primary-navigation");

navtoggle.addEventListener('click', () => {
   
    const isExpanded = navtoggle.getAttribute("aria-expanded") === "true";
    navtoggle.setAttribute("aria-expanded", !isExpanded);
    
    primarynav.classList.toggle("nav-opened");
    primaryheader.toggleAttribute("data-overlay");
});

const slider = new A11YSlider(document.querySelector('.slider'), {
    adaptiveHeight: true,       
    dots: true,
    centerMode: true,
    arrows: false,
    responsive: {
        480: {
          dots: false, // dots enabled 1280px and up
            }
        }
  });
