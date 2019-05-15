import React from "react";
import Document, { Html, Head, Main, NextScript } from 'next/document'
import GlobalStyle from "../helpers/global-styles";

class MyDocument extends Document {
  static async getInitialProps( ctx ) {
    const initialProps = await Document.getInitialProps( ctx );
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <Head>
          <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
          <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
          <style>{GlobalStyle}</style>
        </Head>
        <body className="custom_class">
        <Main/>
        <NextScript/>
        </body>
      </Html>
    )
  }
}

export default MyDocument
