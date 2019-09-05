import React, { useEffect }     from "react";
import { connect, useDispatch } from "react-redux";
import MainComponent            from "../../Components/Main/Main";
import Head                     from "next/head";
import Prismic                  from "prismic-javascript";

import getConfig    from "next/config";
import { sliceUrl } from "../../helpers/functions";

const { publicRuntimeConfig } = getConfig();

import { overflowStatus } from "../../store/actions/controlOverflow.action";
import Campaign           from "../../Components/Pages/Campaign";

const mapDispatchToProps = state => ( { overflowStatus: state.overflowStatus } );

const Campagnes = ( { campaign, imgs }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(overflowStatus(true));
    return () => dispatch(overflowStatus(false))
  });

  return (
    <MainComponent>
      <Campaign campaign={ campaign } imgs={ imgs }/>
    </MainComponent>
  )
};

Campagnes.getInitialProps = async ( { query } ) => {
  const API = await Prismic.api(publicRuntimeConfig.prismic);

  const campaign = await API.query(
    Prismic.Predicates.at('my.campaign.uid', query.slug), { lang: 'fr-FR' }
  );

  let imgs = campaign.results[ 0 ].data.body.map(item => item.items.filter(img => img.image.url));
  imgs = imgs.map(img => img.reduce((url, element) => url + sliceUrl(`${ element.image.url } ${ element.size[ 0 ].text }, `), ''));

  return { campaign: campaign.results[ 0 ], imgs, slug: query.slug };
};

export default connect(null, mapDispatchToProps) (Campagnes);
