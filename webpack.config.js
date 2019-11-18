const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const BrotliPlugin = require('brotli-webpack-plugin')
const ROOT = path.resolve( __dirname);
const TerserPlugin = require('terser-webpack-plugin');
const isProd = process.env.NODE_ENV === 'production'
const { resolve } = require('path')

module.exports = {
    context: ROOT,
    devServer:{
        contentBase: resolve(__dirname, '..', 'static'),
        hot: true,
        publicPath: '/',
        historyApiFallback: true,
        open: true
      },
    plugins: [
        new HtmlWebpackPlugin({
            template: './develop/index.html'
        }),
        // new webpack.optimize.ModuleConcatenationPlugin(),
        // new BrotliPlugin({
		// 	asset: '[path].br[query]',
		// 	test: /\.(ts|js|css|html|svg)$/,
		// 	threshold: 10240,
		// 	minRatio: 0.8
		// })
    ],
    entry: {
        'main': './develop/main.ts'
    },
    
    output: {
        filename: '[name].bundle.js',
        // publicPath: './dist',
        path: path.resolve( __dirname, 'dist' )
    },

    resolve: {
        extensions: ['.ts', '.js'],
        modules: [
            ROOT,
            'node_modules'
        ]
    },

    module: {
        rules: [
            /****************
            * PRE-LOADERS
            *****************/
            {
                enforce: 'pre',
                test: /\.js$/,
                use: 'source-map-loader'
            },
            {
                enforce: 'pre',
                test: /\.ts$/,
                exclude: /node_modules/,
                use: 'tslint-loader'
            },

            /****************
            * LOADERS
            *****************/
            {
                test: /\.ts$/,
                exclude: [ /node_modules/ ],
                use: 'awesome-typescript-loader'
            }
        ]
    },
    // optimization: {
    //     minimize: true,
    //     minimizer: [new TerserPlugin()],
    //   },
    devtool: 'cheap-module-source-map',
    devServer: {}
};