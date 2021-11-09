import getOrders from "./../DAL/DAL";


let SET_ORDERS = "SET_ORDERS";
let SET_FETCH = "SET_FETCH";
let SET_AMOUNT = "SET_AMOUNT";
let ADD_ORDERS = "ADD_ORDERS";
let REMOVE_ORDERS = "REMOVE_ORDERS";
let CHANGE_CONST_AMOUNT = "CHANGE_CONST_AMOUNT";


let initialState = {
  orders: [

  ],
  currentPage: 1,
  amountOnOnePage: 10,
  get skip(){
    return (this.currentPage*this.amountOnOnePage) - this.amountOnOnePage;
  },
  isFetching: false,
  constAmount: 10,
  orderListLength: 0,
}

export default function ordersReducer(state=initialState, action){
  switch (action.type) {
    case SET_ORDERS:{

      return {...state, orders: action.orders, currentPage: action.currentPage, isFetching:false, constAmount: state.amountOnOnePage, orderListLength: action.orderListLength};
    }
    case SET_FETCH:{
      return {...state, isFetching: true}
    }
    case SET_AMOUNT:{
      return {...state,amountOnOnePage: Number(action.value)}
    }
    case CHANGE_CONST_AMOUNT:{

      return {...state, constAmount: action.val}
    }
    case ADD_ORDERS:{
      let orderList = state.orders.concat(action.orders);
      return {...state, orders: orderList, isFetching: false};
    }
    case REMOVE_ORDERS:{
      let orderList = state.orders.slice(0,action.amount);
      return {...state, orders: orderList, isFetching: false};
    }
    default: return state;
  }
}

function setOrdersAC(orders, currentPage=1){
  return{
    type: SET_ORDERS,
    orders: orders.orderList.Result,
    orderListLength: orders.length,
    currentPage
  }
}

export function setFetchAC(){
  return {
    type: SET_FETCH,
  }
}

export function setAmountOnOnePageAC(value){
  return {
    type: SET_AMOUNT,
    value: value
  }
}

function addOrdersAC(orders){
  return{
     type: ADD_ORDERS,
     orders: orders,
  }
}

function removeOrdersAC(amount){
  return{
     type: REMOVE_ORDERS,
     amount: amount
  }
}

export function changeConstAmount(val){
   return {
     type: CHANGE_CONST_AMOUNT,
     val: val
   }
}

export function addOrdersThunkCreator(current_amount,prev_amount,const_amount,currentPage){
  return function(dispatch){
    dispatch(setFetchAC());
     if(current_amount > prev_amount){
       getOrders(current_amount - prev_amount,((currentPage-1)*const_amount)+prev_amount).then((data)=>{dispatch(addOrdersAC(data.orderList.Result))})
     }else{
       dispatch(removeOrdersAC(current_amount - prev_amount));
     }
  }
}


export function setOrdersThunkCreator(take,skip,isFirst, currentPage){
  return function(dispatch){
    dispatch(setFetchAC());
    getOrders(take,(currentPage-1)*take,isFirst).then((data)=>{let {orderList, length} = data;let orders_data = {orderList,length};dispatch(setOrdersAC(orders_data, currentPage))});
  }
}
