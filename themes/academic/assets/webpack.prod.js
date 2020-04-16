const common = require("./webpack.common");
const merge = require("webpack-merge");
const path = require("path"); // https://www.npmjs.com/package/path
const TerserPlugin = require('terser-webpack-plugin') // webpack uses this by default

module.exports = merge(common, {
  // webpack v4+ will minify your code by default in production mode.
  mode: 'production',

  output: {
		filename: '[name].js',
    path: path.resolve(__dirname, './js'),
  },

  optimization: {
    minimizer: [
      // OptimizeCssAssetsPlugin breaks default 'production' mode js minimizing
      new TerserPlugin() // js minimizing add back what production uses by default
    ]
  },

});