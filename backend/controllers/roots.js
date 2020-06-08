const { handlerHome,addUser,addCar,addItemtoCart} = require('.');

const express= require("express")
// const auth = require('./auth');


const router=express.Router()

router.get("/",handlerHome)
router.post("/users",addUser)
router.post("/cars",addCar)
router.post("/cart",addItemtoCart)

module.exports =router;