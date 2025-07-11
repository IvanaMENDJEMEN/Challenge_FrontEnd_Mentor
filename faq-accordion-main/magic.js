// Dictionnaire des réponses
const reponses = {
  "Is Frontend Mentor free?": "Yes, it's completely free for all core features.",
  "Can I use Frontend Mentor projects in my portfolio?": "Yes, it's encouraged to showcase your solutions.",
  "How can I get help if I'm stuck on a challenge?": "You can ask for help on the Discord or community forum."
};

// Attendre que la page soit chargée
window.addEventListener("DOMContentLoaded", () => {
  // Sélectionne toutes les questions
  const questions = document.querySelectorAll(".question");

  questions.forEach((question) => {
    question.addEventListener("click", () => {
      const parent = question.parentElement;

      // Vérifie si une réponse est déjà affichée juste après
      const existing = parent.nextElementSibling;
      if (existing && existing.classList.contains("reponse")) {
        return; // Ne rien faire si déjà affichée
      }

      // Crée dynamiquement une div pour la réponse
      const reponseDiv = document.createElement("div");
      reponseDiv.classList.add("reponse");
      reponseDiv.textContent = reponses[question.textContent.trim()] || "No answer found.";

      // Insère la réponse après le bloc de question
      parent.insertAdjacentElement("afterend", reponseDiv);
    });
  });
})