const EnglishPage = {
    language: "en",
    title: "Century Calculator",
    navLink: "es/index.html",
    navImage: {
      src: "assets/spain-flag.png",
      alt: "Español",
      title: "Español",
    },
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
    navLink: "../index.html",
    navImage: {
      src: "../assets/usa-flag.png",
      alt: "English",
      title: "English",
    },
    yearLabel: "Año",
    yearInputMax: 399900,
    yearInputPlaceholder: "",
    invalidFeedback:
      "Por favor, introduzca un número mayor que cero y menor que 399900.",
    submitBtn: "Calcular",
    centuryHeading: "Siglo:",
  };

module.exports = { EnglishPage, SpanishPage };
