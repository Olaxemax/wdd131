const temples = [
  {
    templeName: "Aba Nigeria Temple",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/aba-nigeria-temple/aba-nigeria-temple-lds-253854-wallpaper.jpg"
  },
  {
    templeName: "Accra Ghana Temple",
    location: "Accra, Ghana",
    dedicated: "2004, January, 11",
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/accra-ghana-temple/accra-ghana-temple-lds-253855-wallpaper.jpg"
  },
  {
    templeName: "Johannesburg South Africa Temple",
    location: "Johannesburg, South Africa",
    dedicated: "1985, August, 24",
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/johannesburg-south-africa-temple/johannesburg-south-africa-temple-lds-253856-wallpaper.jpg"
  }
];

function displayTemples(temples) {
  const grid = document.querySelector(".grid");
  grid.innerHTML = "";
  temples.forEach((temple) => {
    const card = document.createElement("section");
    card.classList.add("card");
    card.innerHTML = `
      <h3>${temple.templeName}</h3>
      <img src="${temple.imageUrl}" alt="${temple.templeName}">
      <p>${temple.location}</p>
      <p>Dedicated: ${temple.dedicated}</p>
    `;
    grid.appendChild(card);
  });
}

document.querySelector("#menu").addEventListener("click", () => {
  document.querySelector(".navigation").classList.toggle("show");
});

document.querySelector("#year").textContent = new Date().getFullYear();
document.querySelector("#lastModified").textContent = `Last Modified: ${document.lastModified}`;

displayTemples(temples);