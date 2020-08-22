import styled from "styled-components";

const StyledMainLink = styled.ul`
  display: ${(props) => props.isOpen ? 'block' : 'none'};
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
`;

export default StyledMainLink;
