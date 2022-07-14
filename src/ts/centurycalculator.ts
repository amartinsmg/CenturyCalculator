import decimal2ordinal from "./decimal2ordinal";
import decimal2roman from "./decimal2roman";

// This function calculates which century a year is in

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
  // Constants that store elements that are to be read or changed

  const Form = document.querySelector(formSelector) as HTMLFormElement,
    YearInput = document.querySelector(yearInputSelector) as HTMLInputElement,
    CenturyOutputDiv = document.querySelector(outputSelector) as HTMLElement,
    SubmitBnt = document.querySelector(submitBtnSelector) as HTMLButtonElement,
    Today = new Date();

  // This statement sets the initial value of YearInput as the current year

  YearInput.defaultValue = Today.getFullYear().toString();

  // This function calls century function and writes the result in the document when the form is submitted

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

  // These functions display invalid feedback when the form's data is not valid,
  // and the first one removes it when a key is pressed

  YearInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") Form.classList.add("was-validated");
    else Form.classList.remove("was-validated");
  });

  SubmitBnt.addEventListener("click", () => {
    Form.classList.add("was-validated");
  });
}

export default main;
