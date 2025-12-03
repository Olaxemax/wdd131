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

// Contact Form
const contactForm = document.getElementById("contactForm");
const contactConfirmation = document.getElementById("contactConfirmation");

if (contactForm) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("fullname").value;
    contactConfirmation.textContent = `Thank you, ${name}! 🌼 Your message has been received.`;
    contactForm.reset();
  });
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