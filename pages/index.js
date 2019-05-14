import React, { Fragment } from 'react';
import '../styles/style.scss'
import Head from 'next/head';

import HomePage from '../Components/Pages/HomePage';

import Prismic from 'prismic-javascript';
import { PRISMIC_API } from '../config';
import MainComponent from "../Components/Main/Main";

const Index = ({result}) => (
  <Fragment>
    <Head>
      <title>Lou Carter Gallery - accueil</title>
    </Head>

    <MainComponent>
      <HomePage result={result} />
    </MainComponent>
  </Fragment>
);

Index.getInitialProps = async ({}) => {
  const API = await Prismic.api( PRISMIC_API );

  const result = await API.query(
    Prismic.Predicates.at( 'document.type', 'homepage' ), { lang: 'fr-FR'}
  );

  return { result: result.results[ 0 ] }
};

export default Index;
