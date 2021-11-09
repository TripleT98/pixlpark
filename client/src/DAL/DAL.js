import axios from "axios";



export default function getOrders(take=10,skip=0,isFirst=true){
  return axios.get("http://localhost:5000/",{params:{take:take?take:10, skip:skip?skip:0, firstReq: isFirst}}).then((data)=>{return data.data}, (err)=>{return err});
}
