const Binance=require('binance-api-node').default;




module.exports.create_basket = async (req, res) => {

    const coins=req.body.coins;
    const email=req.body.email;
    
    


    // const client = Binance()
    // async function salman(){
    //   const data = await client.prices();
      
    //   res.send(data);
    
    // }
    salman().then(data=>{res.send(data)}).catch((e)=>{console.log(e)})
    
}