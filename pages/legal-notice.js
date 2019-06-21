import React, { Fragment } from 'react';
import Head                from 'next/head';

import '../styles/style.scss';

import LegalPage     from '../Components/Pages/LegalPage';
import MainComponent from '../Components/Main/Main';

const Legal = () => (
  <Fragment>
    <Head>
      <title>Lou Carter Gallery - Mentions légales</title>
    </Head>
    <MainComponent>
      <LegalPage/>
    </MainComponent>
  </Fragment>
);

export default Legal;
