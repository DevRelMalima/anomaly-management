var HtmlWebpackPlugin = require("html-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
var webpack = require("webpack");
const path = require("path");

module.exports = {
  mode: "development",
  entry: ["babel-polyfill", "./src/index.jsx"],
  output: {
    path: __dirname + "/dist",
    publicPath: "/",
    filename: "[name].bundle.js",
    chunkFilename: "[name].bundle.js",
  },
  resolve: {
    extensions: [".js", ".jsx"],
  },
  optimization: {
    minimize: false,
    minimizer: [
      new TerserPlugin({
        cache: true,
        parallel: true,
        sourceMap: true, // Must be set to true if using source-maps in production
        terserOptions: {
          // https://github.com/webpack-contrib/terser-webpack-plugin#terseroptions
        },
      }),
    ],
  },
  module: {
    rules: [
      {
        // test: /\.jsx?$/,
        test: /\.js$|jsx/,
        loader: "babel-loader",
      },
      {
        test: /\.css$/,
        use: [
          "style-loader", // creates style nodes from JS strings
          "css-loader", // translates CSS into CommonJS
          //"sass-loader" // compiles Sass to CSS, using Node Sass by default
        ],
      },
      {
        test: /\.inline.svg$/,

        use: [
          {
            loader: "babel-loader",
          },
          {
            loader: "react-svg-loader",
            options: {
              jsx: true, // true outputs JSX tags
            },
          },
        ],
      },
      {
        test: /\.(png|jpg)$/,
        loader: "url-loader?limit=8192",
      },
    ],
  },
  resolve: {
    extensions: [".js", ".jsx"],
    alias: {
      "@": path.resolve(__dirname, "src/"),
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    }),
    // To reduce bundle.js size
    /*new webpack.DefinePlugin(
            {
                'process.env':{
                    'NODE_ENV':JSON.stringify('production')
                }
            }
        ),*/
    //new webpack.optimize.DedupePlugin(),
    //new webpack.optimize.UglifyJsPlugin(),
    //new webpack.optimize.AggressiveMergingPlugin()
  ],
  devServer: {
    historyApiFallback: { index: "/index.html" },
    allowedHosts: [".ngrok.io"],
  },
  externals: {
    // global app config object
    config: JSON.stringify({
      apiUrl: "http://localhost:4000",
    }),
  },
};
