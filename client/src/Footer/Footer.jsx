import styled from "styled-components";
import ButtonBar from "./../Main/ButtonBar/ButtonBar";

let StyledFooter = styled.div`
position: fixed;
bottom: 0px;
right: 0px;
height: max-content;
background: linear-gradient(to top,rgb(56, 56, 56),rgb(154, 154, 154) 90%, transparent);
width: 100%;
display: flex;
align-items: center;
flex-direction: column;
`

let StyledBottom = styled.div`
height: 50px;
width: 100%;
background-color: transparent;
`

function Footer(props){
  return (
    <StyledFooter>
       <ButtonBar />
       <StyledBottom />
    </StyledFooter>
  )
}

export default Footer;
