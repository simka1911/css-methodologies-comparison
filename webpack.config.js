var HtmlWebpackPlugin = require('html-webpack-plugin');
var MiniCssExtractPlugin = require("mini-css-extract-plugin");
var path = require("path");

module.exports = {
    mode: 'development',
    entry: {
        bem: "./src/scripts/bem.js",
        oocss: "./src/scripts/oocss.js",
        smacss: "./src/scripts/smacss.js"
    },
    output: {
        path: path.join(__dirname, "dist"),
        filename: "js/[name].js"
    },
    optimization: {
      splitChunks: {
        chunks: 'all'
      }
    },
    watch: true,
    resolve: { extensions: [".js", ".css", ".scss"] },
    devServer: {
        contentBase: path.join(__dirname, "dist"),
        port: 9000
    },
    module:{
        rules:[
            {
                test:/\.(s*)css$/,
                use: [
                  {
                    loader: MiniCssExtractPlugin.loader,
                  },
                  "css-loader",
                  "sass-loader"
                ]
            }
       ]
    },
    plugins: [
        new MiniCssExtractPlugin({
          path: path.join(__dirname, "dist"),
          filename:'css/[name].bundle.css'
        }),
        new HtmlWebpackPlugin({
            hash: true,
            title: 'BEM',
            template: './src/bem.html',
            chunks: ["bem"],
            path: path.join(__dirname, "dist"),
            filename: 'bem.html'
        }),
        new HtmlWebpackPlugin({
            hash: true,
            title: 'OOCSS',
            template: './src/oocss.html',
            chunks: ["oocss"],
            path: path.join(__dirname, "dist"),
            filename: 'oocss.html'
        }),
        new HtmlWebpackPlugin({
            hash: true,
            title: 'SMACSS',
            template: './src/smacss.html',
            chunks: ["smacss"],
            path: path.join(__dirname, "dist"),
            filename: 'smacss.html'
        })
   ]

}
