const path = require('path');
const node_modules_dir = path.join(__dirname, 'node_modules');
const webpack = require('webpack');

module.exports = {
    entry: {
        'index': './apps/app.js',
    },
    output: {
        path: path.join(__dirname, './dist/'),
        filename: '[name].js',
        chunkFilename: '[name].[chunkhash:5].min.js',
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader'
            },
            {
                test: /\.jsx$/,
                loader: 'babel-loader'
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.less$/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 1
                        }
                    },
                    {
                        loader: 'less-loader',
                        options: {
                            noIeCompat: true
                        }
                    }
                ]
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx', '.less', '.scss', '.css'], //后缀名自动补全
    }
}
