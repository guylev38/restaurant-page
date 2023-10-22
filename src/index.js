import createHome from "./home.js";

function loadWebsite() {
  const content = document.getElementById("content");
  content.appendChild(createHome());
}
console.log("working");
loadWebsite();
