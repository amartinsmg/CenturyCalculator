import decimal2ordinal from "./decimal2ordinal";
import decimal2roman from "./decimal2roman";

/**
  This function takes a year as input and returns the century the year belongs to.
  If the input is not a positive integer number, an error is thrown.
  The century is calculated by dividing the year by 100 and rounding up to the nearest integer,
  except when the year is a multiple of 100, in which case the century is the year divided by 100.
  @param year - The year to calculate the century for.
  @return - The century the year belongs to.
  @throws - Throws an error if the input is not a positive integer number.
 */
function century(year: number): number {
  if (isNaN(year) || year % 1 || year <= 0)
    throw "Enter a integer number greater than 0";
  const CENTURY = year % 100 === 0 ? year / 100 : Math.floor(year / 100) + 1;
  return CENTURY;
}

/**
  Creates a new Century Calculator object based on the specified HTML element selectors.
  @param formSelector - The CSS selector of the form element.
  @param yearInputSelector - The CSS selector of the year input element.
  @param outputSelector - The CSS selector of the output element.
  @param submitBtnSelector - The CSS selector of the submit button element.
*/

function main(
  formSelector: string,
  yearInputSelector: string,
  outputSelector: string,
  submitBtnSelector: string
): void {
  // Constants that store elements of the application that may be read or modified.

  const Form = document.querySelector(formSelector) as HTMLFormElement,
    YearInput = document.querySelector(yearInputSelector) as HTMLInputElement,
    CenturyOutputDiv = document.querySelector(outputSelector) as HTMLElement,
    SubmitBnt = document.querySelector(submitBtnSelector) as HTMLButtonElement,
    Today = new Date();

  // This statement initializes the YearInput with the current year as its default value.

  YearInput.defaultValue = Today.getFullYear().toString();

  /**
    This statement calls the century function to calculate the century based on the year
    entered by the user when the form is submitted. It then displays the result in the
    document, showing the century in ordinal format if the language of the page is set to
    'en' (english) and in Roman numerals otherwise. In case of an error, the function
    clears the content of the div that presents the result to prevent displaying
    incorrect information.
   */

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

  /**
    The first statement adds or removes the "was-validated" class from the Form element when the
    Enter key is pressed or released on the YearInput element, respectively.
    The second statement adds the "was-validated" class to the Form element when the SubmitBtn
    element is clicked.
    This behavior is part of the Bootstrap framework used in the project to provide visual
    feedback to the user when validating form inputs.
   */

  YearInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") Form.classList.add("was-validated");
    else Form.classList.remove("was-validated");
  });

  SubmitBnt.addEventListener("click", () => {
    Form.classList.add("was-validated");
  });
}

export default main;
