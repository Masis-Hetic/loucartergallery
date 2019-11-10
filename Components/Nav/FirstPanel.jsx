import React, { Fragment } from "react";
import Header              from "./Nav.style";

/**
 * @property { function } handleSecondPanel
 * @property { function } isNewsletter
 * @property { function } closePanel
 * @property { string } link_one
 * @param props
 * @returns {*}
 * @constructor
 */
const FirstPanel = props => {
  return (
    <Fragment>
      <Header.Nav>
        <Header.FirstPanel open={ props.open } onClick={ props.closePanel }>
          <span style={{fontSize: 20, cursor: 'pointer'}}>X</span>
        </Header.FirstPanel>
        <ul>
          {props.nav.map((item, i) =>
          <Fragment key={ i }>
          { item.uid !== 'partager'
            ? <Header.Li key={ i } onClick={ () => props.handleSecondPanel(i) }>
                {item.data.link_one[0].text}
              </Header.Li>
            : <Header.Li onClick={() => props.isNewsletter('newsletter')}>
                {item.data.link_one[0].text}
              </Header.Li>
          }
          </Fragment>
          )}
        </ul>
      </Header.Nav>
    </Fragment>
  )
};

export default FirstPanel;
