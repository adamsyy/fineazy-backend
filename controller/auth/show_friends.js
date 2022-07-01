// const Binance=require('binance-api-node').default;
const Userschema = require("../../model/user"); 



module.exports.show_friends = async (req, res) => {

    const users=await Userschema.find();
    var not_friends=[];
    const user=await Userschema.findOne({email:req.body.email});
    const friends=user["friends"]

for(var i=0;i<users.length;i++){
not_friends.push(users[i]["name"]);
}

for(var i=0;i<friends.length;i++){
    //remove each value of friends from not_friends
    not_friends.splice(not_friends.indexOf(friends[i]),1);
   
}



   res.send(not_friends) 
}