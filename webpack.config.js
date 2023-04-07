const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const WebpackAssetsManifest = require("webpack-assets-manifest");

module.exports = {
  // 입력 파일
  entry: {
    main: "./src/index.js",
    another: "./src/Components/Layout/DefaultLayout.js",
  },

  // 출력 파일
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "build"),

    // 파일 이름 브라우저 캐싱 처리
    chunkFilename: "[id]-[chunkhash].js",
  },
  optimization: {
    splitChunks: {
      chunks: "all",
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "public", "index.html"),
    }),
    // new WebpackAssetsManifest({
    //   output: "asset-manifest.json",
    //   customize(entry, original, manufest, asset) {
    //     return {
    //       key: `${entry.key.replace("app", "main")}`,
    //       value: `${entry.value}`,
    //     };
    //   },
    //   transform(assets, manifest) {
    //     return {
    //       files: assets,
    //     };
    //   },
    // }),
  ],
  module: {
    // exclude node_modules
    rules: [
      {
        test: /\.(js|jsx)$/, // <-- added `|jsx` here
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
    ],
  },
  // pass all js files through Babel
  resolve: {
    extensions: ["*", ".js", ".jsx"], // <-- added `.jsx` here
  },
};
