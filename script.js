// ==========================
// Theme Toggle with localStorage
// ==========================
const body = document.body;
const themeToggle = document.getElementById("themeToggle");

if (themeToggle) {
  themeToggle.addEventListener("click", () => {
    body.classList.toggle("dark-theme");
    localStorage.setItem("theme", body.classList.contains("dark-theme") ? "dark" : "light");
  });
}

// Load saved theme
if (localStorage.getItem("theme") === "dark") {
  body.classList.add("dark-theme");
}

// ==========================
// Newsletter Form
// ==========================
const form = document.getElementById("newsletterForm");
const confirmation = document.getElementById("confirmation");

if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("name").value;
    confirmation.textContent = `Thank you, ${name}! 🌿 You are now subscribed.`;
    localStorage.setItem("subscriberName", name);
  });
}

// ==========================
// Contact Form
// ==========================
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

// ==========================
// JavaScript Object Example
// ==========================
const student = {
  name: "Olalemi",
  program: "BYU Pathway",
  hobbies: ["music", "traveling"]
};
console.log(`Student: ${student.name}, Program: ${student.program}`);

// ==========================
// JavaScript Array + Method
// ==========================
const calmColors = ["blue", "green", "lavender", "beige"];
calmColors.forEach(color => console.log(`Calm color: ${color}`));

// ==========================
// Conditional Branching Example
// ==========================
if (student.hobbies.includes("music")) {
  console.log(`${student.name} enjoys listening to music 🎶`);
} else {
  console.log(`${student.name} has other hobbies.`);
}