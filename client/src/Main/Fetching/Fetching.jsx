import styled,{css, keyframes} from "styled-components";

let rotation = keyframes`
0%{
  transform: scale(1) rotate(0deg);
}
50%{
  transform: scale(1.3) rotate(360deg);
}

100%{
  transform: scale(1) rotate(0deg);
}
`

let StyledFetching = styled.div`
width: 100px;
height: 100px;
border-radius: 50%;
position: absolute;
padding: 10px;
top: 40%;
left: 47%;
overflow: hidden;
background: linear-gradient(45deg, grey, black);
animation: ${rotation} ease-out infinite 2s;
${props=>props.core && css`
  width: 80px;
  height: 80px;
  background: transparent;
  position: static;
  `}
${props=>props.image&&css`
    top:0px;
    left:0px;
  `}
${props=>props.forImmg&&css`
  background: linear-gradient(45deg, grey, black);
  position: relative;
  top: 60px;
  left: 60px;
  display:${props=>props.isFetching&&"none"}
  `}
`


function Fetching(props){
  return (
    <StyledFetching image={props.image} forImmg={props.forImmg}>
      <StyledFetching core/>
    </StyledFetching>
  )
}

export default Fetching;
