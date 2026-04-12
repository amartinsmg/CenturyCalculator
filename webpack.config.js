/**
  Configuration file for Webpack bundling tool.
*/

const CssMinimizerPlugin = require("css-minimizer-webpack-plugin"),
  HtmlWebpackPlugin = require("html-webpack-plugin"),
  { htmlWebpackPluginTemplateCustomizer } = require("template-ejs-loader"),
  MiniCssExtractPlugin = require("mini-css-extract-plugin"),
  path = require("path"),
  TerserPlugin = require("terser-webpack-plugin");

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

module.exports = {
  /**
    The entry point for the application.
  */

  entry: "./src/js/main.js",

  /**
    The output configuration for the bundled files.
    @property filename - The name of the output file.
    @property path - The path to the output directory.
    @property assetModuleFilename - The asset module filename pattern.
  */

  output: {
    filename: "assets/bundle.js",
    path: path.resolve(__dirname, "dist"),
    assetModuleFilename: "assets/[hash][ext]",
  },

  /**
    The mode configuration for Webpack.
  */

  mode: "production",

  /**
    The configuration options for the development server.
    @property static - The static file serving options.
    @property static.directory - The directory to serve static files from.
    @property port - The port number to listen on.
    @property open - Whether to open the default browser on startup.
  */

  devServer: {
    static: {
      directory: path.resolve(__dirname, "dist"),
    },
    port: 8080,
    open: true,
  },

  /**
    The module configuration for Webpack.
    @property rules - The array of rules for processing files.
  */
  module: {
    rules: [
      {
        test: /\.ejs$/i,
        use: ["html-loader", "template-ejs-loader"],
      },
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
    ],
  },

  /**
    The resolve configuration for Webpack.
    @property extensions - The list of file extensions to resolve.
  */

  resolve: {
    extensions: [".js", ".ejs", ".css"],
  },

  /**
    The optimization configuration for Webpack.
    @property minimizer - The array of plugins used for code optimization.
  */

  optimization: {
    minimizer: [new TerserPlugin(), new CssMinimizerPlugin()],
  },

  /**
    The plugins configuration for Webpack.
  */

  plugins: [
    new MiniCssExtractPlugin({
      filename: "assets/bundle.css",
    }),
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: htmlWebpackPluginTemplateCustomizer({
        templatePath: "./src/template.ejs",
        templateEjsLoaderOption: {
          data: {
            language: "en",
            title: "Century Calculator",
            yearLabel: "Year",
            yearInputMax: null,
            invalidFeedback: "Please, enter a whole number greater than zero.",
            submitBtn: "Calculate",
            centuryHeading: "Century:",
            basePath: "./",
            navImages,
          },
        },
      }),
    }),
    new HtmlWebpackPlugin({
      filename: "es/index.html",
      template: htmlWebpackPluginTemplateCustomizer({
        templatePath: "./src/template.ejs",
        templateEjsLoaderOption: {
          data: {
            language: "es",
            title: "Calculadora del Siglo",
            yearLabel: "Año",
            yearInputMax: 399900,
            invalidFeedback:
              "Por favor, introduzca un número mayor que cero y menor que 399900.",
            submitBtn: "Calcular",
            centuryHeading: "Siglo:",
            basePath: "../",
            navImages,
          },
        },
      }),
    }),
    new HtmlWebpackPlugin({
      filename: "pt/index.html",
      template: htmlWebpackPluginTemplateCustomizer({
        templatePath: "./src/template.ejs",
        templateEjsLoaderOption: {
          data: {
            language: "pt",
            title: "Calculadora de Século",
            yearLabel: "Ano",
            yearInputMax: 399900,
            invalidFeedback:
              "Por favor, insira um número maior que zero e menor que 399900",
            submitBtn: "Calcular",
            centuryHeading: "Século:",
            basePath: "../",
            navImages,
          },
        },
      }),
    }),
  ],
};
