const BODY = document.querySelector("body"),
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
  const INTERMEDIARY = [
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
  ];

  let romanNum = "";

  while (num > 0) {
    for (let i of INTERMEDIARY) {
      if (num >= i[0]) {
        romanNum += i[1];
        num -= i[0];
        break;
      }
    }
  }

  return romanNum;
}

function ordinalNum(num) {
  let unit = num % 10;
  if (isNaN(num) || num <= 0) {
    return null;
  }
  if (num % 100 === 11 || num % 100 === 12 || num % 100 === 13) {
    return num + "th";
  }
  switch (unit) {
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
  let cent;
  year = parseInt(year);
  year % 100 === 0 ? (cent = year / 100) : (cent = Math.floor(year / 100) + 1);
  return cent;
}

//Function that calls century() and write the result in document

function calculate() {
  let input = YEARINPUT.value;
  TEXTOUTPUT.innerHTML =
    BODY.getAttribute("lang") === "pt"
      ? romanNumerals(century(input))
      : ordinalNum(century(input));
}

//Call calculate() when Enter key is pressed or the calculate btton is clicked

YEARINPUT.onkeydown = (e) => {
  if (e.keyCode == 13) {
    calculate();
  }
};

CALCULATEBUTTON.onclick = () => {
  calculate();
  return false;
};

LANGBUTTON.onclick = function () {
  const PAGETITLE = document.querySelector(".page-title"),
    YEARLABEL = document.querySelector("#year-label"),
    RESULTLABEL = document.querySelector("#result-label");
  if (this.innerHTML === "Pt") {
    BODY.setAttribute("lang", "pt");
    this.innerHTML = "En";
    PAGETITLE.innerHTML = "Calculadora de Século";
    YEARLABEL.innerHTML = "Ano:";
    CALCULATEBUTTON.value = "Calcular";
    RESULTLABEL.innerHTML = "Século:";
    if (TEXTOUTPUT.innerHTML !== "") {
      calculate();
    }
  } else if (this.innerHTML === "En") {
    BODY.setAttribute("lang", "en");
    this.innerHTML = "Pt";
    PAGETITLE.innerHTML = "Century Calculator";
    YEARLABEL.innerHTML = "Year:";
    CALCULATEBUTTON.value = "Calculate";
    RESULTLABEL.innerHTML = "Century:";
    if (TEXTOUTPUT.innerHTML !== "") {
      calculate();
    }
  }
};
