/** @typedef {{
  name: string,
	age: number,
	hobby?: string
}} Person
*/

/**
 * @type {Person}
 */
const p = {
	name: 'Susi',
	age: 43
}

/**
 * @param {Person} person - ...
 */
function sayName(person) {
	console.log(p.name);
}

sayName({
	name: 'Dieter',
	age: 22
});

/**
 *@param {Readonly<Person>} person
 */
function dumpPerson(person) {
	// Does not work as Person is read only:
	// person.name = 'Someone';

	console.log(person);
}

/**
 * @param {Readonly<Person>} person
 * @return {string} the hobby
 */
function getHobby(person) {
	// this would be an error
    // return 33;
    return 'basteln';
}

const theHobby = getHobby(p);

/**
 *@param {Person?} person - an optional person
 *@return {string?}
 */
function getTheName(person) {
	// error: person might be null
	// return person.name;

	return person && person.name;
}

getTheName(p);
getTheName(null);
// is not a person:
// getTheName('xxx');

