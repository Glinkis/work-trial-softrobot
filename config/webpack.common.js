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
    "react-dom": "ReactDOM",
    "react-table": "ReactTable.default"
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
