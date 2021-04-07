const path = require('path');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const { merge } = require('webpack-merge');

const baseConfig = require('./webpack.base');
const packageJson = require('../package.json');

const prodConfig = {
  mode: 'production',
  output: {
    filename: '[name].[contenthash].js',
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'auth',
      filename: 'auth/remoteEntry.js',
      exposes: { './AuthApp': './src/bootstrap.js' },
      shared: packageJson.dependencies,
    }),
  ],
};

module.exports = merge(baseConfig, prodConfig);
