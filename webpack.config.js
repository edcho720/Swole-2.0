const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const { start } = require('repl');



module.exports = {

    entry: './src/index.js',

    output: {
        filename: 'bundle.js',
        path: path.join(__dirname, './dist'), 
    },

    plugins: [
        new HTMLWebpackPlugin({
            template: './src/index.html'
        }),
    ],

    module: {
        rules: [
            {
                test: /\.jsx?/, 
                exclude: /node_modules/, 
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react'] 
                    }
                }
            },
            {
                test: /\.css$/i, 
                use: [ "style-loader", "css-loader"],
            },
        ]
    },

    devServer: {
        proxy: {
           '/': {
                target: 'http://localhost:8080', 
                router: () => 'http://localhost:1234', 
           }
        }
    }
};
