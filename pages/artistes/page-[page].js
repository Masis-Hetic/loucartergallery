import React, { Fragment, useState } from "react";
import MainComponent       from "../../Components/Main/Main";
import ArtistesList        from "../../Components/Artistes/ArtistesList";
import Prismic             from "prismic-javascript";

import getConfig from 'next/config';

const { publicRuntimeConfig } = getConfig();
import Head      from 'next/head';

const Artistes = ( { artistes, artiste, maxPage } ) => {
  // noinspection JSUnresolvedVariable

  const [page, currentPage] = useState(1);
  const changePage = () => {
    currentPage(page + 1);
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

      <MainComponent>
        {artiste &&
        <ArtistesList page={changePage} currentPage={page} artists={artiste} maxPage={maxPage}/>
        }
        {!artiste &&
        <h1>PAS ARTISTE</h1>}
      </MainComponent>
    </Fragment>
  )
};

Artistes.getInitialProps = async ({ asPath, query }) => {
  const API = await Prismic.api( publicRuntimeConfig.prismic );

  const page = asPath.substring(15);
  const artistes = await API.query(
    Prismic.Predicates.at( 'document.type', 'artists' ), { lang: 'fr-FR' }
  );

  const maxPage = artistes.results[0].data.artists.length;

  const artiste = await API.query(
    Prismic.Predicates.at( 'document.type', 'artist' ), {
      lang: 'fr-FR',
      pageSize: 1,
      page: page,
      orderings: '[my.artist.name]'
    }
  );

  return { artistes: artistes.results[ 0 ], artiste: artiste.results.length >= 1 && artiste.results, maxPage }
};

export default Artistes;
