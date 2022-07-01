const {signup}=require("../controller/auth/signup")
const {login}=require("../controller/auth/login")
const {admin}=require("../controller/auth/admin_login")
const {add_friend}=require("../controller/auth/add_friend")
const {show_not_friends}=require("../controller/auth/show_not_friends")
const {remove_friend}=require("../controller/auth/remove_friend")
const {show_people}=require("../controller/auth/show_people")
const router = require("express").Router();

router.post("/signup",signup)
router.post("/login",login)
router.post("/admin",admin)
router.get("/add_friend",add_friend)
router.get("/remove_friend",remove_friend)
router.get("/show_not_friends",show_not_friends)
router.get("/show_people",show_people)




module.exports = router;