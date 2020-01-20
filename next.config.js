// next.config.js
const withCSS = require('@zeit/next-css');
const { parsed: localEnv } = require('dotenv').config();
const webpack = require('webpack');

module.exports = withCSS({
  webpack(config) {
    const envKeys = Object.keys(localEnv).reduce((prev, next) => {
      prev[`process.env.${next}`] = JSON.stringify(localEnv[next]);
      return prev;
    }, {});

    config.plugins.push(new webpack.EnvironmentPlugin(localEnv));
    config.plugins.push(new webpack.DefinePlugin(envKeys));

    return config;
  }
});
