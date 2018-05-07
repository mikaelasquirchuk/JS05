// Webpack
// Build tool = automates tasks for us
// Bundler = collates files and joins them together

// 1. Define entry point = Where does your app start?
// 2. Define output = Where does the transformed code end up?
// 3. Rules = What transformations need to take place?

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
        exclude: /node_modules/,
        test: /\.js$/,
        loaders: ["babel-loader"]
      }
    ]
  },
  devServer: {
    contentBase: "./dist"
  }
};

module.exports = config;
