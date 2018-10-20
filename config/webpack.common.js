const jsLoader = {
  exclude: /node_modules/,
  test: /js?x$/,
  loader: "ts-loader"
};

const cssLoader = {
  exclude: /node_modules/,
  test: /(sa|sc|c)ss$/,
  use: ["style-loader", "css-loader", "sass-loader"]
};

const common = {
  externals: {
    react: "React",
    "react-dom": "ReactDOM"
  },
  module: {
    rules: [jsLoader, cssLoader]
  },
  optimization: {
    splitChunks: {
      chunks: "all"
    }
  },
  resolve: {
    extensions: [".js", ".jsx", ".json"]
  }
};

module.exports = {
  common,
  jsLoader,
  cssLoader
};
