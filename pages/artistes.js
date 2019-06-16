import React, { Fragment } from "react";
import MainComponent from "../Components/Main/Main";
import Prismic from "prismic-javascript";
import { PRISMIC_API } from "../config";
import Head from 'next/head';

const Artistes = ( { artistes } ) => {
  // noinspection JSUnresolvedVariable
  return (
    <Fragment>
      <Head>
        <title>{ artistes.data.title[ 0 ].text }</title>
        <meta property="og:url" content="https://loucartergallery.com/artistes" />
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
        <img
          srcSet="../static/images/coming_soon/artiste.jpg"
          alt=""
        />
        <style jsx>{ `
        img {
          display: block;
          width: 100vw;
          height: 100vh;
        }
        ` }</style>
      </MainComponent>
    </Fragment>
  )
};


Artistes.getInitialProps = async () => {
  const API = await Prismic.api( PRISMIC_API );

  const artistes = await API.query(
    Prismic.Predicates.at( 'document.type', 'artists' ), { lang: 'fr-FR' }
  );

  return { artistes: artistes.results[ 0 ] }
};

export default Artistes;
