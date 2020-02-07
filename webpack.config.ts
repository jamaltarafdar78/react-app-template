import path from "path";
import webpack from "webpack";

const config: webpack.Configuration = {
    mode: 'production',
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),  // need to define absolute path
        filename: 'app.bundle.js'
    }
}

export default config;