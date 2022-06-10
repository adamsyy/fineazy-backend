const {getprice}=require("../controller/getprice")
const {getprice1}=require("../controller/getprice1")
const {getprice2}=require("../controller/getprice2")
const {getprice3}=require("../controller/getprice3")
const {getprice4}=require("../controller/getprice4")
const {getprice5}=require("../controller/getprice5")
const {getpricehome}=require("../controller/getpricehome")
const {buy}=require("../controller/buy")
const {sell}=require("../controller/sell")
const {historybtc}=require("../controller/historybtc")
const {historyeth}=require("../controller/historyeth")
const {balance}=require("../controller/balance.js")
const router = require("express").Router();
const {signup}=require("../controller/auth/signup")
const {login}=require("../controller/auth/login")

router.get("/", getprice);
router.get("/1", getprice1);
router.get("/2", getprice2);
router.get("/3", getprice3);
router.get("/4", getprice4);
router.get("/5", getprice5);
router.get("/home", getpricehome);
router.post("/buy", buy);
router.post("/sell", sell);
router.get("/historybtc", historybtc);
router.get("/historyeth",historyeth)
router.get("/balance",balance)
router.post("/signup",signup)
router.post("/login",login)

module.exports = router;