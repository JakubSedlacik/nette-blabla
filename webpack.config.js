const path = require ('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    plugins: [new MiniCssExtractPlugin({filename: 'index.css'})],
    entry : [
        './assets/js/index.js',
        './assets/scss/index.scss'
    ],
    output: {
        filename: 'index.js',
        path: path.resolve(__dirname, './www/assets/bundled')
    },
    module: {
        rules: [
            {
                test: /\.scss$/i,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: { url: false }
                    },
                    'sass-loader'
                ]
            }
        ]
    }   
}
