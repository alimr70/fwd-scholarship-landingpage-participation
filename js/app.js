/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
 */

/**
 * Define Global Variables
 *
 */

const navList = document.querySelector("#navbar__list");
const sections = document.querySelectorAll("section");
const fragment = document.createDocumentFragment();

/**
 * End Global Variables
 * Start Helper Functions
 *
 */

/**
 * End Helper Functions
 * Begin Main Functions
 *
 */

// build the nav
for (const section of sections) {
  const newListItem = document.createElement("li");
  const newLink = document.createElement("a");

  newLink.textContent = section.dataset.nav;
  newLink.setAttribute("href", "#" + section.id);
  newLink.setAttribute("id", section.dataset.nav);
  newLink.classList.add('menu__link');

  newListItem.appendChild(newLink);
  fragment.appendChild(newListItem);
}


// Add class 'active' to section when near top of viewport
const whichSectionInView = () => {
  for (const section of sections) {
    const link = document.getElementById(section.dataset.nav);
    const bounding = section.getBoundingClientRect();
    const screnYCenter = document.documentElement.clientHeight / 2;
    if (bounding.top <= screnYCenter / 2 && bounding.bottom >= screnYCenter) {
      section.classList.add("section-active");
      link.classList.add("section-active");
    } else {
      section.classList.remove("section-active");
      link.classList.remove("section-active");
    }
  }
}


// Scroll to anchor ID using scrollTO event
const scrollTo = (e) => {
  e.preventDefault();
  const targetSection = document.getElementById(e.target.href.split('#')[1]);
  window.scroll({
    top: targetSection.offsetTop - 70,
    behavior: "smooth",
  })
};

/**
 * End Main Functions
 * Begin Events
 *
 */

// Build menu
navList.appendChild(fragment);

// Scroll to section on link click
navList.addEventListener('click', scrollTo);

// Set sections as active
document.addEventListener("scroll", whichSectionInView);