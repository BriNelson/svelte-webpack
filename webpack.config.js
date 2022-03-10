const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  // This says to webpack that we are in development mode and write the code in webpack file in different way
  mode: "development",
  //Our index file
  entry: "./src/index.js",
  //Where we put the production code
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
    publicPath: "/",
  },
  module: {
    rules: [
      //Allows use of svelte
      {
        test: /\.svelte$/,
        use: {
          loader: "svelte-loader",
        },
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },

  resolve: {
    extensions: [".mjs", ".js", ".svelte"],
  },

  plugins: [
    //Allows to create an index.html in our build folder
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "public/index.html"),
    }),
  ],
  ////Config for webpack-dev-server module
  devServer: {
    static: {
      directory: path.join(__dirname, "public"),
    },
    compress: true,
    port: 9000,
  },
};
