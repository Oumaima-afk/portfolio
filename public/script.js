// skills container
const skills = [
  { name: "JavaScript", icon: "./assets/skills_icons/JavaScript.svg" },
  { name: "TypeScript", icon: "./assets/skills_icons/TypeScript.svg" },
  { name: "Python", icon: "./assets/skills_icons/Python.svg" },
  { name: "HTML5", icon: "./assets/skills_icons/HTML5.svg" },
  { name: "CSS3", icon: "./assets/skills_icons/CSS3.svg" },
  { name: "React", icon: "./assets/skills_icons/React.svg" },
  { name: "Node.js", icon: "./assets/skills_icons/Node.js.svg" },
  { name: "Express.js", icon: "./assets/skills_icons/Express.svg" },
  { name: "PostgresSQL", icon: "./assets/skills_icons/PostgresSQL.svg" },
  { name: "GraphQL", icon: "./assets/skills_icons/GraphQL.svg" },
  { name: "Docker", icon: "./assets/skills_icons/Docker.svg" },
  { name: "GitHub", icon: "./assets/skills_icons/GitHub.svg" },
];

const container = document.querySelector(".skills-container");
container.innerHTML = skills
  .map(
    (skill) => `
  <div class="skill--container__box">
    <img src="${skill.icon}" alt="${skill.name} icon" />
    <h3>${skill.name}</h3>
  </div>
`
  )
  .join("");

// mail send confirmation screen
function confirmationMsg() {
  const sendEmailScreen = document.createElement("div");
  sendEmailScreen.classList.add("confirmation-msg");
  sendEmailScreen.innerHTML = `
      <img
        src="./assets/confirmation.svg"
        alt="icon confirmation d'envoie"
      />
      <h5>Confirmation d'envoie</h5>
      <p>Votre message a bien été envoyé.</p>
      <button class="close-btn">Fermer</button>
    `;

  document.body.appendChild(sendEmailScreen);

  // setTimeout(() => {
  //   sendEmailScreen.classList.add("fade-out");
  //   setTimeout(() => {
  //     sendEmailScreen.remove();
  //   }, 500);
  // }, 4000);

  const closeButton = sendEmailScreen.querySelector(".close-btn");
  closeButton.addEventListener("click", () => {
    sendEmailScreen.remove();
  });
}

const form = document.querySelector("form");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const data = {
    name: form.elements["name"].value,
    email: form.elements["email"].value,
    message: form.elements["message"].value,
  };

  try {
    const response = await fetch("/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      confirmationMsg();
      form.reset();
    } else {
      alert("Erreur lors de l'envoi");
    }
  } catch (err) {
    console.error(err);
    alert("Erreur réseau");
  }
});
