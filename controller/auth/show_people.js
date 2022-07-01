// const Binance=require('binance-api-node').default;
const Userschema = require("../../model/user"); 



module.exports.show_people = async (req, res) => {

    const people=await Userschema.find({});
    var people_names=[];
    for(var i=0;i<people.length;i++){
if(people[i].email!=req.body.email){
        people_names.push(people[i].name);
}
    }
    res.send({people_names})
    
}