import React, { Fragment } from 'react';
import '../styles/style.scss'
import Head                from 'next/head';

import HomePage from '../Components/Pages/HomePage';
import Prismic  from 'prismic-javascript';

import getConfig     from 'next/config';

const { publicRuntimeConfig } = getConfig();
import MainComponent from "../Components/Main/Main";
import { sliceUrl }  from "../helpers/functions";


import Link from "next/link";

// noinspection JSUnresolvedVariable
const Index = ( { result, imgs } ) => (
  <Fragment>
    <Head>
      <title>{ result.data.title[ 0 ].text }</title>
      <meta property="og:url" content="https://loucartergallery.com"/>
      <meta property="og:type" content="website"/>
      <meta property="og:description" content={ result.data.description[ 0 ].text }/>
      <meta
        property="og:image:secure_url"
        content={ result.data.og_image.url }
      />
      <meta
        property="og:image"
        content={ result.data.og_image.url }
      />
      <meta property="og:image:width" content={ 600 }/>
      <meta property="og:image:height" content={ 314 }/>
    </Head>
    <MainComponent>

      <h1>
        <Link
          href={`artistes/page-[page]`}
          as={`artistes/page-1`}
          // as={`artistes`}
        >
          <a>ARTISTE</a>
        </Link>
      </h1>

      <HomePage result={ result } imgs={ imgs }/>
    </MainComponent>

    <style jsx>{`
      h1 {
        position: absolute;
        top: 50%;
        left: 50%;
        z-index: 99999;
        background: pink;
      }
    `}</style>
  </Fragment>
);

Index.getInitialProps = async ( {} ) => {
  const API = await Prismic.api( publicRuntimeConfig.prismic );

  const result = await API.query(
    Prismic.Predicates.at( 'document.type', 'homepage' ), { lang: 'fr-FR' }
  );

  // noinspection JSUnresolvedVariable
  let imgs = result.results[ 0 ].data.body.map( item => item.items.filter( img => img.background_img.url ) );
  // noinspection JSUnresolvedVariable
  imgs = imgs.map( img => img.reduce( ( url, element ) => url + sliceUrl( ` ${ element.background_img.url } ${ element.size[ 0 ].text },` ), '' ) );

  return { result: result.results[ 0 ], imgs }
};

export default Index;
