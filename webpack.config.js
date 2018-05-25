module.exports = function() {
  return {
    entry: "./src/index.js",
    devtool: "source-map",
    output: {
      path: __dirname,
      filename: "index.js",
      library: "replot",
      libraryTarget: "umd",
      umdNamedDefine: true
    },
    module: {
      loaders: [
        {
          test: /\.jsx$/,
          loader: "babel-loader",
          query: {
            "presets": ["es2015", "react"]
          }
        }
      ]
    }
  }
};
