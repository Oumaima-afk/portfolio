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
  { name: "SQL", icon: "./assets/skills_icons/SQL.svg" },
  { name: "Sequelize", icon: "./assets/skills_icons/Sequelize.svg" },
  { name: "GraphQL", icon: "./assets/skills_icons/GraphQL.svg" },
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
