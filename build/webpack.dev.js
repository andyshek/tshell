const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

function resolve(p) {
    return path.resolve(__dirname, p)
}

const Render = {
    entry: {
        render: './src/render.ts'
    },
    mode: process.env.NODE_ENV || 'development',
    target: 'electron-renderer',
    module: {
        rules: [
            {
                test: /\.(js|jsx|ts|tsx)$/,
                exclude: /node_modules/,
                use: 'babel-loader'
            },
            {
                test: /\.(scss)$/,
                exclude: /node_modules/,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
            },
            {
                test: /\.(css)$/,
                exclude: /node_modules/,
                use: [MiniCssExtractPlugin.loader, 'css-loader']
            },
            {
                test: /\.(png|jpg|gif|svg)$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 8192
                        }
                    }
                ]
            }
        ]
    },
    output: {
        path: resolve('../dist'),
        filename: '[name].bundle.js'
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx', '.json', 'scss', 'css', 'less']
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'tshell',
            template: 'src/assets/index.html'
        }),
        new MiniCssExtractPlugin()
    ],
    devServer: {
        port: 8080,
        hot: true,
        historyApiFallback: true,
        compress: true
    }
}

module.exports = [Render]
