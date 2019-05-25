import React from 'react';
import MainComponent from "../Components/Main/Main";

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
  if (slug) return { slug };
  return {}
};

export default Campagnes;
