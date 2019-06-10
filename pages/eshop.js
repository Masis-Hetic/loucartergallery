import React from "react";
import MainComponent from "../Components/Main/Main";
// import Prismic from "prismic-javascript";
// import { PRISMIC_API } from "../config";

const Eshop = () => {
  return (
    <MainComponent>
      <img
        srcSet="../static/images/coming_soon/e_shop_1080X1920.png 1080w,
        ../static/images/coming_soon/e_shop_1280X1024.png 1280w,
        ../static/images/coming_soon/e_shop1920X1080.png 1920w,
        ../static/images/coming_soon/e_shop_2560X1440.png 2560w"
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
