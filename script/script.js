var endabagabe;
(function (endabagabe) {
    // Leere Arrays für die unterschiedlichen Kartenstapel, so dass bei neu Start beim leeren der Arrays das Spiel ohne Probleme von Scratch neu angefangen werden kann
    var drawCardStack = []; // Array für den Ziehstapel
    var playCardStack = []; // Array für den Ablagestapel
    var cardsHuman = []; // Karten des Spielers
    var cardsComputer; // Karten des Computers
    var initialCards = 3;
    var value = ["A", "K", "D", "B", "10", "9", "8", "7"];
    var color = ["blue", "green", "red", "yellow"];
    var allCards = createCards();
    // Variablen deklariert, so dass später mit ihnen gearbeitet werden kann
    var cardFitsCriteria = false; // Üperfrüfen, ob Karte, die gespielt wird mit der obersten Karte auf dem Ablagestapel übereinstimmt
    var topPlayCardStack = false; // Oberste Karte vom Ablagestapel
    var cardComputer; // Karte, die der Computer legt, falls Bedingung erfüllt(Karte muss den gleichen Wert oder Farbe der obersten KArte im Ablagestapel besitzen) 
    // Bei Klick auf Start wird der Eventlistener ausgelöst und die Funktion startGame aufgerufen
    var start = document.querySelector("#startGame");
    start.addEventListener("click", startGame);
    function startGame() {
        shuffleCards(allCards);
        console.log(allCards);
    }
    // In Gruppenarbeit mit Celine entstanden
    // Den Karten wird der zugehörige Wert (Rick & Morty Charaktere) und die Farben (blau, grün, rot, gelb) zugeordnet
    function createCards() {
        var cardValue;
        var allCards = [];
        for (var v = 0; v < value.length; v++) {
            if (v == 0) {
                cardValue = "ace";
            }
            else if (v == 1) {
                cardValue = "king";
            }
            else if (v == 2) {
                cardValue = "queen";
            }
            else if (v == 3) {
                cardValue = "jack";
            }
            else if (v == 4) {
                cardValue = "10";
            }
            else if (v == 5) {
                cardValue = "9";
            }
            else if (v == 6) {
                cardValue = "8";
            }
            else if (v == 7) {
                cardValue = "7";
            }
            for (var c = 0; c < color.length; c++) {
                var valueCards = value[v];
                var colorCards = color[c];
                allCards.push({ valueCards: valueCards, colorCards: colorCards });
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
    }
    //function discard;
})(endabagabe || (endabagabe = {}));
//# sourceMappingURL=script.js.map