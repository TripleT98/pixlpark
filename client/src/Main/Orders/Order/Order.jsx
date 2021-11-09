import styled,{keyframes, css} from "styled-components";
import {useState, useEffect, memo} from "react";
import Fetching from "./../../Fetching/Fetching";
import link from "./../../../immages/amazon_link.png";
import error_image from "./../../../immages/404.jpg";
import styles from "./Order.module.css";

let bluring = keyframes`
0%{
  opacity: 0;
}
100%{
  opacity: 1;
}
`

let StyledWrap = styled.div`
width: 500px;
height: 500px;
margin: 20px;
background-color:rgb(237, 237, 237);
border-radius: 10px;
box-shadow: 4px 4px 4px rgb(149, 149, 149);
padding: 10px;
display: flex;
justify-content: space-between;
`
let InfoWrap = styled.div`
width: 49%;
height: 100%;
background-color:rgb(237, 237, 237);
border-radius: 10px;
border: 1px solid rgb(163, 163, 163);
overflow: hidden;
padding: 7px;
`

let ImageWrap = styled.div`
width: 100%;
height: 50%;
background-color: white;
border-radius: 10px;
overflow: hidden;
positon: relative;
top: 0px;
left: 0px;
`

let ContentWrap = styled(ImageWrap)`
background-color:rgb(237, 237, 237);
border-top: 1px solid rgb(163, 163, 163);
padding: 15px;
`

let StyledStatus = styled.div`
min-width: 100px;
max-width: max-content;
height: 30px;
background-color:rgb(237, 237, 237);
border: 1px solid rgb(163, 163, 163);
padding: 4px;
text-align: center
`

let Link = styled.div`
margin-top: 20px;
width:50px;
height: 50px;
border-radius: 50%;
background-color: inherit;
overflow: hidden;
transition-duration: .5s;
&:hover{
  transition-duration: .5s;
  box-shadow: 0px 0px 4px rgb(163, 163, 163);
}
`

let StyledImmage = styled.img`
width:100%;
height:100%;
&:hover{
cursor: pointer;
}
${props=>props.isError&&css`
height: 150px;
width: 230px;
&:hover{
  cursor:default;
}
  `}
`

let StyledImgBlock = styled.div`
width:100%;
height:100%;
background-color: rgb(224, 224, 224);
background-position: ${props=>css`${props.pos.x}px ${props.pos.y}px`};
background-image:${props=>{return `url(${props.img})`}};
background-repeat: no-repeat;
`

let StyledBig = styled.div`
position: fixed;
top:0px;
left: 0px;
z-index: 2;
width: 100vw;
height: 100vh;
background-color: rgba(0, 0, 0, 0.72);
display: flex;
justify-content: center;
align-items: center;
${props=>!props.bigImm&&css`
  display: none;
  `}
  overflow: auto;
  padding-top: 20px;
`

let StyledCanvas = styled.div`
min-width: 200px;
min-height: 200px;
width: max-content;
height: max-content;
padding: 10px;
background-color: white;
display: flex;
justify-content: center;
align-items: center;
`

let BigImm = styled.img`
background-immage:${props=>`url(${props.src})`}
`

let StyledSpan = styled.span`
wont-weight: 600;
`

function Order(props){
  console.log(props);
  /*let [isGrabbed, grab] = useState(false);
  let [imgPos, changePos] = useState({x:0,y:0,prevX:0,prevY:0});
  let [currentPoint, setCurrPoint] = useState({x:0,y:0});*/
  let [isError, setError] = useState(false);
  let [time, setTime] = useState(null);
  let [bigImm, showBig] = useState(false);

  useEffect(()=>{
    setTime(setTimeout(()=>{setError(true)},3000));
  }, [])

  return (
       <StyledWrap>
          <InfoWrap>
             <ImageWrap><StyledImmage isError={isError} src={isError?error_image:props.PreviewImageUrl} onLoad={()=>{clearTimeout(time)}} onClick={()=>{if(isError){return false};showBig(true)}}/></ImageWrap>
             <ContentWrap><StyledStatus>{"Status: " + props.PaymentStatus}</StyledStatus><Link><a href={props.DownloadLink}><StyledImmage src={link} title="soucre"/></a></Link></ContentWrap>
          </InfoWrap>
         <InfoWrap>
         <div className={styles.params}>{props.Title&&<span><span className={styles.title}>Title: </span>{props.Title}</span>}</div>
         <div className={styles.params}>{props.DeliveryAddress?.Country&&<span><span className={styles.title}>Country: </span>{props.DeliveryAddress?.Country}</span>}</div>
         <div className={styles.params}>{props.DeliveryAddress?.City&&<span><span className={styles.title}>City: </span>{props.DeliveryAddress?.City}</span>}</div>
         <div className={styles.params}>{props.DeliveryAddress?.AddressLine1||props.DeliveryAddress?.AddressLine2?props.DeliveryAddress?.AddressLine1?<span><span className={styles.title}>Adress: </span> {props.DeliveryAddress?.AddressLine1}</span>:<span><span className={styles.title}>Adress: </span>{props.DeliveryAddress?.AddressLine2}</span>:""}</div>
          <div className={styles.params}>{props.DeliveryAddress?.FullName&&<span><span className={styles.title}>Full Name: </span>{props.DeliveryAddress?.FullName}</span>}</div>
          <div className={styles.params}>{props.DeliveryAddress?.Phone&&<span><span className={styles.title}>Phone: </span>{props.DeliveryAddress?.Phone}</span>}</div>
          <div className={styles.params}>{props.DeliveryPrice != 0&&<span><span className={styles.title}>Delivery Price: </span>{props.DeliveryPrice} ₽</span>}</div>
          <div className={styles.params}>{props.DiscountPrice != 0&&<span><span className={styles.title}>Discount Price: </span>{props.DiscountPrice} ₽</span>}</div>
          <div className={styles.params}>{props.PaidPrice != 0&&<span><span className={styles.title}>Paid Price: </span>{props.PaidPrice} ₽</span>}</div>
          <div className={styles.params}>{props.TotalPrice != 0&&<span><span className={styles.title}>Total Price: </span>{props.TotalPrice} ₽</span>}</div>
         </InfoWrap>
         <StyledBig bigImm={bigImm} onClick={()=>{showBig(!bigImm)}}><StyledCanvas><BigImm src={props.PreviewImageUrl}/></StyledCanvas></StyledBig>
       </StyledWrap>
  )
}
//<Fetching forImmg={true} />
//<StyledImmage src={isError?error_image:props.PreviewImageUrl} onLoad={()=>{clearTimeout(time)}}/>

//<StyledImgBlock pos={imgPos} img={props.PreviewImageUrl} onMouseMove={(e)=>{if(!isGrabbed){return false};changePos({x:imgPos.x+3,y:imgPos.y+3, prevX:imgPos.x,prevY:imgPos.y})}} onMouseDown={(e)=>{grab(true)}} onMouseUp={(e)=>{grab(false)}}></StyledImgBlock>

export default memo(Order);
