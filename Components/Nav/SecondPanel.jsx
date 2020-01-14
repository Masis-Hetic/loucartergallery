import React             from 'react';
import PropTypes         from 'prop-types';
import Link              from "next/link";
import { get }           from 'lodash/fp';
import CloseBtn          from "../../static/icons/close-btn";
import StyledSecondPanel from "./SecondPanel.style";

/**
 * @property { Array } link_two
 * @property { Array } link_two_href
 * @property { String } link_to_level_two
 * @property { Array } primary
 * @property { Function } openThirdPanel
 * @param props
 * @returns {*}
 * @constructor
 */
const SecondPanel = props => {
  return (
    <StyledSecondPanel open={props.open}>
      <StyledSecondPanel.CloseBtn onClick={ () => props.closeAllPan(0) }>
        <CloseBtn/>
      </StyledSecondPanel.CloseBtn>

      <ul>
        { props.nav[ props.index ].data.body.map( ( li, i ) =>
        li.primary.link_to_level_two.uid === 'collections'
          ? (
            <li
              style={ { display: 'table', lineHeight: 3.5 } }
              key={ i }
              onMouseEnter={ () => props.openThirdPanel( false, i ) }
              onMouseLeave={ () => props.openThirdPanel( false, i ) }
            >
              <Link
                href={ `/${ li.primary.link_to_level_two.uid }` }
                as={ `/${ li.primary.link_to_level_two.uid }` }
              >
                <a>{ li.primary.link_two[ 0 ].text }</a>
              </Link>
            </li>
          )
          : li.primary.link_to_level_two.url
            ? (
              <li key={i}>
                <a href={li.primary.link_to_level_two.url} target="_blank">{li.primary.link_two[ 0 ].text}</a>
              </li>
            )
            : (
              <li
                style={ { display: 'block', lineHeight: 3.5 } }
                key={ i }
                onMouseEnter={ () => props.openThirdPanel(get('primary.link_two_href[0].text', li) !== undefined && get('primary.link_two_href[0].text', li).length <= 0, i ) }
                onMouseLeave={ () => props.openThirdPanel(get('primary.link_two_href[0].text', li) !== undefined && get('primary.link_two_href[0].text', li).length <= 0, i ) }
              >
                { li.primary.link_to_level_two.uid
                  ? (
                    <Link
                      href={ li.primary.link_two_href[ 0 ].text.length > 0 && `${ li.primary.link_two_href[ 0 ].text }/page-[page]` }
                      as={ li.primary.link_two_href[ 0 ].text.length > 0 && `${ li.primary.link_two_href[ 0 ].text }/page-1` }
                    >
                      <a  onClick={ () => props.closeAllPan() }>{ li.primary.link_two[ 0 ].text }</a>
                    </Link>
                  )
                  : <p onClick={ () => props.isNewsletter( li.primary.link_two[ 0 ].text ) }>
                      { li.primary.link_two[ 0 ].text }
                    </p>
                }
              </li>
            )
        ) }
      </ul>
    </StyledSecondPanel>
  );
};

SecondPanel.propTypes = {};

export default SecondPanel;
