import merge from "webpack-merge";
import baseConfig from "./webpack.config.base";
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';

export default merge(baseConfig, {
    mode: 'production',
    plugins: [
        new BundleAnalyzerPlugin({
            analyzerMode: 'static'
        })
    ]
})