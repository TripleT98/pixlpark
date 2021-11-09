import styled,{css} from "styled-components";
import Order from "./Order/Order";
import Fetching from "./../Fetching/Fetching";



let StyledContainer = styled.div`
 display: flex;
 flex-wrap: wrap;
 justify-content: center;
 padding-bottom: 100px;
`

function Container(props){
  return (
    <StyledContainer>
       {props.isFetching?<Fetching />:props.orders.map((e,i)=>{
         return <Order {...e} key={e.Id}/>
       })}
    </StyledContainer>
  )
}


export default Container;
