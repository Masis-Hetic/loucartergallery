import React            from 'react';
import StyledFirstPanel from "./FirstPanel.style";
import propTypes        from 'prop-types';
import CloseBtn         from "../../static/icons/close-btn";

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
      <StyledFirstPanel
        open={props.open}
      >
        <StyledFirstPanel.CloseBtn onClick={ () => props.closePan() }>
          <CloseBtn/>
        </StyledFirstPanel.CloseBtn>

        <StyledFirstPanel.Ul>
          {props.nav.map((li, i) =>
            <StyledFirstPanel.Li key={i} onClick={() => props.openSecondPanel(true, i)}>
              <span/>
              <span>{li.data.link_one[0].text}</span>
            </StyledFirstPanel.Li>
          )}
        </StyledFirstPanel.Ul>
      </StyledFirstPanel>
  );
};

FirstPanel.propTypes = {

};

export default FirstPanel;
