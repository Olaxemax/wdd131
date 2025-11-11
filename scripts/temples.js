const temples = [
  {
    templeName: "Aba Nigeria Temple",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    imageUrl: "https://www.churchofjesuschrist.org/imgs/7210c09be95c4474772ae52e5f31c23c08112784/full/500%2C/0/default"
  },
  {
    templeName: "Accra Ghana Temple",
    location: "Accra, Ghana",
    dedicated: "2004, January, 11",
    imageUrl: "https://assets.ldscdn.org/4e/59/4e599a8aaaf9071212496225584aaad08c91a7cc/accra_ghana_temple_lds.jpeg"
  },
  {
    templeName: "Johannesburg South Africa Temple",
    location: "Johannesburg, South Africa",
    dedicated: "1985, August, 24",
    imageUrl: "https://tse2.mm.bing.net/th/id/OIP.v3senR2n1Pbosl_DkQ2POQHaHa?cb=ucfimgc2&rs=1&pid=ImgDetMain&o=7&rm=3"
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