const Binance=require('binance-api-node').default;
const  dotenv=require('dotenv');
const path = require("path");
const UserSchema = require("../../model/user"); 
dotenv.config({ path: path.join(__dirname, "config.env") });



module.exports.buy = async (req, res) => {

  const user=await UserSchema.findOne({email:req.body.email});
  // const client = Binance({
  //   apiKey: "aYzZOAeym4hX76k6jMogk7mhJNYnywZuAI6jl7Mii89DzrMAw4B6vv9NvU1aU9fu",
  //   apiSecret: "JmU2M67eYD9ZqBLMF8JH4R5XPpK8owoZHjkFcnNRFiIyVed87aVh5VuQmx7FHjC8",
  //      getTime:()=> new client.time()
  //   })

    const client = Binance({
      apiKey:user.apikey,
      apiSecret: user.apisecret,
         getTime:()=> new client.time()
      })
      const client2 = Binance({
        apiKey:"AZYI6XvK8oP4tV993OcayuiFFT1rFXeCGKInubtGBQowWTFquU74mUt958lIL4y7",
        apiSecret:"KljRof04MDbtKXVbZVpNVhgKnclIoSpdsRcFNR6QLmNa3kA1mFsRY7BNpwyqMSlX",
           getTime:()=> new client2.time()
        })


        const BTC=await client.dailyStats({ symbol:"BTCUSDT" });
        const ETH=await client.dailyStats({ symbol:"ETHUSDT" });
        var BTC_price=parseInt(BTC["lastPrice"]);
       
        var ETH_price=ETH["lastPrice"];
        const all_Data=await client2.accountInfo();

        coin_names = [];
        coin_prices = [];
balances_Data=all_Data["balances"];

for(var i=0;i<balances_Data.length;i++){
    if(balances_Data[i]["free"]>0){
       coin_names.push(balances_Data[i]["asset"]);
         coin_prices.push(balances_Data[i]["free"]);
    }

}
console.log(coin_prices[1]);
var quantity1;
var quantity2;
quantity1=0.48*parseFloat(coin_prices[1])/BTC_price;
quantity2=0.48*parseFloat(coin_prices[1])/ETH_price;






    const data1 = await client.order({
      symbol: 'BTCUSDT',
      side: 'BUY',
      quantity:quantity1.toString().substring(0,7),
      price: BTC_price.toString()
    })
    const data2 = await client.order({
      symbol: 'ETHUSDT',
      side: 'BUY',
      quantity:quantity2.toString().substring(0,5),
      price: ETH_price.toString()
    })


//     res.send({"status":"success",data1,data2});
//    }catch(e){
//      res.send({"status":"fail"})
//    }

//     //29891.00
// }'
console.log(data1,data2)

 // res.send({"status":"success",data1, data2});
 res.send(data1)
  // salman().then(data=>{res.send(data)}).catch((e)=>{console.log(e)})
  



 
}