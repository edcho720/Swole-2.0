const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
// const MiniCssExtractPlugin = require('mini-css-extract-plugin);
const { start } = require('repl');



module.exports = {

    entry: './src/index.js',

    output: {
        filename: 'bundle.js',
        path: path.join(__dirname, './dist'), //'./build' or "build"
    },

    plugins: [
        new HTMLWebpackPlugin({
            template: './src/index.html'
        }),
        // [new MiniCssExtractPlugin()]
    ],

    module: {
        rules: [
            {
                test: /\.jsx?/, // files that enf in .jsx or .j (regex - for string matching)
                exclude: /node_modules/, // ignore files in node_modules
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react'] // preset configs for babel
                    }
                }
            },
            {
                test: /\.css$/i, // /\.s[ac]ss$/i or /\.s?css/
                use: [ // order matters here! sass last
                    // MiniCssExtractPlugin.loader
                    "style-loader"// creates 'style' nodes from JS strings
                    , 
                    "css-loader"],// translates CSS into CommonJS // can add a 'sass-loader'
            },
        ]
    },

    devServer: {

        /* publicPath: './build', */ // ---> ? telling it to peek into build folder and add proxy ? not sure 
        proxy: {
           '/': {
                target: 'http://localhost:8080', // dev server
                router: () => 'http://localhost:1234', // server proxy // use this server when making api call
           }
        }
}
};

// npm i -d nodemon ---> to install as dev dependancy use d flag
// killall node ---> npm start

// once you run build you can't edit it by changing code, have to edit then npm run build again with new edits
// delete old bundle file, then rebuild it with edits

// kill server, edit code, rebuild it, restart server

// $ npm run dev: dev server will reflect chnages to code right away // build folder is stored in browser memory
// while in dev mode, and not in our file system (of the app's folder)

// create react app doesn't allow any customization, so try not to use boiler plates
// --> use npm init instead and do it manually