import React, { Fragment } from 'react';
import Head                from 'next/head';
import Prismic             from 'prismic-javascript';
import getConfig           from 'next/config';
import { get }             from "lodash/fp"

import FounderPage   from '../Components/StylesPages/FounderPage';
import MainComponent from '../Components/Main/Main';
import '../styles/style.scss';

const { publicRuntimeConfig } = getConfig();

// noinspection JSUnresolvedVariable
const LaFondatrice = ({ body, meta }) => (
  <Fragment>
    <Head>
      <title>{ get('data.title[ 0 ].text', meta) }</title>
      <meta property="og:url" content="https://loucartergallery.com/la-fondatrice"/>
      <meta property="og:type" content="website"/>
      <meta property="og:description" content={ get('data.description_google[ 0 ].text', meta) }/>
      <meta
        property="og:image:secure_url"
        content={ get('data.og_image.url', meta) }
      />
      <meta
        property="og:image"
        content={ get('data.og_image.url', meta) }
      />
      <meta property="og:image:width" content={ 600 }/>
      <meta property="og:image:height" content={ 314 }/>
    </Head>
    <MainComponent>
      <FounderPage result={ body }/>
    </MainComponent>
  </Fragment>
);

LaFondatrice.getInitialProps = async({}) => {
  const API = await Prismic.api(publicRuntimeConfig.prismic);
  const response = await API.query(Prismic.Predicates.at('document.type', 'la_fondatrice'), { lang: 'fr-FR' });
  const body = response.results[ 0 ].data;
  const meta = response.results[ 0 ];
  return { body, meta };
};

export default LaFondatrice;
