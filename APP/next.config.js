const withSourceMaps = require('@zeit/next-source-maps')();
const webpack = require('webpack')
const path = require('path');
module.exports = withSourceMaps({
    webpack(config, _options) {
        config.plugins.push(
            new webpack.ProvidePlugin({
                '$': 'jquery',
                'jQuery': 'jquery',
            })
        )
        config.resolve.alias['@'] = path.resolve(__dirname)
        return config
    }
});