function createParagraph(text) {
  const paragraph = document.createElement("p");
  paragraph.textContent = text;
  return paragraph;
}

export default function createHome() {
  const homeDiv = document.createElement("div");
  homeDiv.classList.add("home");
  const p1 = createParagraph(
    `Dive into a culinary adventure at Baratie, the renowned floating restaurant on the Grand Line. Led by Head Chef Zeff, our eatery offers masterful chefs, tantalizing dishes, and a spirit of unity. Join pirates and travelers to savor exceptional cuisine and celebrate the joys of good food and company. `
  );

  const p2 = createParagraph(
    `Welcome to Baratie, where every bite tells a high seas tale.`
  );
  p2.classList.add("welcome");
  homeDiv.appendChild(p1);
  homeDiv.appendChild(p2);

  return homeDiv;
}
