function builtIn() {

// string
let city: string = 'Hamburg';

// boolean
let isDone: boolean = false;

// number
let theAnswer: number = 42;

// array (note the [])
let cities: string[] = ['Hamburg', 'Barcelona'];
// alternative:
let languages: Array<string> = ['JavaScript', 'TypeScript'];

// any
let theUnknown: any = 'Who cares';
theUnknown = 666; // ok
theUnknown = true; // ok

// void
function log(s: string): void { /* ... */ }

function broken(): never {
	throw new Error('Something bad happend');
}

}
