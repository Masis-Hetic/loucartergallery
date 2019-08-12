import React, { Fragment } from 'react';
import Head                from 'next/head';
import Prismic             from 'prismic-javascript';

import '../styles/style.scss';


import getConfig from 'next/config';
const { publicRuntimeConfig } = getConfig();
import GalleryPage       from '../Components/Pages/GalleryPage';
import MainComponent   from '../Components/Main/Main';

const Galerie = ({ body, result }) => (
  <Fragment>
    <Head>
      <title>{ result.data.meta_title[ 0 ].text }</title>
      <meta property="og:title" content={ result.data.meta_title[0].text }/>
      <meta property="og:url" content="https://loucartergallery.com/galerie"/>
      <meta property="og:type" content="website"/>
      <meta property="og:description" content={ result.data.meta_description[0].text }/>
      <meta
        property="og:image:secure_url"
        content={ result.data.meta_img.url }
      />
      <meta
        property="og:image"
        content={ result.data.meta_img.url }
      />
      <meta property="og:image:width" content={ 600 } />
      <meta property="og:image:height" content={ 314 } />
    </Head>

    <MainComponent>
      <GalleryPage
        result={ body }
      />
    </MainComponent>
  </Fragment>
);

Galerie.getInitialProps = async( {}) => {
  const API = await Prismic.api(publicRuntimeConfig.prismic);
  const response = await API.query(Prismic.Predicates.at('document.type', 'gallery'), { lang: 'fr-FR' });
  const { body } = response.results[ 0 ].data;
  return { body, result: response.results[ 0 ] };
};

export default Galerie;
