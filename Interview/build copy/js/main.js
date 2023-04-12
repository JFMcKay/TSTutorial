"use strict";
// Write a bubble sort algorithm in TypeScript. It should take an array of numbers as an input and return a sorted array of numbers.
function bubbleSort(array) {
    let sorted = false;
    while (!sorted) {
        sorted = true;
        for (let i = 0; i < array.length; i++) {
            if (array[i] > array[i + 1]) {
                let temp = array[i];
                array[i] = array[i + 1];
                array[i + 1] = temp;
                sorted = false;
            }
        }
    }
    return array;
}
const unsorted = [10, 5, 3, 8, 2, 6, 4, 7, 33, 9, 1, 99, 22, 323, 22, 1, 3, 4, 2, 4, 5, 6, 33, 1234, 123, -20, 34, -456, -2, -5, -7];
const sorted = bubbleSort(unsorted);
console.log(sorted);
