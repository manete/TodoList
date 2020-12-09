const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtracPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const CopyPluging = require('copy-webpack-plugin');
const path = require('path')

module.exports = {
    mode: 'development',
    optimization: {
        minimizer: [new OptimizeCssAssetsPlugin()]
    },
    output: {
        filename: 'main.[contenthash].js',
        path: path.resolve(__dirname, 'dist/')
    },
    module: {
        rules: [{
                test: /\.css$/,
                exclude: /styles\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /styles\.css$/,
                use: [
                    MiniCssExtracPlugin.loader,
                    'css-loader'
                ]

            },
            {
                test: /\.html$/i,
                loader: 'html-loader',
                options: {
                    attributes: false,
                    minimize: false
                }
            },
            {
                test: /\.{png|svg|jpg}$/i,
                use: [{
                    loader: 'file-loader',
                    options: {
                        esModule: false
                    }
                }]

            }
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: './src/index.html',
            filename: './index.html'
        }),
        new MiniCssExtracPlugin({
            filename: '[name].[contenthash].css',
            ignoreOrder: false
        }),
        new CopyPluging({
            patterns: [
                { from: 'src/assets', to: 'assets/', }
            ],

        }),
        new CleanWebpackPlugin(),
    ]

}