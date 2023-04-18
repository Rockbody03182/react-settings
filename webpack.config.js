const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

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
  ],
  module: {
    // exclude node_modules
    rules: [
      {
        test: /\.(js|jsx)$/, // <-- added `|jsx` here
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
      {
        test: /\.(sa|sc|c)ss$/i,
        use: ["style-loader", "css-loader", "postcss-loader", "sass-loader"],
      },
    ],
  },
  // pass all js files through Babel
  resolve: {
    extensions: ["*", ".js", ".jsx"], // <-- added `.jsx` here
  },
};
