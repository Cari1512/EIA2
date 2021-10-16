"use strict";
var poem;
(function (poem) {
    let subjects = ["Summer breezes", "apple pies", "sunkissed mangos", "rain sounds", "scented candles"];
    let predicates = ["brighten", "enhance", "intensify", "imbrace", "hug"];
    let objects = ["my day", "lovers", "bad times", "loneliness", "me"];
    //console.log(subjects,predicates,objects);
    for (let index = subjects.length; index > 0; index--) {
        getVerse(subjects, predicates, objects);
        //console.log(index);
    }
    function getVerse(_subjects, _predicates, _objects) {
        let vers = " ";
        let newSubject = Math.floor(Math.random() * _subjects.length);
        let newPredicate = Math.floor(Math.random() * _predicates.length);
        let newObject = Math.floor(Math.random() * _objects.length);
        vers = vers + _subjects.splice(newSubject, 1) + " " + _predicates.splice(newPredicate, 1) + " " + _objects.splice(newObject, 1);
        console.log(vers);
        return ("Poem");
    }
})(poem || (poem = {}));
//# sourceMappingURL=poem.js.map