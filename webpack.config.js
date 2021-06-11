const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { ModuleFilenameHelpers } = require("webpack");

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  devtool: "inline-source-map",
  output: {
    path: path.join(__dirname, "build"),
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      filename: "./index.html",
    }),
  ],
};

/*

1. WEBPACK

2. SERVER

3. BABEL

4. REACT

*/
