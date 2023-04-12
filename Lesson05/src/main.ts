//Type Assertion or Casting

type One = string;
type Two = string | number;
type Three = 'hello';

// Convert to more or less specific type

let a: One = 'hello';
let b = a as Two; // assignment to less specific type using as keyword
let c = a as Three; // assignmet to more specific type using as keyword

let d = <One>'world'; // assignment to more specific type using angle brackets <>
let e = <string | number>'world'; // assignment to less specific type using angle brackets <>

const addOrConcat = (a: number, b: number, c: 'add'): number | string => {
    if (c === 'add') return a + b
    return '' + a + b;
}

let myVal: string = addOrConcat(1, 2, 'add') as string; // type assertion returns string
// TS sees no problem with this assignment but it is wrong
let nextVal: number = addOrConcat(1, 2, 'add') as number;

// Forced casting
//10 as string; // '10'
// Double forced casting
(10 as unknown) as string; // '10'

// The DOM
const img = document.querySelector('img') as HTMLImageElement;
const myImg = document.getElementById('#myImg') as HTMLImageElement;

// Wont work for TSX in react
const nextImg = <HTMLImageElement>document.querySelector('#nextImg');;

img.src
myImg.src