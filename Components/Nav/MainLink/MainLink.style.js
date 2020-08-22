import styled from "styled-components";

const StyledMainLink = styled.ul`
  display: ${ props => props.isListOpen ? 'block' : 'none' };
`;

/*const StyledMainLink = styled.ul`
  display: ${props => {
    return props.isOpen ? 'block' : 'none';
  }};
  background: ${props => props.toOpen ? 'red' : 'none'};
  margin-left: 30px;
  & > li > a {
    font-size: 13px;
    font-weight: bold;
    &:before {
      content: "•";
      padding-right: 8px;
      font-size: 2em;
      vertical-align: sub;
    }
  }
`;*/

export default StyledMainLink;
