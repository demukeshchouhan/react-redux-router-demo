var path = require("path");
var HtmlWebpackPlugin = require('html-webpack-plugin');
var webpack = require("webpack");


module.exports = {
    entry : "./src/index.jsx",
    output : {
        path : path.join(__dirname, "public"),
        filename : "./bundle.js",
        publicPath: '/public/'
    },
    module : {
        rules : [
            {
                loader : "babel-loader",
                test : /\.j?sx/,
                exclude : /node_modules/
            }
        ]
    },
    devtool: 'cheap-module-source-map',
    devServer : {
        contentBase : path.resolve(__dirname, "public"),
        compress: true, 
        historyApiFallback: true,
    },
    plugins: [
        new HtmlWebpackPlugin()

    ],
    resolve : {
        extensions : [".js", ".jsx"]
    }
}