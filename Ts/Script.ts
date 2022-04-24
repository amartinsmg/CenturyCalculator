//Constatns that store elements that will be often read or changed

const Form: HTMLFormElement = document.querySelector("#input-form"),
  YearInput: HTMLInputElement = document.querySelector("#year-input"),
  CenturyOutputDiv: HTMLSpanElement = document.querySelector("#century-output");

//Set initial value of YearInput as the current year

const Today: Date = new Date();
YearInput.defaultValue = Today.getFullYear().toString();

//Convert the input number to Roman numerals

function romanNumerals(num: number): string {
  "use strict";
  const RomanNumeralsMap: Map<number, string> = new Map([
    [1000, "M"],
    [900, "CM"],
    [500, "D"],
    [400, "CD"],
    [100, "C"],
    [90, "XC"],
    [50, "L"],
    [40, "XL"],
    [10, "X"],
    [9, "IX"],
    [5, "V"],
    [4, "IV"],
    [1, "I"],
  ]);
  let romanNum: string = "";

  if (isNaN(num) || num % 1 !== 0 || num <= 0 || num >= 4000) {
    throw "Enter an integer greater than 0 and less than 4000";
  }

  while (num > 0) {
    for (let key of RomanNumeralsMap.keys()) {
      if (num >= key) {
        romanNum += RomanNumeralsMap.get(key);
        num -= key;
        break;
      }
    }
  }

  return romanNum;
}

//Convert the input number into ordinal number

function ordinalNum(num: number): string {
  "use strict";
  const MODULE10: number = num % 10,
    MODULE100: number = num % 100;
  if (isNaN(num) || num % 1 !== 0 || num <= 0) {
    throw "Enter a integer number greater than 0";
  }
  if (MODULE100 === 11 || MODULE100 === 12 || MODULE100 === 13) {
    return `${num}th`;
  }
  switch (MODULE10) {
    case 1:
      return `${num}st`;
    case 2:
      return `${num}nd`;
    case 3:
      return `${num}rd`;
    default:
      return `${num}th`;
  }
}

//Calculate the century

function century(year: number): number {
  "use strict";
  const CENTURY: number = year % 100 === 0 ? year / 100 : Math.floor(year / 100) + 1;
  return CENTURY;
}

//Call century function and write the result in document

function main(): void {
  "use strict";
  try {
    const YEAR: number = parseInt(YearInput.value),
      CENTURY: number = century(YEAR)
    CenturyOutputDiv.textContent =
      document.documentElement.lang === "en"
        ? ordinalNum(CENTURY)
        : romanNumerals(CENTURY);
  } catch {
    CenturyOutputDiv.textContent = null;
  }
}

//Call main function when Enter key is pressed or the calculate button is clicked

YearInput.onkeydown = (e: KeyboardEvent): void => {
  if (e.keyCode === 13) {
    return void 0;
  }
};

Form.onsubmit = (e): void => {
  main();
  e.preventDefault();
};
