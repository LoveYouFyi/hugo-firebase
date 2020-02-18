const common = require("./webpack.common");
const merge = require("webpack-merge");
const MiniCssExtractPlugin = require('mini-css-extract-plugin'); // https://www.npmjs.com/package/mini-css-extract-plugin
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin'); // https://www.npmjs.com/package/optimize-css-assets-webpack-plugin
const path = require("path"); // https://www.npmjs.com/package/path
const TerserPlugin = require('terser-webpack-plugin') // webpack uses this by default

module.exports = merge(common, {
  // webpack v4+ will minify your code by default in production mode.
  mode: 'production',

  output: {
		filename: '[name].[contenthash].js',
    path: path.resolve(__dirname, './../static/dist'),
  },

  optimization: {
    minimizer: [
      // OptimizeCssAssetsPlugin breaks default 'production' mode js minimizing
      new OptimizeCssAssetsPlugin(),
      new TerserPlugin() // js minimizing add back what production uses by default
    ]
  },

  plugins: [
		new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css',
      path: path.resolve(__dirname, './../static/dist'),
		}),
  ],

});