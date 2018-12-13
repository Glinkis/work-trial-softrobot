const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ManifestPlugin = require("webpack-manifest-plugin");
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const { common, cssLoader } = require("./webpack.common");

cssLoader.use = [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"];

module.exports = {
  ...common,
  mode: "production",
  plugins: [
    new MiniCssExtractPlugin(),
    new OptimizeCssAssetsPlugin(),
    new ManifestPlugin(),
    new HtmlWebpackPlugin({
      title: "work-trial-softrobot",
      template: `${__dirname}/template.prod.html`,
      hash: true
    })
  ]
};
