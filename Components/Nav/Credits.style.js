import styled from 'styled-components';
import COLORS from '../../helpers/colors';

/**
 * @property { boolean } credits
 */

const Credits = styled.section`
  position: fixed;
  width: 100%;
  height: 100vh;
  display: none;
  display: ${props => !props.credits ? 'none' : 'block'};
  bottom: ${props => !props.credits ? '-100%' : '0'};
  opacity: ${props => !props.credits ? '0' : '1'};
  transition: .3s ease-in-out;
  background: ${props => !props.credits ? 'none' : 'rgba(0, 0, 0, .9)'};
  z-index: 100;
`;

Credits.Wrapper = styled.div`
  display: flex;
  color: ${ COLORS.almostBlack };
  font-size: 14px;
  flex-direction: column;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: justify;
  justify-content: space-between;
  text-align: center;
  background: rgb(255, 255, 255);
  padding: 5vw;
  padding       : 2rem;
  background    : #FFF;
  position      : absolute;
  top           : .5rem;
  transform     : translate(-50%, 0);
  left          : 50%;
  width         : 95%;
  border-radius : 2px;
  border        : 1px solid #D9E1E8;

  @media (min-width : 576px) {
    padding   : 4rem;
    width     : 50%;
    top       : 50%;
    transform : translate(-50%, -50%);
    height    : auto;
  }

  @media (min-width : 1440px) {
    width : 40%;
  }
`;

Credits.Title = styled.div`
  font-size: 20px;
  margin: 10px auto;
  `;
Credits.Subtitle = styled.div`
  font-size: 16px;
  margin: 10px auto;
  `;
Credits.CloseBtn = styled.div`
  font-size: 20px;
  position : absolute;
  top      : 20px;
  right    : 20px;
  cursor   : pointer;
`;

Credits.Div = styled.div`
  margin: 10px auto;
`;
Credits.Span = styled.span`
  margin: 10px auto;
`;

export default Credits;
