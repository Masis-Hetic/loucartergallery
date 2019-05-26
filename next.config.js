const Prismic = require( 'prismic-javascript' );

const withSass = require( '@zeit/next-sass' );
const withPlugins = require( 'next-compose-plugins' );
const webpack = require( 'webpack' );

const nextConfiguration = {
  webpack: config => {
    config.plugins.push(
      new webpack.DefinePlugin( {
        PC: JSON.stringify( 'pc' )
      } )
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
  webpack: ( config, { defaultLoaders } ) => {
    config.module.rules.push(
      {
        test: /\.scss$/,
        use: [
          defaultLoaders.babel,
          {
            loader: require( 'styled-jsx/webpack' ).loader,
            options: {
              type: 'scoped'
            }
          },
          'sass-loader'
        ]
      }
    );

    return config;
  }
};

module.exports = withPlugins( [
  [ withSass, sassConfig ]
], nextConfiguration );

module.exports = withSass( {
  cssModules: true,
  cssLoaderOptions: {
    importLoaders: 1,
    localIdentName: '[local]___[hash:base64:5]',
  }
} );

const path = require( 'path' );
const glob = require( 'glob' );

module.exports = {
  webpack: ( config, { dev } ) => {
    config.module.rules.push(
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env',
              '@babel/preset-react'
            ].map( require.resolve )
          }
        }
      },
      {
        test: /\.css$/,
        exclude: '/node_modules/',
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader', options: { minimize: true } }
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
        exclude: '/node_modules/',
        use: [ {
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            ouputPath: 'fonts/'
          }
        } ]
      },
      {
        test: /\.(css|scss)/,
        loader: 'emit-file-loader',
        options: {
          name: 'dist/[path][name].[ext]'
        }
      },
      {
        test: /\.css$/,
        use: [ 'babel-loader', 'raw-loader', 'postcss-loader' ]
      },
      {
        test: /\.s(a|c)ss$/,
        use: [
          'babel-loader',
          'raw-loader',
          'postcss-loader',
          {
            loader: 'sass-loader',
            options: {
              includePaths: [ 'scss', 'node_modules' ].map( d => path.join( __dirname, d ) ).map( g => glob.sync( g ) ).reduce( ( a, c ) => a.concat( c ), [] )
            }
          }
        ]
      }
    );
    return config;
  }
};

const getRoutes = require( './routes' );
module.exports = withSass( {
  webpack: function ( config ) {
    config.module.rules.push( {
      test: /\.(eot|woff|woff2|ttf|svg|png|jpg|gif)$/,
      exclude: '/node_modules/',
      use: {
        loader: 'url-loader',
        options: {
          limit: 100000,
          name: '[name].[ext]',
          ouputPath: 'fonts/'
        }
      }
    } );
    return config;
  },
  async exportPathMap() {
    // // we fetch our list of campaigns, this allow us to dynamically generate the exported
    // pages
    const API = await Prismic.api( 'https://loucarter.cdn.prismic.io/api/v2' );

    const campaignList = await API.query(
      Prismic.Predicates.at( 'document.type', 'campaign' ), { lang: 'fr-FR' }
    );

    // // tranform the list of posts into a map of pages with the pathname `/campagnes/:slug`
    const campaigns = campaignList.results.reduce(
      ( base, current ) => ( Object.assign( {}, {
        [ `/campagnes/${ current.uid }` ]: {
          page: '/campagnes',
          query: { slug: current.uid }
        }
      } ) ), {}
    );

    return Object.assign( {}, campaigns, {
      '/': { page: '/' },
      '/campagnes/:slug': { page: '/campagnes' },
      '/galerie': { page: '/galerie' }
    } );
  }
} );
// module.exports = {
//   exportPathMap: async function() {
//     return {
//       '/': { page: '/' },
//       '/about': { page: '/about' },
//       '/readme.md': { page: '/readme' },
//       '/p/hello-nextjs': { page: '/post', query: { title: 'hello-nextjs' } },
//       '/p/learn-nextjs': { page: '/post', query: { title: 'learn-nextjs' } },
//       '/p/deploy-nextjs': { page: '/post', query: { title: 'deploy-nextjs' } }
//     }
//   }
// }
