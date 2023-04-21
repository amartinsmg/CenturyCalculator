import "./main.css";
import centuryCalculator from "./ts/centurycalculator";

/**
  This statement calls the main function in centurycalculator.ts when the web page is fully loaded. It ensures that all necessary resources and
  elements are available before the calculator is initialized, preventing errors that could occur if the calculator were initialized too early
 */

window.addEventListener("load", () =>
  centuryCalculator(
    "#input-form",
    "#year-input",
    "#century-output",
    "#submit-btn"
  )
);
