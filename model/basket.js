const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcryptjs");

const Basket = new Schema({
    email:String,
    approved:{
        type:String,default:"false"
    },
    coins: {
        type: [String],
      },

});



const UserSchema = mongoose.model("Basket", Basket);
module.exports = UserSchema;
