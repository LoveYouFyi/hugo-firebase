const AssetsPlugin = require('assets-webpack-plugin'); // https://www.npmjs.com/package/assets-webpack-plugin
const { CleanWebpackPlugin } = require('clean-webpack-plugin') // https://www.npmjs.com/package/clean-webpack-plugin
const path = require('path'); // https://www.npmjs.com/package/path

module.exports = {
  entry: {
    academicSearch: './js/src/academic-search.js',
    academic: './js/src/academic.js',
    algoliaSearch: './js/src/algolia-search.js'
  },

  plugins: [
    new CleanWebpackPlugin(),
  ],

   module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              [
                // browser compatibility list is in package.js
                '@babel/preset-env',
                {
                  useBuiltIns: 'entry',
                  exclude: [
                    //"transform-regenerator",
                    //"transform-async-to-generator",
                    //"transform-arrow-functions"
                  ]
                }
              ]
            ]
          }
        }
      },
    ],
  },

};