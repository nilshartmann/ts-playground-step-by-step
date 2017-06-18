function g() {

interface Movie {
	title: string
}


class MoviePlayer<T extends Movie> {
	movie: T;
	constructur(movie: T) {
		this.movie = movie;

	}
	play() {
		return `Playing ${this.movie.title}`
	}

};

interface ShortMovie extends Movie {
	length: number
};

const aMovie = { title: 'Batman' };
const aMoviePlayer:MoviePlayer = new MoviePlayer(aMovie);

const myShortMovie:ShortMovie = { title: 'Short Movie', length: 12}
let shortMoviePlayer:MoviePlayer = new MoviePlayer(myShortMovie);

type Nullable<T> = T|null;

const nullPerson:Nullable<Person> = null;
const peter:Nullable<Person> = {name: 'Peter'};
const invalid:Person = null;

}
