module.exports = {
  webpack: (config, { defaultLoaders }) => {
    config.module.rules.push({
      test: [ /\.scss$/, /\.(sa|c)ss$/ ],
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

module.exports = {
  target: 'serverless'
};
