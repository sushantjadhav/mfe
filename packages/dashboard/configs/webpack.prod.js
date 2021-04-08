const path = require('path');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const { merge } = require('webpack-merge');

const baseConfig = require('./webpack.base');
const packageJson = require('../package.json');

const prodConfig = {
  mode: 'production',
  output: {
    filename: '[name].[contenthash].js',
    publicpath: '/dashboard/latest/',
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'dashboard',
      filename: 'remoteEntry.js',
      exposes: { './DashboardApp': './src/bootstrap.js' },
      shared: packageJson.dependencies,
    }),
  ],
};

module.exports = merge(baseConfig, prodConfig);
