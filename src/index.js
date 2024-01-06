import createHome from "./home.js";
import createMenu from "./menu.js";
import createAbout from "./about.js";

function createNav() {
  const nav = document.createElement("nav");
  const homeTab = document.createElement("button");
  homeTab.textContent = "Home";
  const menuTab = document.createElement("button");
  menuTab.textContent = "Menu";
  const aboutTab = document.createElement("button");
  aboutTab.textContent = "About";

  homeTab.classList.add("tab");
  homeTab.classList.add("active");
  homeTab.addEventListener("click", addActive);
  menuTab.classList.add("tab");
  menuTab.addEventListener("click", addActive);
  aboutTab.classList.add("tab");
  aboutTab.addEventListener("click", addActive);

  homeTab.id = "home";
  menuTab.id = "menu";
  aboutTab.id = "about";

  nav.appendChild(homeTab);
  nav.appendChild(menuTab);
  nav.appendChild(aboutTab);

  return nav;
}

function addActive(e) {
  const newButton = e.target;
  const prevButton = document.getElementsByClassName("active")[0];
  if (prevButton != undefined) prevButton.classList.remove("active");
  newButton.classList.add("active");
  switchMain();
}

function switchMain() {
  const main = document.getElementById("main");
  main.removeChild(main.children[0]);
  const active = document.getElementsByClassName("active")[0];
  switch (active.id) {
    case "home":
      main.appendChild(createHome());
      break;
    case "menu":
      main.appendChild(createMenu());
      break;
    case "about":
      main.appendChild(createAbout());
      break;
  }
}

function footer() {} // Add Footer Later

function loadWebsite() {
  const content = document.getElementById("content");
  const nav = createNav();
  const main = document.createElement("main");
  main.id = "main";
  main.appendChild(createHome());
  content.appendChild(nav);
  content.appendChild(main);
}

loadWebsite();
