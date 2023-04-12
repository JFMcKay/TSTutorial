// const year: HTMLElement | null = document.getElementById('year');
// const thisYear: string = new Date().getFullYear() as unknown as string;
// if (year) {
//     year.setAttribute("datetime", thisYear);
//     year.textContent = thisYear;
// }

const year = document.getElementById('year') as HTMLSpanElement;
const thisYear: string = new Date().getFullYear() as unknown as string;

year.setAttribute("datetime", thisYear);
year.textContent = thisYear;
