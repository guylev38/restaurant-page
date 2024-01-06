export default function createAbout() {
  const about = document.createElement("div");
  about.classList.add("about");
  const pg = document.createElement("p");
  pg.textContent =
    "Baratie is a seaside haven where culinary mastery meets warm hospitality. Founded by passionate chefs and seafaring enthusiasts, our restaurant celebrates fresh, locally sourced ingredients and expert culinary techniques. Indulge in our diverse menu featuring seafood delicacies, grilled delights, and vegetarian options. Experience Baratie’s unique ambiance, blending rustic charm with modern elegance. We are committed to sustainable practices and providing unparalleled service, ensuring every guest feels like family. Join us for a memorable culinary journey by the sea.";

  about.appendChild(pg);
  return about;
}
