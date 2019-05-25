import React from 'react';
import MainComponent from "../Components/Main/Main";

import Prismic from 'prismic-javascript';
import { PRISMIC_API } from '../config';

const Campagnes = ({slug}) => {
  return (
    <MainComponent>
      <div>
        {slug}
      </div>
    </MainComponent>
  )
};

Campagnes.getInitialProps = async ( { query: { slug } } ) => {
  const API = await Prismic.api( PRISMIC_API );

  const campaign = await API.query(
    Prismic.Predicates.at( 'document.type', 'campaign' ), { lang: 'fr-FR'}
  );

  return { campaign, slug: slug ? slug : null }
};

export default Campagnes;
