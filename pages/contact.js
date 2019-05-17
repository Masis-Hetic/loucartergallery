import React, { Fragment } from 'react';
import Head                from 'next/head';
import Prismic             from 'prismic-javascript';

import '../styles/style.scss';

import { PRISMIC_API } from '../config';
import ContactPage       from '../Components/Pages/ContactPage';
import MainComponent   from '../Components/Main/Main';

const Contact = ({ body }) => (
  <Fragment>
    <Head>
      <title>Lou Carter Gallery - Contact</title>
    </Head>
    
    <MainComponent>
      <ContactPage result={ body }/>
    </MainComponent>
  </Fragment>
);

Contact.getInitialProps = async({}) => {
  const API = await Prismic.api(PRISMIC_API);
  const response = await API.query(Prismic.Predicates.at('document.type', 'founder'), { lang: 'fr-FR' });
  const { body } = response.results[ 0 ].data;
  return { body };
};

export default Contact;
