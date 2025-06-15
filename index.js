import express from "express";
import nodemailer from "nodemailer";
import "dotenv/config";
import { fileURLToPath } from "url";
import path from "path";

// Init
console.log("Import OK");
const app = express();
console.log("App créée");

const port = 3250;
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Middleware
app.use(express.static(path.join(__dirname, "public")));
console.log("Middleware static OK");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
console.log("Middleware parsing OK");

// Route GET pour servir l'index
app.get("/", (req, res) => {
  console.log("GET / reçu");
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

// Configuration Nodemailer
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
});
console.log("Transporter créé");

// Route POST pour le formulaire
app.post("/contact", (req, res) => {
  console.log("POST /contact reçu");
  const { name, email, message } = req.body;
  console.log("Données reçues :", { name, email, message });

  const mailOptions = {
    from: email,
    to: process.env.EMAIL_USER,
    subject: `Nouveau message de ${name} sur mon portfolio`,
    text: `Email: ${email}\n\nMessage:\n${message}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error("Erreur Nodemailer :", error);
      return res.status(500).send("Erreur lors de l'envoi du message");
    }
    console.log("Message envoyé :", info.response);
    res.send("Message bien envoyé !");
  });
});

// Lancement du serveur
const PORT = process.env.PORT || 3000;
app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server is running on port ${PORT}`);
});
