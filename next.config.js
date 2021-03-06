require( 'dotenv' ).config();
const Prismic = require( 'prismic-javascript' );
const path = require( 'path' );
const glob = require( 'glob' );
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
        test: /\.(png|jpg|jpeg|gif)$/i,
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
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              ouputPath: 'fonts/'
            }
          },
          {
            test: /\.(gif|png|jpe?g|svg)$/i,
            use: [
              'file-loader',
              {
                loader: 'image-webpack-loader',
                options: {
                  mozjpeg: {
                    progressive: true,
                    quality: 65
                  },
                  // optipng.enabled: false will disable optipng
                  optipng: {
                    enabled: false,
                  },
                  pngquant: {
                    quality: [0.65, 0.90],
                    speed: 4
                  },
                  gifsicle: {
                    interlaced: false,
                  },
                  // the webp option will enable WEBP
                  webp: {
                    quality: 75
                  }
                }
              },
            ],
          }
        ]
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
    // we fetch our list of campaigns, this allow us to dynamically generate the exported
    // pages
    const API = await Prismic.api( process.env.PRISMIC_API );

    const campaignList = await API.query( Prismic.Predicates.at( 'document.type', 'campaign' ), { lang: 'fr-FR' } );

    // tranform the list of posts into a map of pages with the pathname `/campagnes/:slug`
    const campaigns = campaignList.results.reduce(
      ( base, current ) => ( Object.assign( {}, base, {
        [ `/campagnes/${ current.uid }` ]: {
          page: '/campagnes',
          query: { slug: current.uid }
        }
      } ) ), {}
    );
  
    const artistPerPages = 16;
    
    const artistes = await API.query( Prismic.Predicates.at( 'document.type', 'artists' ), { lang: 'fr-FR' } );

    const artisteLength = artistes.results[ 0 ].data.artists.length;

    const pageLength = Math.round( artisteLength / artistPerPages );

    const artistList = {};

    for (let i = 1; i <= pageLength; i += 1) {
      artistList[ `/artistes/page-${ i }` ] = {
        page: '/artistes/page-[page]',
        query: { page: i }
      };
    }

    const artists = artistes.results[ 0 ].data.artists.reduce( ( base, current ) => (
      Object.assign( {}, base, {
        [ `/artiste/${ current.artist.uid }` ]: {
          page: '/artiste/[name]',
          query: { name: current.artist.uid }
        }
      } )
    ), {} );

    return Object.assign( {}, campaigns, artistList, artists, {
      '/': { page: '/' },
      '/galerie': { page: '/galerie' },
      '/contact': { page: '/contact' },
      '/la-fondatrice': { page: '/la-fondatrice' },
      '/partager': { page: '/partager' },
      '/collections': { page: '/collections' },
    } );
  },
  
  publicRuntimeConfig: { prismic: process.env.PRISMIC_API }
} );
