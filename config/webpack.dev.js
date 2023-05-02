const { merge } = require("webpack-merge");
const common = require("./webpack.common");

module.exports = merge(common, {
  
  mode: "development",
  devtool: "inline-source-map",
  devServer: {
    // headers: {
    //   'Access-Control-Allow-Origin': '*',
    //   'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
    //   'Access-Control-Allow-Headers': 'X-Requested-With, content-type, Authorization',
    //   'Content-Type': 'application/javascript'
    // },
    open: true,
    hot: true,
    compress: true,
    port: 8081,
    historyApiFallback: true,
    liveReload: true,
  },
  output: {
    filename: "[name].[contenthash].js",
  },
  module: {
    rules: [
      {
        test: /\.(sa|sc|c)ss$/i,
        use: ["style-loader", "css-loader", "postcss-loader", "sass-loader"],
      },
    ],
  },
});
