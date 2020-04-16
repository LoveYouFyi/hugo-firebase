// Academic theme did not use babel, so did not support older browsers
// Important: Must edit filenames after compile so they match original file names
// e.g. academic-search.js becomes academicSearch.js -> must manually edit

const { CleanWebpackPlugin } = require('clean-webpack-plugin') // https://www.npmjs.com/package/clean-webpack-plugin

module.exports = {
  entry: {
    // hyphenated names need to be as 'string'
     academic: './js/src/academic.js',
    'academic-search': './js/src/academic-search.js',
    'algolia-search': './js/src/algolia-search.js',
    'mathjax-config': './js/src/mathjax-config.js'
  },

  plugins: [
//  new CleanWebpackPlugin(), // disabled b/c was deleting child dir 'src' in /js/src
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