document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = document.lastModified;

const menuButton = document.getElementById("menu");
const nav = document.getElementById("nav");

menuButton.addEventListener("click", () => {
  nav.style.display = nav.style.display === "flex" ? "none" : "flex";
});