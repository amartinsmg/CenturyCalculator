const CopyPlugin = require("copy-webpack-plugin"),
  CssMinimizerPlugin = require("css-minimizer-webpack-plugin"),
  HtmlWebpackPlugin = require("html-webpack-plugin"),
  MiniCssExtractPlugin = require("mini-css-extract-plugin"),
  path = require("path"),
  TerserPlugin = require("terser-webpack-plugin"),
  { EnglishPage, SpanishPage, PortuguesePage } = require("./src/ts/pages.ts");

module.exports = {
  entry: "./src/main.ts",
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
        test: /\.ts$/,
        use: ["babel-loader", "ts-loader"],
        exclude: /node_modules/,
      },
      {
        test: /\.js$/,
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
      templateParameters: EnglishPage,
    }),
    new HtmlWebpackPlugin({
      filename: "es/index.html",
      templateParameters: SpanishPage,
    }),
    new HtmlWebpackPlugin({
      filename: "pt/index.html",
      templateParameters: PortuguesePage,
    }),
  ],
};
