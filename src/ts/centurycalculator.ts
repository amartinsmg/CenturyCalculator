import decimal2ordinal from "./decimal2ordinal";
import decimal2roman from "./decimal2roman";

//Calculate the century

function century(year: number): number {
  const CENTURY = year % 100 === 0 ? year / 100 : Math.floor(year / 100) + 1;
  return CENTURY;
}

function main(
  formSelector: string,
  yearInputSelector: string,
  outputSelector: string,
  submitBtnSelector: string
): void {
  //Constatns that store elements that will be often read or changed

  const Form: HTMLFormElement = document.querySelector(formSelector),
    YearInput: HTMLInputElement = document.querySelector(yearInputSelector),
    CenturyOutputDiv = document.querySelector(outputSelector),
    SubmitBnt: HTMLButtonElement = document.querySelector(submitBtnSelector),
    Today = new Date();

  //Set initial value of YearInput as the current year

  YearInput.defaultValue = Today.getFullYear().toString();

  //Call century function and write the result in document when form is submitted

  Form.addEventListener("submit", (e) => {
    e.preventDefault();
    try {
      const YEAR = parseInt(YearInput.value),
        CENTURY = century(YEAR),
        FORMATED_CENTURY =
          document.documentElement.lang === "en"
            ? decimal2ordinal(CENTURY)
            : decimal2roman(CENTURY);
      CenturyOutputDiv.textContent = FORMATED_CENTURY;
    } catch {
      CenturyOutputDiv.textContent = null;
    }
  });

  /* If the Enter key is pressed, submit the form or, if the form is invalid, show the invalid feedback,
    if another key is pressed, remove the invalid feedback, if any*/

  YearInput.addEventListener("keydown", (e) => {
    if (e.keyCode === 13) Form.classList.add("was-validated");
    else Form.classList.remove("was-validated");
  });

  //If the form is invalid, show invalid feedback

  SubmitBnt.addEventListener("click", () => {
    Form.classList.add("was-validated");
  });
}

export default main;
