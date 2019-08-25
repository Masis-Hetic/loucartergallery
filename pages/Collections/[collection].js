import React, { Fragment } from 'react';

import Prismic       from 'prismic-javascript';
import getConfig     from 'next/config';
import MainComponent from "../../Components/Main/Main";
import Head          from "next/head";

const { publicRuntimeConfig } = getConfig();

const Collection = ( { query, collection } ) => {
  return (
    <Fragment>
      <Head>
        <title>Nom de la collection</title>
      </Head>
      <MainComponent>

        <div>
          <ul style={{ display: 'flex', flexWrap: 'wrap', width: '50%', position: 'absolute', top: '50%', left: '50%', transform: 'translateX(-50%)', overflowY: 'scroll' }}>
            {collection.map((art, i)=>
              <li style={{ height: 'auto', border: '1px solid #fff',flex: '1 0 45%', margin: i % 2 === 0 ? '0 5% 5% 0' : '0 0 5% 0', cursor: 'pointer' }} key={i}>
                <img style={{ display: 'block', width: '100%', height: '100%' }} src={ art.data.image.url } alt=""/>
              </li>
            )}
          </ul>
        </div>

      </MainComponent>
    </Fragment>
  )
};

Collection.getInitialProps = async ( { query } ) => {
  const API = await Prismic.api( publicRuntimeConfig.prismic );

  const collection = await API.query( Prismic.Predicates.at( 'my.collection.uid', query.collection ), { lang: 'fr-FR' } )
    .then( async res => {
        const oeuvre = await API.query( Prismic.Predicates.at( 'my.oeuvre.tag', res.results[ 0 ].data.tag ), { lang: 'fr-FR' } );

        return { res, oeuvre };
      }
    );

  return {
    query,
    collection: collection.oeuvre.results,
  }
};

export default Collection;
