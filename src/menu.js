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

export default function createMenu() {
  const menu = document.createElement("div");
  menu.classList.add("menu");

  menu.textContent = "menu";

  return menu;
}
