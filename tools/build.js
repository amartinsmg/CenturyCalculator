const ejs = require("ejs");
const fs = require("fs");

const template = fs.readFileSync("./src/template.ejs", "utf-8");

const pages = [
  {
    language: "en",
    title: "Century Calculator",
    yearLabel: "Year",
    yearInputMax: null,
    invalidFeedback: "Please, enter a whole number greater than zero.",
    submitBtn: "Calculate",
    centuryHeading: "Century:",
    output: "dist/",
  },
  {
    language: "es",
    title: "Calculadora del Siglo",
    yearLabel: "Año",
    yearInputMax: 399900,
    invalidFeedback:
      "Por favor, introduzca un número mayor que cero y menor que 399900.",
    submitBtn: "Calcular",
    centuryHeading: "Siglo:",
    output: "dist/es/",
  },
  {
    language: "pt",
    title: "Calculadora de Século",
    yearLabel: "Ano",
    yearInputMax: 399900,
    invalidFeedback:
      "Por favor, insira um número maior que zero e menor que 399900",
    submitBtn: "Calcular",
    centuryHeading: "Século:",
    output: "dist/pt/",
  },
];

const navImages = [
  { link: "", src: "../assets/usa-flag.png", alt: "English", title: "English" },
  {
    link: "es/",
    src: "../assets/spain-flag.png",
    alt: "Español",
    title: "Español",
  },
  {
    link: "pt/",
    src: "../assets/brazil-flag.png",
    alt: "Português",
    title: "Português",
  },
];

function copyDir(src, dest) {
  fs.mkdirSync(dest, { recursive: true });
  fs.cpSync(src, dest, { recursive: true });
}

pages.forEach((page) => {
  const html = ejs.render(template, { ...page, navImages: navImages });
  fs.mkdirSync(page.output, { recursive: true });
  fs.writeFileSync(page.output + "index.html", html);
});

copyDir("src/js", "dist/js");
copyDir("src/css", "dist/css");
copyDir("assets", "dist/assets");
