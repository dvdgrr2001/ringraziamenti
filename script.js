// Dizionario dei ringraziamenti personalizzati
const customThankYous = {
    "Flavia Fungo": "Al mio amore, la mia roccia nei momenti no e la mia forza in ogni passo di questo percorso. Sei stata la prima a gioire per ogni mio piccolo successo e a farmi sentire che, con te, nulla è impossibile. La tua intraprendenza è una spinta continua a fare cose che mai avrei immaginato da solo e chissà, un giorno, se questa tua intraprendenza e il nostro essere così uniti ci porti a realizzare insieme qualcosa di grandioso. A te va il mio grazie più speciale (da 1 a 10? Facciamo 10 e lode!) e la promessa di essere sempre il tuo punto fermo, come tu lo sei per me. Ti amo, funghetto mio.",
    "Giannis BTZ": "Quella tua pacca sulla spalla il giorno dell’incidente sul lungomare resterà sempre impressa nella mia mente. Un gesto così piccolo, ma che vale più di mille parole: mi hai dimostrato che, nel momento del bisogno, tu ci sei. La tua capacità di rendere tutto più leggero ha reso questo percorso un po’ meno pesante, ed è stato un vero piacere condividerlo con te. Grazie Giova!",
    "Vincenzo Fonsy": "Vin, la nostra è un’amicizia riscoperta. Anche da lontano, le nostre chiacchierate e le partite alla Play sono state il mio 'reset' perfetto. Ma più di tutto ti ringrazio per i tuoi consigli quando ho iniziato a muovere i primi passi nel mondo del lavoro: tu c’eri, con la tua esperienza e le tue dritte. Grazie di cuore, Vin!",
    "Giovanna Mamma": "A te mamma, che mi ha sempre guidato con saggezza e amore. Con te ho imparato i veri valori della vita e, soprattutto, a non mollare mai. I tuoi consigli, i nostri ragionamenti, i tuoi incoraggiamenti nei momenti difficili sono stati fondamentali per me. La cura e l’amore che metti in tutto ciò che fai per me sono indescrivibili. Grazie di tutto, ma’.",
    "Roberto Papà": "A te papà, che con i tuoi gesti concreti hai sempre dimostrato il suo affetto. Sai rendere tutto più semplice e questo è qualcosa che ammiro ogni giorno. Grazie, papà, per esserci sempre.",
    "Simona Pise": "Simo, la mia sorellina preferita (anche perché sei l’unica). Sei sempre stata lì con il tuo 'Bravo Dado!' a farmi sentire capace. La tua ambizione e intraprendenza sono un esempio continuo per me. E la tua comprensione nei momenti di studio intenso, tipo quando preparavi il pranzo, non la scorderò mai. Spero di essere una guida altrettanto buona per te nel tuo percorso e di saperti dare i consigli giusti. Grazie di tutto, Simo!",
    "Piero Guerrieri": "Zio, i tuoi 'mi ha detto papà che vai come un treno' dopo ogni esame sono stati una carica di motivazione incredibile. Quelle parole mi hanno fatto sentire che sì, stavo andando davvero forte. Grazie per la stima, zio Piero, non sai quanto significhi per me.",
    "Zio Peppe": "Zio Peppe, sei una costante nella mia vita da quando sono piccolo. La tua speranza di vedermi ricco e la tua ironia nel ricordarmelo mi hanno sempre fatto sorridere e dato la carica. E grazie per quella lezione preziosa che non dimenticherò mai: i soldi sono un mezzo, non il fine. Grazie zio, davvero.",
    "Lino Guerrieri": "Zio Lino, tu mi hai insegnato a non mollare mai, neanche quando le probabilità sono contro di noi... tipo con la SISAL! Chissà, magari un giorno sfondiamo davvero e andiamo a festeggiare come si deve. Grazie, zio!",
    // Aggiungi altre combinazioni di nome e cognome se necessario
};

// Funzione per generare i ringraziamenti
function generateThanks() {
    const firstName = document.getElementById('firstName').value.trim();
    const lastName = document.getElementById('lastName').value.trim();
    const fullName = `${firstName} ${lastName}`;
    
    console.log("Nome inserito:", firstName); // Controlla il valore di Nome
    console.log("Cognome inserito:", lastName); // Controlla il valore di Cognome
    console.log("Nome completo:", fullName); // Verifica il nome completo

    let message;
    if (customThankYous[fullName]) {
        message = customThankYous[fullName];
    } else {
        message = "Grazie mille per il tuo supporto e la tua presenza in questo giorno speciale!";
    }

    console.log("Messaggio generato:", message); // Verifica il messaggio generato

    const thankYouMessageElement = document.getElementById('thankYouMessage');
    thankYouMessageElement.textContent = message;
    thankYouMessageElement.classList.remove('hidden');
    console.log("Classe 'hidden' rimossa"); // Conferma la rimozione della classe
}
