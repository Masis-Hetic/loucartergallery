import React, { Fragment } from 'react';
import StyledFirstPanel    from "./FirstPanel.style";
import propTypes           from 'prop-types';
import CloseBtn            from "../../static/icons/close-btn";

/**
 * @property { Array } link_one
 * @property { Number } thirdIndex
 * @property { Function } openThirdPanel
 * @param props
 * @returns {*}
 * @constructor
 */
const FirstPanel = props => {
  return (
    <Fragment>
      {props.open &&
      <StyledFirstPanel
        StyledFirstPanel onMouseOver={ () => props.openThirdPanel(false, props.thirdIndex) }
      >
        <StyledFirstPanel.CloseBtn onClick={ () => props.closePan(false) }>
          <CloseBtn/>
        </StyledFirstPanel.CloseBtn>

        <StyledFirstPanel.Ul>
          {props.nav.map((li, i) =>
            <StyledFirstPanel.Li key={i} onClick={() => props.openSecondPanel(true, i)}>
              {li.data.link_one[0].text}
            </StyledFirstPanel.Li>
          )}
        </StyledFirstPanel.Ul>
      </StyledFirstPanel>
      }
    </Fragment>
  );
};

FirstPanel.propTypes = {

};

export default FirstPanel;
