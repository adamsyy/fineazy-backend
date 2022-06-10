const Binance=require('binance-api-node').default;
const  dotenv=require('dotenv');
const path = require("path");
dotenv.config({ path: path.join(__dirname, "config.env") });



module.exports.buy = async (req, res) => {
  

    const client = Binance()
    const client2 = Binance({
      apiKey: "ZsuUZdGFXljYU9NXTkb5XXFeFgKy4A1N4lUe9ZHuNGoWuryY39nA1YKNjirHEiQ9",
      apiSecret: "EIeXI9QNQQslzn84fk9ijMMerprWv1QOHay2GJVKOo5kQUuIbolTpLNlvLS9k7ot",
        getTime:()=> new client.time()
      })
      
    
    async function salman(){
     try{
      const total=req.body.total;
      const min=req.body.min;
      
      const data1 = await client2.order({
        symbol: 'BTCUSDT',
        side: 'BUY',
        quantity: '0.00041',
        price: '29600.00'
      })
      res.send({data1});
     }catch(e){
       res.send(e.message)
     }
 
      //29891.00
  }

    
    salman().then(data=>{res.send(data)}).catch((e)=>{console.log(e)})
    
}