const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    target: ['web', 'es5'],

    // entry: { index: path.resolve(__dirname, "source", "index.js") }, Permet de modifier l'entrypoint de Webpack
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: ["style-loader", "css-loader", "sass-loader"]
            },
            // {
            //     test: /\.css$/,
            //     use: ["style-loader", "css-loader"]
            // },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react'],
                        plugins: [require("@babel/plugin-transform-arrow-functions")]
                    }
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'src', 'index.html')
        })
    ],
    // optimization: {
        // splitChunks: {chunks: "all"}
    // }
}
