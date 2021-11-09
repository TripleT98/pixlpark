import styled,{createGlobalStyle, keyframes, css} from "styled-components";
import {Provider} from "react-redux";
import Header from "./Header/Header.jsx";
import Main from "./Main/Main.jsx";
import Footer from "./Footer/Footer.jsx";
import store from "./STORE/STORE";
import getOrders from "./DAL/DAL";
import {BrowserRouter,Route} from "react-router-dom";
import {useState} from "react";

let Global = createGlobalStyle`
*{
  box-sizing: border-box;
  margin: 0px;
  padding: 0px;
  font-family: "Arial";
}
`

let StyledApp = styled.div`
width: 100vw;
height: 100vh;
display: flex;
background: linear-gradient(45deg, grey, black);
overflow: hidden;
`

function App() {
  return (
    <BrowserRouter>
     <Provider store={store}>
         <Global />
         <StyledApp>
              <Header />
              <Main />
              <Footer />
         </StyledApp>
     </Provider>
  </BrowserRouter>
  );
}

let rotate = keyframes`
0%{
  top: -200px;
}
70%{
  top: 350px;
  background-color: rgb(223, 82, 37);
}
75%{
  top: 330px;
  background-color: blue;
}
80%{
  top: 340px;
  background-color: black;
}
90%{
  top: 335px;
  background-color: red;
}
100%{
  top: 333px;
  background-color: green;
}
`

let ro = keyframes`
0%{
  top: 300px;
}
100%{
  top: -200px;
}
`

let StyledAnim = styled.div`
position: absolute;
left: 500px;
width: 200px;
height: 200px;
background-color: rgb(223, 82, 37);
${props=>{
  switch (props.state){
    case "no":{
   return css`top: -200px`;
    }
    case false:{
      return css`animation: ${rotate} 1s linear forwards;`;
    }
    case true:{
      return css`animation: ${ro} 1s linear forwards`;
  }
  default: return "";
}}}
`

function Anim(props){
  let [state, setState] = useState("no");
  document.onclick=()=>{
    setState(!state);
  };

  return (
    <StyledAnim state={state}>
      Anim
    </StyledAnim>
  )
}

export default App;
