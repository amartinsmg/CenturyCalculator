const EnglishPage = {
    language: "en",
    title: "Century Calculator",
    navLinks: ["es/index.html", "pt/index.html"],
    navImages: [
      {
        src: "assets/spain-flag.png",
        alt: "Español",
        title: "Español",
      },
      {
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
    navLinks: ["../index.html", "../pt/index.html"],
    navImages: [
      {
        src: "../assets/usa-flag.png",
        alt: "English",
        title: "English",
      },
      {
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
    navLinks: ["../index.html", "../es/index.html"],
    navImages: [
      {
        src: "../assets/usa-flag.png",
        alt: "English",
        title: "English",
      },
      {
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
