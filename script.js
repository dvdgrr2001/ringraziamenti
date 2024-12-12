// script.js

// Dizionario dei ringraziamenti personalizzati
const customThankYous = {
    "Dusan Vlahovic": "Zingaro!",
    "Giulia Bianchi": "Un grande ringraziamento a Giulia Bianchi per il tuo aiuto e incoraggiamento!",
    // Aggiungi altre combinazioni di nome e cognome se necessario
};

// Funzione per generare i ringraziamenti
function generateThanks() {
    const firstName = document.getElementById('firstName').value.trim();
    const lastName = document.getElementById('lastName').value.trim();
    const fullName = `${firstName} ${lastName}`;
    
    let message;
    if (customThankYous[fullName]) {
        message = customThankYous[fullName];
    } else {
        message = "Grazie mille per il tuo supporto e la tua presenza in questo giorno speciale!";
    }
    
    const thankYouMessageElement = document.getElementById('thankYouMessage');
    thankYouMessageElement.textContent = message;
    thankYouMessageElement.classList.remove('hidden');
}
