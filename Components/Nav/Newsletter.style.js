import styled from "styled-components";
import media  from "../../helpers/media";

/**
 * @property { boolean } newsletter
 */

const Newsletter = styled.div`
  position: fixed;
  width: 100%;
  height: 100vh;
  display: none;
  display: ${props => !props.newsletter ? 'none' : 'block'};
  bottom: ${props => !props.newsletter ? '-100%' : '0'};
  opacity: ${props => !props.newsletter ? '0' : '1'};
  transition: .3s ease-in-out;
  background: ${props => !props.newsletter ? 'none' : 'rgba(0, 0, 0, .9)'};
  z-index: 100;
`;

Newsletter.Wrapper = styled.div`
  padding       : 2rem;
  background    : #080808;
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

export default Newsletter;
