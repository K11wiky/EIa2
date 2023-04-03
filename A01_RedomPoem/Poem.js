var Gedicht;
(function (Gedicht) {
    //Array mit möglichen Subjekten
    const subjects = ["Harry", "Hermine", "Ron", "Hagrid", "Snape", "Dumbledore"];
    const predicates = ["braut", "liebt", "studiert", "hasst", "zaubert", "zerstört"];
    const objects = ["Zaubertränke", "den Grimm", "Lupin", "Hogwarts", "die Karte des Rumtreibers", "Dementoren"];
    // Funktion, die einen Vers generiert und zurück gibt
    function getVerse(_subjects, _predicates, _objects) {
        // Initialisieren einer leeren Vers-Variable
        let verse = "";
        // Zufälliges Subjekt auswählen und aus dem Array entfernen
        let subjectIndex = Math.floor(Math.random() * _subjects.length);
        verse += _subjects.splice(subjectIndex, 1)[0] + " ";
        // Zufälliges Prädikat auswählen und aus dem Array entfernen
        let predicateIndex = Math.floor(Math.random() * _predicates.length);
        verse += _predicates.splice(predicateIndex, 1)[0] + " ";
        // Zufälliges Objekt auswählen und aus dem Array entfernen
        let objectIndex = Math.floor(Math.random() * _objects.length);
        verse += _objects.splice(objectIndex, 1)[0] + ".";
        // Den generierten Vers zurück geben
        return verse;
    }
    // Initialisieren einer leeren Gedicht-Variable
    let poem = "";
    // Schleife, die so oft durchläuft, wie es Elemente im Subjekte-Array gibt
    for (let i = subjects.length; i >= 1; i--) {
        // Einen Vers generieren und an die Gedicht-Variable anhängen
        let verse = getVerse(subjects, predicates, objects);
        poem += verse + "\n";
    }
    // Gedicht auf der Konsole ausgeben
    console.log(poem);
})(Gedicht || (Gedicht = {}));
//# sourceMappingURL=Poem.js.map