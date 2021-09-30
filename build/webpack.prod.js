const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

function resolve(p) {
    return path.resolve(__dirname, p)
}

const Main = {
    entry: {
        main: './src/main.js'
    },
    mode: process.env.NODE_ENV || 'development',
    target: 'electron-main',
    module: {
        rules: [
            {
                test: /\.(js|jsx|ts|tsx)$/,
                exclude: /node_modules/,
                use: 'babel-loader'
            }
        ]
    },
    output: {
        path: resolve('../dist'),
        filename: '[name].bundle.js'
    },
    resolve: {
        extensions: ['.ts']
    },
    plugins: []
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
                use: ['style-loader', 'css-loader', 'sass-loader']
            },
            {
                test: /\.(css)$/,
                exclude: /node_modules/,
                use: ['style-loader', 'css-loader']
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
        })
    ]
}

module.exports = [Main, Render]
