import path from "path";
import webpack from "webpack";

const config: webpack.Configuration = {
    mode: 'production',
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),  // need to define absolute path
        filename: 'app.bundle.js'
    },
    module:{
        rules:[
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                options:{
                    presets:['@babel/preset-env']
                }
            }
        ]
    }

}

export default config;