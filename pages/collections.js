import React, { Fragment } from "react";
import Head                from 'next/head';
import Prismic             from "prismic-javascript";
import { get }             from "lodash/fp"
import getConfig           from 'next/config';

import MainComponent       from "../Components/Main/Main";
import CollectionsList     from "../Components/StylesPages/CollectionsList";

const { publicRuntimeConfig } = getConfig();

/**
 * @property { string } description_google
 * @property { string } og_image
 * @param collections
 * @param collectionsList
 * @returns {*}
 * @constructor
 */
const Collections = ( { collections, collectionsList } ) => {
  return (
    <Fragment>
      <Head>
        <title>{ get('data.title[ 0 ].text', collections) || 'Lou Carter | Catalogues' }</title>
        <meta property="og:url" content="https://loucartergallery.com/eshop"/>
        <meta property="og:type" content="website"/>
        <meta property="og:description" content={ get('data.description_google[ 0 ].text', collections) }/>
        <meta
          property="og:image:secure_url"
          content={ get('data.og_image.url', collections) }
        />
        <meta
          property="og:image"
          content={ get('data.og_image.url', collections) }
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

Collections.getInitialProps = async ({ query }) => {
  const API = await Prismic.api( publicRuntimeConfig.prismic );

  const lang = query.lang === 'en' ? 'en-US' : 'fr-FR';
  const eshop = await API.query(
    Prismic.Predicates.at( 'document.type', 'eshop' ), { lang }
  );

  const collections = await API.query(
    Prismic.Predicates.at( 'document.type', 'collection' ), { lang }
  );

  return {
    collections: eshop.results[ 0 ],
    collectionsList: collections.results
        .sort((a, b) =>
            Date.parse(a.first_publication_date) - Date.parse(b.first_publication_date)
        )
  }
};

export default Collections;
