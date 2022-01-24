var endabagabe;
(function (endabagabe) {
    // Leere Arrays für die unterschiedlichen Kartenstapel, so dass bei neu Start beim leeren der Arrays das Spiel ohne Probleme von Scratch neu angefangen werden kann
    var drawStack = []; // Array für den Ziehstapel
    var playStack = []; // Array für den Ablagestapel
    var cardsHuman = []; // Karten des Spielers
    var cardsComputer = []; // Karten des Computers
    // Karten bekommen einen Nummern-Wert zugeschrieben in einem Array
    var number = ["7", "8", "9", "10", "Bube", "Dame", "König", "Ass"];
    // Array, das alle Karten beinhaltet 
    var allCards = createCards();
    var cardFitsCriteria = false; // Üperfrüfen, ob Karte, die gespielt wird mit der obersten Karte auf dem Ablagestapel übereinstimmt
    var topPlayCardStack = false; // Oberste Karte vom Ablagestapel
    //let cardComputer: cards; // Karte, die der Computer legt, falls Bedingung erfüllt(Karte muss den gleichen Wert oder Farbe der obersten KArte im Ablagestapel besitzen) 
    // Bei Klick auf Start wird der Eventlistener ausgelöst und die Funktion startGame aufgerufen
    var start = document.querySelector("#startGame");
    start.addEventListener("click", startGame);
    //Funktion, die andere Funktionen wie das Shufflen der Karten und austeilen der Kartena aufruft
    function startGame() {
        //clearHTML();
        shuffleCards(allCards);
        dealCards();
        console.log(allCards);
    }
    // In Gruppenarbeit mit Celine entstanden
    // Den Karten wird der zugehörige Wert (Rick & Morty Charaktere) und die Farben (blau, grün, rot, gelb) zugeordnet
    // Klick auf Start löst startGame-Funktion aus und diese triggert wiederum die createCars-Funktion
    function createCards() {
        // Farbe und Wert der Karten werden deklariert und typisiert
        var cardValue;
        var allCards = [];
        for (var v = 0; v < 4; v++) {
            if (v == 0) {
                cardValue = "blueCard"; // Wenn cardValue = 0 ist dann hat die Karte den Wert "blau"
            }
            else if (v == 1) {
                cardValue = "greenCard";
            }
            else if (v == 2) {
                cardValue = "redCard";
            }
            else if (v == 3) {
                cardValue = "yellowCard";
            }
            //
            for (var c = 0; c < 9; c++) {
                var valueOfCards = cardValue;
                var numberOfCards = number[c]; // Wenn color = 0, dann ist die Karte Blau, da im "color"- array Blau in der Position 0 ist
                allCards.push({ valueOfCards: valueOfCards, numberOfCards: numberOfCards });
            }
            console.log("value");
        }
        return allCards;
    }
    // Bei Klick auf den Start-Button werden alle Karten zufällig gemischt
    function shuffleCards(allCards) {
        for (var i = 0; i < 1000; i++) {
            var location1 = Math.floor((Math.random() * allCards.length));
            var location2 = Math.floor((Math.random() * allCards.length));
            var tmp = allCards[location1];
            allCards[location1] = allCards[location2];
            allCards[location2] = tmp;
        }
        // Deal Cards
        createDrawStack();
        createPlayCardStack();
        generatePlayerCards();
        generateComputerCards();
    }
    function dealCards() {
        // Hier wird auf das Div mit der ID = Computer zugegriffen
        var computerCards = document.getElementById("computer");
        // Hier wird auf das Div mit dem ID = Human zugegriffen
        var humanCards = document.getElementById("human");
        var drawCardStack = document.getElementById("drawCardStack");
        var playCardStack = document.getElementById("playCardStack");
        // For-Schleife, die die Computer-Karten mit der jeweiligen Kartenfarbe an das neu erstellte Div hängt
        for (var i = 0; i < 3; i++) {
            // Neues DIV-Element erstellen
            var computerDiv = document.createElement("div");
            computerDiv.className = cardsComputer[i].valueOfCards; // NewDiv wird eine Klasse zugeschrieben und die Karten-Eigenschaften übergegeben
            console.log(cardsComputer[0]); //Console.log, um zu überprüfen, ob die Karten im HTML erscheinen
            computerCards.appendChild(computerDiv); // Die drei Karten, die der Computer-Hand geshuffelt in der Funktion generateComputerCards zugeteilt werden, werden nun an das neue newDiv-Element, dass sich im computer-div befindet, übergegeben und erscheinen auf der Seite
            var humanDiv = document.createElement("div");
            humanDiv.className = cardsHuman[i].valueOfCards;
            humanCards.appendChild(humanDiv);
        }
        for (var i = 0; i < 1; i++) {
            var discardCardStack = document.createElement("div");
            discardCardStack.className =
            ;
        }
    }
    function createDrawStack() {
        console.log(allCards[0].valueOfCards);
    }
    function createPlayCardStack() {
    }
    function generatePlayerCards() {
        cardsHuman.push(allCards[3], allCards[4], allCards[5]);
        console.log(cardsHuman[0]);
    }
    function generateComputerCards() {
        cardsComputer.push(allCards[0], allCards[1], allCards[2]);
    }
    function cleatHTML() {
    }
})(endabagabe || (endabagabe = {}));
//# sourceMappingURL=script.js.map