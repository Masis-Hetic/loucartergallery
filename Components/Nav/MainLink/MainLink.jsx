import React from 'react';
import PropTypes from 'prop-types';
import { get } from 'lodash/fp';
import StyledMainLink from "./MainLink.style";


const MainLink = props => {
  console.log('props :: ', props);

  return (
  <div>
    <p
      onClick={() => props.openOrNot(!props.isListOpen)}
      data-index={props.index}
    >
      {props.data.is_first_level && get('data.title_group[0].text', props)}
    </p>

    <StyledMainLink isListOpen={props.isListOpen} data-index={props.index}>
      {get('data.group_link', props).map((link, i) =>
        <li key={i}>
          <div>
            {get('boolean', link) &&
              <span>-- {get('nom_du_lien[0].text', link)}</span>
            }
          </div>

          {!!get('data.group_link', link) &&
            <>
              <p>{get('data.title_group[0].text', link)}**</p>

              {get('data.group_link', link).map((subLink, i) =>
                <div>
                  <span style={{ display: 'block' }}>-- {get('nom_du_lien[0].text', subLink)}</span>
                </div>
              )}
            </>
          }

        </li>
      )}
    </StyledMainLink>
  </div>
  );
};

MainLink.propTypes = {

};

export default MainLink;




















/*
import React, { Fragment, useState } from 'react';
import Link from "next/link";

import StyledMainLink from "./MainLink.style";

const MainLink = props => {
  const [ isOpen, openGroup ] = useState(false);
  const [ index, setIndex ] = useState(null);

  const toggleGroup = id => {
    if (Number(index) === props.index) {
      console.log('ififififififif');
    }
    setIndex(id);
    openGroup(!isOpen);
  };

  return (
    <Fragment>
      <p
        onClick={e => {
          console.log(e.target.id)
          return toggleGroup(e.target.id);
        }}
        id={props.index}
      >
        {props.data.title_group[0]?.text}
      </p>
      <StyledMainLink isOpen={isOpen} index={index} id={props.index} toOpen={Number(index) === props.index && isOpen}>
        {props.data.group_link.map((link, i) =>
          <li key={i}>
            {link.data ?
              <MainLink data={link.data} lvl='campagnes' index={i} id={props.index}/> :
              <Link href={props.lvl ? `/${props.lvl}/${link.lien.uid}` : `/${link.lien.uid}`}>
                <a id={props.index}>{link.nom_du_lien[0].text}</a>
              </Link>
            }
          </li>
        )}
      </StyledMainLink>
    </Fragment>
  );
};

MainLink.propTypes = {};

export default MainLink;
*/
