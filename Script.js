const FORM = document.querySelector("#input-form"),
  YEARINPUT = document.querySelector("#year-input"),
  TEXTOUTPUT = document.querySelector("#text-output");

//Initial value of YEARINPUT as the current year

const Today = new Date();
YEARINPUT.value = Today.getFullYear().toString();

//Function the transforms the number into Roman numerals

function romanNumerals(num) {
  const INTERMEDIARY = new Map([
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
    return null;
  }

  while (num > 0) {
    for (let i of INTERMEDIARY.keys()) {
      if (num >= i) {
        romanNum += INTERMEDIARY.get(i);
        num -= i;
        break;
      }
    }
  }

  return romanNum;
}

//Function the transforms the number into ordinal number

function ordinalNum(num) {
  const MODULE10 = num % 10,
    MODULE100 = num % 100;
  if (isNaN(num) || !Number.isInteger(num) || num <= 0) {
    return null;
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

//Function that calculates the century

function century(year) {
  const CENT = year % 100 === 0 ? year / 100 : Math.floor(year / 100) + 1;
  return CENT;
}

//Function that calls century() and write the result in document

function calculate() {
  let input = parseInt(YEARINPUT.value);
  TEXTOUTPUT.textContent =
    document.documentElement.lang === "pt"
      ? romanNumerals(century(input))
      : ordinalNum(century(input));
}

//Call calculate() when Enter key is pressed or the calculate btton is clicked

YEARINPUT.onkeydown = (e) => {
  if (e.keyCode === 13) {
    FORM.onsubmit(e);
  }
};

FORM.onsubmit = (e) => {
  calculate();
  e.preventDefault()
};
