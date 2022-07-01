// const Binance=require('binance-api-node').default;
const Userschema = require("../../model/user"); 



module.exports.add_friend = async (req, res) => {

    var user=await Userschema.find({email:req.body.email});
 var friends=user[0].friends;
   user[0]["friends"]=friends.concat(req.body.friend);
   user[0]["followers"]=user[0]["followers"]+1;
    await user[0].save();

    //add names to user.friends
   // var friend=req.body.friend;
    //add friend to user.friends
//const x=user.friends
    // user.friends=[...user.friends,friend];
    // await user.save();
res.send(user)

    
}