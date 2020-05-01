const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  mode: 'production',
  devtool: 'cheap-module-source-map',
  entry: { index: './src/index.ts' },
  target: 'node',
  resolve: { 
    extensions: ['.tsx', '.ts', '.js'] 
  },
  output: {
    libraryTarget: 'commonjs',
    filename: '{{ cookiecutter.project_name }}.min.js',
    path: path.resolve(__dirname, '../dist')
  },
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        use: [
          { loader:'babel-loader' },
          {
            loader:'ts-loader',
            options: {
              transpileOnly: true,
              configFile: path.resolve(__dirname, '../tsconfig.json')
            }
          }
        ],
        exclude: '/node_modules/'
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin()
  ]
};
