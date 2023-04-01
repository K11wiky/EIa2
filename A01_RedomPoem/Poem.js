var Gedicht;
(function (Gedicht) {
    // Arrays für Subjekte, Verben und Objekte
    let subjects = ["Harry", "Hermine", "Ron", "Hagrid", "Snape"];
    let verbs = ["braut", "liebt", "studiert", "hasst", "zaubert"];
    let objects = ["Zaubertränke", "Lupin", "Hermine", "den Stein der Weisen", "Quidditch"];
    // Funktion, die ein Gedicht generiert
    function generatePoem() {
        let verse = ""; // leere Vers-Variable
        let randSubjectIndex = Math.floor(Math.random() * subjects.length); // zufällige Indexauswahl für Subjekt
        let randVerbIndex = Math.floor(Math.random() * verbs.length); // zufällige Indexauswahl für Verb
        let randObjectIndex = Math.floor(Math.random() * objects.length); // zufällige Indexauswahl für Objekt
        // Füge das zufällig ausgewählte Subjekt, Verb und Objekt zum Vers hinzu
        verse += subjects.splice(randSubjectIndex, 1)[0]; // Schneide das ausgewählte Subjekt aus dem Array und füge es zum Vers hinzu
        verse += " ";
        verse += verbs.splice(randVerbIndex, 1)[0]; // Schneide das ausgewählte Verb aus dem Array und füge es zum Vers hinzu
        verse += " ";
        verse += objects.splice(randObjectIndex, 1)[0]; // Schneide das ausgewählte Objekt aus dem Array und füge es zum Vers hinzu
        // Wiederhole das Gleiche für die restlichen Zeilen
        randSubjectIndex = Math.floor(Math.random() * subjects.length);
        randVerbIndex = Math.floor(Math.random() * verbs.length);
        randObjectIndex = Math.floor(Math.random() * objects.length);
        verse += "\n";
        verse += subjects.splice(randSubjectIndex, 1)[0];
        verse += " ";
        verse += verbs.splice(randVerbIndex, 1)[0];
        verse += " ";
        verse += objects.splice(randObjectIndex, 1)[0];
        randSubjectIndex = Math.floor(Math.random() * subjects.length);
        randVerbIndex = Math.floor(Math.random() * verbs.length);
        randObjectIndex = Math.floor(Math.random() * objects.length);
        verse += "\n";
        verse += subjects.splice(randSubjectIndex, 1)[0];
        verse += " ";
        verse += verbs.splice(randVerbIndex, 1)[0];
        verse += " ";
        verse += objects.splice(randObjectIndex, 1)[0];
        randSubjectIndex = Math.floor(Math.random() * subjects.length);
        randVerbIndex = Math.floor(Math.random() * verbs.length);
        randObjectIndex = Math.floor(Math.random() * objects.length);
        verse += "\n";
        verse += subjects.splice(randSubjectIndex, 1)[0];
        verse += " ";
        verse += verbs.splice(randVerbIndex, 1)[0];
        verse += " ";
        verse += objects.splice(randObjectIndex, 1)[0];
        return verse; // Rückgabe des Gedichts
    }
    Gedicht.generatePoem = generatePoem;
    // Debugging-Kommentare
    console.log("Start");
    console.log(generatePoem());
    console.log(generatePoem());
    console.log(generatePoem());
})(Gedicht || (Gedicht = {}));
//# sourceMappingURL=Poem.js.map