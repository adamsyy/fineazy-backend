const {getprice}=require("../controller/getprice/getprice")
const {getprice1}=require("../controller/getprice/getprice1")
const {getprice2}=require("../controller/getprice/getprice2")
const {getprice3}=require("../controller/getprice/getprice3")
const {getprice4}=require("../controller/getprice/getprice4")
const {getprice5}=require("../controller/getprice/getprice5")
const {getpricehome}=require("../controller/getprice/getpricehome")
const {buy}=require("../controller/account/buy")
const {sell}=require("../controller/account/sell")
const {historybtc}=require("../controller/account/historybtc")
const {historyeth}=require("../controller/account/historyeth")
const {balance}=require("../controller/account/balance.js")
const router = require("express").Router();
const {signup}=require("../controller/auth/signup")
const {login}=require("../controller/auth/login")
const {create_basket}=require("../controller/basket/create_basket")
const {show_basket}=require("../controller/basket/show_basket")
const {users_basket}=require("../controller/basket/users_basket")
const {users_portfolio}=require("../controller/basket/users_portfolio")


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
router.post("/create_basket",create_basket)
router.get("/show_basket",show_basket)
router.post("/users_basket",users_basket)
router.get("/users_portfolio",users_portfolio)


module.exports = router;