const MonacoWebpackPlugin = require('monaco-editor-webpack-plugin');

module.exports = (baseConfig, env, defaultConfig) => {
  // Extend defaultConfig as you need.
  defaultConfig.plugins.push(new MonacoWebpackPlugin())

  return defaultConfig;
};