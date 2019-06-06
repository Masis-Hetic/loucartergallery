import React from 'react';
import MainComponent from "../Components/Main/Main";

import Prismic from 'prismic-javascript';
import { PRISMIC_API } from '../config';
import Campaign from "../Components/Pages/Campaign";
import { sliceUrl } from "../helpers/functions";

const Campagnes = ({ campaign, imgs }) => {
  return (
    <MainComponent>
      <Campaign campaign={campaign} imgs={imgs} />
    </MainComponent>
  )
};


Campagnes.getInitialProps = async ( { query } ) => {
  const API = await Prismic.api( PRISMIC_API );

  const campaign = await API.query(
    Prismic.Predicates.at( 'my.campaign.uid', query.slug ), { lang: 'fr-FR' }
  );

  let imgs = campaign.results[0].data.body.map(item => item.items.filter(img => img.image.url));
  imgs = imgs.flatMap(img => img.reduce((url, element) => url + sliceUrl(`${element.image.url}, `), ''));

  return { campaign: campaign.results[0], imgs, slug: query.slug }
};

export default Campagnes;
