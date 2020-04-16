const AssetsPlugin = require('assets-webpack-plugin'); // https://www.npmjs.com/package/assets-webpack-plugin
const { CleanWebpackPlugin } = require('clean-webpack-plugin') // https://www.npmjs.com/package/clean-webpack-plugin
const MiniCssExtractPlugin = require('mini-css-extract-plugin'); // https://www.npmjs.com/package/mini-css-extract-plugin
const path = require('path'); // https://www.npmjs.com/package/path

module.exports = {
  entry: {
    bundle: './js/bundle.js',
    academicSearch: './js/academic-search.js',
    academic: './js/academic.js',
    vendor: './js/vendor.js'
  },

  plugins: [
    new CleanWebpackPlugin(),

    new AssetsPlugin({
			filename: 'webpack_assets.json',
			path: path.join(__dirname, '../data'),
			prettyPrint: true
		}),

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
      {
        test: /\.(sa|sc|c)ss$/,
        exclude: /node_modules/,
        use: [
          'style-loader',
          MiniCssExtractPlugin.loader, // 3) Extract css into files
          'css-loader', // 2) Turns css into commonjs
          'postcss-loader',
          'sass-loader' // 1) Turns sass into css
        ]
      },
    ],
  },

};