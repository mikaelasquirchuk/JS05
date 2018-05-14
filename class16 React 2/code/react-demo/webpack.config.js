// Create and export a config object

// Entry
// Output
// path - what directory should you add it into
// publicPath - set it to slash
// fileName - make it bundle.js
// Mode (defined in package.json scripts)
// Module rules (loaders)

const config = {
  entry: ["./app/js/index.js"],
  output: {
    path: __dirname + "/dist",
    publicPath: "/",
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: ["babel-loader"]
      }
    ]
  },
  devServer: {
    contentBase: "./dist"
  }
};

module.exports = config;
