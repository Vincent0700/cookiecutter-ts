import webpack from 'webpack';
import { merge } from 'webpack-merge';
import FriendlyErrorsWebpackPlugin from 'friendly-errors-webpack-plugin';
import baseConfig from './webpack.base.config';

const config: webpack.Configuration = {
  mode: 'development',
  devtool: 'inline-cheap-module-source-map',
  // stats: 'errors-only',
  cache: { type: 'filesystem' },
  watchOptions: { ignored: /node_modules/ },
  performance: { hints: 'error' },
  plugins: [new FriendlyErrorsWebpackPlugin()]
};

export default merge(baseConfig, config);
