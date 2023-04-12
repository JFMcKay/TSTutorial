"use strict";
// const year: HTMLElement | null = document.getElementById('year');
// const thisYear: string = new Date().getFullYear() as unknown as string;
// if (year) {
//     year.setAttribute("datetime", thisYear);
//     year.textContent = thisYear;
// }
const year = document.getElementById('year');
const thisYear = new Date().getFullYear();
year.setAttribute("datetime", thisYear);
year.textContent = thisYear;
