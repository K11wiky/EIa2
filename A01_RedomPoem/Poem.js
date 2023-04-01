var GedichtsGenerator;
(function (GedichtsGenerator) {
    // Die Funktion generiert ein Gedicht aus zufällig kombinierten Sätzen.
    // Die Sätze bestehen aus einem Subjekt, Verb und Objekt.
    // Die Worte für jedes Element werden als Parameter als Arrays übergeben.
    function generate(subjects, verbs, objects) {
        // Initialisiere eine leere Variable für das Gedicht
        let poem = '';
        // Schleife für jede Zeile des Gedichts
        for (let i = 0; i < 5; i++) {
            // Generiere einen Satz aus zufällig gewähltem Subjekt, Verb und Objekt
            let sentence = generateSentence(subjects, verbs, objects);
            // Füge den Satz zum Gedicht hinzu
            poem += sentence;
            // Füge einen Zeilenumbruch hinzu, außer beim letzten Satz
            if (i < 4) {
                poem += '\n';
            }
        }
        // Gib das Gedicht zurück
        return poem;
    }
    GedichtsGenerator.generate = generate;
    // Funktion, um einen Satz aus zufälligen Subjekt, Verb und Objekt zu generieren
    function generateSentence(subjects, verbs, objects) {
        if (subjects.length === 0 || verbs.length === 0 || objects.length === 0) {
            throw new Error('Not enough words to generate sentence');
        }
        // Initialisiere leere Variablen für Subjekt, Verb und Objekt
        let subject = '';
        let verb = '';
        let object = '';
        // Wähle zufälliges Subjekt, Verb und Objekt
        let subjectIndex = Math.floor(Math.random() * subjects.length);
        subject = subjects.splice(subjectIndex, 1)[0]; // Entferne das ausgewählte Subjekt aus dem Array
        let verbIndex = Math.floor(Math.random() * verbs.length);
        verb = verbs.splice(verbIndex, 1)[0];
    }
})(GedichtsGenerator || (GedichtsGenerator = {})); // Entferne das ausgewählte
//# sourceMappingURL=Poem.js.map