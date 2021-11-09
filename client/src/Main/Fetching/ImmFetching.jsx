import styled,{keyframes, css} from "styled-components";

let StyledFetch = styled.div`
position: relative;
width: 80px;
height: 60px;
top: 100px;
left: 70px;
display: flex;
justify-content: center;
align-items: center;
background-color: rgb(193, 169, 99);
`

let StyledPoint = styled.div`
 margin-right: 10px;
 width: 10px;
 height: 10px;
 border-radius: 50%;
 background-color: rgb(100, 194, 223);
`
function ImmFetch(props){
  return(
    <StyledFetch>
       <StyledPoint />
       <StyledPoint />
       <StyledPoint />
    </StyledFetch>
  )
}


export default ImmFetch;
