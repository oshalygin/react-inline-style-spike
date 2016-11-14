import path from "path";
import webpack from "webpack";

module.exports = {
  devtool: "eval",
  entry: [
    "webpack-hot-middleware/client",
    "./src/index"
  ],
  output: {
    path: path.join(__dirname, "dist"),
    filename: "bundle.js",
    publicPath: "/static/"
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  module: {
    loaders: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loaders: ["babel"]
    }, {
      test: /\.jpg/,
      loader: "file"
    }]
  }
};
