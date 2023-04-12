"use strict";
//Type Aliases
// interfaces cannot be used as an alias
// Literal Types
let myName;
// restricts the value of myName to "Jeremy" or other literal values in the variable declaration
let userName;
// functions
const add = (a, b) => {
    return a + b;
};
// void function
const logMsg = (message) => {
    console.log(message);
};
let multiply = function (c, d) {
    return c * d;
};
const addAll = (a, b, c = 2) => {
    return a + b + c;
};
const sumAll = (a, b, c) => {
    if (typeof c !== 'undefined') {
        return a + b + c;
    }
    return a + b;
};
// Rest parameters like spread operator in Java
const total = (...numbers) => {
    return numbers.reduce((prev, cur) => prev + cur);
};
// Never type for functions that never return and throw an error
const throwError = (message) => {
    throw new Error(message);
};
const infiniteLoop = () => {
    let i = 0;
    while (true) {
        i++;
        if (i < 10) {
            break;
        }
    }
};
//Uses for never type
// 1. Functions that never return
// 2. Functions that throw an error
// Type Guards
const isNumber = (value) => {
    return typeof value === 'number' ? true : false;
};
const isString = (value) => {
    return typeof value === 'string' ? true : false;
};
// Use of never type
const numberOfString = (value) => {
    if (isString(value))
        return 'string';
    if (isNumber(value))
        return 'number';
    return throwError("Value is not a string or number");
};
logMsg("Hello World");
logMsg(1);
logMsg(true);
logMsg(add(1, 3));
logMsg(multiply(2, 3));
logMsg(addAll(1, 2, 3));
logMsg(addAll(1, 2));
logMsg(sumAll(2, 2, 2));
logMsg(sumAll(3, 3));
logMsg(total(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));
// Type aliases can be used to create your own types
// Interfaces can be used to be extended in a class
