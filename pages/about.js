import React, { Fragment } from 'react';
import '../styles/style.scss';
import Head from 'next/head';

import AboutPage from '../Components/Pages/AboutPage';

import Prismic from 'prismic-javascript';
import { PRISMIC_API} from "../config";
import MainComponent from "../Components/Main/Main";

const About = ({result}) => (
  <Fragment>
    <Head>
      <title>Lou Carter Gallery - about</title>
    </Head>

    <MainComponent>
      <AboutPage result={result} />
    </MainComponent>
  </Fragment>
);

About.getInitialProps = async ({}) => {
  const API = await Prismic.api( PRISMIC_API );

  const result = await API.query(
    Prismic.Predicates.at( 'document.type', 'about' ), { lang: 'fr-FR'}
  );

  return { result: result.results[0] }
};

export default About;
