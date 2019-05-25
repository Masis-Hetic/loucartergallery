import React, { Fragment } from 'react';
import Head                from 'next/head';
import Prismic             from 'prismic-javascript';

import '../styles/style.scss';

import { PRISMIC_API } from '../config';
import FounderPage     from '../Components/Pages/FounderPage';
import MainComponent   from '../Components/Main/Main';

const LaFondatrice = ( { body }) => (
  <Fragment>
    <Head>
      <title>Lou Carter Gallery - La fondatrice</title>
    </Head>
    <MainComponent>
      <FounderPage result={ body }/>
    </MainComponent>
  </Fragment>
);

LaFondatrice.getInitialProps = async( {}) => {
  const API = await Prismic.api(PRISMIC_API);
  const response = await API.query(Prismic.Predicates.at('document.type', 'la_fondatrice'), { lang: 'fr-FR' });
  const { body } = response.results[ 0 ].data;
  return { body };
};

export default LaFondatrice;
