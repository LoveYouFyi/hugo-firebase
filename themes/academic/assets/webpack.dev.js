const common = require("./webpack.common");
const merge = require("webpack-merge");
const path = require("path"); // https://www.npmjs.com/package/path

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map', // https://webpack.js.org/configuration/devtool/

  output: {
		filename: '[name].js',
    path: path.resolve(__dirname, './js/'),
  },

});