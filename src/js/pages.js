const EnglishPage = {
    language: "en",
    title: "Century Calculator",
    navImages: [
      {
        link: "es/index.html",
        src: "assets/spain-flag.png",
        alt: "Español",
        title: "Español",
      },
      {
        link: "pt/index.html",
        src: "assets/brazil-flag.png",
        alt: "Português",
        title: "Português",
      },
    ],
    yearLabel: "Year",
    yearInputMax: "",
    yearInputPlaceholder: "Enter a number",
    invalidFeedback: "Please, enter a integer number grater than zero.",
    submitBtn: "Calculate",
    centuryHeading: "Century:",
  },
  SpanishPage = {
    language: "es",
    title: "Calculadora del Siglo",
    navImages: [
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
    ],
    yearLabel: "Año",
    yearInputMax: 399900,
    yearInputPlaceholder: "",
    invalidFeedback:
      "Por favor, introduzca un número mayor que cero y menor que 399900.",
    submitBtn: "Calcular",
    centuryHeading: "Siglo:",
  },
  PortuguesePage = {
    language: "pt",
    title: "Calculadora de Século",
    navImages: [
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
    ],
    yearLabel: "Ano",
    yearInputMax: 399900,
    yearInputPlaceholder: "",
    invalidFeedback: "Por favor, insira um número maior que zero.",
    submitBtn: "Calcular",
    centuryHeading: "Século:",
  };

module.exports = { EnglishPage, SpanishPage, PortuguesePage };
