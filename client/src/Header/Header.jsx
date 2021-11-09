import styled from "styled-components";

let StyledHeader = styled.div`
position: fixed;
top: 0px;
left: 0px;
background:linear-gradient(to bottom, black 80%, red, transparent);
width: 100%;
height: 100px;
color: green;
font-size: 30px;
font-family: "monospace";
text-align: center;
padding-top: 10px;
text-shadow: 1px 1px 5px green;
`

function Header(props){
  return (
    <StyledHeader>
       pixlpark
    </StyledHeader>
  )
}

export default Header;
