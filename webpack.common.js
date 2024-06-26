const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const ODIN_LIBRARY_NAME = 'odin-library';
const ODIN_TIC_TAC_TOE_NAME = 'odin-tic-tac-toe';
const ODIN_RESTAURANT_PAGE_NAME = 'odin-restaurant-page';
const ODIN_TODO_LIST_NAME = 'odin-todo-list';
const ODIN_FORM_VALIDATION_NAME = 'odin-form-validation';
const ODIN_ASYNC_API_NAME = 'odin-async-api';
const ODIN_WEATHER_APP_NAME = 'odin-weather-app';
const ODIN_RECURSION = 'odin-recursion';
const ODIN_LINKED_LIST = 'odin-linked-list';
const ODIN_HASHMAP = 'odin-hashmap';
const ODIN_BST = 'odin-bst';
const ODIN_KNIGHTS_TRAVAILS = 'odin-knights-travails';
const ODIN_BATTLESHIP = 'odin-battleship';

module.exports = {
  context: path.resolve(__dirname),
  entry: {
    [ODIN_LIBRARY_NAME]: './odin-library/index.js',
    [ODIN_TIC_TAC_TOE_NAME]: './odin-tic-tac-toe/index.js',
    [ODIN_RESTAURANT_PAGE_NAME]: './odin-restaurant-page/index.js',
    [ODIN_TODO_LIST_NAME]: './odin-todo-list/index.js',
    [ODIN_FORM_VALIDATION_NAME]: './odin-form-validation/index.js',
    [ODIN_ASYNC_API_NAME]: './odin-async-api/index.js',
    [ODIN_WEATHER_APP_NAME]: './odin-weather-app/index.js',
    [ODIN_RECURSION]: './odin-recursion/index.js',
    [ODIN_LINKED_LIST]: './odin-linked-list/index.js',
    [ODIN_HASHMAP]: './odin-hashmap/index.js',
    [ODIN_BST]: './odin-bst/index.js',
    [ODIN_KNIGHTS_TRAVAILS]: './odin-knights-travails/index.js',
    [ODIN_BATTLESHIP]: './odin-battleship/index.js',
  },
  output: {
    filename: '[name].[contenthash].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    // Loaders references (prefixes) the assets using 'publicPath'
    // Relative (to HTML file) 'publicPath', same dir in this case './' or ''
    publicPath: './',
    clean: true,
    // Turn off ES2015 features that are turned on by default
    environment: {
      // The environment supports arrow functions ('() => { ... }').
      arrowFunction: false, // 'true' by default
      // The environment supports async function and await ('async function () { await ... }').
      asyncFunction: false, // 'true' by default
      // The environment supports const and let for variable declarations.
      const: false, // 'true' by default
      // The environment supports destructuring ('{ a, b } = obj').
      destructuring: false, // 'true' by default
      // The environment supports 'for of' iteration ('for (const x of array) { ... }').
      forOf: false, // 'true' by default
      // The environment supports 'globalThis'.
      globalThis: false, // 'true' by default
      // The environment supports optional chaining ('obj?.a' or 'obj?.()').
      optionalChaining: false, // 'true' by default
      // The environment supports template literals.
      templateLiteral: false, // 'true' by default
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      inject: false,
      title: 'TOP JavaScript Study Distribution',
      template: path.resolve(__dirname, 'templates/redirect-template.html'),
    }),
    new HtmlWebpackPlugin({
      filename: ODIN_LIBRARY_NAME + '.html',
      chunks: [ODIN_LIBRARY_NAME],
      title: 'Odin Library',
      template: path.resolve(__dirname, 'templates/app-template.html'),
    }),
    new HtmlWebpackPlugin({
      filename: ODIN_TIC_TAC_TOE_NAME + '.html',
      chunks: [ODIN_TIC_TAC_TOE_NAME],
      title: 'Odin Tic Tac Toe',
      template: path.resolve(__dirname, 'templates/app-template.html'),
    }),
    new HtmlWebpackPlugin({
      filename: ODIN_RESTAURANT_PAGE_NAME + '.html',
      chunks: [ODIN_RESTAURANT_PAGE_NAME],
      title: 'Odin Restaurant Page',
      template: path.resolve(__dirname, 'templates/app-template.html'),
    }),
    new HtmlWebpackPlugin({
      filename: ODIN_TODO_LIST_NAME + '.html',
      chunks: [ODIN_TODO_LIST_NAME],
      title: 'Odin Todo List',
      template: path.resolve(__dirname, 'templates/app-template.html'),
    }),
    new HtmlWebpackPlugin({
      filename: ODIN_FORM_VALIDATION_NAME + '.html',
      chunks: [ODIN_FORM_VALIDATION_NAME],
      title: 'Odin Form Validation',
      template: path.resolve(__dirname, 'odin-form-validation/template.html'),
    }),
    new HtmlWebpackPlugin({
      filename: ODIN_ASYNC_API_NAME + '.html',
      chunks: [ODIN_ASYNC_API_NAME],
      title: 'Word to GIF',
      template: path.resolve(__dirname, 'odin-async-api/template.html'),
    }),
    new HtmlWebpackPlugin({
      filename: ODIN_WEATHER_APP_NAME + '.html',
      chunks: [ODIN_WEATHER_APP_NAME],
      title: 'Odin Weather App',
      template: path.resolve(__dirname, 'templates/app-template.html'),
    }),
    new HtmlWebpackPlugin({
      filename: ODIN_RECURSION + '.html',
      chunks: [ODIN_RECURSION],
      title: 'Odin Recursion',
      template: path.resolve(__dirname, 'odin-recursion/template.html'),
    }),
    new HtmlWebpackPlugin({
      filename: ODIN_LINKED_LIST + '.html',
      chunks: [ODIN_LINKED_LIST],
      title: 'Odin Linked List',
      template: path.resolve(__dirname, 'odin-linked-list/template.html'),
    }),
    new HtmlWebpackPlugin({
      filename: ODIN_HASHMAP + '.html',
      chunks: [ODIN_HASHMAP],
      title: 'Odin HashMap',
      template: path.resolve(__dirname, 'odin-hashmap/template.html'),
    }),
    new HtmlWebpackPlugin({
      filename: ODIN_BST + '.html',
      chunks: [ODIN_BST],
      title: 'Odin Binary Search Tree',
      template: path.resolve(__dirname, 'odin-bst/template.html'),
    }),
    new HtmlWebpackPlugin({
      filename: ODIN_KNIGHTS_TRAVAILS + '.html',
      chunks: [ODIN_KNIGHTS_TRAVAILS],
      title: 'Odin Knights Travails',
      template: path.resolve(__dirname, 'templates/app-template.html'),
    }),
    new HtmlWebpackPlugin({
      filename: ODIN_BATTLESHIP + '.html',
      chunks: [ODIN_BATTLESHIP],
      title: 'Odin Battleship',
      template: path.resolve(__dirname, 'templates/app-template.html'),
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(?:jpeg|jpg|png|gif|svg)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'asset/images/[hash][ext][query]',
        },
      },
      {
        test: /\.(?:js|mjs|cjs)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [['@babel/preset-env']], // Apply 'targets' from 'browserslist' in 'package.json'
            cacheDirectory: true, // For faster compilation
          },
        },
      },
    ],
  },
  /* 
      No need for runtime chunk optimization,
      because i don't use multiple entries (chunks) for single html output,
      but instead with 'html-webpack-plugin', 
      i am creating multiple html outputs (single output (html) per entry (chunk)). 
    */
  // optimization: {
  //   runtimeChunk: "single",
  // },
};
