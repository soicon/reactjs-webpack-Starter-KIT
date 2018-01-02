const path = require("path");

const HtmlWebpackPlugin  = require('html-webpack-plugin');

const CSSPlugin = require('extract-text-webpack-plugin');

const paths = {
    DIST : path.resolve(__dirname,'dist'),
    JS : path.resolve(__dirname,'src'),
    PUBLIC : path.resolve(__dirname,'public'),
};


module.exports = {
    entry: path.join(paths.JS,'index.js'),
    output: {
        path: paths.DIST,
        filename: "app.bundle.js"
    },
    plugins: [
        new HtmlWebpackPlugin({
            template:path.join(paths.PUBLIC,'index.html')
        }),
        new CSSPlugin('style.bundle.css'),
    ],
    module: {
        rules: [
            {
                test:/\.(js|jsx)$/,
                exclude: /node_modules/,
                use: [
                    'babel-loader',
                ],
            },
            {
                test:/\.css$/,
                loader: CSSPlugin.extract({
                    use: 'css-loader',
                }),
            }
        ],
    },
    resolve: {
        extensions: ['.js','jsx'],
    }
}