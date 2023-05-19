const webpack = require("webpack");

module.exports = {
  resolve: {
    extensions: [".js", ".css"],
    alias: {
      // add as many aliases as you like!
      components: path.resolve(__dirname, "src/components"),
    },
    fallback: {
      // path: require.resolve("path-browserify"),
      fs: false,
      assert: require.resolve("assert/"),
      os: require.resolve("os-browserify/browser"),
      constants: require.resolve("constants-browserify"),
      stream: require.resolve("stream-browserify"),
      crypto: require.resolve("crypto-browserify"),
      http: require.resolve("stream-http"),
      https: require.resolve("https-browserify"),
    },
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          { loader: 'css-loader', options: { importLoaders: 1 } },
          {
            loader: 'postcss-loader'
          }
        ]
      }
    ]
  }
};
