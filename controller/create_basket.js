const Binance=require('binance-api-node').default;
const CreateBasket = require("../model/basket"); 



module.exports.create_basket = async (req, res) => {

    const coins=req.body.coins;
    const email=req.body.email;
const basket=new CreateBasket({
    email,coins
})
await basket.save()
  res.send({basket})  


    // const client = Binance()
    // async function salman(){
    //   const data = await client.prices();
      
    //   res.send(data);
    
    // }
   
    
}