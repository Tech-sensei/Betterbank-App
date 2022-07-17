/*==================== SHOW MENU ====================*/
const showMenu = function (toggleId, navId) {
  const toggle = document.querySelector(toggleId);
  const nav = document.querySelector(navId);
  const closeMenu = document.querySelector(".nav-close");

  // Validate that variables exist

  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      // We add the show-menu class to the div tag with the nav__menu class
      nav.classList.add("show-menu");

      // We remove the show-menu class to the div tag with the nav__menu class
      closeMenu.addEventListener("click", () => {
        nav.classList.remove("show-menu");
      });
    });
  }
};

showMenu("#nav-toggle", "#nav-menu");

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll(".nav__link");

function linkAction() {
  const navMenu = document.getElementById("nav-menu");
  // When we click on each nav__link, we remove the show-menu class
  navMenu.classList.remove("show-menu");
}
navLink.forEach((n) => n.addEventListener("click", linkAction));
