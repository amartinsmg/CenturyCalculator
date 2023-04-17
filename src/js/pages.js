// This module defines the CenturyCPage class which represents a page in the Century Calculator application.

/**

  @class CenturyCPage
    Represents a page in the Century Calculator application.
    @param language - The language of the page.
    @param title - The title of the page.
    @param yearLabel - The label for the input field for the year.
    @param yearInputMax - The maximum allowed value for the year input field.
    @param invalidFeedback - The error message to display when the year input is invalid.
    @param submitBtn - The label for the submit button.
    @param centuryHeading - The label for the century result heading.
 */

function CenturyCPage(
  language,
  title,
  yearLabel,
  yearInputMax,
  invalidFeedback,
  submitBtn,
  centuryHeading
) {
  this.language = language;
  this.title = title;
  this.yearLabel = yearLabel;
  this.yearInputMax = yearInputMax;
  this.invalidFeedback = invalidFeedback;
  this.submitBtn = submitBtn;
  this.centuryHeading = centuryHeading;
}

// An instance of CenturyCPage for the English language.

const EnglishPage = new CenturyCPage(
  "en",
  "Century Calculator",
  "Year",
  null,
  "Please, enter a whole number greater than zero.",
  "Calculate",
  "Century:"
  );

//An instance of CenturyCPage for the Spanish language.

const SpanishPage = new CenturyCPage(
  "es",
  "Calculadora del Siglo",
  "Año",
  399900,
  "Por favor, introduzca un número mayor que cero y menor que 399900.",
  "Calcular",
  "Siglo:"
  );

// An instance of CenturyCPage for the Portuguese language.

const PortuguesePage = new CenturyCPage(
  "pt",
  "Calculadora de Século",
  "Ano",
  399900,
  "Por favor, insira um número maior que zero e menor que 399900",
  "Calcular",
  "Século:"
  );

module.exports = { EnglishPage, SpanishPage, PortuguesePage };
