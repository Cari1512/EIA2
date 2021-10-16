namespace poem{
    let subjects: string[] = ["Summer breezes" , "apple pies" , "sunkissed mangos" , "rain sounds" , "scented candles" ] ;
    let predicates: string[] = ["brighten", "enhance" , "intensify" , "imbrace", "hug"] ;
    let objects: string[] = ["my day", "lovers", "bad times", "loneliness", "me"];

    //console.log(subjects,predicates,objects);

    for (let index: number = subjects.length; index > 0; index--) {
        
        getVerse(subjects, predicates, objects);
        //console.log(index);

    }
  
    
    function getVerse(_subjects: string[], _predicates: string[], _objects: string[]): string {
        
        let vers: string = " ";
        let newSubject: number = Math.floor(Math.random() * _subjects.length);
        let newPredicate: number = Math.floor(Math.random() * _predicates.length);
        let newObject: number = Math.floor(Math.random() * _objects.length);
        vers = vers + _subjects.splice(newSubject, 1) + " "+ _predicates.splice(newPredicate, 1) + " "+_objects.splice(newObject, 1);
        console.log(vers);
        return ("Poem");
    }

    }
