document.addEventListener("DOMContentLoaded", function () {
  const burger = document.getElementById("burger");
  const navLinks = document.querySelector(".nav-links");

  burger.addEventListener("click", function () {
    navLinks.classList.toggle("active");

    // Changement d'icône (optionnel)
    const icon = this.querySelector("i");
    if (navLinks.classList.contains("active")) {
      icon.classList.remove("fa-bars");
      icon.classList.add("fa-times");
    } else {
      icon.classList.remove("fa-times");
      icon.classList.add("fa-bars");
    }
  });

  // Fermer le menu quand on clique sur un lien
  document.querySelectorAll(".nav-links a").forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("active");
      const icon = burger.querySelector("i");
      icon.classList.remove("fa-times");
      icon.classList.add("fa-bars");
    });
  });
});
