//Convert the input number to Roman numerals

function romanNumerals(num: number): string {
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
    for (let [key, value] of RomanNumeralsMap) {
      if (num >= key) {
        romanNum += value;
        num -= key;
        break;
      }
    }
  }

  return romanNum;
}

//Convert the input number into ordinal number

function ordinalNum(num: number): string {
  const MODULE10 = num % 10,
    MODULE100 = num % 100;
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
  const CENTURY = year % 100 === 0 ? year / 100 : Math.floor(year / 100) + 1;
  return CENTURY;
}

function main(): void {
  //Constatns that store elements that will be often read or changed

  const Form: HTMLFormElement = document.querySelector("#input-form"),
    YearInput: HTMLInputElement = document.querySelector("#year-input"),
    CenturyOutputDiv: HTMLDivElement =
      document.querySelector("#century-output"),
    SubmitBnt: HTMLButtonElement = document.querySelector("#submit-btn"),
    Today = new Date();

  //Set initial value of YearInput as the current year

  YearInput.defaultValue = Today.getFullYear().toString();

  //Call century function and write the result in document when form is submitted

  Form.addEventListener("submit", (e) => {
    e.preventDefault();
    try {
      const YEAR = parseInt(YearInput.value),
        CENTURY = century(YEAR),
        FORMATEDCENTURY =
          document.documentElement.lang === "en"
            ? ordinalNum(CENTURY)
            : romanNumerals(CENTURY);
      CenturyOutputDiv.textContent = FORMATEDCENTURY;
    } catch {
      CenturyOutputDiv.textContent = null;
    }
  });

  /* If the Enter key is pressed, submit the form or, if the form is invalid, show the invalid feedback,
    if another key is pressed, remove the invalid feedback, if any*/

  YearInput.addEventListener("keydown", (e) => {
    if (e.keyCode === 13) {
      Form.classList.add("was-validated");
      return void 0;
    } else {
      Form.classList.contains("was-validated")
        ? Form.classList.remove("was-validated")
        : void 0;
    }
  });

  //If the form is invalid, show invalid feedback

  SubmitBnt.addEventListener("click", () => {
    Form.classList.add("was-validated");
  });
}

window.addEventListener("load", main);
