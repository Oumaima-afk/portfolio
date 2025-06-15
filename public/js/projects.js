// Liste des projets
const projects = [
  {
    title: "NeonAI",
    image: "./assets/NeonAI.png",
    alt: "screen du projet Chat IA",
    stack: ["JavaScript", "HTML", "CSS", "Svelte", "PocketBase"],
    description:
      "NeonAI est une application web développée avec Svelte et Vite qui permet de dialoguer avec l'IA Mistral. Elle offre une gestion des conversations, une persistance des données via PocketBase, et un affichage Markdown pour une expérience utilisateur fluide.",
    liveLink: "#",
    githubLink: "https://github.com/Oumaima-afk/NeonAI.git",
  },
  {
    title: "O'Coffee",
    image: "./assets/ocoffee.png",
    alt: "screen du site O'Coffee",
    stack: ["JavaScript", "HTML", "CSS", "Node.js", "Express", "PostgreSQL"],
    description:
      "O'Coffee est un site vitrine développé avec Node.js, Express et PostgreSQL pour m’exercer à la gestion d’une base de données relationnelle, la conception d’une architecture back-end, la création de routes et le rendu dynamique des pages avec EJS.",
    liveLink: "#",
    githubLink: "https://github.com/Oumaima-afk/OCoffee.git",
  },
  {
    title: "Maison Almas",
    image: "./assets/maison-almas.png",
    alt: "screen du projet Maison Almas",
    stack: ["HTML", "CSS"],
    description:
      "Ce projet est un site vitrine interactif pour Maison Almas, une maison de joaillerie fictive, conçu avec une mise en page responsive optimisée pour mobile et tablette",
    liveLink: "#",
    githubLink: "https://github.com/Oumaima-afk/MaisonAlmas.git",
  },
];

// Insertion HTML
const projectsContainer = document.querySelector(".projects-container");

projectsContainer.innerHTML = projects
  .map(
    (project) => `
    <div class="projects-container__box">
      <img src="${project.image}" alt="${project.alt}" />
      <h4>${project.title}</h4>
      <div class="stack-container">
        ${project.stack.map((tech) => `<p class="stack">${tech}</p>`).join("")}
      </div>
      <p class="description">${project.description}</p>
      <div class="button">
        <button class="live-btn">
          <a href="${project.liveLink}" target="_blank">Voir en live</a>
        </button>
        <button class="github-btn">
          <a href="${project.githubLink}" target="_blank">Lien GitHub</a>
        </button>
      </div>
    </div>
  `
  )
  .join("");

// Carrousel
const carousel = document.querySelector(".carousel");
const prevButton = document.querySelector(".prev");
const nextButton = document.querySelector(".next");
const items = carousel.querySelector(".projects-container");
const totalItems = items.children.length;
let currentIndex = 0;
const visibleItems = 2;

function slideTo(index) {
  const totalVisible = totalItems - visibleItems + 1;

  // Boucle infinie
  index = (index + totalVisible) % totalVisible;

  const projectWidth = items.children[0].offsetWidth + 32;
  items.style.transform = `translateX(-${index * projectWidth}px)`;
  currentIndex = index;
}

// Boutons
prevButton.addEventListener("click", () => {
  slideTo(currentIndex - 1);
});

nextButton.addEventListener("click", () => {
  slideTo(currentIndex + 1);
});

prevButton.setAttribute("aria-label", "Previous");
nextButton.setAttribute("aria-label", "Next");

document.addEventListener("keydown", (e) => {
  if (e.key === "ArrowLeft") {
    slideTo(currentIndex - 1);
  } else if (e.key === "ArrowRight") {
    slideTo(currentIndex + 1);
  }
});

// Initialisation
slideTo(0);
