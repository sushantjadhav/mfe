const path = require('path');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

const { merge } = require('webpack-merge');
const baseConfig = require('./webpack.base');
const packageJeson = require('../package.json');

const domain = process.env.PRODUCTION_DOMAIN;

const prodConfig = {
  mode: 'production',
  output: {
    filename: '[name].[contenthash].js',
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'container',
      remotes: {
        marketingRemote: `marketing@${domain}/marketing/remoteEntry.js`,
        bootstrapRemote: `bootstrap@${domain}/bootstrap/remoteEntry.js`,
        authRemote: `auth@${domain}/auth/remoteEntry.js`,
      },
      shared: packageJeson.dependencies,
    }),
  ],
};

module.exports = merge(baseConfig, prodConfig);
