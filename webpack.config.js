const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  // dictates development or production environment
  mode: process.env.NODE_ENV,
  // where Webpack starts constructing bundle.js
  entry: './src/client/index.tsx',
  // where bundle.js will be placed after compiling
  output: {
    path: path.join(__dirname, '/dist'),
    filename: 'bundle.js',
    publicPath: '/',
  },
  
  plugins: [
    new HTMLWebpackPlugin({
      template: './src/client/index.html',
    }),
  ],
  // details for bundle transpiling
  module: {
    rules: [
      {
        // transpile js or jsx files
        test: /\.jsx?$/,
        // node_modules already transpiled
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            // env is ES6 to ES5, react is jsx to js (order matters)
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },

      {
        // transpile scss or sass
        test: /\.s[ac]ss$/i,
        // creates style nodes from JS strings, translates CSS into Common JS, Compiles SASS to CSS (order matters)
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        // transpile css
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(jpe?g|png|gif|svg|mp3)$/i,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.jsx'],
    modules: [path.join(__dirname, './node_modules')],
  },
  // server allows for hot module reloading (HMR) in dev mode
  devServer: {
    static: {
      directory: path.join(__dirname, './dist'),
      publicPath: '/',
    },
    historyApiFallback: true,
    proxy: {
      '/': 'http://localhost:3001',
    }
  }
};