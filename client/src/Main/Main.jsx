import styled from "styled-components";
import {useEffect} from "react";
import {setOrdersThunkCreator} from "./../STORE/OrdersReducer";
import {connect} from "react-redux";
import Container from "./Orders/Orders";

let StyledMain = styled.div`
background-color: transparent;
width: 100%;
padding: 40px;
padding-top: 100px;
overflow: auto;
`
function Main(props){
  useEffect(()=>{
    props.setOrders();
  },[]);
  return (
    <StyledMain>
       <Container orders={props.orders} isFetching={props.isFetching}/>
    </StyledMain>
  )
}

function stateToProps(state){
  return{
    orders: state.forOrders.orders,
    isFetching: state.forOrders.isFetching,
  }
}

function dispatchToProps(dispatch){
  return{
     setOrders: function(){
       dispatch(setOrdersThunkCreator());
     }
  }
}

export default connect(stateToProps, dispatchToProps)(Main);
