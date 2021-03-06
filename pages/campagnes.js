import React                    from 'react';
import Prismic                  from 'prismic-javascript';
import Head                     from 'next/head';

import MainComponent from '../Components/Main/Main';
import Campaign      from '../Components/StylesPages/Campaign';
import { sliceUrl }  from '../helpers/functions';

import getConfig from 'next/config';

const { publicRuntimeConfig } = getConfig();

const Campagnes = ({ campaign, imgs }) => {

  return (
    <MainComponent>
      <Head>
        <title>{ campaign.data.meta_title[ 0 ].text }</title>
        <meta property="og:title" content={ campaign.data.meta_title[0].text }/>
        <meta property="og:url" content="https://loucartergallery.com/campagnes/ss19"/>
        <meta property="og:type" content="website"/>
        <meta property="og:description" content={ campaign.data.meta_description[0].text }/>
        <meta
          property="og:image:secure_url"
          content={ campaign.data.meta_img.url }
        />
        <meta
          property="og:image"
          content={ campaign.data.meta_img.url }
        />
        <meta property="og:image:width" content={ 600 }/>
        <meta property="og:image:height" content={ 314 }/>
      </Head>
      <Campaign campaign={ campaign } imgs={ imgs }/>
    </MainComponent>
  );
};

Campagnes.getInitialProps = async({ query }) => {
  const API = await Prismic.api(publicRuntimeConfig.prismic);

  const lang = query.lang === 'en' ? 'en-US' : 'fr-FR';
  const campaign = await API.query(
    Prismic.Predicates.at('my.campaign.uid', query.slug), { lang }
  );

  let imgs = campaign.results[ 0 ].data.body.map(item => item.items.filter(img => img.image.url));
  imgs = imgs.map(img => img.reduce((url, element) => url + sliceUrl(`${ element.image.url } ${ element.size[ 0 ].text }, `), ''));

  return { campaign: campaign.results[ 0 ], imgs, slug: query.slug };
};

export default Campagnes;
