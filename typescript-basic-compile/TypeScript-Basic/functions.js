"use strict";
// Function Return type & void
function add(n1, n2) {
    return n1 + n2;
}
function printResult(num) {
    //function is void
    console.log("Result: " + num);
}
// console.log(printResult(add(20, 20))); // output undefined = because print function void
printResult(add(20, 20));
// function types
// let combinedValues: Function; // Function is a provided by typeScript
// combinedValues = add; // combinedValues = 7; ERROR!! because this is number
// console.log(combinedValues(8, 8));
// Arrow Functions
// Function callbacks
function addAndHandle(n1, n2, cb) {
    var result = n1 + n2;
    cb(result);
}
var combinedValues;
combinedValues = add;
console.log(combinedValues(8, 8));
// let someValue: undefined;
addAndHandle(10, 20, function (result) {
    // Parameter result is callback from cb: (num: number) => void
    console.log(result);
});
