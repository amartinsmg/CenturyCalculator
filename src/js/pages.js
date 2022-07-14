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

const EnglishPage = new CenturyCPage(
    "en",
    "Century Calculator",
    "Year",
    null,
    "Please, enter a whole number greater than zero.",
    "Calculate",
    "Century:"
  ),
  SpanishPage = new CenturyCPage(
    "es",
    "Calculadora del Siglo",
    "Año",
    399900,
    "Por favor, introduzca un número mayor que cero y menor que 399900.",
    "Calcular",
    "Siglo:"
  ),
  PortuguesePage = new CenturyCPage(
    "pt",
    "Calculadora de Século",
    "Ano",
    399900,
    "Por favor, insira um número maior que zero e menor que 399900",
    "Calcular",
    "Século:"
  );

module.exports = { EnglishPage, SpanishPage, PortuguesePage };
