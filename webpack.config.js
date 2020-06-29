const path = require('path');

module.exports = {
  entry: './server.ts',
  module: {
    rules: [
      {
        test: /\.(tsx|ts)?$/,
        loader: ['babel-loader', 'ts-loader'],
        include: path.resolve(__dirname, '.'),
        exclude: /node_modules|client|lib/,
      },
      {
        test: /\.(js)?$/,
        loader: ['babel-loader'],
        include: path.resolve(__dirname, '.'),
        exclude: /node_modules|client|lib/,
      },
      {
        test: /\.(png|gif|jpg|svg)$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 50000,
          },
        },
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.scss', '.js', '.json', '.png', '.gif', '.jpg', '.svg'],
  },
  output: {
    path: path.resolve(__dirname, 'lib/'),
    publicPath: '',
    filename: 'output.js',
    libraryTarget: 'umd',
  },
};

