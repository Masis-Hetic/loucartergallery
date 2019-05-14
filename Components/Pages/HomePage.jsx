import React, { Fragment } from 'react';
import Link from "next/link";

const HomePage = ( { result } ) => (
  <Fragment>
    <p>
      Welcome to HomePage
    </p>
    <Link href={ '/about' }>
      <a>About</a>
    </Link>
  </Fragment>
);

export default HomePage;
