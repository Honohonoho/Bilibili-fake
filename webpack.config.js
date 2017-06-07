const path = require('path')

module.exports = {
    entry: '',
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'bilibili.js'
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