import React, { Fragment, useState } from 'react';
import Prismic                       from 'prismic-javascript';
import getConfig                     from 'next/config';
import Head                          from 'next/head';

import MainComponent from '../Components/Main/Main';
import ArtistesList  from '../Components/Artistes/ArtistesList';

const { publicRuntimeConfig } = getConfig();

const Artistes = ({ artistes, artiste }) => {
  // noinspection JSUnresolvedVariable
  
  const [ page, currentPage ] = useState(1);
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
        <ArtistesList page={ changePage } currentPage={ page }/>
        {/*{ console.log( artistes ) }*/ }
        {/*{ console.log( artiste ) }*/ }
      </MainComponent>
    </Fragment>
  );
};

Artistes.getInitialProps = async() => {
  const API = await Prismic.api(publicRuntimeConfig.prismic);
  const artistes = await API.query(
    Prismic.Predicates.at('document.type', 'artists'), { lang: 'fr-FR' }
  );
  
  const artiste = await API.query(
    Prismic.Predicates.at('document.type', 'artist'), { lang: 'fr-FR', pageSize: 1, page: 1 }
  );
  
  return { artistes: artistes.results[ 0 ], artiste: artiste.results[ 0 ] };
};

export default Artistes;
