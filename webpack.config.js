const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
// const { start } = require('repl');



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
                exclude: /node_modules/, 
                use: [ "style-loader", "css-loader"],
            },
        ]
    },

    devServer: {
        
        static: {
            directory: path.join(__dirname, 'dist'),
            publicPath: '/dist',
        },
        proxy: {
            '/api/workouts': 'http://localhost:1234'
        }
    },
};
