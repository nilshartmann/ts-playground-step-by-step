"use strict";
function functiontypes() {
    var AddOperation = function (a, b) { return a + b; };
    var DivideOperation = function (a, b) { return a / b; };
    var SqrtOperation = function (a) { return Math.sqrt(a); };
    function calculator(operation, a, b) {
        operation(a, b);
    }
    calculator(AddOperation, 2, 3); // 5
    // calculator(SqrtOperation, 3); // ERROR
}
