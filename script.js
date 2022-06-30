let mobileMenu = document.querySelector("#mobileMenu");
let showMenu = document.querySelector("#showMenu");
let closeMenu = document.querySelector("#closeMenu");
let showMobileMenu = false;

showMenu.addEventListener("click", function () {
  showMobileMenu = !showMobileMenu;
  toggle(mobileMenu, showMobileMenu);
});

closeMenu.addEventListener("click", function () {
  showMobileMenu = !showMobileMenu;
  toggle(mobileMenu, showMobileMenu);
});

function toggle(selector, boolX) {
  if (boolX) {
    selector.classList.remove("hidden");
    return;
  } else {
    selector.classList.add("hidden");
    return;
  }
}
