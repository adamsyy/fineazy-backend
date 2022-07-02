
// const Binance=require('binance-api-node').default;
const Postschema = require("../../model/Post"); 
const Userschema = require("../../model/user");



module.exports.upload_post = async (req, res) => {
const user=await Userschema.findOne({email:req.body.email});

    var post=new Postschema({
name:user.name,
description:req.body.description,

    });
    post.save();
    res.send(post);
}
