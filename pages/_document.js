import React                                      from "react";
import Document, { Html, Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet }                       from 'styled-components';
import GlobalStyle                                from "../helpers/global-styles";


class MyDocument extends Document {
  static async getInitialProps( ctx ) {
    const sheet = new ServerStyleSheet();
    // const originalRenderPage = ctx.renderPage;

    const page = ctx.renderPage( ( App ) => ( props ) => sheet.collectStyles( <App { ...props } /> ) );
    const styleTags = sheet.getStyleElement();

    const initialProps = await Document.getInitialProps( ctx );
    return { ...initialProps, ...page, styleTags }
  }

  render() {
    const { styleTags } = this.props;
    return (
      <Html>
        <Head>
          <meta name='viewport' content='width=device-width,
          initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no, orientation=portrait'/>
          <style>{ GlobalStyle }</style>
          { styleTags }
        </Head>
        <body className="custom_class">
        <Main/>
        <NextScript/>
        </body>
      </Html>
    )
  }
}

export default MyDocument;



// TODO NE PAS EFFACER POUR LE MOMENT
// TODO NE PAS EFFACER POUR LE MOMENT
// TODO NE PAS EFFACER POUR LE MOMENT
// TODO NE PAS EFFACER POUR LE MOMENT
// TODO NE PAS EFFACER POUR LE MOMENT
// TODO NE PAS EFFACER POUR LE MOMENT

// import React from "react";
// import Document, { Html, Head, Main, NextScript } from 'next/document'
// import GlobalStyle from "../helpers/global-styles";
//
// class MyDocument extends Document {
//   static async getInitialProps( ctx ) {
//     const initialProps = await Document.getInitialProps( ctx );
//     return { ...initialProps }
//   }
//
//   componentDidMount() {
//     // First we get the viewport height and we multiple it by 1% to get a value for a vh unit
//     let vh = window.innerHeight * 0.01;
//     // Then we set the value in the --vh custom property to the root of the document
//     document.documentElement.style.setProperty('--vh', `${vh}px`);
//     document.querySelector('body').style.height = 'calc(var(--vh, 1vh) * 100)';
//     document.body.style.height = '100vh';
//   }
//
//   render() {
//     return (
//       <Html>
//         <Head>
//           <style>{GlobalStyle}</style>
//         </Head>
//         <body className="custom_class">
//         <Main/>
//         <NextScript/>
//         </body>
//       </Html>
//     )
//   }
// }
//
// export default MyDocument
