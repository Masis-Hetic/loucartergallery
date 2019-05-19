import React, { Fragment } from 'react';
import Head                from 'next/head';
import Prismic             from 'prismic-javascript';

import '../styles/style.scss';

import { PRISMIC_API } from '../config';
import ContactPage     from '../Components/Pages/ContactPage';
import MainComponent   from '../Components/Main/Main';

const Contact = ({ data }) => (
  <Fragment>
    <Head>
      <title>Lou Carter Gallery - Contact</title>
    </Head>
    
    <MainComponent>
      <ContactPage result={ data }/>
    </MainComponent>
  </Fragment>
);

Contact.getInitialProps = async({}) => {
  const API = await Prismic.api(PRISMIC_API);
  const response = await API.query(Prismic.Predicates.at('document.type', 'contact'), { lang: 'fr-FR' });
  const { data } = response.results[ 0 ];
  return { data };
};

export default Contact;
