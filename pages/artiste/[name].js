import React, { Fragment } from "react";
import Link                from "next/link";
import Prismic             from "prismic-javascript";
import getConfig           from 'next/config';
import Head                from 'next/head';

import MainComponent       from '../../Components/Main/Main';
import Artist              from "../../Components/Artistes/Artiste.style";

const { publicRuntimeConfig } = getConfig();

class Artiste extends React.Component {
  static async getInitialProps( { query } ) {
    const API = await Prismic.api( publicRuntimeConfig.prismic );
    const artist = await API.query( Prismic.Predicates.at( 'my.artist.uid', query.name ), { lang: 'fr-FR' } )
      .then(async res => {
        const idsArray = res.results[0].data.artist_work.map(work => work.oeuvre.id);

        // const idsArray = [];
        // res.results[0].data.artist_work.map(work => idsArray.push(work.oeuvre.id) );
        const arts = await API.query( Prismic.Predicates.in( 'document.id', idsArray ), { lang: 'fr-FR' } );

        return { res, arts };
      });

    return {
      artist: artist.res.results[0].data,
      arts: artist.arts.results,
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
      this.state.currentSlide > 1 && Math.abs(this.state.change) > gestureDistance &&
        this.setState( { position: this.state.position - -90, currentSlide: this.state.currentSlide - 1 } );
    }
  };

  render() {
    const { artist, arts } = this.props;
    const { activePicture, position } = this.state;

    return (
      <Fragment>
        <Head>
          <title>{ artist.meta_title[ 0 ].text }</title>
          {/*<meta property="og:url" content="https://loucartergallery.com/artist"/>*/}
          {/*<meta property="og:type" content="website"/>*/}
          {/*<meta property="og:description" content={ artist.data.description_google[ 0 ].text }/>*/}
          {/*<meta*/}
          {/*  property="og:image:secure_url"*/}
          {/*  content={ arts[0].photo.data.image.url }*/}
          {/*/>*/}
          {/*<meta*/}
          {/*  property="og:image"*/}
          {/*  content={ arts[0].photo.data.image.url }*/}
          {/*/>*/}
          {/*<meta property="og:image:width" content={ 600 }/>*/}
          {/*<meta property="og:image:height" content={ 314 }/>*/}
        </Head>
        <MainComponent>
          <Artist>
            <Artist.Carousel>
              { arts.map( ( photo, i ) =>
                <Artist.CarouselPicture
                  key={ i }
                  id={ i }
                  onClick={ e => this.changePicture( e.target.getAttribute( 'id' ) ) }
                >
                  <Artist.MiniPicture src={ `${ photo.data.image.url }` } alt=""/>
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
                { arts.map( ( photo, i ) =>
                  <Artist.MobileImageWrapper key={ i } length={ arts.length }>
                    <Artist.MobileImage src={ arts[ i ].data.image.url } alt=""/>
                    <Artist.DetailsWrapper>
                      <p>{ arts && arts[ i ].data.collection_name[ 0 ].text }</p>
                      <p dangerouslySetInnerHTML={ { __html: arts && arts[ i ].data.name[ 0 ].text } }/>
                      <p dangerouslySetInnerHTML={ { __html: arts && arts[ i ].data.dimensions[ 0 ].text } }/>
                      <p dangerouslySetInnerHTML={ { __html: arts && arts[ i ].data.year[ 0 ].text } }/>
                    </Artist.DetailsWrapper>
                  </Artist.MobileImageWrapper>
                ) }
              </Artist.MobileCarousel>
            </Artist.MobileCarouselWrapper>

            <Artist.ImageWrapper>
              <Artist.ImageInnerWrapper>
                <Artist.Image src={ arts[ activePicture ].data.image.url } alt=""/>
                <Artist.Collection>{ arts && arts[ activePicture ].data.collection_name[ 0 ].text }</Artist.Collection>
                <p dangerouslySetInnerHTML={ { __html: arts && arts[ activePicture ].data.name[ 0 ].text } }/>
                <p dangerouslySetInnerHTML={ { __html: arts && arts[ activePicture ].data.dimensions[ 0 ].text } }/>
                <p dangerouslySetInnerHTML={ { __html: arts && arts[ activePicture ].data.year[ 0 ].text } }/>
              </Artist.ImageInnerWrapper>
            </Artist.ImageWrapper>

            <Artist.DescriptionWrapper>
              <div>
                <Artist.Name>{ artist.prenom[ 0 ].text } { artist.name[ 0 ].text }</Artist.Name>
                <Artist.Description>
                  { artist.description.map((description, i) => <p style={{marginBottom: 10}} key={i}>{description.text}</p>) }
                </Artist.Description>
              </div>

              <Artist.BtnWrapper>
                <Link href={ { pathname: '/artistes/page-[page]' } } as={ '/artistes/page-1' }>
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

export default Artiste;
