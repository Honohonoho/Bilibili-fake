const path = require('path')

module.exports = {
    entry: './entry.js',
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'bilibili-bundle.js'
    },
    module: {
        loaders:[
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
            presets: ['es2015']
        }
      },
    ]
    }
}