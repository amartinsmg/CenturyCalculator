function CenturyCPage(
  language,
  title,
  image1,
  image2,
  yearLabel,
  yearInputMax,
  yearInputPlaceholder,
  invalidFeedback,
  submitBtn,
  centuryHeading
) {
  this.language = language;
  this.title = title;
  this.navImages = [image1, image2];
  this.yearLabel = yearLabel;
  this.yearInputMax = yearInputMax;
  this.yearInputPlaceholder = yearInputPlaceholder;
  this.invalidFeedback = invalidFeedback;
  this.submitBtn = submitBtn;
  this.centuryHeading = centuryHeading;
}

const EnglishPage = new CenturyCPage(
    "en",
    "Century Calculator",
    {
      link: "es/index.html",
      src: "../assets/spain-flag.png",
      alt: "Español",
      title: "Español",
    },
    {
      link: "pt/index.html",
      src: "../assets/brazil-flag.png",
      alt: "Português",
      title: "Português",
    },
    "Year",
    null,
    "Enter a number",
    "Please, enter a integer number grater than zero.",
    "Calculate",
    "Century:"
  ),
  SpanishPage = new CenturyCPage(
    "es",
    "Calculadora del Siglo",
    {
      link: "../index.html",
      src: "../assets/usa-flag.png",
      alt: "English",
      title: "English",
    },
    {
      link: "../pt/index.html",
      src: "../assets/brazil-flag.png",
      alt: "Português",
      title: "Português",
    },
    "Año",
    399900,
    "",
    "Por favor, introduzca un número mayor que cero y menor que 399900.",
    "Calcular",
    "Siglo:"
  ),
  PortuguesePage = new CenturyCPage(
    "pt",
    "Calculadora de Século",
    {
      link: "../index.html",
      src: "../assets/usa-flag.png",
      alt: "English",
      title: "English",
    },
    {
      link: "../es/index.html",
      src: "../assets/spain-flag.png",
      alt: "Español",
      title: "Español",
    },
    "Ano",
    399900,
    "",
    "Por favor, insira um número maior que zero e menor que 399900",
    "Calcular",
    "Século:"
  );

module.exports = { EnglishPage, SpanishPage, PortuguesePage };
