import React                                      from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet }                       from 'styled-components';

import GlobalStyle from '../helpers/global-styles';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet();

    const page = ctx.renderPage((App) => (props) => sheet.collectStyles(<App { ...props } />));
    const styleTags = sheet.getStyleElement();
    
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps, ...page, styleTags };
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
    );
  }
}

export default MyDocument;
