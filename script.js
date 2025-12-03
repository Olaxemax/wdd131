// Theme Toggle
const body = document.body;
const themeToggle = document.getElementById("themeToggle");

themeToggle.addEventListener("click", () => {
  body.classList.toggle("dark-theme");
  localStorage.setItem("theme", body.classList.contains("dark-theme") ? "dark" : "light");
});

// Load saved theme
if (localStorage.getItem("theme") === "dark") {
  body.classList.add("dark-theme");
}

// Newsletter Form
const form = document.getElementById("newsletterForm");
const confirmation = document.getElementById("confirmation");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const name = document.getElementById("name").value;
  confirmation.textContent = `Thank you, ${name}! 🌿 You are now subscribed.`;
  localStorage.setItem("subscriberName", name);
});