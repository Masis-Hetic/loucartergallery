import React, { Fragment, useState, useRef } from 'react';
import SingleCollection    from "../../Components/Collections/Collection.style";
import Prismic             from 'prismic-javascript';
import getConfig           from 'next/config';
import MainComponent       from "../../Components/Main/Main";
import Head                from "next/head";

const { publicRuntimeConfig } = getConfig();

/**
 * @property { string } dimensions
 * @param query
 * @param collection
 * @returns {*}
 * @constructor
 */
const Collection = ( { query, collection } ) => {
  const ul = useRef(null);

  const [ index, setIndex ] = useState(0);
  const [ height, setHeight ] = useState(0);
  const [ width, setWidth ] = useState(0);
  const [ left, setLeft] = useState(0);
  const [ display, setDisplay ] = useState(false);

  const handleClick = (e, i) => {
    setIndex(i);
    setHeight(e.target.offsetHeight);
    console.log(ul.current.getBoundingClientRect());
    setLeft(ul.current.getBoundingClientRect().left);
    setWidth(ul.current.getBoundingClientRect().width);
    setDisplay(!display);
  };

  return (
    <Fragment>
      <Head>
        <title>Nom de la collection</title>
      </Head>
      <MainComponent>

        <SingleCollection /* onWheel={e => handleScroll(e)} */>
          <SingleCollection.Ul ref={ ul }>
            {collection.map((art, i)=>
              <SingleCollection.Li onClick={ e => handleClick(e, i) } margin={ i % 2 === 0 ? '0 40px 40px 0' : '0 0 40px 0' } key={i}>
                <img style={{ display: 'block', width: '100%', height: '100%' }} src={ art.data.image.url } alt=""/>
              </SingleCollection.Li>
            )}
          </SingleCollection.Ul>
          <div
            style={{
              width: `calc(100% - ${left}px)`,
              left: `${left}px`,
              height: `calc(${ ( (height * 2) + 44 ) }px)`,
              position: 'fixed',
              top: '50%',
              transform: 'translateY(-50%)',
              zIndex: 100,
              display: `${ !display ? 'none' : 'flex' }`,
            }}
            onClick={() => setDisplay(false)}
          >
            {console.log(collection[index].data)}
            <img src={ collection[index].data.image.url } alt="" style={{display: 'block', width: `calc(${width}px + 2px)`, height: '100%'}}/>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center'
              }}
            >
              <p>Ajouter nom de l'artiste ici</p>
              <p dangerouslySetInnerHTML={{ __html: collection[index].data.collection_name[0].text }}/>
              <p dangerouslySetInnerHTML={{ __html: collection[index].data.name[0].text }}/>
              <p dangerouslySetInnerHTML={{ __html: collection[index].data.dimensions[0].text }}/>
            </div>
            <div style={{ position: 'absolute', top: 0, right: 0 }}>X</div>
          </div>
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
