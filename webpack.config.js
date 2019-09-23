const { join } = require('path');

module.exports = {
    entry: join(__dirname, 'scripts', 'index.jsx'),
    mode: "development",
    output: {
        path: join(__dirname, '/dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)?$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader'
                },
            },
            {
                test: /\.css$/,
                use: [
                    "style-loader",
                    {
                        loader: "css-loader",
                        options: {
                            modules: true
                        }
                    }
                ]
            }
        ]
    },
    devServer: {
        contentBase: join(__dirname, 'dist'),
        port: 9000,
        open: true
    }
};
