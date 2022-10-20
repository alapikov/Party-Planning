const webpack = require('webpack')
const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: './src/index.tsx',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, './dist')
    },
    target: 'web',
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx']
    },
    module: {
        rules: [
            {
                test: /\.tsx$/,
                use: 'ts-loader',
                include: path.resolve(__dirname, 'src'),
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                    },
                },
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader", 'postcss-loader'],
            },
            {
                test: /\.(gif|png|jpe?g|svg)$/i,
                use: [
                  'file-loader',
                  {
                    loader: 'image-webpack-loader',
                    options: {
                        disable: true,
                    },
                  },
                ],
              }
        ],
    },
    plugins: [
        new htmlWebpackPlugin({
            template: path.join(__dirname, 'src', 'index.html')
        }),
        new webpack.ProvidePlugin({
            process: 'process/browser',
          }),
    ],
    devServer: {
        port: '9960',
        static: {       
            directory: path.resolve(__dirname, './dist')
        },
        liveReload: true
    },
}
