const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const BrotliPlugin = require('brotli-webpack-plugin'); //brotli
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const CompressionPlugin = require('compression-webpack-plugin'); //gzip
module.exports = {
  entry: "./src/App.test.tsx",
  target: "web",
  mode: "development",
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "bundle.js",
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules|\.d\.ts$/,
        use: ["ts-loader"],
      },

      {
        test: /\.(css|sass|scss)$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader'
          },
          {
            loader: 'sass-loader'
          },
        ],
      },
      {
        test: /\.(jpg|jpeg|png|gif|mp3|svg)$/,
        use: ["file-loader"],
      },
      {
        test: /\.less$/,
        use: [{
          loader: 'style-loader',
        }, {
          loader: 'css-loader', // translates CSS into CommonJS
        }, {
          loader: 'less-loader', // compiles Less to CSS
          options: {
            lessOptions: { // If you are using less-loader@5 please spread the lessOptions to options directly
              modifyVars: {
                'primary-color': '#1DA57A',
                'link-color': '#1DA57A',
                'border-radius-base': '2px',
              },
              javascriptEnabled: true,
            },
          },
        }
        ]
      }
    ]
  },
  plugins: [new BundleAnalyzerPlugin(), new CompressionPlugin(
  ), new BrotliPlugin({ //brotli plugin
    asset: '[path].br[query]',
    test: /\.(js|css|html|svg)$/,
    threshold: 10240,
    minRatio: 0.8
  }),
  new HtmlWebpackPlugin({
    template: path.join(__dirname, "src", "index.html"),
  }),
  ],

};
