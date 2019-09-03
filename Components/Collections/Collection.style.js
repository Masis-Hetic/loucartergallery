import styled from "styled-components";
import media from "../../helpers/media"
import COLORS from "../../helpers/colors";

const SingleCollection = styled.div`
  width: 100vw;
  height: 100vh;
  overflow-y: hidden;
  
  ${media.mobile`
		overflow-y: unset;    
  `}
`;

SingleCollection.Ul = styled.ul`
  display: flex;
  flex-wrap: wrap;
  width: 45%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%);
  
  ${media.mobile`
    top: 10rem;
    width: 90vw;
    flex-direction: column;
    margin-bottom: 10rem;
  `}
`;

SingleCollection.Li = styled.li`
  height: auto;
  border: 1px solid ${ COLORS.white };
  flex: 1 0 45%;
  cursor: pointer;
  margin: ${ props => props.margin };
  
  &:last-child {
    flex: none;
    width: ${ props => props.lastChild && props.lastChild.width }px;
    height: ${ props => props.lastChild && props.lastChild.height }px;
  }
  
  ${media.mobile`
    margin: 0 0 40px 0;
  `}
`;

SingleCollection.Img = styled.img`
	display: block;
	width: 100%;
	height: 100%;
`;

SingleCollection.SelectedImage = styled.div`
	width: calc(100% - ${ props => props.left }px);
	left: ${ props => props.left }px;
	height: calc(${ props => (props.height * 2) + 44 }px);
	position: fixed;
	top: 50%;
	transform: translateY(-50%);
	z-index: 2;
	display: ${ props => props.display };
	
	${media.mobile`
    width: 100%;
    height: 100vh;
    left: unset;
    top: unset;
    transform: unset;
    bottom: 0;
    background: #080808;
    overflow-y: scroll;
    flex-direction: column;
    z-index: 100;
	`}
`;

SingleCollection.BigImage = styled.img`
	display: block;
	width: ${ props => props.width }px;
	height: 100%;
	border: 1px solid ${ COLORS.white };
	
	${media.mobile`
		width: 100%;
		margin: 0 auto;
		object-fit: contain;
		border: none;
	`}
`;

SingleCollection.DescriptionWrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	padding: 0 50px;
	background: #080808;
	
	${media.mobile`
		margin: 50px 0;
	`}
`;

SingleCollection.ArtistName = styled.p`
	font-size: 1.3rem;
`;

SingleCollection.CollectionName = styled.p`
	margin: 30px 0 5px 0;
`;

SingleCollection.ArtName = styled.p`
	margin-bottom: 10px;
`;

SingleCollection.CloseBtn = styled.div`
	position: absolute;
	top: 0;
	right: 50px;
	cursor: pointer;
	
	${media.mobile`
		top: 30px;
		right: 30px;
	`}
`;

export default SingleCollection;
