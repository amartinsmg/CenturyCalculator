"use strict";

const ejs = require("ejs"),
  fs = require("fs"),
  process = require("process");

function ejs2html(templateFile, outDir, optionsFile) {
  fs.readFile(templateFile, "utf-8", (err, data) => {
    if (err) throw err;
    let options;
    options = JSON.parse(fs.readFileSync(optionsFile, "utf-8"));
    const template = ejs.compile(data),
      html = template(options);
    fs.writeFile(outDir + "index.html", html, (err) => {
      if (err) throw err;
      else console.log(outDir + "index.html has been rendered");
    });
  });
}

const EnJson = __dirname + "/src/en.json",
  EsJson = __dirname + "/src/es.json",
  Template = __dirname + "/src/index.ejs",
  renderEnglish = () => ejs2html(Template, __dirname + "/dist/", EnJson),
  renderSpanish = () => ejs2html(Template, __dirname + "/dist/es/", EsJson);

if (process.argv.includes("--watch")) {
  fs.watchFile(EnJson, () => renderEnglish());
  fs.watchFile(EsJson, () => renderSpanish());
  fs.watchFile(Template, () => {
    renderEnglish();
    renderSpanish();
  });
} else {
  renderEnglish();
  renderSpanish();
}
