import styled from "styled-components";
import {useState} from "react";

let StyledInput = styled.input`
margin-right: 20px;
width: 40px;
height: 25px;
border: none;
text-align: center;
border-radius: 5px;
background-color: rgb(42, 42, 42);
color: white;
`

function CountInput(props){

  let[count, setCount] = useState(props.count);
  let[time, setTime] = useState(null);

  function onChangeHandler(e){
    if(time){clearTimeout(time)};
    let val = e.target.value;
    if(isNaN(val)||val.length>2||val>30){
      return false;
    };
    if(val.length > 1 && val != props.count){
      setTime(setTimeout(()=>{props.setAmount(val);props.addOrders(val,props.count,props.constAmount,props.currentPage)},1000));
    }
    setCount(val);
  }

  return (
    <>
       Output number: <StyledInput placeholder={count} value={count} onChange={onChangeHandler}></StyledInput>
    </>
  )
}


export default CountInput;
