import React, { Fragment } from 'react';
import Head                from 'next/head';
import Prismic             from 'prismic-javascript';

import '../styles/style.scss';

// import { PRISMIC_API } from '../config';
import getConfig from 'next/config';
const { publicRuntimeConfig } = getConfig();
import PartagerPage    from '../Components/Pages/PartagerPage';
import MainComponent   from '../Components/Main/Main';

const Partager = ({ body }) => (
  <Fragment>
    <Head>
      <title>Lou Carter Gallery - Partager</title>
    </Head>
    <MainComponent>
      <PartagerPage result={ body }/>
    </MainComponent>
  </Fragment>
);

Partager.getInitialProps = async({}) => {
  const API = await Prismic.api( publicRuntimeConfig.prismic );
  const response = await API.query(Prismic.Predicates.at('document.type', 'partager'), { lang: 'fr-FR' });
  const body = response.results;
  return { body };
};

export default Partager;
