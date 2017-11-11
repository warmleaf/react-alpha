// `CheckerPlugin` is optional. Use it if you want async error reporting.
// We need this plugin to detect a `--watch` mode. It may be removed later
// after https://github.com/webpack/webpack/issues/3460 will be resolved.
const { CheckerPlugin } = require('awesome-typescript-loader');

// load the default config generator.
const genDefaultConfig = require('@storybook/react/dist/server/config/defaults/webpack.config.js');

module.exports = (baseConfig, env) => {
    const config = genDefaultConfig(baseConfig, env);

    // add typescript loader:
    config.module.rules.push({
        test: /\.(ts|tsx)$/,
        include: require('path').resolve(__dirname, '../package'),
        loader: 'awesome-typescript-loader'
    }, {
        test: /\.(md|markdown)$/,
        include: [
            require('path').resolve(__dirname, '../package'),
            require('path').resolve(__dirname, '../README.md')
        ],
        loader: "raw-loader"
    });
    config.resolve.extensions.push('.ts', '.tsx');
    config.plugins.push(new CheckerPlugin());

    return config;
};