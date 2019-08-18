import React, { Fragment } from "react";
import Link                from "next/link";
import Prismic             from "prismic-javascript";
import getConfig           from 'next/config';
import MainComponent       from '../../Components/Main/Main';
import Head                from 'next/head';
import Artist              from "../../Components/Artistes/Artiste.style";

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

class Artiste extends React.Component {
  static async getInitialProps( { query } ) {
    const API = await Prismic.api( publicRuntimeConfig.prismic );

    const artist = await API.query( Prismic.Predicates.at( 'my.artist.uid', query.name ), { lang: 'fr-FR' } );

    return {
      artist: artist.results[ 0 ].data,
      query
    }
  }

  state = {
    activePicture: 0,
    startingX: null,
    change: null,
    position: 0,
    currentSlide: 1,
    itemNumber: this.props.artist.photos.length,
  };

  changePicture = id => this.setState( { activePicture: Number( id ) } );

  handleTouchStart = e => this.setState( { startingX: e.touches[ 0 ].clientX } );
  handleTouchMove = e => {
    const touch = e.touches[ 0 ];
    this.setState( { change: this.state.startingX - touch.clientX } );
  };
  handleTouchEnd = () => {
    const gestureDistance = screen.width / 3;

    if (this.state.change > 0 && this.state.change > gestureDistance) {
      this.state.currentSlide < this.state.itemNumber &&
      this.setState( { position: this.state.currentSlide * -90, currentSlide: this.state.currentSlide + 1 } );
    } else {
      this.state.currentSlide > 1 && this.state.change > gestureDistance &&
      this.setState( { position: this.state.position - -90, currentSlide: this.state.currentSlide - 1 } );
    }
  };

  render() {
    const { artist } = this.props;
    const { activePicture, position } = this.state;

    return (
      <Fragment>
        <Head>
          <title>Titre à ajouter dans Prismic</title>
        </Head>
        <MainComponent>

          <Artist>

            <Artist.Carousel>
              { artist.photos.map( ( photo, i ) =>
                <Artist.CarouselPicture
                  key={ i }
                  id={ i }
                  onClick={ e => this.changePicture( e.target.getAttribute( 'id' ) ) }
                >
                  <Artist.MiniPicture src={ `${ photo.artist_pictures.url }` } alt=""/>
                </Artist.CarouselPicture>
              ) }
            </Artist.Carousel>

            <Artist.MobileCarouselWrapper>
              <Artist.MobileCarousel
                onTouchStart={ e => this.handleTouchStart( e ) }
                onTouchMove={ e => this.handleTouchMove( e ) }
                onTouchEnd={ () => this.handleTouchEnd() }
                position={ position }
              >
                { artist.photos.map( ( photo, i ) =>
                  <Artist.MobileImageWrapper key={ i }>
                    <Artist.MobileImage src={ artist.photos[ i ].artist_pictures.url } alt=""/>
                    <Artist.DetailsWrapper>
                      <p>{ artist.photos[ i ].collection[ 0 ].text }</p>
                      <p>{ artist.photos[ i ].name_of_art[ 0 ].text }</p>
                      <p>{ artist.photos[ i ].dimensions[ 0 ].text }</p>
                      <p>{ artist.photos[ i ].year[ 0 ].text }</p>
                    </Artist.DetailsWrapper>
                  </Artist.MobileImageWrapper>
                ) }
              </Artist.MobileCarousel>
            </Artist.MobileCarouselWrapper>

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

        </MainComponent>
      </Fragment>
    )
  }
}

// const Artiste = ( { artist } ) => {
//   const [ activePicture, picture ] = useState( 0 );
//   const changePicture = id => picture( Number( id ) );
//
//   return (
//     <Fragment>
//       <Head>
//         <title>Titre à ajouter dans Prismic</title>
//       </Head>
//       <MainComponent>
//
//         <Artist>
//
//           <Artist.Carousel>
//             { artist.photos.map( ( photo, i ) =>
//               <Artist.CarouselPicture key={ i } id={ i } onClick={ e => changePicture( e.target.getAttribute( 'id' ) ) }>
//                 <Artist.MiniPicture src={ `${ photo.artist_pictures.url }` } alt=""/>
//               </Artist.CarouselPicture>
//             ) }
//           </Artist.Carousel>
//
//           <Artist.MobileCarouselWrapper>
//             <Artist.MobileCarousel
//
//             >
//               {artist.photos.map((photo, i) =>
//                 <Artist.MobileImageWrapper key={i}>
//                   <Artist.MobileImage src={artist.photos[ i ].artist_pictures.url} alt=""/>
//                   <p>{artist.photos[ i ].collection[ 0 ].text}</p>
//                   <p>{ artist.photos[ i ].name_of_art[ 0 ].text }</p>
//                   <p>{ artist.photos[ i ].dimensions[ 0 ].text }</p>
//                   <p>{ artist.photos[ i ].year[ 0 ].text }</p>
//                 </Artist.MobileImageWrapper>
//               )}
//             </Artist.MobileCarousel>
//           </Artist.MobileCarouselWrapper>
//
//           <Artist.ImageWrapper>
//             <Artist.ImageInnerWrapper>
//               <Artist.Image src={ artist.photos[ activePicture ].artist_pictures.url } alt=""/>
//               <Artist.Collection>{ artist.photos[ activePicture ].collection[ 0 ].text }</Artist.Collection>
//               <p>{ artist.photos[ activePicture ].name_of_art[ 0 ].text }</p>
//               <p>{ artist.photos[ activePicture ].dimensions[ 0 ].text }</p>
//               <p>{ artist.photos[ activePicture ].year[ 0 ].text }</p>
//             </Artist.ImageInnerWrapper>
//           </Artist.ImageWrapper>
//
//           <Artist.DescriptionWrapper>
//             <div>
//               <Artist.Name>{ artist.prenom[ 0 ].text } { artist.name[ 0 ].text }</Artist.Name>
//               <Artist.Description>{ artist.description[ 0 ].text }</Artist.Description>
//             </div>
//
//             <Artist.BtnWrapper>
//               <Link href={ '/artistes/page-[page]' } as={ '/artistes/page-1' }>
//                 <Artist.BackBtn>Retour aux artistes</Artist.BackBtn>
//               </Link>
//             </Artist.BtnWrapper>
//           </Artist.DescriptionWrapper>
//
//         </Artist>
//         { console.log( { artist } ) }
//       </MainComponent>
//     </Fragment>
//   )
// };
//
// Artiste.getInitialProps = async ( { query } ) => {
//   const API = await Prismic.api( publicRuntimeConfig.prismic );
//
//   const artist = await API.query( Prismic.Predicates.at( 'my.artist.uid', query.name ), { lang: 'fr-FR' } );
//
//   return {
//     artist: artist.results[ 0 ].data,
//     query
//   }
// };

export default Artiste;
