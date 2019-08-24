import styled, { keyframes } from "styled-components";
import media  from "../../helpers/media";
import COLORS from "../../helpers/colors";

const showCookiesBanner = keyframes`
  from {
    display: none;
    opacity: 0;
  }
  to {
    display: block;
    opacity: 1;
  }
`;

const hideCookiesBanner = keyframes`
  from {
    display: block;
    opacity: 1;
  }
  to {
    display: none;
    opacity: 0;
  }
`;

const CookiesBanner = styled.div`
  animation-name      : ${ props => props.accepted ? hideCookiesBanner : showCookiesBanner };
  animation-fill-mode : forwards;
  position            : absolute;
  z-index             : 100;
  left                : 0;
  width               : 100%;
  background          : rgba(0, 0, 0, .7);
  transition          : .4s ease-in-out;
  overflow            : hidden;
  bottom              : ${ props => !props.accepted ? '0' : '-100%' };

  ${media.mobile`
    height: ${ props => props.showMore === true ? '100%' : 'inital' };
    overflow-y: ${ props => props.showMore === true ? 'scroll' : 'hidden' };
  `}
`;

CookiesBanner.Wrapper = styled.div`
  display        : flex;
  width          : 90%;
  margin         : 0 auto;
  padding        : 1.7rem 0;
  flex-direction : row;

  ${media.mobile`
    width: 90%;
    flex-direction: column;
  `}
`;

CookiesBanner.Infos = styled.div`
  width          : 70%;
  display        : flex;
  line-height    : 1.5;
  font-size      : .8rem;
  flex-direction : column;

  ${media.mobile`
    width: 100%;
    margin-top: 20px;
  `}
`;

CookiesBanner.Details = styled.div`
  transform  : ${ props => props.showMore ? 'scaleY(1)' : 'scaleY(0)' };
  opacity    : ${ props => props.showMore ? '1' : '0'};
  height     : ${ props => props.showMore ? 'auto' : '0' };
  margin     : ${ props => props.showMore ? '2rem auto' : '0' };
  transition : .3s linear;

  p {

    &:nth-of-type(1) {
      font-family: 'Aileron-SemiBold', sans-serif;
      margin-bottom: .5rem;
    }
  }
`;

CookiesBanner.BigWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  width: 30%;
  align-items: ${ props => !props.showMore ? 'center' : 'flex-start' };

  ${media.mobile`
    width: 100%;
    margin-top: 20px;
    flex-direction: column;
    align-items: center;
  `}
`;

CookiesBanner.ChoiceWrapper = styled.div`
  height: ${ props => props.showMore ? '100%' : 'unset' };

  ${media.mobile`
    display: flex;
    flex-direction: column-reverse;

    &:nth-of-type(1) {
      margin-bottom: 2rem;
    }
  `}
`;

CookiesBanner.SelectChoice = styled.div`
  display: flex;
  margin-top: 4rem;

  ${media.mobile`
    margin-top: 0;
    margin-bottom: 20px;
  `}
`;

CookiesBanner.SelectChoiceWrapper = styled.div`
  display        : flex;
  flex-direction : column;
  align-items    : center;
  cursor         : pointer;
  margin-right   : ${ props => props.marginRight ? props.marginRight : 'initial'};
`;

CookiesBanner.Label = styled.label`
  margin: 0 0 10px 0;
  cursor: pointer;
  
  ${media.mobile`
    margin: 10px 0;
  `}
`;

CookiesBanner.Button = styled.button`
  border           : none;
  background-color : transparent;
  color            : ${ COLORS.white };
  cursor           : pointer;
  padding          : 2px 5px 6px;
  outline          : none;
  position         : relative;
  z-index          : 100;
  border           : ${ props => props.border && props.border };
  border-bottom    : ${ props => props.borderBottom && props.borderBottom };
  padding          : ${ props => props.padding && props.padding };
`;

CookiesBanner.Input = styled.input`
  width: 16px;
  height: 16px;
  border: 1px solid ${ COLORS.white };
  -webkit-appearance: none !important;
  outline: none;
`;

CookiesBanner.AcceptedInput = styled(CookiesBanner.Input)`
  background: ${ props => props.choice === true && COLORS.white };
`;

CookiesBanner.RefusedInput = styled(CookiesBanner.Input)`
  background: ${ props => props.choice === false && COLORS.white };
`;

export default CookiesBanner;
