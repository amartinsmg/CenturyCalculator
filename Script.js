const YEARINPUT = document.getElementById("year-input"),
  CALCULATEBUTTON = document.getElementById("calculate-button"),
  FORM = document.getElementById("input-form");

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

//Function that calculates the century

function century(year) {
  let cent;
  year = parseInt(year);
  year % 100 == 0 ? (cent = year / 100) : (cent = Math.floor(year / 100) + 1);
  return cent;
}

//Function that calls century() and write the result in document

function calculate() {
  let input = YEARINPUT.value;
  document.getElementById("text-output").innerHTML = romanNumerals(
    century(input)
  );
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
