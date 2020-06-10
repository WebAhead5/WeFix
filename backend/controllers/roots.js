const { loginPage,addUser,handleUsers,addItemtoCart,registerPage} = require('.');

const express= require("express")
// const auth = require('./auth');


const router=express.Router()

//router.get("/",handlerHome)
//router.get("/Regist",handlerHome)
router.post("/addUser",addUser)
router.post("/authenticate",handleUsers)
router.get('/login', loginPage);
router.get('/register', registerPage);
//router.get('/howItWorks')




//router.post("/cart",addItemtoCart)

module.exports =router;