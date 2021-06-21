const openMenu = document.querySelector(".nav_lines");
const navUL = document.querySelector(".nav-ul");
let menuOpen = false;

openMenu.addEventListener("click", () => {
  if (menuOpen == false) {
    navUL.style.top = "0%";

    menuOpen = true;
  } else {
    navUL.style.top = "-100%";
    menuOpen = false;
  }
});
