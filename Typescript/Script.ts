//Constatns that store elements that will be often read or changed

const Form: HTMLFormElement = document.querySelector("#input-form"),
  YearInput: HTMLInputElement = document.querySelector("#year-input"),
  CenturyOutputDiv: HTMLSpanElement = document.querySelector("#century-output");

//Set initial value of YearInput as the current year

const Today = new Date();
YearInput.defaultValue = Today.getFullYear().toString();

//Convert the input number to Roman numerals

function romanNumerals(num: number) {
  const RomanNumeralsMap = new Map([
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
  let romanNum = "";

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

function ordinalNum(num: number) {
  const MODULE10 = num % 10,
    MODULE100 = num % 100;
  if (isNaN(num) || num % 1 !== 0 || num <= 0) {
    throw "Enter a integer number greater than 0";
  }
  if (MODULE100 === 11 || MODULE100 === 12 || MODULE100 === 13) {
    return num + "th";
  }
  switch (MODULE10) {
    case 1:
      return num + "st";
    case 2:
      return num + "nd";
    case 3:
      return num + "rd";
    default:
      return num + "th";
  }
}

//Calculate the century

function century(year: number) {
  const CENT = year % 100 === 0 ? year / 100 : Math.floor(year / 100) + 1;
  return CENT;
}

//Call century function and write the result in document

function main() {
  try {
    const YEAR = parseInt(YearInput.value);
    CenturyOutputDiv.textContent =
      document.documentElement.lang === "pt"
        ? romanNumerals(century(YEAR))
        : ordinalNum(century(YEAR));
  } catch {
    CenturyOutputDiv.textContent = null;
  }
}

//Call main function when Enter key is pressed or the calculate button is clicked

YearInput.onkeydown = (e) => {
  if (e.keyCode === 13) {
    return void 0;
  }
};

Form.onsubmit = (e) => {
  main();
  e.preventDefault();
};
