import decimal2ordinal from "./decimal2ordinal";
import decimal2roman from "./decimal2roman";

/**
  This function takes a year as input and returns the century the year belongs to.
    @param year - The year to calculate the century for.
    @return - The century the year belongs to.
    @throws - Throws an error if the input is not a positive integer number.
 */

function centuryCalculate(year: number): number {
  if (isNaN(year) || year % 1 || year <= 0)
    throw "Enter a integer number greater than 0";
  return year % 100 === 0 ? year / 100 : Math.floor(year / 100) + 1;
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
  const form = document.querySelector(formSelector) as HTMLFormElement,
    yearInput = document.querySelector(yearInputSelector) as HTMLInputElement,
    centuryOutputDiv = document.querySelector(outputSelector) as HTMLElement,
    submitBnt = document.querySelector(submitBtnSelector) as HTMLButtonElement,
    today = new Date();

  // This statement initializes the yearInput with the current year as its default value.

  yearInput.defaultValue = today.getFullYear().toString();

  /**
    This statement calls the century function to calculate the century based on the year entered by the user when the form is submitted.
    It then displays the result in the document, showing the century in ordinal format if the language of the page is set to 'en' (english)
    and in Roman numerals otherwise. In case of an error, the function clears the content of the div that presents the result to prevent
    displaying incorrect information.
   */

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    try {
      const year = parseInt(yearInput.value),
        century = centuryCalculate(year),
        formattedCent =
          document.documentElement.lang === "en"
            ? decimal2ordinal(century)
            : decimal2roman(century);
      centuryOutputDiv.textContent = formattedCent;
    } catch {
      centuryOutputDiv.textContent = null;
    }
  });

  /**
    The first statement adds or removes the "was-validated" class from the form element when the Enter key is pressed on the yearInput element,
    respectively. The second statement adds the "was-validated" class to the form element when the SubmitBtn element is clicked.
    This behavior is part of the Bootstrap framework used in the project to provide visual feedback to the user when validating form inputs.
   */

  yearInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") form.classList.add("was-validated");
    else form.classList.remove("was-validated");
  });

  submitBnt.addEventListener("click", () => {
    form.classList.add("was-validated");
  });
}

export default main;
