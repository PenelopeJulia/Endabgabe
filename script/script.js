var endabagabe;
(function (endabagabe) {
    // Diese Abgabe ist teilweise in Zusammenarbeit mit Hanna Kopf entstanden.
    // Bildschirmgröße: 13 Zoll und Browser: Chrome
    // Leere Arrays für die unterschiedlichen Kartenstapel, so dass bei neu Start beim leeren der Arrays das Spiel ohne Probleme von Scratch neu angefangen werden kann
    var playedStack = []; // Array für den Ablagestapel
    var cardsHuman = []; // Karten des Spielers
    var cardsComputer = []; // Karten des Computers
    // Karten bekommen einen Nummern-Wert zugeschrieben in einem Array
    var number = ["7", "8", "9", "10", "Bube", "Dame", "König", "Ass"];
    // tslint:disable-next-line: typedef
    var allCards = createCards(); // Array, das alle Karten beinhaltet; Die Karten, die in der createCards-Funktion erstellt werden werden ins Array -> allCards übergegeben
    var cardFitsCriteria = false; // Üperfrüfen, ob Karte, die gespielt wird mit der obersten Karte auf dem Ablagestapel übereinstimmt
    var topCardPlayStack; // Oberste Karte vom Ablagestapel
    // Bei Klick auf Start wird der Eventlistener ausgelöst und die Funktion startGame aufgerufen
    var start = document.querySelector("#startGame");
    start.addEventListener("click", startGame);
    //Funktion, die andere Funktionen wie das Shufflen der Karten und austeilen der Kartena aufruft
    function startGame() {
        //resetHTML();  //spielfeld leeren -> Kartenberlagerung  verhindern
        var deactivateButton = document.getElementById("startGame"); // Start-Button deaktivieren
        deactivateButton.disabled = true; // Dies sol den Button betätigen, so dass man ihn nicht nochmal drücken kann -> Ansonsten würden bei jeden neuen Klick weitere drei zusätzliche Karten ausgeteilt werden -> dies wollen wir vermeiden!
        console.log("test");
        createCards(); // Funktion, die Karten erstellt
        shuffleCards(allCards); // Funktion, die Karten mischt und die Funktion, die die KArten erstellt triggert
        dealCards(); // Funtkion, die Karten an Spieler, Computer und Ablagestapel austeilt
        // HTML wird gelöscht und wieder geladen
        resetHTML();
        reloadHTML();
        console.log(allCards);
    }
    // Den Karten wird der zugehörige Wert (Rick & Morty Charaktere bzw. blau, grün, rot, gelb) und die Nummern zugeordnet
    // Klick auf Start löst startGame-Funktion aus und diese triggert wiederum die createCards-Funktion
    function createCards() {
        // Farbe und Wert der Karten werden deklariert und typisiert
        var cardValue; // String, dass später mit dem Wert der Farbe gleichgesetzt wird
        var allCards = []; // Array mit allen Karten
        for (var v = 0; v < 4; v++) {
            if (v == 0) {
                cardValue = "blueCard"; // Wenn cardValue = 0 ist dann hat die Karte den Wert "blau"
            }
            else if (v == 1) {
                cardValue = "greenCard"; // grüne Karte
            }
            else if (v == 2) {
                cardValue = "redCard"; // rote Karte
            }
            else if (v == 3) {
                cardValue = "yellowCard"; // gelbe Karte
            }
            //
            for (var c = 0; c < 8; c++) {
                var valueOfCards = cardValue; // Wenn cardValue (Farbenwert) = 0, dann ist die Karte Blau, da im "color"- array Blau in der Position 0 ist 
                var numberOfCards = number[c]; // Wenn number = 0 -> dann hat die Karte den Nummernwert = 7; Im Number-Array in Z.21 sind die Zahlen gespeichert
                allCards.push({ valueOfCards: valueOfCards, numberOfCards: numberOfCards }); // Alle Karten bekommen eine Farbe und eine Nummer
            }
            console.log("value");
        }
        return allCards; // Die generierten KArten werden nun ans Array -> allCards zurückgegeben
    }
    // Bei Klick auf den Start-Button werden alle Karten zufällig gemischt
    // Fisher Yates Shuffle aus dem Internet
    function shuffleCards(allCards) {
        for (var i = 0; i < 1000; i++) {
            var one = Math.floor((Math.random() * allCards.length));
            var two = Math.floor((Math.random() * allCards.length));
            var tmp = allCards[one];
            allCards[one] = allCards[two];
            allCards[two] = tmp;
        }
        return allCards;
    }
    // Funktion, die über startGame-Funktion aufgerufen wird
    // Hier werden die KArten für den Menschen und Computer ausgeteilt
    function dealCards() {
        for (var i = 0; i < 3; i++) { // Es werden drei Karten ausgeteilt ( i < 3 ) -> Die For-Schleife wird drei Mal durchgelaufen
            cardsHuman.push(allCards[0]); // Vom Stapel mit allen gemischten Karten wird die oberste Karte in den Kartenabteil des Spielers kopiert
            allCards.splice(0, 1); // An der aller ersten Position vom allCArds-Array wird die oberste Karte gelöscht, somit gibt es sie nicht doppelt
            console.log("deal cards: human");
            cardsComputer.push(allCards[0]); // Karte in das Array des Gegners gepusht
            allCards.splice(0, 1); // Karte wird aus dem allCards-Array gelöscht
            console.log("dealCards: computer");
        }
    }
    // Die Karten für Spieler und Gegener werden in einer For-Schleife nun im HTML sichtbar; Ablege- und Ziehstapel werden acuh sichtbar
    // Funktion greift auf die Funktionen zu, die die Karten für Spieler, Gegener, Ablagestapeö und Ziehstapel generieren und erstellen (Nummer, Wert etc.). Hier wird alles zusammengebracht.
    function reloadHTML() {
        for (var i = 0; i < cardsHuman.length; i++) {
            createHumanCards(i);
        }
        for (var i = 0; i < cardsComputer.length; i++) {
            createComputerCards(i);
            console.log("Computer-Cards");
        }
        createDrawStack();
        createPlayedCardStack();
    }
    // Funktion, die von der startGame > shuffleCards getriggert wird
    // Funktion erstellt die Karten für den Ziehstapel
    function createDrawStack() {
        var drawDiv = document.createElement("div"); // Neues Div-Element erstellen, in welches die erstellten Karten später über appendChild (wie in der To-Do-Liste) übergegeben werden
        drawDiv.setAttribute("class", "backside"); // Auf dem Ziestapel werden die Karten nur mit der Rückseite angezeigt -> Hier wird eine Klasse für die Rückseite erstellt, so dass man diese später in CSS bearbeiten kann und auf dem Spielfeld abbilden kann
        drawDiv.addEventListener("click", drawCard, false); // Bei Klick auf den Ziestapel wird der EventListener getriggert und die Funktion -> drawCard ausgelöst. Der Spieler oder Computer bekommt die oberste KArte in sein Array gepusht, diese wird aus dem Ziehstapel über "Splice" entfernt -> Abbildung auf der Seite im Browser; False -> Üperprüft, dass Karten nur gelegt werden können wenn der Spieler dran ist
        document.getElementById("drawCardStack").appendChild(drawDiv); // Das neue Div(Karte) wird an das im HTML-erstellte drawCardStack gehängt
        console.log(allCards[0].valueOfCards);
    }
    // Funktion, die den Ablagestapel generiert
    function createPlayedCardStack() {
        playedStack.push(allCards[0]); // Dem Ablagestapel wird bei Austeilen der Karten am Anfang des Spiels eine Karte ausgeteilt -> Oberste Karte aus allCards-Array wird ins Array von playedStack kopiert. Somit kann angefangen werden zu  spielen. Spieler beginnt.
        allCards.splice(0, 1); // Da die oberste Karte nun auf dem Ablagestapel liegt, muss sie aus dem Stapel mit allen KArten über "splice" an der ersten Stell entfernt werden
        // discardDiv ist die Ablage-Karte
        var discardDiv = document.createElement("div"); // Neues Div wird erstellt, worin später die gelegten Karten abgebildet werden.
        discardDiv.setAttribute("class", playedStack[playedStack.length - 1].valueOfCards); // Oberste KArte bekommt ihre Farbe und Rick & Morty-Charakter -> valueOfCards
        document.getElementById("playCardStack").appendChild(discardDiv); // Neues Div wird ins playCardStack-Div im HTML eingefügt
        // Zahl wird auf der obersten KArte im Ablagestapel erstellt und abgebildet
        var newNumberCard = document.createElement("p"); // Neues Paragraphen-Element wird erstellt
        newNumberCard.innerHTML = playedStack[playedStack.length - 1].numberOfCards + ""; // Der Paragraph wird über im HTML über TS manipuliert
        newNumberCard.setAttribute("class", "numberOfCards"); // Die KArtenzahl bekommt eine Klasse mit der man später in CSS die Kartenzahl auf der Karte bearbeiten und stylen kann
        discardDiv.appendChild(newNumberCard); // Die Zahl wird an die Ablage-Karte angehängt
    }
    // Funktion, die die Karten des Menschen erstellt
    function createHumanCards(cardNumber) {
        var humanDiv = document.createElement("div"); // Es wird ein neues Div-Element (Karte) erstellt 
        humanDiv.setAttribute("id", "human" + (cardNumber + 1)); // Es wird auf das Div-Element im HTML mit der Klasse "Human" zugegegriffen, so dass diese bearbeitet werden kann; Karte wird Div zugeordnet
        humanDiv.setAttribute("class", cardsHuman[cardNumber].valueOfCards); // Hier wird auf die Kartenfarbe bzw. die Motive über Klasse zugegriffen
        humanDiv.addEventListener("click", function () { humanPlays(cardNumber); }, false); // Wird auf die Karte geklickt, wird die Funktion -> HumanPlays ausgelöst, so dass die Karte abgelegt wird; False -> sorgt dafür, dass die gelegte Karte mit der obersten Karte des Ablagestapels übereinstimmt (Bedingung!)
        document.getElementById("human").appendChild(humanDiv); // Neues Div bzw. also Karte des Spielers wird an das Human-Div im HTML übergeben
        console.log("HumanDiv");
        var newNumberCard = document.createElement("p"); // Wie bei Funktion = createPlayedCardStack...
        newNumberCard.innerHTML = cardsHuman[cardNumber].numberOfCards + ""; // Zahl wird in den Paragraphen eingefügt -> HTML-MAnipulation
        newNumberCard.setAttribute("class", "numberOfCards"); // Kartenzahl bekommt eine Klasse
        humanDiv.appendChild(newNumberCard); // Die KArtenazhl wir an das neue Div (KArte des Menschen) übergeben
        console.log("newNumberCard");
    }
    // Erstellen der Computer Karten; so ähnlich wie mein Menschen
    function createComputerCards(cardNumber) {
        var computerDiv = document.createElement("div"); // Neues Div-Element (Karte)
        computerDiv.setAttribute("id", "computer" + (cardNumber + 1)); // Hier wird auf den KArtenbereich des Gegeners zugegriffen und dem Gegner die Karte zugeordnet
        computerDiv.setAttribute("class", "backside"); // Rückseite der Karte bekommt eine Klasse, so dass man diese in CSS bearbeiten kann und diese werden hier mit den KArten vom Gegener berknüpft; KArten des Gegners soll der Spieler nicht sehen
        document.getElementById("computer").appendChild(computerDiv); // Neues Div (KArte) wird über appendChild an das im HTML- erstellte Div (KArtenbereich des Gegners) übergegeben
        console.log("createComputerCards");
    }
    // Funktion, die Spielzug des Menschen festlegt und Bedingungen kontrolliert
    function humanPlays(cardPlayed) {
        topCardPlayStack = playedStack[playedStack.length - 1]; // Die oberste Karte auf dem Ablagestapel wird nun mit topPlayCArdsStack gleichgesetzt, so dass wir jetzt die Bedingung in TS festlegen können und damit arbeiten können
        var cardFitsCriteria = cardsHuman[cardPlayed]; //Karte vom Spieler, die gespielt werden soll
        if (topCardPlayStack.valueOfCards == cardFitsCriteria.valueOfCards || topCardPlayStack.numberOfCards == cardFitsCriteria.numberOfCards) { // Bedingung festgelegt, so das wenn die Farbe oder der Wert der obersten KArte mit der gewählten KArte des Menschen übereinstimmt, die KArte des Spielers gelegt werden kann
            playedStack.push(cardFitsCriteria); // Stimmt die Bedingung, dann wird die gewählte KArte in das Array des Ablagestapels gepusht
            topCardPlayStack = cardFitsCriteria; // Die gelegte KArte wird nun zur obersten KArte
            cardsHuman.splice(cardPlayed, 1); // Die gelegte Karte wird aus dem Array des Menschen gelöscht
            resetHTML(); // Spiel wird zurückgesetzt
            reloadHTML(); // Spielstadn wird neu geladen
            if (cardsHuman.length == 0) { // Bedingung, ob der Spieler überhaupt noch Karten hat wird überprüft; Falls der Spieler keine Karten mehr
                alert("You won! Play again?"); // Alert
                location.reload(); // Wenn bei dem Alert auf "OK" geklickt wird, dann lädt das Spiel neu
                var knopf = document.getElementById("startGame");
                knopf.disabled = false; // der Start-Knopf wird wieder nutzbar gemacht; Bei Klick auf Start wird dann wieder eine neue Runde MauMau gestartet
                resetHTML(); // Spiel wird geresetet
                reloadHTML(); // Spielfeld wird neu dargestellt
            }
        }
        else {
            alert("Play a valid card!"); // Alert, Karte kann nur gelegt werden, wenn Bedingung stimmt
        }
    }
    // Funktion, die bei Klick auf den Ziehstapel getriggert wird
    // Karte wird hier gezogen
    function drawCard() {
        var drawnCard = allCards[allCards.length - 1]; // Die gezogene Karte ist die oberste Karte des Ziehstapels
        cardsHuman.push(drawnCard); // Die gezogene KArte wird in den Kartenstapel des Menschen gepusht
        allCards.splice(allCards.length - 1, 1); // Oberste KArte des Ziehstapels wird vom allCArds-Array gelöscht
        resetHTML(); // Spiel wird zurückgesetzt
        reloadHTML(); // Spielstand wird neu geladen
        computerPlays(); // Der Computer ist jetzt dran
    }
    // Funktion, bei der der Computer spielt
    function computerPlays() {
        var topCardPlayStack = playedStack[playedStack.length - 1]; // Die oberste Karte im Ablagestapel bekommt in TS einen Namen, so dass Bedingung gesetzt werden kann
        for (var i = 0; i < cardsComputer.length; i++) { // For Schleife: Der Computer geht seine KArten durch (das Array wird durchlaufen)
            if (cardsComputer[i].valueOfCards == topCardPlayStack.valueOfCards || cardsComputer[i].numberOfCards == topCardPlayStack.numberOfCards) { // Bedingung festgelegt: Stimmt die Farbe oder der Wert der vom Commputer gewählten KArte mit der obersten KArte des Ablagestapels überein, kann diese gelegt werden
                topCardPlayStack = cardsComputer[i]; // Die vom Computer gelegte KArte wird nun zur obersten Karte des Ablagestapels
                playedStack.push(topCardPlayStack); // Die Karte vom Computer wird in den Ablagestapel-Array (allCArds) gepusht
                cardsComputer.splice(i, 1); // Die gelegte Karte wird von den Handkarten des Computers gelöscht
                setTimeout(function () {
                    resetHTML();
                    reloadHTML();
                }, 500); // Kurze zeitliche Verzögerung
                if (cardsComputer.length == 0) { // Hier wird überprüft, ob der Gegener überhaupt noch Karten hat
                    alert("You lost! Try again?"); // Falls der Gegener keine Karten mehr hat, wird ein Alert ausgelöst
                    location.reload(); // Bei Klick auf "Ok" wird das Spiel neu geladen
                    var knopf = document.getElementById("startGame");
                    knopf.disabled = false; // der Start-Knopf wird wieder nutzbar gemacht
                    resetHTML(); // Spiel wird zurückgesetzt
                    reloadHTML(); // Spielfeld wird neu dargestellt
                }
                else {
                    cardFitsCriteria = true; // Computer hat noch Karten, Karte wurde abgelegt
                }
                break;
            }
        }
        if (cardFitsCriteria == false) { // Kann der Gegner keine KArte legen muss er eine Karte vom Ziehstapel nehmen
            // tslint:disable-next-line: typedef
            var drawnCard = allCards[allCards.length - 1]; // Die gezogene KArte ist die oberste KArte vom Ziehstapel
            cardsComputer.push(drawnCard); // Die gezogene Karte wird ins Array des Computers kopiert
            allCards.splice(allCards.length - 1, 1); // Die oberste Karte des Ziehstapels wird aus dem allCards-Array gelöscht
            setTimeout(function () {
                resetHTML();
                reloadHTML();
            }, 500); //Spielfeld zurückgesetzt und Spielstand neu geladen; Zeitliche Verzögerung
        }
        console.log("Computer plays his card");
    }
    // Funktion die HTML leert/löscht
    function resetHTML() {
        // Karten des Computer werden gelöscht
        var cardsComputerHTML = document.getElementById("computer");
        while (cardsComputerHTML.hasChildNodes()) { // Kind-Element vorhanden
            cardsComputerHTML.removeChild(cardsComputerHTML.firstChild); // Kindelement wird gelöscht; Das Prinzip wird für die KArten des Menschen, Ziehstapel und Ablagestapel wiederholt
        }
        // Playerkarten werden gelöscht
        var cardsHumanHTML = document.getElementById("human");
        while (cardsHumanHTML.hasChildNodes()) {
            cardsHumanHTML.removeChild(cardsHumanHTML.firstChild);
        }
        // Kartenstapel wird geleert
        var drawStackHTML = document.getElementById("drawCardStack");
        while (drawStackHTML.hasChildNodes()) {
            drawStackHTML.removeChild(drawStackHTML.firstChild);
        }
        // Ablagestapel wird geleert
        var discardStackHTML = document.getElementById("playCardStack");
        while (discardStackHTML.hasChildNodes()) {
            discardStackHTML.removeChild(discardStackHTML.firstChild);
        }
    }
})(endabagabe || (endabagabe = {}));
//# sourceMappingURL=script.js.map