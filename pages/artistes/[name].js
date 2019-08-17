import React, { Fragment, useState } from "react";
import Link                          from "next/link";
import Prismic                       from "prismic-javascript";
import getConfig                     from 'next/config';
import MainComponent                 from '../../Components/Main/Main';
import Head                          from 'next/head';
import Artist                        from "../../Components/Artistes/Artiste.style";

import { useSwipeable } from 'react-swipeable';
import { NEXT }         from "../../Components/Artistes/Artiste.style";

const { publicRuntimeConfig } = getConfig();

/**
 * @param artist
 * @property { object } photos
 * @property { string } artist_pictures
 * @property { string } dimensions
 * @property { string } name_of_art
 * @property { string } collection
 * @property { string } prenom
 * @returns {*}
 * @constructor
 */

const Artiste = ( { artist } ) => {
  // const [ activePicture, picture ] = useState( 0 );
  // const changePicture = id => picture( Number( id ) );

  const initialState = { pos: 0, sliding: false, dir: NEXT, current: 1 };
  const [ state, dispatch ] = React.useReducer( reducer, initialState );
  const numItems = artist.photos.length;

  const slide = dir => {
    dispatch( { type: dir, numItems, current: 3 } );
    setTimeout( () => dispatch( { type: "stopSliding" } ), 50 );
  };

  const handlers = useSwipeable( {
    onSwipedLeft: () => slide( NEXT ),
    preventDefaultTouchmoveEvent: true,
    trackMouse: false
  } );

  const getOrder = ( { index, pos, numItems } ) => index - pos < 0 ? numItems - Math.abs( index - pos ) : index - pos;

  const changePicture = id => {
    dispatch( {type: 'CLICK', current: Number(id)});
    console.log(state);
  };
  return (
    <Fragment>
      <Head>
        <title>Titre à ajouter dans Prismic</title>
      </Head>
      <MainComponent>

        <Artist>
          {/* https://xiaody.github.io/react-touch-carousel/docs/ */}
          <div {...handlers}>
            <Artist.Carousel dir={state.dir} sliding={state.sliding}>
              { artist.photos.map( ( photo, i ) =>
                <Artist.CarouselPicture
                  order={getOrder({ index: i, pos: state.pos, numItems })} key={ i } id={ i }
                  sliding={state.sliding}
                  onClick={ e => changePicture( e.target.getAttribute( 'id' ) ) }
                >
                  <Artist.MiniPicture src={ `${ photo.artist_pictures.url }` } alt=""/>
                </Artist.CarouselPicture>
              ) }
            </Artist.Carousel>
          </div>

          {/*<Artist.Carousel>*/}
          {/*  { artist.photos.map( ( photo, i ) =>*/}
          {/*    <Artist.CarouselPicture key={ i } id={ i } onClick={ e => changePicture( e.target.getAttribute( 'id' ) ) }>*/}
          {/*      <Artist.MiniPicture src={ `${ photo.artist_pictures.url }` } alt=""/>*/}
          {/*    </Artist.CarouselPicture>*/}
          {/*  ) }*/}
          {/*</Artist.Carousel>*/}

          <Artist.ImageWrapper>
            <Artist.ImageInnerWrapper>
              <Artist.Image src={ artist.photos[ state.pos ].artist_pictures.url } alt=""/>
              <Artist.Collection>{ artist.photos[ state.pos ].collection[ 0 ].text }</Artist.Collection>
              <p>{ artist.photos[ state.pos ].name_of_art[ 0 ].text }</p>
              <p>{ artist.photos[ state.pos ].dimensions[ 0 ].text }</p>
              <p>{ artist.photos[ state.pos ].year[ 0 ].text }</p>
            </Artist.ImageInnerWrapper>
          </Artist.ImageWrapper>

          <Artist.DescriptionWrapper>
            <div>
              <Artist.Name>{ artist.prenom[ 0 ].text } { artist.name[ 0 ].text }</Artist.Name>
              <Artist.Description>{ artist.description[ 0 ].text }</Artist.Description>
            </div>

            <Artist.BtnWrapper>
              <Link href={ '/artistes/page-[page]' } as={ '/artistes/page-1' }>
                <Artist.BackBtn>Retour aux artistes</Artist.BackBtn>
              </Link>
            </Artist.BtnWrapper>
          </Artist.DescriptionWrapper>

        </Artist>
        { console.log( { artist } ) }
      </MainComponent>
    </Fragment>
  )
};

function reducer(state, { type, numItems, current }) {
  switch (type) {
    case NEXT:
      return {
        ...state,
        dir: NEXT,
        sliding: true,
        pos: state.pos === numItems - 1 ? 0 : state.pos + 1,
      };
    case 'CLICK':
      return {
        sliding: false,
        pos: current
      };
    case "stopSliding":
      return { ...state, sliding: false };
    default:
      return state;
  }
}

Artiste.getInitialProps = async ( { query } ) => {
  const API = await Prismic.api( publicRuntimeConfig.prismic );

  const artist = await API.query( Prismic.Predicates.at( 'my.artist.uid', query.name ), { lang: 'fr-FR' } );

  return {
    artist: artist.results[ 0 ].data,
    query
  }
};

export default Artiste;
