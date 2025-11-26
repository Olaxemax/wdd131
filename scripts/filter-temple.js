document.addEventListener("DOMContentLoaded", () => {

  document.querySelector("#year-now").textContent = new Date().getFullYear();
  document.querySelector("#page-update").textContent = `Last Updated: ${document.lastModified}`;

  const temples = [
    {
      templeName: "Aba Nigeria",
      location: "Aba, Nigeria",
      dedicated: "2005, August, 7",
      area: 11500,
      imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
      templeName: "Manti Utah",
      location: "Manti, Utah, United States",
      dedicated: "1888, May, 21",
      area: 74792,
      imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
      templeName: "Payson Utah",
      location: "Payson, Utah, United States",
      dedicated: "2015, June, 7",
      area: 96630,
      imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
      templeName: "Yigo Guam",
      location: "Yigo, Guam",
      dedicated: "2020, May, 2",
      area: 6861,
      imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
      templeName: "Washington D.C.",
      location: "Kensington, Maryland, United States",
      dedicated: "1974, November, 19",
      area: 156558,
      imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
      templeName: "Lima Perú",
      location: "Lima, Perú",
      dedicated: "1986, January, 10",
      area: 9600,
      imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
      templeName: "Mexico City Mexico",
      location: "Mexico City, Mexico",
      dedicated: "1983, December, 2",
      area: 116642,
      imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
      templeName: "Accra Ghana Temple",
      location: "Accra, Ghana",
      dedicated: "2004, January, 11",
      area: 17500,
      imageUrl:
        "https://churchofjesuschristtemples.org/assets/img/temples/johannesburg-south-africa-temple/johannesburg-south-africa-temple-43596.jpg"
    },
    {
      templeName: "Johannesburg South Africa Temple",
      location: "Johannesburg, South Africa",
      dedicated: "1985, August, 24",
      area: 19184,
      imageUrl:
        "https://tse2.mm.bing.net/th/id/OIP.v3senR2n1Pbosl_DkQ2POQHaHa?cb=ucfimgc2&rs=1&pid=ImgDetMain&o=7&rm=3"
    }
  ];

  const main = document.querySelector("main");
  const heading = document.querySelector("#gallery-heading");

  function getYearFromDedicated(dedicatedStr) {
    const y = parseInt(dedicatedStr, 10);
    return Number.isFinite(y) ? y : null;
  }

  function clearTemples() {
    main.querySelectorAll("figure").forEach(f => f.remove());
  }

  function showTemples(list) {
    clearTemples();
    list.forEach(t => {
      const figure = document.createElement("figure");
      figure.classList.add("temple-card"); 

      const img = document.createElement("img");
      img.src = t.imageUrl;
      img.alt = `${t.templeName} — ${t.location}`;
      img.loading = "lazy";
      img.decoding = "async";

      const caption = document.createElement("figcaption");
      caption.innerHTML = `
        <span style="color:#e91e63;"><strong>${t.templeName}</strong></span><br>
        <span style="color:#6a0dad;">${t.location}</span><br>
        <span style="color:#009688;">Dedicated: ${t.dedicated}</span><br>
        <span style="color:#ff9800;">Area: ${t.area.toLocaleString()} sq ft</span>
      `;

      figure.appendChild(img);
      figure.appendChild(caption);
      main.appendChild(figure);
    });
  }

  heading.textContent = "All Temples";
  heading.style.color = "#e91e63"; 
  showTemples(temples);

  const navLinks = document.querySelectorAll('#nav-menu a[data-filter]');

  navLinks.forEach(link => {
    link.addEventListener("click", (e) => {
      e.preventDefault();

      const type = (link.dataset.filter || "home").toLowerCase();
      let filtered = temples;

      if (type === "old") {
        filtered = temples.filter(t => {
          const y = getYearFromDedicated(t.dedicated);
          return y !== null && y < 1900;
        });
      } else if (type === "new") {
        filtered = temples.filter(t => {
          const y = getYearFromDedicated(t.dedicated);
          return y !== null && y > 2000;
        });
      } else if (type === "large") {
        filtered = temples.filter(t => Number(t.area) > 90000);
      } else if (type === "small") {
        filtered = temples.filter(t => Number(t.area) < 10000);
      } else {
        filtered = temples;
      }

      heading.textContent = type === "home" ? "All Temples" : `${link.textContent} Temples`;
      heading.style.color = "#e91e63"; 
      showTemples(filtered);

      const navList = document.querySelector("#nav-menu ul");
      if (navList.classList.contains("show")) {
        navList.classList.remove("show");
        const menuBtn = document.getElementById("menu-button");
        if (menuBtn) menuBtn.setAttribute("aria-expanded", "false");
      }
    });
  });

  const menuButton = document.getElementById("menu-button");
  const navList = document.querySelector("#nav-menu ul");

  menuButton.addEventListener("click", () => {
    const isShown = navList.classList.toggle("show");
    menuButton.setAttribute("aria-expanded", isShown ? "true" : "false");
  });
});