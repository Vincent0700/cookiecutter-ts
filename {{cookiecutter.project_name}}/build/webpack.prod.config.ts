import webpack from 'webpack';
import { merge } from 'webpack-merge';
import baseConfig from './webpack.base.config';

const config: webpack.Configuration = {
  mode: 'production',
  devtool: false
};

export default merge(baseConfig, config);
