module.exports = function() {
  return {
    entry: "./src/index.js",
    output: {
      path: __dirname,
      filename: "index.js"
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
