const path = require('path');
const webpack = require('webpack');
const SplitByPathPlugin = require('webpack-split-by-path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const basePlugins = [
    new webpack.DefinePlugin({
        __DEV__: process.env.NODE_ENV !== 'production',
        __PRODUCTION__: process.env.NODE_ENV === 'production',
        'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
    }),
    new SplitByPathPlugin([
        { name: 'vendor', path: [__dirname + '/node_modules/'] }
    ]),
    new HtmlWebpackPlugin({
        template: './src/index.html',
        inject: 'body',
    }),
    new webpack.NoErrorsPlugin(),
];

const prodPlugins = [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin({
        mangle: true,
        compress: {
            warnings: false,
        },
    }),
];

const plugins = basePlugins
    .concat(process.env.NODE_ENV === 'production' ? prodPlugins : [])
    .concat(process.env.NODE_ENV === 'development' ? devPlugins : []);

module.exports = {
    entry: {
        app: './src/boot.ts',
    },

    output: {
        path: path.resolve(__dirname, 'public'),
        filename: '[name].[hash].js',
        publicPath: '/',
        chunkFilename: '[id].chunk.js',
    },

    resolve: {
        extensions: ['', '.webpack.js', '.web.js', '.js', '.ts'],
    },

    plugins,

    devServer: {
        historyApiFallback: { index: '/' },
    },

    module: {
        loaders: [{
            test: /\.ts$/,
            loader: 'ts',
            exclude: /node_modules/,
        }, {
            test: /\.html$/,
            loader: 'raw',
            exclude: /node_modules/,
        }, {
            test: /\.less$/,
            loader: 'to-string!css!less',
            exclude: /node_modules/,
        }],
        noParse: [/zone\.js\/dist\/.+/, /angular2\/bundles\/.+/],
    },
};
