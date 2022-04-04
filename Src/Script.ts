const FORM: HTMLFormElement = document.querySelector("#input-form"),
  YEARINPUT: HTMLInputElement = document.querySelector("#year-input"),
  TEXTOUTPUT: HTMLSpanElement = document.querySelector("#text-output");

//Initial value of YEARINPUT as the current year

const Today = new Date();
YEARINPUT.value = Today.getFullYear().toString();

//Function that transforms the number into Roman numerals

function romanNumerals(num: number) :string {
  const INTERMEDIARY: Map<number, string> = new Map([
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
    throw "Por favor, insira um número maior que 0 e menor que 4000";
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

//Function that transforms the number into ordinal number

function ordinalNum(num: number) :string {
  const MODULE10: number = num % 10,
    MODULE100: number = num % 100;
  if (isNaN(num) || num % 1 !== 0 || num <= 0) {
    throw "Please, enter a number greater than 0.";
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

function century(year: number) :number {
  const CENT = year % 100 === 0 ? year / 100 : Math.floor(year / 100) + 1;
  return CENT;
}

//Function that calls century() and write the result in document

function calculate() {
  try {
    const YEAR = parseInt(YEARINPUT.value);
    TEXTOUTPUT.textContent =
      document.documentElement.lang === "pt"
        ? romanNumerals(century(YEAR))
        : ordinalNum(century(YEAR));
  } catch (err) {
    alert(err);
    TEXTOUTPUT.textContent = null;
  }
}

//Call calculate() when Enter key is pressed or the calculate button is clicked

YEARINPUT.onkeydown = (e) => {
  if (e.keyCode === 13) {
    FORM.submit();
  }
};

FORM.onsubmit = (e) => {
  calculate();
  e.preventDefault();
};
