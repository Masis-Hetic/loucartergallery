import React from 'react';
import styles from '../styles/style.scss'
import Head from 'next/head';

import HomePage from '../Components/Pages/HomePage';

import Prismic from 'prismic-javascript';
import { PRISMIC_API } from '../config';

const Index = ({result}) => (
  <div>
    <Head>
      <title>Lou Carter Gallery - accueil</title>
    </Head>

    <HomePage result={result} />

    <style jsx>{styles}</style>
  </div>
);

Index.getInitialProps = async ({}) => {
  const API = await Prismic.api( PRISMIC_API );

  const result = await API.query(
    Prismic.Predicates.at( 'document.type', 'homepage' ), { lang: 'fr-FR'}
  );

  return { result: result.results[ 0 ] }
};

export default Index;
