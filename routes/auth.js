const {signup}=require("../controller/auth/signup")
const {login}=require("../controller/auth/login")
const {admin}=require("../controller/auth/admin_login")

const router = require("express").Router();

router.post("/signup",signup)
router.post("/login",login)
router.post("/admin",admin)


module.exports = router;