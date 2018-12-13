const HtmlWebpackPlugin = require("html-webpack-plugin");
const { common, cssLoader } = require("./webpack.common");

cssLoader.use = [
  "style-loader?sourceMap",
  "css-loader?sourceMap",
  "sass-loader?sourceMap"
];

module.exports = {
  ...common,
  mode: "development",
  devtool: "source-map",
  plugins: [
    ...common.plugins,
    new HtmlWebpackPlugin({
      title: "work-trial-softrobot (dev)",
      template: `${__dirname}/template.dev.html`
    })
  ]
};
