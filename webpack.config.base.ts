import path from "path";
import webpack from "webpack";
import HTMLWebpackPlugin from "html-webpack-plugin";
import ForkTsCheckerWebpackPlugin from "fork-ts-checker-webpack-plugin";

const config: webpack.Configuration = {
    context: __dirname,
    mode: 'production',
    entry: './src/index.tsx',
    output: {
        path: path.resolve(__dirname, 'dist'),  // need to define absolute path
        filename: 'app.bundle.js'
    },
    resolve:{
        extensions: ['.ts', '.tsx', '.js']
    },
    module:{
        rules:[
            {
                test: /\.tsx?$/,
                loader: 'ts-loader',
                options:{
                    transpileOnly: true
                }
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }
        ]
    },
    plugins:[
        new HTMLWebpackPlugin({
            template: './src/index.html'
        }),
        new ForkTsCheckerWebpackPlugin(),
    ]

}

export default config;