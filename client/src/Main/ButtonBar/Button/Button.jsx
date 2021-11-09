import styled,{css} from "styled-components";

let StyledButton = styled.button`
width: 30px;
height: 30px;
border-radius: 50%;
background-color: rgb(88, 88, 88);
margin: 5px;
display: flex;
justify-content: center;
align-items: center;
border: none;
cursor: pointer;
${props=>props.currentPage == props.num && css`
   background-color: black;
   color: white;
  `}
  overflow: hidden;
${props=>props.isEdged&&css`
  margin-left: 10px;
  margin-right: 10px;
  `}
`

function Button(props){
  function clickHandler(e){
    props.setOrders(props.amountOnOnePage, props.skip, false, props.num);
  };

  return (
    <StyledButton disabled={props.currentPage == props.num} isEdged={props.isEdged} onClick={clickHandler} num={props.num} currentPage={props.currentPage}>
       {props.num}
    </StyledButton>
  )
}

export default Button;
