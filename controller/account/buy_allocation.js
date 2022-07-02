const Binance=require('binance-api-node').default;
const  dotenv=require('dotenv');
const axios = require('axios');
const path = require("path");
const UserSchema = require("../../model/user"); 
dotenv.config({ path: path.join(__dirname, "config.env") });
var CircularJSON = require('circular-json');


module.exports.buy_allocation = async (req, res) => {

    // const user=await UserSchema.findOne({email:req.body.email});
 

    //   const client = Binance({
    //     apiKey:user.apikey,
    //     apiSecret: user.apisecret,
    //        getTime:()=> new client.time()
    //     })
try{
    var response = await axios.get('https://fineazy-backend.herokuapp.com/getprice/buy_btc');
    const str = CircularJSON.stringify(response);
    res.send(JSON.parse(str)["data"]);
}catch(e){
res.send("not enough balance")
}
       
    
 


}