import React from "react";
import MainComponent from "../Components/Main/Main";
// import Prismic from "prismic-javascript";
// import { PRISMIC_API } from "../config";

const Eshop = () => {
  return (
    <MainComponent>
      <img
        srcSet="../static/images/coming_soon/eshop_1080.png 1080w,
        ../static/images/coming_soon/eshop_1280.png 1280w,
        ../static/images/coming_soon/eshop_1366.png 1366w,
        ../static/images/coming_soon/eshop_1920.png 1920w,
        ../static/images/coming_soon/eshop_2560.png 2560w,
        ../static/images/coming_soon/eshop_5120.png 5120w"
        alt=""
      />
      <style jsx>{`
      img {
        display: block;
        width: 100%;
        height: 100%;
      }
      `}</style>
    </MainComponent>
  )
};

// Eshop.getInitialProps = async () => {
  // const API = await Prismic.api( PRISMIC_API );
  //
  // const eshop = await API.query(
  //   Prismic.Predicates.at( 'document.type', 'eshop' ), { lang: 'fr-FR' }
  // );
  //
  // return { eshop: eshop.results[ 0 ] }
// };

export default Eshop;
