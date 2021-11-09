import styled,{css} from "styled-components";
import Button from "./Button/Button";
import CountInput from "./CountInput/CountInput";
import {setOrdersThunkCreator, setAmountOnOnePageAC, addOrdersThunkCreator} from "./../../STORE/OrdersReducer";
import {connect} from "react-redux";

let StyledButtonBar = styled.div`
background-color: transparent;
display: flex;
justify-content: center;
align-items: center;
width: 100%;
height: max-content;
padding: 10px 0px 10px 0px;

`
function ButtonBar(props){
  let b_bar = [];
  let i = props.currentPage<=5?1:props.currentPage - 5;
  let j = props.currentPage<=5?10:props.currentPage+5;
  for(i; i<=j && i<=(props.orderListLength/props.amountOnOnePage); i++){
    b_bar.push(<Button num={i} {...props}/>)
  }
  if(props.currentPage >= 7){b_bar.unshift(<Button isEdged={true} num={1} {...props}/>)}
  b_bar.push(<Button isEdged={true} num={Math.ceil(props.orderListLength/props.amountOnOnePage)} {...props}/>);
  return (
    <StyledButtonBar isFetching={props.isFetching}>
       <CountInput count={props.amountOnOnePage} addOrders={props.addOrders} setAmount={props.setAmount} skip={props.skip} currentPage={props.currentPage} constAmount={props.constAmount}/>
       {b_bar}
    </StyledButtonBar>
  )
}

function stateToProps(state){
  return {
    currentPage: state.forOrders.currentPage,
    amountOnOnePage: state.forOrders.amountOnOnePage,
    skip: state.forOrders.skip,
    constAmount: state.forOrders.constAmount,
    orderListLength: state.forOrders.orderListLength,
    isFetching: state.forOrders.isFetching
  }
}

function dispatchToProps(dispatch){
  return{
    setOrders:function(take,skip,isFirst,page){
      dispatch(setOrdersThunkCreator(take,skip,isFirst,page))
    },
    setAmount: function(value){
      dispatch(setAmountOnOnePageAC(value))
    },
    addOrders: function(current_amount,prev_amount,const_amount,currentPage){
      dispatch(addOrdersThunkCreator(current_amount,prev_amount,const_amount,currentPage))
    },
  }
}

export default connect(stateToProps, dispatchToProps)(ButtonBar);
