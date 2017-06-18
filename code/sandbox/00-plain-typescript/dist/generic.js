"use strict";
function genericsExample() {
    var MoviePlayer = (function () {
        function MoviePlayer() {
        }
        MoviePlayer.prototype.constructur = function (movie) {
            this.movie = movie;
        };
        MoviePlayer.prototype.play = function () {
            return "Playing " + this.movie.title;
        };
        return MoviePlayer;
    }());
    ;
    ;
    var aMovie = { title: 'Batman' };
    // const aMoviePlayer:MoviePlayer = new MoviePlayer(aMovie);
    var myShortMovie = { title: 'Short Movie', length: 12 };
    var nullPerson = null;
    var peter = { name: 'Peter' };
    // const invalid:Person = null;
}
