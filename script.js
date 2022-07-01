let mobileMenu = document.querySelector("#mobileMenu");
let showMenu = document.querySelector("#showMenu");
let closeMenu = document.querySelector("#closeMenu");
let showMobileMenu = false;

let features = document.querySelector("#features");
let featuresMenu = document.querySelector("#featuresMenu");
let featuresArrow = document.querySelector("#featureArrow");
let showFeaturesMenu = false;

let company = document.querySelector("#company");
let companyMenu = document.querySelector("#companyMenu");
let companyArrow = document.querySelector("#companyArrow");
let showCompanyMenu = false;

company.addEventListener("click", function () {
  showCompanyMenu = !showCompanyMenu;
  toggleMenu(companyMenu, companyArrow, showCompanyMenu);
});

features.addEventListener("click", function () {
  showFeaturesMenu = !showFeaturesMenu;
  toggleMenu(featuresMenu, featuresArrow, showFeaturesMenu);
});

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

function toggleMenu(menu, arrowID, showBool) {
  if (showBool) {
    menu.classList.remove("hidden");
    arrowID.src = "./images/icon-arrow-down.svg";
  } else {
    menu.classList.add("hidden");
    arrowID.src = "./images/icon-arrow-up.svg";
  }
}
