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

  const closeButton = sendEmailScreen.querySelector(".close-btn");
  closeButton.addEventListener("click", () => {
    sendEmailScreen.style.animation = "fadeOut 0.4s ease-out forwards";
    setTimeout(() => sendEmailScreen.remove(), 400);
  });

  document.body.appendChild(sendEmailScreen);
}

const form = document.getElementById("contact-form");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  emailjs.sendForm("service_1efa9hk", "template_alr9jst", this).then(
    () => {
      confirmationMsg();
      form.reset();
    },
    (error) => {
      console.error("Erreur EmailJS:", error);
      alert("Erreur lors de l'envoi. Veuillez réessayer.");
    }
  );
});
