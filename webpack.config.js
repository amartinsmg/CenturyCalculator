const path = require("path"),
  CopyPlugin = require("copy-webpack-plugin"),
  CssMinimizerPlugin = require("css-minimizer-webpack-plugin"),
  MiniCssExtractPlugin = require("mini-css-extract-plugin"),
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
      patterns: [
        { from: "assets/**/*" },
      ],
    }),
    new MiniCssExtractPlugin({
      filename: "bundle.css",
    }),
  ],
};
