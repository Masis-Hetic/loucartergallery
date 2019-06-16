import React from 'react';

// noinspection JSUnresolvedVariable
const FounderPage = ( { result } ) => (
  <div
    className="founder-container"
  >
    <div>
      { result.map( ( datas, i ) => (
        <div
          key={ i }
          className="founder-block"
        >
          <div>
            <p className="question">
              { datas.primary.question && datas.primary.question[ 0 ].text }
            </p>
            <p className="response">
              { datas.primary.reponse && datas.primary.reponse[ 0 ].text }
            </p>
          </div>
        </div>
      ) ) }
    </div>
  </div>
);

export default FounderPage;
