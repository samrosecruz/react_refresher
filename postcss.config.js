module.exports = ctx => {
  return {
    plugins: [
      // ...
      require('postcss-preset-env')({
        importFrom: [require.resolve('./src/css-utils/variables.css')]
      })
      // ...
    ]
  }
}
