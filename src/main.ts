import "bootstrap";
import "./main.css";
import centuryCalculator from "./ts/centurycalculator";

window.addEventListener("load", () =>
  centuryCalculator(
    "#input-form",
    "#year-input",
    "#century-output",
    "#submit-btn"
  )
);
