import styled from "styled-components";
import COLORS from "../../../helpers/colors";

const StyledHome = styled.div`
  width: 100vw;
  height: 100vh;
  position: relative;

  h1 {
    background: #000;
    top: 50%;
    right: 20px;
    position: absolute;
    writing-mode: vertical-lr;
    text-orientation: mixed;
    transform: translateY(-50%) rotate(180deg);
    -webkit-transform: translateY(-50%) rotate(180deg);
    -moz-transform: translateY(-50%) rotate(180deg);
    -ms-transform: translateY(-50%) rotate(180deg);
    -o-transform: translateY(-50%) rotate(180deg);
    opacity: 1;
    padding: 0.6rem 0;
    display: table;
    font-weight: 300;
    font-size: 0.9rem;
    color: ${COLORS.lightGrey};
    line-height: 2.3;
    
    span {
      letter-spacing: 4px;
    }
  }

  .current-image {
    width: 60vw;
    height: 50vh;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    img, a {
      display: block;
      width: 100%;
      height: 100%;
    }
    
    img {
      object-fit: contain;
    }
  }
`;

export default StyledHome;
