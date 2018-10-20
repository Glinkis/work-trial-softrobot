const HtmlWebpackPlugin = require("html-webpack-plugin");
const { common } = require("./webpack.common");

module.exports = {
  ...common,
  mode: "production",
  plugins: [
    new HtmlWebpackPlugin({
      title: "work-trial-softrobot",
      template: `${__dirname}/template.prod.html`
    })
  ]
};
