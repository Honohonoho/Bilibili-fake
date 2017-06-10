const path = require('path')

module.exports = {
    entry: 'entry.js',
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'bilibili-bundle.js'
    },
    module: {
    rules: [
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: "css-loader"
        })
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin("styles.css"),
  ]
}