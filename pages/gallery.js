import React, { Fragment } from 'react';
import Head                from 'next/head';
import Prismic             from 'prismic-javascript';

import '../styles/style.scss';

import { PRISMIC_API } from '../config';
import GalleryPage       from '../Components/Pages/GalleryPage';
import MainComponent   from '../Components/Main/Main';

const Gallery = ({ body }) => (
  <Fragment>
    <Head>
      <title>Lou Carter Gallery - Galerie</title>
    </Head>

    <MainComponent>
      <GalleryPage result={ body }/>
    </MainComponent>
  </Fragment>
);
// -webkit-mask-image: -webkit-gradient(linear, left 50%, left top, from(rgba(0,0,0,1)), to(rgba(0,0,0,0)));
Gallery.getInitialProps = async({}) => {
  const API = await Prismic.api(PRISMIC_API);
  const response = await API.query(Prismic.Predicates.at('document.type', 'gallery'), { lang: 'fr-FR' });
  const { body } = response.results[ 0 ].data;
  return { body };
};

export default Gallery;
