type Person = {
	name: string; // Pflicht
	livesIn?: string; // Optional
}

const susi: Person = {
	name: 'Klaus',
	livesIn: 'Hamburg'
};

const helmut:Person = {

}

const lukas: Person = {
	name: 'Lukas',
	profession: 'Lokführer'
}

// STRUCTURAL TYPINGS
type Book = {
	title: string
}

type Movie = {
	title: string
}

const book:Book = { title: "Das Kapital" };
const movie:Movie = book;


// OPTIONAL PARAMETERS
function greet(name: string, greeting?: string) {
	console.log(`${greeting || 'Hello'}, {name}`);
}

greet('Klaus'); // Hello, Klaus
greet('Susi', 'Moin')// Moin, Susi

greet('Peter', null); // Argument of type 'null' is not assignable to parameter of type 'string | undefined'.

// let city:string = null; // [ts] Type 'null' is not assignable to type 'string'.
let city:string|null = null; // OK

// ----------------------------------- GENERIC ------------------------------------
let persons:Array<Person> = [];
let movies:Array<Movie> = [];

persons.push({name: 'Klaus'});
movies.push({title: 'Batman'});
persons.push({title: 'Casablanca'}) // error

persons = movies; // error

