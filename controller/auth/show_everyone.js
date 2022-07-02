// const Binance=require('binance-api-node').default;
const Userschema = require("../../model/user"); 



module.exports.show_people = async (req, res) => {

    const people=await Userschema.find();

    res.send(people)
    
}