let express = require("express");
let cors = require("cors");
let axios = require("axios");
let crypto = require("crypto-js");
let sha1 = require("crypto-js/sha1");
let app = express();

app.use(cors());
app.use(express.json())

let PORT = 5000;

let base_url = "http://api.pixlpark.com/";
let pixlpark_req_token_url = base_url + "oauth/requesttoken";
let pixlpark_acc_token_url = base_url + "oauth/accesstoken";
let order_list_url = base_url + "/orders";
let order_list_length_url = base_url + "/orders/count";
let public_key = "38cd79b5f2b2486d86f562e3c43034f8";
let private_key = "8e49ff607b1f46e1a5e8f6ad5d312a80";

app.listen(PORT, ()=>{
  console.log("App runs on PORT " + PORT);
})

let accToken = "", reqToken = "";

app.get("/", async (req,res)=>{
     let is_first_req = req.query.firstReq;
     if(is_first_req){
     var req_token = await axios.get(pixlpark_req_token_url);
     var password = req_token.data.RequestToken + private_key;
     var sha1_password = sha1(password).toString(crypto.enc.Hex);
     var access_token = await axios.get(pixlpark_acc_token_url, {params:{oauth_token:req_token.data.RequestToken,grant_type:"api",username:public_key, password:sha1_password}});
     reqToken = req_token.data.RequestToken;
     accToken = access_token.data.AccessToken;
     var order_list_length = await axios.get(order_list_length_url,{params:{oauth_token:accToken}});
     var length = order_list_length.data.Result[0].count;
     };
     let {firstReq, ...other_params} = req.query;
     let ordersData = await axios.get(order_list_url,{params:{oauth_token:accToken, ...other_params}});
     res.status(200).json({access_data:is_first_req?access_token.data:null, require_data:is_first_req?req_token.data:null, orderList:ordersData.data, length:length});
   //})
});
