const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const { BannerPlugin } = require('webpack');
const ChmodWebpackPlugin = require('chmod-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
  mode: 'production',
  devtool: 'cheap-module-source-map',
  entry: { index: './src/index.ts' },
  resolve: { extensions: ['.tsx', '.ts', '.js'] },
  output: {
    libraryTarget: 'commonjs',
    filename: '{{ cookiecutter.project_name }}.min.js',
    path: path.resolve(__dirname, '../dist')
  },
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        use: ['babel-loader'],
        exclude: '/node_modules/'
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new BannerPlugin({ banner: "#!/usr/bin/env node", raw: true }),
    new ChmodWebpackPlugin(
      [{ path: path.resolve(__dirname, '../dist/{{ cookiecutter.project_name }}.min.js'), mode: 755 }]
    ),
    // new BundleAnalyzerPlugin()
  ]
};
