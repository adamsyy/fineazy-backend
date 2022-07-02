const Binance=require('binance-api-node').default;
const  dotenv=require('dotenv');
const axios = require('axios');
const path = require("path");
const UserSchema = require("../../model/user"); 
dotenv.config({ path: path.join(__dirname, "config.env") });



module.exports.buy_allocation = async (req, res) => {
  try{
    // const user=await UserSchema.findOne({email:req.body.email});
 

    //   const client = Binance({
    //     apiKey:user.apikey,
    //     apiSecret: user.apisecret,
    //        getTime:()=> new client.time()
    //     })

        const res = await axios.get('https://fineazy-backend.herokuapp.com/getprice/home');
        res.send(res);
    
  }catch(e){
    res.send("error ahne")
  }


}