var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    // Seperates the application into chunks
    entry: {
        'app': './src/main.js',
        'theme': './src/theme.js'
    },
    output: {
        path: path.resolve('dist'), //Serves it out of distribution folder
        publicPath: '/',
        filename: '[name].js',
        chunkFilename: '[id].chunk.js'
    },

    // Determines the naming convention
    resolve: {
        extensions: ['', '.js', '.ts']
    },

    module: {
        loaders: [
            // Loads css
            {
                test: /\.css$/,
                exclude: path.resolve('node_modules'),
                loader: ExtractTextPlugin.extract("style-loader", "css-loader")
            },

            // Loads fonts and images into the html as DataUrl if files are less than 10kb
            {
                test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
                exclude: path.resolve('node_modules'),
                loader: 'url-loader?limit=10000000&name=assets/[name].[hash].[ext]'
            }
        ]
    },

    plugins: [
        // Seperates the application into chunks
        new webpack.optimize.CommonsChunkPlugin({
          name: ['app', 'theme']
        }),
        // Pulls the css into seperate bundles
        new ExtractTextPlugin("[name].css"),
        // Injects the bundles into the index.html
        new HtmlWebpackPlugin({
          template: 'src/index.html'
        })
    ]
};
