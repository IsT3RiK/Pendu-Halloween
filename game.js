const { getRandomWord } = require('./words.js');

let chosenWord = "";
let displayWord = [];
let attempts = 10;
let errors = 0;
let attemptedLetters = [];

// Références DOM
let wordDisplay, message, attemptedLettersDisplay, canvas, ctx, restartButton;

// Fonction pour obtenir un mot aléatoire
async function initGame() {
    await restartGame(); // Initialiser le jeu
}

// Fonction de redémarrage
async function restartGame() {
    // Réinitialisez toutes les variables nécessaires
    chosenWord = await getRandomWord();
    displayWord = "_".repeat(chosenWord.length).split("");
    attemptedLetters = [];
    attempts = 10;
    errors = 0; // Réinitialiser le nombre d'erreurs

    // Récupération des éléments DOM
    wordDisplay = document.getElementById('word-display');
    message = document.getElementById('message');
    attemptedLettersDisplay = document.getElementById('attempted-letters');
    canvas = document.getElementById('hangman-canvas');
    ctx = canvas.getContext("2d");
    restartButton = document.getElementById('restart-button');

    // Effacement complet de l'affichage
    wordDisplay.textContent = displayWord.join(" ");
    attemptedLettersDisplay.textContent = "";
    message.textContent = `Essais restants : ${attempts}`;
    restartButton.style.display = "none"; // Masquer le bouton de redémarrage
    ctx.clearRect(0, 0, canvas.width, canvas.height); // Effacer le canvas

    // Écouteur pour les événements de clavier
    document.removeEventListener("keydown", guessLetter); // Retirer l'écouteur précédent
    document.addEventListener("keydown", guessLetter); // Ajouter un nouvel écouteur
}

function guessLetter(event) {
    const letter = event.key.toLowerCase();
    if (!/^[a-z]$/.test(letter) || attemptedLetters.includes(letter) || !chosenWord) return;

    attemptedLetters.push(letter);
    attemptedLettersDisplay.textContent = attemptedLetters.join(", ");

    if (chosenWord.includes(letter)) {
        chosenWord.split("").forEach((char, index) => {
            if (char === letter) displayWord[index] = letter;
        });
        wordDisplay.textContent = displayWord.join(" ");
        if (!displayWord.includes("_")) {
            message.textContent = "Vous avez gagné !";
            document.removeEventListener("keydown", guessLetter);
            restartButton.style.display = "block"; // Afficher le bouton de redémarrage
            displayFireworks(); // Afficher les feux d'artifice
        }
    } else {
        errors++;
        drawHangman(errors); // Dessine la prochaine partie du pendu
        attempts--;
        message.textContent = `Essais restants : ${attempts}`;
        if (attempts === 0) {
            message.textContent = "Vous avez perdu ! Le mot était : " + chosenWord;
            document.removeEventListener("keydown", guessLetter);
            restartButton.style.display = "block"; // Afficher le bouton de redémarrage
            displayBlood(); // Afficher le sang qui coule
        }
    }
}

// Fonction pour afficher les feux d'artifice
function displayFireworks() {
    const fireworkContainer = document.createElement('div');
    fireworkContainer.classList.add('firework-container');
    document.body.appendChild(fireworkContainer);

    for (let i = 0; i < 10; i++) {
        const firework = document.createElement('div');
        firework.classList.add('firework');
        firework.style.top = `${Math.random() * 100}%`;
        firework.style.left = `${Math.random() * 100}%`;
        fireworkContainer.appendChild(firework);
    }

    setTimeout(() => fireworkContainer.remove(), 3000); // Retirer les feux d'artifice après 3 secondes
}

// Fonction pour afficher le sang qui coule
function displayBlood() {
    const blood = document.createElement('div');
    blood.classList.add('blood');
    document.body.appendChild(blood);

    setTimeout(() => blood.remove(), 5000); // Retirer le sang après 5 secondes
}
// Fonction pour dessiner le pendu
function drawHangman(stage) {
    ctx.clearRect(0, 0, canvas.width, canvas.height); // Efface le canvas avant de redessiner
    ctx.lineWidth = 2;
    ctx.strokeStyle = "#ff1a1a";
    switch (stage) {
        case 1: ctx.moveTo(20, 230); ctx.lineTo(180, 230); ctx.stroke(); break; // Base
        case 2: ctx.moveTo(50, 230); ctx.lineTo(50, 20); ctx.stroke(); break; // Poteau
        case 3: ctx.moveTo(50, 20); ctx.lineTo(150, 20); ctx.stroke(); break; // Bras
        case 4: ctx.moveTo(150, 20); ctx.lineTo(150, 50); ctx.stroke(); break; // Corde
        case 5: ctx.arc(150, 70, 20, 0, Math.PI * 2, true); ctx.stroke(); break; // Tête
        case 6: ctx.moveTo(150, 90); ctx.lineTo(150, 150); ctx.stroke(); break; // Corps
        case 7: ctx.moveTo(150, 110); ctx.lineTo(120, 130); ctx.stroke(); break; // Bras gauche
        case 8: ctx.moveTo(150, 110); ctx.lineTo(180, 130); ctx.stroke(); break; // Bras droit
        case 9: ctx.moveTo(150, 150); ctx.lineTo(120, 190); ctx.stroke(); break; // Jambe gauche
        case 10: ctx.moveTo(150, 150); ctx.lineTo(180, 190); ctx.stroke(); break; // Jambe droite
    }
}

// Sélectionnez le bouton et ajoutez l'événement click
document.getElementById('restart-button').addEventListener('click', () => {
    location.reload(); // Recharger la page
});

// Initialisation du jeu
document.addEventListener('DOMContentLoaded', initGame);