import React, { Fragment } from 'react';
import Prismic             from 'prismic-javascript';
import Head                from 'next/head';
import getConfig           from 'next/config';

import LegalPage     from '../Components/Pages/LegalPage';
import MainComponent from '../Components/Main/Main';
import '../styles/style.scss';

const { publicRuntimeConfig } = getConfig();

const Legal = (legalDatas) => (
  <Fragment>
    <Head>
      <title>Lou Carter Gallery - Mentions légales</title>
    </Head>
    <MainComponent>
      <LegalPage { ...legalDatas } />
    </MainComponent>
  </Fragment>
);

Legal.getInitialProps = async() => {
  const API = await Prismic.api(publicRuntimeConfig.prismic);
  const legalDatas = await API.query(
    Prismic.Predicates.at('document.type', 'mentions_legales'), { lang: 'fr-FR' }
  );
  return { legalDatas };
};

export default Legal;
