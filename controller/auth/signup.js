const Binance=require('binance-api-node').default;
const  dotenv=require('dotenv');
const path = require("path");
const UserSchema = require("..//../model/user");

module.exports.signup = async (req, res) => {
    const { email, password,name} = req.body;
    try {
      const user = await UserSchema.findOne({ email });
      if (user) {
        return res.status(400).json({
          message: "User already exists",
          data: null,
        });
      }
      const newUser = new UserSchema({
        email,
        password,
     name,
      });
      await newUser.save();
   
      return res.status(201).json({
        success: true,
        message: "User created successfully",
       newUser
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: "Internal server error",
        data: null,
      });
    }
  };