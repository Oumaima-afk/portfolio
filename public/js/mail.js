// mail

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
