function createMenuEntry(title, description, imgSrc) {
  const entry = document.createElement("div");
  entry.classList.add("menu-entry");
  const name = document.createElement("h2");
  const desc = document.createElement("p");
  const image = new Image();
  name.textContent = title;
  desc.textContent = description;
  image.src = imgSrc;

  entry.appendChild(name);
  entry.appendChild(desc);
  entry.appendChild(image);

  return entry;
}

function createSelectEntry(name, value) {
  const entry = document.createElement("option");
  entry.textContent = name;
  entry.value = value;

  return entry;
}

function createSelect() {
  const selectMenu = document.createElement("select");
  selectMenu.name = "menu-select";

  const lunch = createSelectEntry("Lunch", "lunch");
  const dessert = createSelectEntry("Dessert", "dessert");
  const drinks = createSelectEntry("Drinks", "drinks");

  selectMenu.appendChild(lunch);
  selectMenu.appendChild(dessert);
  selectMenu.appendChild(drinks);

  return selectMenu;
}

function loadSelectedMenu(e) {
  const select = e.target;
}

export default function createMenu() {
  const menu = document.createElement("div");
  menu.classList.add("menu");

  const selectMenuLabel = document.createElement("label");
  selectMenuLabel.htmlFor = "menu-select";

  const selectMenu = createSelect();

  menu.appendChild(selectMenuLabel);
  menu.appendChild(selectMenu);

  return menu;
}
