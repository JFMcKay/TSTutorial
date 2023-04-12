"use strict";
//Type Assertion or Casting
// Convert to more or less specific type
let a = 'hello';
let b = a;
; // assignment to less specific type using as keyword
let c = a; // assignmet to more specific type using as keyword
let d = 'world'; // assignment to more specific type using angle brackets <>
let e = 'world'; // assignment to less specific type using angle brackets <>
const addOrConcat = (a, b, c) => {
    if (c === 'add')
        return a + b;
    return '' + a + b;
};
let myVal = addOrConcat(1, 2, 'add'); // type assertion returns string
// TS sees no problem with this assignment but it is wrong
let nextVal = addOrConcat(1, 2, 'add');
// Forced casting
//10 as string; // '10'
// Double forced casting
10; // '10'
// The DOM
const img = document.querySelector('img');
const myImg = document.getElementById('#myImg');
// Wont work for TSX in react
const nextImg = document.querySelector('#nextImg');
;
img.src;
myImg.src;
