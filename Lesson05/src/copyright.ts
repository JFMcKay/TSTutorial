// const year: HTMLElement | null = document.getElementById('year');
// const thisYear: string = new Date().getFullYear() as unknown as string;
// known as a type guard checks if year exists
// if (year) {
//     year.setAttribute("datetime", thisYear);
//     year.textContent = thisYear;
// }
// using an assertion to tell the compiler that year is not null
const year = document.getElementById('year') as HTMLSpanElement;
const thisYear: string = new Date().getFullYear() as unknown as string;

year.setAttribute("datetime", thisYear);
year.textContent = thisYear;
