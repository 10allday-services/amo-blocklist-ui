var path = require("path");
var webpack = require("webpack");

module.exports = {
  devtool: "eval",
  entry: [
    "webpack-dev-server/client?http://localhost:3000",
    "webpack/hot/only-dev-server",
    "./scripts/index"
  ],
  output: {
    path: path.join(__dirname, "scripts"),
    filename: "bundle.js",
    publicPath: "/"
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  resolve: {
    extensions: ["", ".js", ".jsx", ".css"]
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loaders: ["react-hot", "babel"],
        include: [
          path.join(__dirname, "schema"),
          path.join(__dirname, "scripts")
        ],
      },
      {
        test: /\.css$/,
        loader: "style!css",
        include: path.join(__dirname, "css")
      }
    ]
  }
};
