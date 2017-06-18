function uniontypes() {

	type Musician = { name: string, instrument: string };
	type Programmer = { name: string, language: string };

	function sayHello(who: Musician|Programmer): void {
		console.log(`Hello, ${who.name}`); // OK
		// console.log(`You play ${who.instrument}`);
			// ERR: Property 'instrument' does not exist on type 'Musician | Programmer'.
			// ERR: Property 'instrument' does not exist on type 'Programmer'.
	}

	sayHello({name: 'Jimmi', instrument: 'Guitar'});
	sayHello({name: 'Susi', language: 'TypeScript'});
	// sayHello({name: 'Dieter', city: 'Hamburg'}); // ERROR

	// Typsichere Unterscheidungen

    type SPEAK_ACTION = { type: 'SPEAK', sentence: string};
	type SING_ACTION = { type: 'SING', song: string };

	function runAction(action: SPEAK_ACTION | SING_ACTION): void {
		if (action.type === 'SPEAK') {
			console.log(action.sentence); // OK
			// console.log(action.song); // ERROR: Property 'song' does not exist on type 'SPEAK_ACTION'.
		} else if (action.type === 'SING') {
			console.log(action.song); // OK;
		}
		// else if (action.type === 'DANCE') { // ERROR: Property 'type' does not exist on type 'never'
		// 	// ...
		// }

		// if (action.type === 'DANCE') { // ERROR: Operator '===' cannot be applied to types '"SING"' and '"DANCE"'.
		// 	// ...
		// }
	}

	runAction({type: 'SPEAK', sentence: 'Hello World'}); // OK
	// runAction({type: 'SPEAK', song: 'Final countdown'}) // ERROR
}
