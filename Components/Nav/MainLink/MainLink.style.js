import styled from "styled-components";

const StyledMainLink = styled.ul`
  color: ${(props) => {
    return props.idGroup === props.index ? 'red' : 'blue'
}}
`

export default StyledMainLink;
