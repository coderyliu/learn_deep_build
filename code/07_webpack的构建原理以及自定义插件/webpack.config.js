const path = require("node:path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/main.js",
  output: {
    path: path.join(__dirname, "dist"),
    filename: "bundle.js"
  },
  mode: "development",
  resolveLoader: {
    modules: ["node_modules", "./自定义loader"]
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-env"]
            }
          },
          // {
            // 自定义loader的加载方式
            // loader: "./自定义loader/01_ly_loader.js"
            // 如果想要直接使用文件名，需要使用resolveLoader.modules
          //   loader: "01_ly_loader"
          // },
          // {
          //   loader: "02_ly_loader"
          // },
          // {
          //   loader: "03_ly_loader"
          // },
          // {
          //   loader: "04_ly_loader",
          //   options: {
          //     name: "coder",
          //     age: 18
          //   }
          // }
        ]
      },
      {
        test: /\.md$/,
        use: ["md-loader"]
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      }
    ]
  },
  plugins: [new HtmlWebpackPlugin()]
};
