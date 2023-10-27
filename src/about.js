export default function createAbout() {
  const about = document.createElement("div");
  const title = document.createElement("h1");
  const pg = document.createElement("p");
  title.textContent = "About Baratie";
  pg.textContent = "about page";

  about.appendChild(title);
  about.appendChild(pg);
  return about;
}
