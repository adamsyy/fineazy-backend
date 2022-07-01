const {signup}=require("../controller/auth/signup")
const {login}=require("../controller/auth/login")
const {admin}=require("../controller/auth/admin_login")
const {show_people}=require("../controller/auth/show_people")
const router = require("express").Router();

router.post("/signup",signup)
router.post("/login",login)
router.post("/admin",admin)
router.get("/show_people",show_people)



module.exports = router;