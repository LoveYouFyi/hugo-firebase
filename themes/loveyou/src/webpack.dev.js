const common = require("./webpack.common");
const merge = require("webpack-merge");
const MiniCssExtractPlugin = require('mini-css-extract-plugin'); // https://www.npmjs.com/package/mini-css-extract-plugin
const path = require("path"); // https://www.npmjs.com/package/path

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map', // https://webpack.js.org/configuration/devtool/

  output: {
		filename: '[name].js',
    path: path.resolve(__dirname, './../static/dist'),
  },

  plugins: [
		new MiniCssExtractPlugin({
      filename: 'bundle.css',
      path: path.resolve(__dirname, './../static/dist'),
		}),
  ],

});