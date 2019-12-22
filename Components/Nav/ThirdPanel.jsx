import React, { Fragment } from 'react';
import PropTypes           from 'prop-types';
import Link                from "next/link";
import StyledThirdPanel    from "./ThirdPanel.style";

/**
 * @property { Array } link_three
 * @property { Array } link_three_href
 * @property { Object } link_to_level_three
 * @param props
 * @returns {*}
 * @constructor
 */
const ThirdPanel = props => {
  return (
    <Fragment>
      {props.open &&
      <StyledThirdPanel
        onMouseOver={() => props.openThirdPanel( true, props.thirdIndex )}
        onMouseLeave={() => props.openThirdPanel( true, props.thirdIndex )}
      >
        {props.nav[0].data.body[props.thirdIndex].items[0].link_three[0].text.length >= 1 &&
          <Fragment>
            <ul>
              {props.nav[0].data.body[props.thirdIndex].items.map((li, i) =>
                <li key={i}>
                  {li.link_three_href[0].text.length > 0
                    ? (
                      <Link
                        href={`/${li.link_three_href[0].text}?slug=${li.link_to_level_three.uid}`}
                        as={`/${li.link_three_href[0].text}/${li.link_to_level_three.uid}`}
                      >
                        <a onClick={() => props.closeAllPan(false, false, null)}>
                          {li.link_three[0].text}
                        </a>
                      </Link>
                    )
                    : (
                      <Link
                        href={`/${li.link_to_level_three.uid}`}
                        as={`/${li.link_to_level_three.uid}`}
                      >
                        <a onClick={() => props.closeAllPan(false, false, 0)}>
                          {li.link_three[0].text}
                        </a>
                      </Link>
                    )
                  }
                </li>
              )}
            </ul>
          </Fragment>
        }
      </StyledThirdPanel>
      }
    </Fragment>
  );
};

ThirdPanel.propTypes = {

};

export default ThirdPanel;
