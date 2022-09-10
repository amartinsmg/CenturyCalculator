const CssMinimizerPlugin = require("css-minimizer-webpack-plugin"),
  HtmlWebpackPlugin = require("html-webpack-plugin"),
  { htmlWebpackPluginTemplateCustomizer } = require("template-ejs-loader"),
  MiniCssExtractPlugin = require("mini-css-extract-plugin"),
  path = require("path"),
  TerserPlugin = require("terser-webpack-plugin"),
  { EnglishPage, SpanishPage, PortuguesePage } = require("./src/js/pages.js");

module.exports = {
  entry: "./src/main.ts",
  output: {
    filename: "assets/bundle.js",
    path: path.resolve(__dirname, "dist"),
    assetModuleFilename: "assets/[hash][ext]",
  },
  mode: "production",
  devServer: {
    static: {
      directory: path.resolve(__dirname, "dist"),
    },
    port: 8080,
    open: true,
  },
  module: {
    rules: [
      {
        test: /\.ts$/i,
        use: ["babel-loader", "ts-loader"],
        exclude: /node_modules/,
      },
      {
        test: /\.js$/i,
        use: "babel-loader",
        exclude: /node_modules/,
      },
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
  resolve: {
    extensions: [".ts", ".js", ".ejs", ".css"],
  },
  optimization: {
    minimizer: [new TerserPlugin(), new CssMinimizerPlugin()],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "assets/bundle.css",
    }),
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: htmlWebpackPluginTemplateCustomizer({
        templatePath: "./src/index.ejs",
        templateEjsLoaderOption: { data: EnglishPage },
      }),
    }),
    new HtmlWebpackPlugin({
      filename: "es/index.html",
      template: htmlWebpackPluginTemplateCustomizer({
        templatePath: "./src/index.ejs",
        templateEjsLoaderOption: { data: SpanishPage },
      }),
    }),
    new HtmlWebpackPlugin({
      filename: "pt/index.html",
      template: htmlWebpackPluginTemplateCustomizer({
        templatePath: "./src/index.ejs",
        templateEjsLoaderOption: { data: PortuguesePage },
      }),
    }),
  ],
};
