import React, { Fragment, useState } from "react";
import MainComponent                 from "../../Components/Main/Main";
import ArtistesList                  from "../../Components/Artistes/ArtistesList";
import Prismic                       from "prismic-javascript";

import getConfig from 'next/config';

const { publicRuntimeConfig } = getConfig();
import Head      from 'next/head';

const Artistes = ( { artistes, artiste, maxPage, query } ) => {

  const [ page, incrementPage ] = useState( 1 );
  const nextPage = () => {
    if (page >= maxPage) return;
    incrementPage( page + 1 );
  };
  const prevPage = () => {
    if (page <= 1) return;
    incrementPage( page - 1 );
  };

  return (
    <Fragment>
      <Head>
        <title>{ artistes.data.title[ 0 ].text }</title>
        <meta property="og:url" content="https://loucartergallery.com/artistes"/>
        <meta property="og:type" content="website"/>
        <meta property="og:description" content={ artistes.data.description_google[ 0 ].text }/>
        <meta
          property="og:image:secure_url"
          content={ artistes.data.og_image.url }
        />
        <meta
          property="og:image"
          content={ artistes.data.og_image.url }
        />
        <meta property="og:image:width" content={ 600 }/>
        <meta property="og:image:height" content={ 314 }/>
      </Head>
      {console.log(artistes)}
      <MainComponent>
        { artistes &&
        <ArtistesList
          nextPage={ nextPage }
          prevPage={ prevPage }
          currentPage={ query }
          artists={ artistes }
          maxPage={ maxPage }
        />
        }
        {/* TODO renvoyer vers la page 1 des artistes, depuis le getInitialProps */ }
        { !artiste &&
        <h1>PAS ARTISTES</h1>
        }
      </MainComponent>
    </Fragment>
  )
};

Artistes.getInitialProps = async ( { asPath, query } ) => {
  const API = await Prismic.api( publicRuntimeConfig.prismic );
  const page = asPath.substring( 15 );

  const artistes = await API.query(
    Prismic.Predicates.at( 'document.type', 'artists' ), { lang: 'fr-FR' }
  );

  const maxPage = artistes.results[ 0 ].data.artists.length;

  const artiste = await API.query(
    Prismic.Predicates.at( 'document.type', 'artist' ), {
      lang: 'fr-FR',
      orderings: '[my.artist.name]'
    }
  );

  const listIds = artistes.results[0].data.artists.map(item => item.artist.id);
  const allArtists = artiste.results.reduce((artist, current) => {
    if (listIds.includes(current.id)) {
      artist.push(current);
    }
    return artist;
  }, []);

  const pageLength = Math.round(allArtists.length / 1);
  const artistsToDisplay = allArtists.map((artist, i) => {
    return i % pageLength ? [ ] : [ allArtists.slice(i, i + pageLength) ];
  } );

  console.log('artiste', allArtists);

  // let temparray = [];
  // for ( let i=0; let j = allArtists.length; i < j; i += nbArtistPArPAgeOMO) {
  //   temparray = allArtists.slice(i,i+nbArtistPArPAgeOMO);
  // }

  return {
    artistes: artistes.results[ 0 ],
    artiste: artiste.results.length >= 1 && artiste.results,
    allArtists,
    maxPage: pageLength,
    query: query.page ? Number( query.page ) : Number( page )
  }
};

export default Artistes;
