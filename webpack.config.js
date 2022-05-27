const CopyPlugin = require("copy-webpack-plugin"),
  CssMinimizerPlugin = require("css-minimizer-webpack-plugin"),
  fs = require("fs"),
  HtmlWebpackPlugin = require("html-webpack-plugin"),
  MiniCssExtractPlugin = require("mini-css-extract-plugin"),
  path = require("path"),
  TerserPlugin = require("terser-webpack-plugin");

module.exports = {
  entry: "./src/index.ts",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  mode: "production",
  devServer: {
    static: {
      directory: path.resolve(__dirname, "dist"),
    },
    port: 8000,
    open: true,
  },
  module: {
    rules: [
      {
        test: /\.(j|t)s$/,
        use: "babel-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".js", ".css"],
  },
  optimization: {
    minimizer: [new TerserPlugin(), new CssMinimizerPlugin()],
  },
  plugins: [
    new CopyPlugin({
      patterns: [{ from: "assets/**/*" }],
    }),
    new MiniCssExtractPlugin({
      filename: "bundle.css",
    }),
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "./src/index.ejs",
      templateParameters: JSON.parse(fs.readFileSync("./src/en.json", "utf-8")),
    }),
    new HtmlWebpackPlugin({
      filename: "es/index.html",
      template: "./src/index.ejs",
      templateParameters: JSON.parse(fs.readFileSync("./src/es.json", "utf-8")),
    }),
  ],
};
