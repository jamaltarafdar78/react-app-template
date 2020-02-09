import merge from "webpack-merge";
import baseConfig from "./webpack.config.base";
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';
import {Configuration} from "webpack";

const prodOverrides: Partial<Configuration> = {
    mode: 'production',
    plugins: [
        new BundleAnalyzerPlugin({
            analyzerMode: 'static'
        })
    ],
    externals: {
        react: 'React',
        'react-dom': 'ReactDOM' 
    }
}

export default merge(baseConfig,prodOverrides)