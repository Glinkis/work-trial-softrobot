const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { common, cssLoader } = require("./webpack.common");

cssLoader.use = [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"];

module.exports = {
  ...common,
  mode: "production",
  plugins: [
    new MiniCssExtractPlugin(),
    new HtmlWebpackPlugin({
      title: "work-trial-softrobot",
      template: `${__dirname}/template.prod.html`,
      hash: true
    }),
    ...common.plugins
  ]
};
