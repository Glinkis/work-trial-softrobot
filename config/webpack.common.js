const WebpackPwaManifest = require("webpack-pwa-manifest");
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
    new WebpackPwaManifest({
      name: "work-trial-softrobot",
      short_name: "WTS",
      description: "Softrobot work trial project.",
      theme_color: "#E0E0E0",
      inject: true
    }),
    new WorkboxPlugin.GenerateSW(),
    new OptimizeCssAssetsPlugin()
  ]
};

module.exports = {
  common,
  jsLoader,
  cssLoader
};
