// mail

function confirmationMsg() {
  const sendEmailScreen = document.createElement("div");
  sendEmailScreen.classList.add("confirmation-msg");
  sendEmailScreen.innerHTML = `
    <svg class="confirmation-icon" viewBox="0 0 24 24" fill="none">
      <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" 
            stroke="#6A4CFF" stroke-width="2" stroke-linecap="round"/>
    </svg>
    <h5>Confirmation d'envoie</h5>
    <p>Votre message a bien été envoyé !</p>
    <button class="close-btn">
      Fermer
      <svg class="arrow" viewBox="0 0 24 24"><path d="M5 12H19M12 5L19 12L12 19"/></svg>
    </button>
  `;

  // Gestion de la fermeture
  const closeButton = sendEmailScreen.querySelector(".close-btn");
  closeButton.addEventListener("click", () => {
    sendEmailScreen.style.animation = "fadeOut 0.4s ease-out forwards";
    setTimeout(() => sendEmailScreen.remove(), 400);
  });

  document.body.appendChild(sendEmailScreen);
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
