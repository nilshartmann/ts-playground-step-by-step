"use strict";
function builtIn() {
    // string
    var city = 'Hamburg';
    // boolean
    var isDone = false;
    // number
    var theAnswer = 42;
    // array (note the [])
    var cities = ['Hamburg', 'Barcelona'];
    // alternative:
    var languages = ['JavaScript', 'TypeScript'];
    // any
    var theUnknown = 'Who cares';
    theUnknown = 666; // ok
    theUnknown = true; // ok
    // void
    function log(s) { }
    function broken() {
        throw new Error('Something bad happend');
    }
}
