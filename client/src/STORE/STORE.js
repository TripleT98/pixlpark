import {createStore, combineReducers, applyMiddleware} from "redux";
import thunkMiddleware from "redux-thunk";
import ordersReducer from "./OrdersReducer";

let reducers = combineReducers({
  forOrders: ordersReducer,
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));


window.store = store;
export default store;
