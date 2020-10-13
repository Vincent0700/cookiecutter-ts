import path from 'path';
import webpack from 'webpack';
import { CleanWebpackPlugin } from 'clean-webpack-plugin';

const config: webpack.Configuration = {
  entry: { index: './src/index.ts' },
  resolve: { extensions: ['.tsx', '.ts', '.js'] },
  target: 'node',
  output: {
    library: 'umd',
    filename: 'index.js',
    path: path.resolve(__dirname, '../dist')
  },
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        use: ['babel-loader', 'ts-loader'],
        exclude: '/node_modules/'
      }
    ]
  },
  plugins: [new CleanWebpackPlugin()]
};

export default config;
