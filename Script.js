const BODY = document.body,
  LANGBUTTON = document.querySelector("#lang-button"),
  FORM = document.querySelector("#input-form"),
  YEARINPUT = document.querySelector("#year-input"),
  CALCULATEBUTTON = document.querySelector("#calculate-button"),
  TEXTOUTPUT = document.querySelector("#text-output");

//Initial value of YEARINPUT as the current year

const Today = new Date();
YEARINPUT.value = Today.getFullYear().toString();

//Function the transforms the number into Roman numerals

function romanNumerals(num) {
  if (isNaN(num) || !Number.isInteger(num) || num <= 0 || num >= 4000) {
    return null;
  }
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
    BODY.lang === "pt"
      ? romanNumerals(century(input))
      : ordinalNum(century(input));
}

//Call calculate() when Enter key is pressed or the calculate btton is clicked

YEARINPUT.onkeydown = (e) => {
  if (e.keyCode === 13) {
    calculate();
  }
};

CALCULATEBUTTON.onclick = () => {
  calculate();
  return false;
};

LANGBUTTON.onclick = function () {
  const PAGETITLE = document.querySelector("#page-title"),
    YEARLABEL = document.querySelector("#year-label"),
    RESULTLABEL = document.querySelector("#result-label");
  if (BODY.lang === "en") {
    BODY.lang = "pt";
    this.textContent = "En";
    PAGETITLE.textContent = "Calculadora de Século";
    YEARLABEL.textContent = "Ano:";
    CALCULATEBUTTON.value = "Calcular";
    RESULTLABEL.textContent = "Século:";
    if (TEXTOUTPUT.textContent !== "") {
      calculate();
    }
  } else if (BODY.lang === "pt") {
    BODY.lang = "en";
    this.textContent = "Pt";
    PAGETITLE.textContent = "Century Calculator";
    YEARLABEL.textContent = "Year:";
    CALCULATEBUTTON.value = "Calculate";
    RESULTLABEL.textContent = "Century:";
    if (TEXTOUTPUT.textContent !== "") {
      calculate();
    }
  }
};
