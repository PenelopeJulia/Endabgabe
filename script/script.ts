namespace endabagabe {

// Diese Abgabe ist teilweise in Zusammenarbeit mit Hanna Kopf entstanden.
// Bildschirmgröße: 13 Zoll und Browser: Chrome

// Interface für die Karten erstellt
interface cards {
    // Wert der Karten (Ass, König, Dame, Bube, 10, 9, 8, 7)
    numberOfCards: number;
    // Farbe der Karten (blau, rot, gelb, grün)
    valueOfCards: string;
}

// Leere Arrays für die unterschiedlichen Kartenstapel, so dass bei neu Start beim leeren der Arrays das Spiel ohne Probleme von Scratch neu angefangen werden kann
let drawStack: cards[] = []; // Array für den Ziehstapel
let playedStack: cards[] = []; // Array für den Ablagestapel
let cardsHuman: cards[] = []; // Karten des Spielers
let cardsComputer: cards[] = []; // Karten des Computers

// Karten bekommen einen Nummern-Wert zugeschrieben in einem Array
let number: string[] = ["7", "8", "9", "10", "Bube", "Dame", "König", "Ass" ];

// tslint:disable-next-line: typedef
let allCards = createCards(); // Array, das alle Karten beinhaltet; Die Karten, die in der createCards-Funktion erstellt werden werden ins Array -> allCards übergegeben

let cardFitsCriteria: boolean = false; // Üperfrüfen, ob Karte, die gespielt wird mit der obersten Karte auf dem Ablagestapel übereinstimmt
let topCardPlayStack: cards; // Oberste Karte vom Ablagestapel

// Bei Klick auf Start wird der Eventlistener ausgelöst und die Funktion startGame aufgerufen
let start: HTMLElement = document.querySelector("#startGame");
start.addEventListener("click", startGame);

//Funktion, die andere Funktionen wie das Shufflen der Karten und austeilen der Kartena aufruft
function startGame(): void {
    //resetHTML();  //spielfeld leeren -> Kartenberlagerung  verhindern
    let deactivateButton = <HTMLInputElement>document.getElementById("startGame");
    deactivateButton.disabled = true; // Button wird deaktiviert (man kann ihn nicht erneut betätigen)
    console.log("test");

    createCards();
    shuffleCards(allCards); // Funktion, die Karten mischt und die Funktion, die die KArten erstellt triggert
    dealCards();
    reloadHTML();
    console.log(allCards);
}

// Den Karten wird der zugehörige Wert (Rick & Morty Charaktere bzw. blau, grün, rot, gelb) und die Nummern zugeordnet
// Klick auf Start löst startGame-Funktion aus und diese triggert wiederum die createCards-Funktion
function createCards() {

// Farbe und Wert der Karten werden deklariert und typisiert
    let cardValue: string; // String, dass später mit dem Wert der Farbe gleichgesetzt wird
    let allCards = []; // Array mit allen Karten

    for (let v = 0; v < 4; v++) {
        if (v == 0) { 
            cardValue = "blueCard"; // Wenn cardValue = 0 ist dann hat die Karte den Wert "blau"
        } else if (v == 1) {
            cardValue = "greenCard"; // grüne Karte
        } else if (v == 2) {
            cardValue = "redCard"; // rote Karte
        } else if (v == 3) {
            cardValue = "yellowCard"; // gelbe Karte
        }
//
        for (let c = 0; c < 8; c++) {
           let valueOfCards: string = cardValue;  // Wenn cardValue (Farbenwert) = 0, dann ist die Karte Blau, da im "color"- array Blau in der Position 0 ist 
           let numberOfCards: string = number[c]; // Wenn number = 0 -> dann hat die Karte den Nummernwert = 7; Im Number-Array in Z.21 sind die Zahlen gespeichert
           
           allCards.push({valueOfCards, numberOfCards}); 
       }
        console.log("value");
    }
    return allCards; // Die generierten KArten werden nun ans Array -> allCards zurückgegeben
}

// Bei Klick auf den Start-Button werden alle Karten zufällig gemischt
// Fisher Yates Shuffle aus dem Internet
function shuffleCards(allCards): void {

    for (let i = 0; i < 1000; i++) {
        let one: number = Math.floor((Math.random() * allCards.length));
        let two: number = Math.floor((Math.random() * allCards.length));
        let tmp = allCards[one];

        allCards[one] = allCards[two];
        allCards[two] = tmp;
    }
    return allCards;
}

function dealCards(): void {
    for (let i: number = 0; i < 3; i++) {
        cardsHuman.push (allCards[0]); // Vom Stapel mit allen gemischten Karten werden nun 3 Karten in den Kartenabteil des Spielers kopiert
        allCards.splice (0, 1); // An der aller ersten Position vom 
        console.log("push cards for human");
        cardsComputer.push (allCards[0]);
        allCards.splice (0, 1);
        console.log("push cards for computer");
    }
    playedStack.push (allCards[0]); // Dem Ablagestapel wird bei Austeilen der Karten am Anfang des Spiels eine Karte ausgeteilt -> Oberste Karte aus allCards-Array wird ins Array von playedStack kopiert. Somit kann angefangen werden zu  spielen. Spieler beginnt.
    allCards.splice (0, 1); // Da die oberste Karte nun auf dem Ablagestapel liegt, muss sie aus dem Stapel mit allen KArten über "splice" an der ersten Stell entfernt werden
}


function reloadHTML(): void {
    resetHTML();
    playfield();
}

function playfield(): void {
    for (let i: number = 0; i < cardsHuman.length; i++) {
        createHumanCards(i);
    }

    for (let i: number = 0; i < cardsComputer.length; i++) {
        createComputerCards(i);
        console.log("Computer Cards");
    }
    createDrawStack();
    createPlayedCardStack();
}

// Funktion, die von der startGame > shuffleCards getriggert wird
// Funktion erstellt die Karten für den Ziehstapel
function createDrawStack(): void {
    let drawDiv: HTMLElement = document.createElement("div"); // Neues Div-Element erstellen, in welches die erstellten Karten später über appendChild (wie in der To-Do-Liste) übergegeben werden
    drawDiv.setAttribute ("id", "drawDiv"); //
    drawDiv.setAttribute ("class", "backside"); // Auf dem Ziestapek werden die Karten nur mit der Rückseite angezeigt -> Hier wird eine Klasse für die Rückseite erstellt, so dass man diese später in CSS bearbeiten kann und auf dem Spielfeld abbilden kann
    drawDiv.addEventListener ("click", drawCard, false); // Bei Klick auf den Ziestapel wird der EventListener getriggert und die Funktion -> drawCard ausgelöst. Der Spieler oder Computer bekommt die oberste KArte in sein Array gepusht, diese wird aus dem Ziehstapel über "Splice" entfernt -> Abbildung auf der Seite im Browser; False -> Üperprüft, dass Karten nur egelegt werden können wenn der Spieler dran ist
    document.getElementById("drawCardStack").appendChild(drawDiv);
    console.log(allCards[0].valueOfCards);
}


// Funktion, die den Ablagestapel generiert
function createPlayedCardStack(): void {
    playedStack.push (allCards[0]); // Dem Ablagestapel wird bei Austeilen der Karten am Anfang des Spiels eine Karte ausgeteilt -> Oberste Karte aus allCards-Array wird ins Array von playedStack kopiert. Somit kann angefangen werden zu  spielen. Spieler beginnt.
    allCards.splice (0, 1); // Da die oberste Karte nun auf dem Ablagestapel liegt, muss sie aus dem Stapel mit allen KArten über "splice" an der ersten Stell entfernt werden

    // discardDiv ist die Ablage-Karte
    let discardDiv: HTMLElement = document.createElement("div"); // Neues Div wird erstellt, worin später die gelegten Karten abgebildet werden.
    discardDiv.setAttribute ("id", "playCardStack"); //Es wird auf das Div im HTML mit der Klasse "playCardStack" zugegriffen 
    discardDiv.setAttribute ("class", playedStack[playedStack.length - 1].valueOfCards); // ???
    document.getElementById("playCardStack").appendChild(discardDiv); // Neues Div wird ins playCardStack-Div im HTML eingefügt

    // Zahl wird auf der obersten KArte im Ablagestapel erstellt und abgebildet
    let newNumberCard: HTMLElement = document.createElement("p");  // Neues Paragraphen-Element wird erstellt
    newNumberCard.innerHTML = playedStack[playedStack.length - 1 ].numberOfCards + ""; // Der Paragraph wird über im HTML über TS manipuliert
    newNumberCard.setAttribute("class", "numberOfCards"); // Die KArtenzahl bekommt eine Klasse mit der man später in CSS die Kartenzahl auf der Karte bearbeiten und sytlen kann
    discardDiv.appendChild(newNumberCard); // Die Zahl wird an die Ablage-Karte angehängt
}

function createHumanCards(cardNumber: number): void {

        let humanDiv: HTMLElement = document.createElement("div"); // Es wird ein neues Div-Element (Karte) erstellt 
        
        humanDiv.setAttribute("id", "human" + (cardNumber + 1)); // Es wird auf das Div-Element im HTML mit der Klasse "Human" zugegegriffen, so dass diese bearbeitet werden kann; Karte wird Div zugeordnet
        humanDiv.setAttribute("class", cardsHuman[cardNumber].valueOfCards); // Hier wird auf die Kartenfarbe bzw. die Motive über Klasse zugegriffen
        humanDiv.addEventListener ("click", function (): void { humanPlays (cardNumber); }, false); // Wird auf die Karte geklickt, wird die Funktion -> HumanPlays ausgelöst, so dass die Karte abgelegt wird; False -> sorgt dafür, dass die gelegte Karte mit der obersten Karte des Ablagestapels übereinstimmt (Bedingung!)
        document.getElementById("human").appendChild(humanDiv); // Neues Div bzw. also Karte des Spielers wird an das Human-Div im HTML übergeben
        console.log("HumanDiv");

        let newNumberCard: HTMLElement = document.createElement("p"); // Wie bei Funktion = createPlayedCardStack...
        newNumberCard.innerHTML = cardsHuman[cardNumber].numberOfCards + ""; // Zahl wird in den Paragraphen eingefügt -> HTML-MAnipulation
        newNumberCard.setAttribute("class", "numberOfCards"); // Kartenzahl bekommt eine Klasse
        humanDiv.appendChild(newNumberCard); // Die KArtenazhl wir an das neue Div (KArte des Menschen) übergeben
        console.log("newNumberCard");
       
}




// Erstellen der Computer Karten
function createComputerCards(cardNumber: number): void {

        let computerDiv: HTMLElement = document.createElement("div"); 
        computerDiv.setAttribute("id", "computer" + (cardNumber + 1 ));
        computerDiv.setAttribute("class", "backside");
        document.getElementById ("computer").appendChild(computerDiv);
        console.log("does the computer get his cards?");
}

function humanPlays(numberOfCardPlayed: number): void {
    topCardPlayStack = playedStack [playedStack.length - 1 ];
    let cardFitsCriteria: cards = cardsHuman [numberOfCardPlayed];

    if (topCardPlayStack.valueOfCards == cardFitsCriteria.valueOfCards || topCardPlayStack.numberOfCards == cardFitsCriteria.numberOfCards) {
        playedStack.push(cardFitsCriteria);
        topCardPlayStack = cardFitsCriteria;
        cardsHuman.splice(numberOfCardPlayed, 1);
        reloadHTML();

        if (cardsHuman.length == 0) {
            gameOver();
        } else {
            setTimeout (computerPlays, 500);
        }
    } else { alert ("Play a valid card!"); 
}
}

function drawCard(): void {
    let drawnCard: cards = allCards[allCards.length - 1 ];
    cardsHuman.push(drawnCard);
    
    allCards.splice(allCards.length - 1, 1);

    if (allCards.length == 0) { // Wenn keine Karten mehr auf dem Ziehstapel vorhanden sind, dann wird ein Alert getirggert und das Spiel wird geresetet
        gameOver();
    }
    reloadHTML();
    computerPlays();
}


function computerPlays(): void {

    let topCardPlayStack: cards = playedStack[playedStack.length - 1 ];

    for (let i: number = 0; i < cardsComputer.length; i++) {
        if (cardsComputer[i].valueOfCards == topCardPlayStack.valueOfCards || cardsComputer[i].numberOfCards == topCardPlayStack.numberOfCards) {
            topCardPlayStack = cardsComputer[i];
            playedStack.push(topCardPlayStack);
            cardsComputer.splice (i, 1);
            setTimeout (function (): void {
                reloadHTML(); }, 500);
        
            if (cardsComputer.length == 0) {
                    gameOver();
                } else {
                    cardFitsCriteria = true;
                }
            break;
            }
        }
    if (cardFitsCriteria == false) {
            // tslint:disable-next-line: typedef
            let drawnCard: cards = allCards[allCards.length - 1];
            cardsComputer.push(drawnCard);
            allCards.splice(allCards.length - 1, 1);
            if (allCards.length == 0) {
                gameOver();
            }
            setTimeout(function (): void { reloadHTML(); }, 500);
        }      
    console.log("Why does this not work?");
        }

// Funktion die HTML leert
// Hier wurde mir geholfen
function resetHTML(): void {
    let cardsComputerHTML: HTMLElement = document.getElementById("computer");
    while (cardsComputerHTML.hasChildNodes()) {
            cardsComputerHTML.removeChild(cardsComputerHTML.firstChild);
        }

        // Playerkarten leeren
    let cardsHumanHTML: HTMLElement = document.getElementById("human");
    while (cardsHumanHTML.hasChildNodes()) {
            cardsHumanHTML.removeChild(cardsHumanHTML.firstChild);
        }

        // Kartenstapel leeren

    let drawStackHTML: HTMLElement = document.getElementById("drawCardStack");
    while (drawStackHTML.hasChildNodes()) {
            drawStackHTML.removeChild(drawStackHTML.firstChild);
        }
        // Ablagestapel leeren

    let discardStackHTML: HTMLElement = document.getElementById("playCardStack");
    while (discardStackHTML.hasChildNodes()) {
            discardStackHTML.removeChild(discardStackHTML.firstChild);
        }
}

function gameOver(): void { // Funktion wird augeführt wenn einer der Mitspieler keine Karten mehr hat oder der Ziehstapel leer ist 
        
    if (cardsHuman.length == 0) { // Spieler hat keine Handkarten mehr
        alert("You won! Try again?");
        location.reload();
        
        let knopf: HTMLButtonElement = <HTMLInputElement>document.getElementById ("startGame");
        knopf.disabled = false; // der Start-Knopf wird wieder nutzbar gemacht
        reloadHTML (); // Spielfeld wird neu dargestellt
    }

    else if (cardsComputer.length == 0) { // Gegner hat keine Handkarten mehr
        alert("You lost! Try again?");
        location.reload();

        let knopf: HTMLButtonElement = <HTMLInputElement>document.getElementById ("startGame");
        knopf.disabled = false; // der Start-Knopf wird wieder nutzbar gemacht
        reloadHTML (); // Spielfeld wird neu dargestellt
    }
    
}

}