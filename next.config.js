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
    config.module.rules.push(
      {
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
      }
    );

    return config
  }
};

module.exports = withPlugins([
  [withSass, sassConfig]
], nextConfiguration);

module.exports = withSass({
  cssModules: true,
  cssLoaderOptions: {
    importLoaders: 1,
    localIdentName: "[local]___[hash:base64:5]",
  }
});

const path = require( "path" );
const glob = require( "glob" );

module.exports = {
  webpack: ( config, { dev } ) => {
    config.module.rules.push(
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              "@babel/preset-env",
              "@babel/preset-react"
            ].map(require.resolve)
          }
        }
      },
      {
        test: /\.css$/,
        use: [
          {loader: "style-loader"},
          {loader: "css-loader", options: { minimize: true }}
        ]
      },
      {
        test: /\.(png|jpg|gif)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192
            }
          }
        ]
      },
      {
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        use: [{
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            outputPath: 'fonts/'
          }
        }]
      }, //
      {
        test: /\.(css|scss)/,
        loader: "emit-file-loader",
        options: {
          name: "dist/[path][name].[ext]"
        }
      },
      {
        test: /\.css$/,
        use: [ "babel-loader", "raw-loader", "postcss-loader" ]
      },
      {
        test: /\.s(a|c)ss$/,
        use: [
          "babel-loader",
          "raw-loader",
          "postcss-loader",
          {
            loader: "sass-loader",
            options: {
              includePaths: [ "scss", "node_modules" ]
                .map( d => path.join( __dirname, d ) )
                .map( g => glob.sync( g ) )
                .reduce( ( a, c ) => a.concat( c ), [] )
            }
          }
        ]
      }
    );
    return config;
  }
};

module.exports = withSass( {
  webpack: function ( config ) {
    config.module.rules.push( {
      test: /\.(eot|woff|woff2|ttf|svg|png|jpg|gif)$/,
      use: {
        loader: 'url-loader',
        options: {
          limit: 100000,
          name: '[name].[ext]'
        }
      }
    } );
    return config
  }
} );

