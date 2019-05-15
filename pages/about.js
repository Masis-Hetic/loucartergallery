import React, { Fragment } from 'react';
import Head                from 'next/head';
import Prismic             from 'prismic-javascript';

import '../styles/style.scss';

import { PRISMIC_API } from '../config';
import AboutPage       from '../Components/Pages/AboutPage';
import MainComponent   from '../Components/Main/Main';

const About = ({ body }) => (
  <Fragment>
    <Head>
      <title>Lou Carter Gallery - about</title>
    </Head>
    
    <MainComponent>
      <AboutPage result={ body }/>
    </MainComponent>
  </Fragment>
);

About.getInitialProps = async({}) => {
  const API = await Prismic.api(PRISMIC_API);
  const response = await API.query(Prismic.Predicates.at('document.type', 'about'), { lang: 'fr-FR' });
  const { body } = response.results[ 0 ].data;
  return { body };
};

export default About;
