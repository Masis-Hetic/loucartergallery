import React, { Fragment } from "react";
import MainComponent       from "../Components/Main/Main";
import Head                from 'next/head';
import Prismic             from "prismic-javascript";

import getConfig       from 'next/config';
import CollectionsList from "../Components/Pages/CollectionsList";

const { publicRuntimeConfig } = getConfig();

const Collections = ( { collections, collectionsList } ) => {
  return (
    <Fragment>
      <Head>
        <title>{ collections.data.title[ 0 ].text }</title>
        <meta property="og:url" content="https://loucartergallery.com/eshop"/>
        <meta property="og:type" content="website"/>
        <meta property="og:description" content={ collections.data.description_google[ 0 ].text }/>
        <meta
          property="og:image:secure_url"
          content={ collections.data.og_image.url }
        />
        <meta
          property="og:image"
          content={ collections.data.og_image.url }
        />
        <meta property="og:image:width" content={ 600 }/>
        <meta property="og:image:height" content={ 314 }/>
      </Head>

      <MainComponent>
        <CollectionsList collectionsList={collectionsList}/>
      </MainComponent>
    </Fragment>
  )
};

Collections.getInitialProps = async () => {
  const API = await Prismic.api( publicRuntimeConfig.prismic );

  const eshop = await API.query(
    Prismic.Predicates.at( 'document.type', 'eshop' ), { lang: 'fr-FR' }
  );

  const collections = await API.query(
    Prismic.Predicates.at( 'document.type', 'collection' ), { lang: 'fr-FR' }
  );

  return { collections: eshop.results[ 0 ], collectionsList: collections.results  }
};

export default Collections;


/*
<img
          srcSet="../static/images/coming_soon/eshop_1080.png 1080w,
          ../static/images/coming_soon/eshop_1280.png 1280w,
          ../static/images/coming_soon/eshop_1366.png 1366w,
          ../static/images/coming_soon/eshop_1920.png 1920w,
          ../static/images/coming_soon/eshop_2560.png 2560w,
          ../static/images/coming_soon/eshop_5120.png 5120w"
          alt=""
        />
        <style jsx>{ `
        img {
          display: block;
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        ` }</style>
 */
