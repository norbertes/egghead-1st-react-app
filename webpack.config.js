module.exports = {
  entry: './app/App.js',
  output: {
    filename: './public/bundle.js'
  },
  module: {
    loaders: [{
      test: /\.jsx?$/,
      exclude: /(bower_components|node_modules)/,
      loader: 'babel',
      query: {
        presets: ['es2015', 'react']
      }
    }]
  }
};
