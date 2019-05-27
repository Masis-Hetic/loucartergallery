import React, { Fragment } from 'react';
import Head                from 'next/head';

import '../styles/style.scss';

import SoonPage    from '../Components/Pages/SoonPage';
import MainComponent   from '../Components/Main/Main';

const Soon = () => (
  <Fragment>
    <Head>
      <title>Lou Carter Gallery - Soon</title>
    </Head>
    <MainComponent>
      <SoonPage/>
    </MainComponent>
  </Fragment>
);

export default Soon;
