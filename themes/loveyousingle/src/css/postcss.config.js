module.exports = {
  plugins: {
    '@fullhuman/postcss-purgecss': {
      content: [`${__dirname}/../../layouts/**/*.html`],
      whitelist: [
        'highlight',
        'language-bash',
        'pre',
        'code',
        'content',
        'h3',
        'h4',
        'ul',
        'li'
      ]
    },
    // Modern CSS Today: https://github.com/csstools/postcss-preset-env
    'postcss-preset-env': {
      // browsers list is in package.js
    },
    // PostCSS autoprefixer options: https://github.com/csstools/postcss-preset-env#autoprefixer
    autoprefixer: { grid: true }
  }
};
