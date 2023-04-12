// Write a bubble sort algorithm in TypeScript. It should take an array of numbers as an input and return a sorted array of numbers.
import { bubbleSort } from './sort';

const unsorted = [10, 5, 3, 8, 2, 6, 4, 7, 33, 9, 1,99,22,323,22,1,3,4,2,4,5,6,33,1234,123,-20,34,-456,-2,-5,-7];
const sorted = bubbleSort(unsorted);
console.log(sorted);