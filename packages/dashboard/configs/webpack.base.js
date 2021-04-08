const path = require('path');
const { VueLoaderPlugin } = require('vue-loader');

const baseConfig = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, '../dist'),
    clean: true,
  },
  resolve: {
    extensions: ['.js', '.vue'],
  },
  module: {
    rules: [
      {
        test: /\.(png|jpe?g|woff|svg|eot|ttf)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.vue$/,
        use: 'vue-loader',
      },
      {
        test: /\.scss|\.css/,
        use: ['vue-style-loader', 'style-loader', 'css-loader', 'sass-loader'],
      },

      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env'],
              plugins: ['@babel/plugin-transform-runtime'],
            },
          },
        ],
      },
    ],
  },
  plugins: [new VueLoaderPlugin()],
};

module.exports = baseConfig;
