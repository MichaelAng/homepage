var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        'app': './src/main.js'
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

    plugins: [
        new webpack.NoErrorsPlugin(),
        new webpack.optimize.UglifyJsPlugin({ // https://github.com/angular/angular/issues/10618
            mangle: {
                keep_fnames: true
            }
        }),

        // Injects the bundles into the index.html
        new HtmlWebpackPlugin({
          template: 'src/index.html'
        })
    ]
};
