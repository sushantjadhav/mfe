const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  devServer: { port: 8080 },
  plugins: [
    new HtmlWebpackPlugin({ template: './public/index.html' }),
    new ModuleFederationPlugin({
      name: 'container',
      remotes: [
        { MarketingRemote: 'marketing@http://localhost:8081/remoteEntry.js' },
        { DashboardRemote: 'dashboard@http://localhost:8082/remoteEntry.js' },
        { AuthRemote: 'auth@http://localhost:8083/remoteEntry.js' },
      ],
    }),
  ],
};
