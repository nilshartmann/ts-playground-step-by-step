"use strict";
function uniontypes() {
    function sayHello(who) {
        console.log("Hello, " + who.name); // OK
        // console.log(`You play ${who.instrument}`);
        // ERR: Property 'instrument' does not exist on type 'Musician | Programmer'.
        // ERR: Property 'instrument' does not exist on type 'Programmer'.
    }
    sayHello({ name: 'Jimmi', instrument: 'Guitar' });
    sayHello({ name: 'Susi', language: 'TypeScript' });
    function runAction(action) {
        if (action.type === 'SPEAK') {
            console.log(action.sentence); // OK
            // console.log(action.song); // ERROR: Property 'song' does not exist on type 'SPEAK_ACTION'.
        }
        else if (action.type === 'SING') {
            console.log(action.song); // OK;
        }
        // else if (action.type === 'DANCE') { // ERROR: Property 'type' does not exist on type 'never'
        // 	// ...
        // }
        // if (action.type === 'DANCE') { // ERROR: Operator '===' cannot be applied to types '"SING"' and '"DANCE"'.
        // 	// ...
        // }
    }
    runAction({ type: 'SPEAK', sentence: 'Hello World' }); // OK
    // runAction({type: 'SPEAK', song: 'Final countdown'}) // ERROR
}
