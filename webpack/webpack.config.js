
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var autoprefixer = require('autoprefixer');
var path = require('path');

const ENV = process.env.NODE_ENV || 'development';
const CSS_MAPS = ENV!=='production';

module.exports = {
    context: path.resolve(__dirname, '../src'),
    entry:{
        core: [
            'react-hot-loader/patch',
            'webpack-dev-server/client?http://localhost:8080',
            'webpack/hot/only-dev-server',
            '../src/index.js'
        ]
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            },

            {
                test: /\.(less|css)$/,
                exclude: /node_modules/,
                use:ExtractTextPlugin.extract({
                    use: [
                        {
                            loader: 'style-loader'
                        },
                        {
                            loader: 'css-loader',
                            query: {
                                importLoaders: 1,
                                modules: true,
                                sourceMap: `${CSS_MAPS}`
                            }
                        },
                        {
                            loader: 'postcss-loader'
                        },
                        {
                            loader: 'less-loader'
                        }
                    ]
                })
            },

            {
                test: /\.json$/,
                loader: 'json'
            },

            {
                test: /\.(jpg|png|gif|eot|svg|ttf|woff|woff2)$/,
                loader: 'file',
            }
        ]
    },

    resolve: {
        extensions: ['*', '.js', '.jsx', '.less'],
        modules: ['node_modules']
    },

    devtool: ENV==='production' ? 'source-map' : 'cheap-module-eval-source-map',

    output: {
        path: path.resolve(__dirname, '../dist'),
        publicPath: '/',
        filename: 'bundle.js',
        sourceMapFilename: 'bundle.map',
    },

    devServer: {
        contentBase: path.resolve(__dirname, '../dist'),
        hot: true,
        publicPath: '/',
        historyApiFallback: true
    },

    plugins: [
        new webpack.ProvidePlugin({
            'fetch': 'imports-loader?this=>global!exports-loader?global.fetch!whatwg-fetch'
        }),
        new webpack.HotModuleReplacementPlugin(),
        // enable HMR globally
        new webpack.NamedModulesPlugin(),
        // prints more readable module names in the browser console on HMR updates
        new ExtractTextPlugin({filename: '[name].css', allChunks: true, disable: ENV!=='production'})
    ]
};
