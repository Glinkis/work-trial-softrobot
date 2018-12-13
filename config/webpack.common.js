const ManifestPlugin = require("webpack-manifest-plugin");
const WorkboxPlugin = require("workbox-webpack-plugin");
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");

const jsLoader = {
  test: /js?x$/,
  loader: "ts-loader"
};

const cssLoader = {
  test: /(sa|sc|c)ss$/,
  use: ["style-loader", "css-loader", "sass-loader"]
};

const common = {
  externals: {
    react: "React",
    "react-dom": "ReactDOM"
  },
  devServer: {
    stats: "errors-only"
  },
  module: {
    rules: [jsLoader, cssLoader]
  },
  optimization: {
    runtimeChunk: true,
    splitChunks: {
      chunks: "all"
    }
  },
  resolve: {
    extensions: [".js", ".jsx", ".json"]
  },
  plugins: [
    new ManifestPlugin(),
    new WorkboxPlugin.GenerateSW(),
    new OptimizeCssAssetsPlugin()
  ]
};

module.exports = {
  common,
  jsLoader,
  cssLoader
};
