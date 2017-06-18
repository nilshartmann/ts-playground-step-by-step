"use strict";
var susi = {
    name: 'Klaus',
    livesIn: 'Hamburg'
};
var book = { title: "Das Kapital" };
var movie = book;
// OPTIONAL PARAMETERS
function greet(name, greeting) {
    console.log((greeting || 'Hello') + ", {name}");
}
greet('Klaus'); // Hello, Klaus
greet('Susi', 'Moin'); // Moin, Susi
// greet('Peter', null); // Argument of type 'null' is not assignable to parameter of type 'string | undefined'.
// let city:string = null; // [ts] Type 'null' is not assignable to type 'string'.
var city = null; // OK
// ----------------------------------- GENERIC ------------------------------------
var persons = [];
var movies = [];
persons.push({ name: 'Klaus' });
movies.push({ title: 'Batman' });
// persons.push({title: 'Casablanca'}) // error
// persons = movies; // error
