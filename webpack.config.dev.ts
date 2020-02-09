import merge from 'webpack-merge';
import baseConfig from './webpack.config.base';

export default merge(baseConfig, {
    mode: 'development',
    watch: true,
    devtool: 'inline-source-map',
});
