//Type Aliases

type stringOrNumber = string | number;

type stringOrNumberArray = (stringOrNumber)[];

type Guitarist = {
    name?: string;
    active: boolean;
    albums: stringOrNumberArray;
}
type mathFunc = (a: number, b: number) => number;
type UserId = stringOrNumber;

// interfaces cannot be used as an alias

// Literal Types

let myName: "Jeremy";
// restricts the value of myName to "Jeremy" or other literal values in the variable declaration
let userName: 'David' | 'Jeremy' | 'John';

// functions
const add = (a: number, b: number): number => {
    return a + b
};

// void function
const logMsg = (message: any): void => {
    console.log(message);
};

let multiply: mathFunc = function(c, d) {
    return c * d;
}

const addAll = (a: number, b: number, c:number = 2): number => {
    return a + b + c;
}

const sumAll = (a: number, b: number, c?:number): number => {
    if (typeof c !== 'undefined') {
        return a + b + c;
    } 
    return a + b;
}

// Rest parameters like spread operator in Java
const total = (...numbers: number[]): number => {
    return numbers.reduce((prev, cur) => prev + cur);
}



// Never type for functions that never return and throw an error
const throwError = (message: string): never => {
    throw new Error(message);
}

const infiniteLoop = ()=> {
    let i = 0;
    while (true) {
        i++;
        if (i < 10) {
            break;
        }
    }
}

//Uses for never type
// 1. Functions that never return
// 2. Functions that throw an error


// Type Guards
const isNumber = (value: any): boolean => {
    return typeof value === 'number' ? true : false;
}

const isString = (value: any): boolean => {
    return typeof value === 'string' ? true : false;
}


// Use of never type
const numberOfString = (value: number | string): string => {
        if (isString(value)) return 'string';
        if (isNumber(value)) return 'number';
        return throwError("Value is not a string or number");
}



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
// Interfaces can be used to be extended or implemented in a class or another interface