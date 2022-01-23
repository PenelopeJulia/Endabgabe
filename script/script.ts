namespace endabagabe {
    
// Interface für die Karten erstellt
interface cards {
    // Wert der Karten ald Rick & Morty-Charaktere (Ass, König, Dame, Bube, 10, 9, 8, 7); Werte sind in der README-Datei erklärt
    cardValue: number;
    // Farbe der Karten (blau, rot, gelb, grün)
    cardColor: string;
}

// Leere Arrays für die unterschiedlichen Kartenstapel, so dass bei neu Start beim leeren der Arrays das Spiel ohne Probleme von Scratch neu angefangen werden kann
let drawCardStack: cards[] = []; // Array für den Ziehstapel
let playCardStack: cards[] = []; // Array für den Ablagestapel
let cardsHuman: cards[] = []; // Karten des Spielers
let cardsComputer: cards[]; // Karten des Computers

let initialCards: number = 3;

let value: string[] = ["A", "K", "D", "B", "10", "9", "8", "7"];
let color: string[] = ["blue", "green", "red", "yellow"];
let allCards = createCards();

// Variablen deklariert, so dass später mit ihnen gearbeitet werden kann

let cardFitsCriteria: boolean = false; // Üperfrüfen, ob Karte, die gespielt wird mit der obersten Karte auf dem Ablagestapel übereinstimmt
let topPlayCardStack: boolean = false; // Oberste Karte vom Ablagestapel
let cardComputer: cards; // Karte, die der Computer legt, falls Bedingung erfüllt(Karte muss den gleichen Wert oder Farbe der obersten KArte im Ablagestapel besitzen) 

// Bei Klick auf Start wird der Eventlistener ausgelöst und die Funktion startGame aufgerufen
let start: HTMLElement = document.querySelector("#startGame");
start.addEventListener("click", startGame);

function startGame(): void {
shuffleCards(allCards);
console.log(allCards);
}

// In Gruppenarbeit mit Celine entstanden

// Den Karten wird der zugehörige Wert (Rick & Morty Charaktere) und die Farben (blau, grün, rot, gelb) zugeordnet
function createCards() {

    let cardValue: string;

    let allCards = [];

    for (let v = 0; v < value.length; v++) {
        if (v == 0) {
            cardValue = "ace";
        } else if (v == 1) {
            cardValue = "king";
        } else if (v == 2) {
            cardValue = "queen";
        } else if (v == 3) {
            cardValue = "jack";
        } else if (v == 4) {
            cardValue = "10";
        } else if (v == 5) {
            cardValue = "9";
        } else if (v == 6) {
            cardValue = "8";
        } else if (v == 7) {
            cardValue = "7";
        }

        for (let c = 0; c < color.length; c++) {
           let valueCards: string = value[v];
           let colorCards: string = color[c];
           allCards.push({valueCards, colorCards});
       }
        console.log("value");
    }
    return allCards;
}


// Bei Klick auf den Start-Button werden alle Karten zufällig gemischt
function shuffleCards(allCards): void {
    for (let i = 0; i < 1000; i++) {
        let location1: number = Math.floor((Math.random() * allCards.length));
        let location2: number = Math.floor((Math.random() * allCards.length));
        let tmp = allCards[location1];

        allCards[location1] = allCards[location2];
        allCards[location2] = tmp;

    }
}


//function discard;


}