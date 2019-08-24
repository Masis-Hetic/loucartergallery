import styled, { keyframes } from "styled-components";

/**
 * @property { boolean } newsletter
 * @property { string } color
 */

const loadsRipple = keyframes`
  0% {
    top     : 28px;
    left    : 28px;
    width   : 0;
    height  : 0;
    opacity : 1;
  }
  100% {
    top     : -1px;
    left    : -1px;
    width   : 58px;
    height  : 58px;
    opacity : 0;
  }
`;

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

Newsletter.SuccessMessage = styled.p`
  text-align : center;
  font-size  : 1rem;

  @media (min-width : 576px) {
    font-size : 1.3rem;
  }
`;

Newsletter.CloseBtn = styled.div`
  position : absolute;
  top      : 20px;
  right    : 20px;
  cursor   : pointer;
`;

Newsletter.Form = styled.form`
  width      : 100%;
  margin-top : 3rem;
`;

Newsletter.InputWrapper = styled.div`
  margin-bottom : 3rem;
`;

Newsletter.Label = styled.label`
  display       : block;
  text-align    : center;
  margin-bottom : 2rem;
`;

Newsletter.InputEmail = styled.input`
  line-height        : 4;
  padding-left       : 1rem;
  border             : 0;
  margin             : 0 auto;
  border-radius      : 0 !important;
  -webkit-appearance : none !important;
  border: 1px solid ${ props => props.color };
  color: ${ props => props.color };
  border-radius: 2px !important;
  letter-spacing: 2px;
`;

Newsletter.LdsRipple = styled.div`
  display   : inline-block;
  position  : relative;
  left      : 50%;
  transform : translateX(-50%);
  width     : 64px;
  height    : 64px;

  div {
    position      : absolute;
    border        : 4px solid #d9e1e8;
    opacity       : 1;
    border-radius : 50%;
    animation     : ${loadsRipple} 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;

    &:nth-child(2) {
      animation-delay : -0.5s;
    }
  }
`;

Newsletter.SubmitBtn = styled.input`
  margin-top: 1rem;
  padding: 0 1rem;
  display: table;
  background: #080808;
  color: ${ props => props.color };
  border: 1px solid ${ props => props.color };
  cursor: pointer;
  border-radius: 2px !important;
  -webkit-appearance: none !important;
`;

export default Newsletter;
