import React, { Fragment } from 'react';
import '../styles/style.scss'
import Head from 'next/head';

import HomePage from '../Components/Pages/HomePage';

import Prismic from 'prismic-javascript';
import { PRISMIC_API } from '../config';
import MainComponent from "../Components/Main/Main";
import { sliceUrl } from "../helpers/functions";

const Index = ( { result, imgs } ) => (
  <Fragment>
    <Head>
      <title>{ result.data.title[ 0 ].text }</title>
      <meta property="og:url" content="https://loucartergallery.com"/>
      <meta property="og:type" content="website"/>
      <meta property="og:description" content="Une nouvelle vision de la vente d'art"/>
      <meta
        property="og:image:secure_url"
        content="https://prismic-io.s3.amazonaws.com/loucarter%2F4972e972-1795-4d75-99aa-5383ae99cba1_image_trois_1920x1080.jpg"
      />
      <meta
        property="og:image"
        content="https://prismic-io.s3.amazonaws.com/loucarter%2F4972e972-1795-4d75-99aa-5383ae99cba1_image_trois_1920x1080.jpg"
      />
      <meta property="og:image:width" content={ 600 } />
      <meta property="og:image:height" content={ 314 } />
    </Head>
    <MainComponent>
      <HomePage result={ result } imgs={ imgs } />
    </MainComponent>
  </Fragment>
);

Index.getInitialProps = async ( {} ) => {
  const API = await Prismic.api( PRISMIC_API );

  const result = await API.query(
    Prismic.Predicates.at( 'document.type', 'homepage' ), { lang: 'fr-FR' }
  );

  // noinspection JSUnresolvedVariable
  let imgs = result.results[0].data.body.map(item => item.items.filter(img => img.background_img.url));
  // noinspection JSUnresolvedVariable
  imgs = imgs.map(img => img.reduce((url, element) => url + sliceUrl(` ${element.background_img.url} ${element.size[0].text},`), ''));

  return { result: result.results[ 0 ], imgs }
};

export default Index;
