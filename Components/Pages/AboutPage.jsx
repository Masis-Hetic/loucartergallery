import React, { Fragment } from 'react';
import Link from "next/link";

const AboutPage = ( { result } ) => (
  <Fragment>
    <p>
      Welcome to AboutPage
    </p>

    <Link href={'/'}>
      <a>Home</a>
    </Link>
  </Fragment>
);

export default AboutPage;
