import React, { Fragment, useEffect } from 'react';
import Head                           from 'next/head';
import Prismic                        from 'prismic-javascript';
import getConfig                      from 'next/config';

import HomePage      from '../Components/Pages/HomePage';
import MainComponent from '../Components/Main/Main';
import { sliceUrl }  from '../helpers/functions';
import '../styles/style.scss';

const { publicRuntimeConfig } = getConfig();

// noinspection JSUnresolvedVariable
const Index = ({ result, imgs }) => {
  return (
    <Fragment>
      <Head>
        <title>{ result.data.title[ 0 ].text }</title>
        <meta property="og:url" content="https://loucartergallery.com"/>
        <meta property="og:type" content="website"/>
        <meta property="og:description" content={ result.data.description[ 0 ].text }/>
        <meta
          property="og:image:secure_url"
          content={ result.data.og_image.url }
        />
        <meta
          property="og:image"
          content={ result.data.og_image.url }
        />
        <meta property="og:image:width" content={ 600 }/>
        <meta property="og:image:height" content={ 314 }/>
      </Head>
        <div
          style={{
            width: '100vw',
            height: '100vh',
            background: '#080808',
          }}
        >
          <h1
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
            }}
          >
            Site en maintenance
          </h1>
        </div>
      {/*<MainComponent>*/}
        {/*<HomePage result={ result } imgs={ imgs }/>*/}
      {/*</MainComponent>*/}
    </Fragment>
  );
};

Index.getInitialProps = async({query}) => {
  const API = await Prismic.api(publicRuntimeConfig.prismic);
  console.log('tarace', query);
  const result = await API.query(
    Prismic.Predicates.at('document.type', 'homepage'), { lang: 'fr-FR' }
  );

  // noinspection JSUnresolvedVariable
  let imgs = result.results[ 0 ].data.body.map(item => item.items.filter(img => img.background_img.url));
  // noinspection JSUnresolvedVariable
  imgs = imgs.map(img => img.reduce((url, element) => url + sliceUrl(` ${ element.background_img.url } ${ element.size[ 0 ].text },`), ''));

  return { result: result.results[ 0 ], imgs };
};

export default Index;
