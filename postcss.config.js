module.exports = ctx => {
  return {
    plugins: [
      require('postcss-import')(),
      require('postcss-discard-comments')(),
      require('postcss-apply')(),
      require('postcss-preset-env')({
        importFrom: [require.resolve('./src/css-utils/variables.css')],
        stage: 1
      })
    ]
  }
}
