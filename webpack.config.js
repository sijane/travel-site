module.exports = {
  entry: "./app/assets/scripts/App.js",
  output: {
    path: "/Users/SJ/Sites/travel-site-files/app/temp/scripts",
    filename: "App.js"
  },

  module: {
    loaders: [
      {
        loader: 'babel-loader',
        query: {
          presets: ['es2015']
        },
        test: /\.js$/,
        exclude: /node_modules/   // to only apply to JavaScript and nothing else
      }
    ]
  }
}
