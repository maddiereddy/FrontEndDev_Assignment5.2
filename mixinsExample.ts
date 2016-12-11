/**
 * Created by maddie on 12/7/16.
 */

/*
 Create Mixins classes:
 a. Eats
 b. Plays
 c. Codes
 Then create a class which implements these and uses their behavior.
 */

class Eats {
    taste() {
        console.log(`Doesn't this cake taste yummy?!!`)
    }
}

class Plays {
    climb() {
        console.log(`I love rock climbing!!`)
    }
}

class Codes {
    test() {
        console.log(`I hate unit testing!!`);
    }
}

class DreamGuy implements Eats, Plays, Codes {
    taste: () => void;
    climb: () => void;
    test: () => void;
}
applyMixins (DreamGuy, [Eats, Plays, Codes]);


////////////////////////////////////////
// In your runtime library somewhere
////////////////////////////////////////

function applyMixins(derivedCtor: any, baseCtors: any[]) {
    baseCtors.forEach(baseCtor => {
        Object.getOwnPropertyNames(baseCtor.prototype).forEach(name => {
            if (name !== 'constructor') {
                derivedCtor.prototype[name] = baseCtor.prototype[name];
            }
        });
    });
}

//call
let hunk = new DreamGuy()
hunk.taste()
hunk.climb()
hunk.test()