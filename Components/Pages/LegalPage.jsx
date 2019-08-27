import React        from 'react';
import { RichText } from 'prismic-reactjs';

import htmlSerializer from '../../helpers/html-serializer-form';

const LegalPage = ({ legalDatas }) => (
  <div className="legal-container">
    <div className="wrapper-text">
      { RichText.render(legalDatas.results[ 0 ].data.mentions_legales, htmlSerializer) }
    </div>
  </div>
);

export default LegalPage;
