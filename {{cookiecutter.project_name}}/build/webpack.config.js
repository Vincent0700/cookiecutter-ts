const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  mode: 'production',
  devtool: 'cheap-module-source-map',
  entry: { index: './src/index.ts' },
  resolve: { extensions: ['.tsx', '.ts', '.js'] },
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        use: ['babel-loader', 'ts-loader'],
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin()
  ],
  output: {
    libraryTarget: 'commonjs2',
    filename: '{{ cookiecutter.project_name }}.min.js',
    path: path.resolve(__dirname, '../dist')
  }
};
