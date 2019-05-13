const withSass = require('@zeit/next-sass');
const withPlugins = require('next-compose-plugins');
const webpack = require('webpack');

const nextConfiguration = {
  webpack: config => {
    config.plugins.push(
      new webpack.DefinePlugin({
        PC: JSON.stringify('pc')
      })
    );
    return config;
  },
};

const sassConfig = {
  cssModules: true,
  cssLoaderOptions: {
    importLoaders: 1,
    localIdentName: '[local]___[name]___[hash:base64:5]'
  }
};

module.exports = {
  webpack: (config, { defaultLoaders }) => {
    config.module.rules.push({
      test: /\.scss$/,
      use: [
        defaultLoaders.babel,
        {
          loader: require('styled-jsx/webpack').loader,
          options: {
            type: 'scoped'
          }
        },
        'sass-loader'
      ]
    });

    return config
  }
};

module.exports = withPlugins([
  [withSass, sassConfig]
], nextConfiguration);

module.exports = {
  target: 'serverless'
};
