const webpack = require('webpack');
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const production = process.env.NODE_ENV === 'production';

module.exports = {
    mode: production ? "production" : "development",
    entry: {
        myAppName: path.resolve(__dirname, "./src/index.js")
    },
    output: {
        path: path.resolve(__dirname, "./public"),
        filename: production ? '[name].[contenthash].js' : '[name].js',
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx|ts|tsx)$/,
                exclude: /node_modules/,
                use: ["babel-loader"],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif|ttf|eot|woff|woff2)$/i,
                type: 'asset/resource',
            },
            {
                test: /\.s(a|c)ss$/,
                exclude: /node_modules/,
                use: [
                    production ? MiniCssExtractPlugin.loader : 'style-loader',
                    {
                        loader: 'css-loader',
                    },
                    {
                        loader: 'sass-loader',
                    }
                ]
            },
        ]
    },
    resolve: {
        extensions: ["*", ".js", ".jsx", ".css", ".scss"],
        alias: {
            "assets": path.resolve(__dirname, "src/assets"),
            "components": path.resolve(__dirname, "src/components"),
            "helpers": path.resolve(__dirname, "src/helpers"),
            "styles": path.resolve(__dirname, "src/styles"),
            "views": path.resolve(__dirname, "src/views"),
        }
    },
    plugins: [
        new CleanWebpackPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            title: "Webpack App",
            template: "./src/index.html",
        }),
        new MiniCssExtractPlugin({
            filename: production ? '[name].[contenthash].css' : '[name].css',
        }),
    ],
    devServer: {
        port: 3001,
        hot: true,
    },
}
