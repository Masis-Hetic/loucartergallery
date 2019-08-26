import React, { Fragment } from 'react';
import SingleCollection    from "../../Components/Collections/Collection.style";
import Prismic             from 'prismic-javascript';
import getConfig           from 'next/config';
import MainComponent       from "../../Components/Main/Main";
import Head                from "next/head";

const { publicRuntimeConfig } = getConfig();

const Collection = ( { query, collection } ) => {

  const handleScroll = e => {
    console.log(e.target.scrollHeight);
  };

  return (
    <Fragment>
      <Head>
        <title>Nom de la collection</title>
      </Head>
      <MainComponent>

        <SingleCollection className="kkk" onWheel={handleScroll}>
          <SingleCollection.Ul>
            {collection.map((art, i)=>
              <SingleCollection.Li margin={ i % 2 === 0 ? '0 5% 5% 0' : '0 0 5% 0' } key={i}>
                <img style={{ display: 'block', width: '100%', height: '100%' }} src={ art.data.image.url } alt=""/>
              </SingleCollection.Li>
            )}
          </SingleCollection.Ul>
        </SingleCollection>

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
