import React, { Component } from 'react';
import MainComponent from "../Components/Main/Main";

import Prismic from 'prismic-javascript';
import { PRISMIC_API } from "../config";

class Campagnes extends Component {
  static async getInitialProps({ query }) {
    const API = await Prismic.api( PRISMIC_API );

    const campaign = await API.query(
      Prismic.Predicates.at( 'document.type', 'campaign' ), { lang: 'fr-FR' }
    );

    return { campaign, slug: query.slug }
  };

  render() {
    const { slug } = this.props;
    return (
      <MainComponent>
        <div>
          { slug }
        </div>
      </MainComponent>
    );
  }
}

export default Campagnes;

// import React from 'react';
// import MainComponent from "../Components/Main/Main";
//
// import Prismic from 'prismic-javascript';
// import { PRISMIC_API } from '../config';
//
// const Campagnes = ({slug}) => {
//   return (
//     <MainComponent>
//       <div>
//         {slug}
//       </div>
//     </MainComponent>
//   )
// };
//
//
// Campagnes.getInitialProps = async ( { query } ) => {
//   const API = await Prismic.api( PRISMIC_API );
//
//   const campaign = await API.query(
//     Prismic.Predicates.at( 'document.type', 'campaign' ), { lang: 'fr-FR'}
//   );
//
//   console.log('query', query);
//
//   return { campaign, slug: query.slug }
// };
//
// export default Campagnes;
