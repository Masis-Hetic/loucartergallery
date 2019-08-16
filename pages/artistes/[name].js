import React, { Fragment, useState } from "react";
import Link                          from "next/link";
import Prismic                       from "prismic-javascript";
import getConfig                     from 'next/config';
import MainComponent                 from '../../Components/Main/Main';
import Head                          from 'next/head';
import Artist                        from "../../Components/Artistes/Artiste.style";

const { publicRuntimeConfig } = getConfig();

/**
 * @param artist
 * @property { object } photos
 * @property { string } artist_pictures
 * @returns {*}
 * @constructor
 */

const Artiste = ( { artist } ) => {
  const [ activePicture, picture ] = useState( 0 );
  const changePicture = id => picture( Number( id ) );

  return (
    <Fragment>
      <Head>
        <title>Titre à ajouter dans Prismic</title>
      </Head>
      <MainComponent>
        <Artist>

          <Artist.Carousel>
            { artist.photos.map( ( photo, i ) =>
              <Artist.CarouselPicture key={ i } id={ i } onClick={ e => changePicture( e.target.getAttribute( 'id' ) ) }>
                <Artist.MiniPicture src={ `${ photo.artist_pictures.url }` } alt=""/>
              </Artist.CarouselPicture>
            ) }
          </Artist.Carousel>

          <Artist.ImageWrapper>
            <Artist.ImageInnerWrapper>
              <Artist.Image src={ artist.photos[ activePicture ].artist_pictures.url } alt=""/>
              <Artist.Collection>{ artist.photos[ activePicture ].collection[ 0 ].text }</Artist.Collection>
              <p>{ artist.photos[ activePicture ].name_of_art[ 0 ].text }</p>
              <p>{ artist.photos[ activePicture ].dimensions[ 0 ].text }</p>
              <p>{ artist.photos[ activePicture ].year[ 0 ].text }</p>
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

Artiste.getInitialProps = async ( { query } ) => {
  const API = await Prismic.api( publicRuntimeConfig.prismic );

  const artist = await API.query( Prismic.Predicates.at( 'my.artist.uid', query.name ), { lang: 'fr-FR' } );

  return {
    artist: artist.results[ 0 ].data,
    query
  }
};

export default Artiste;
