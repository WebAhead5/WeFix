const { addUser,handleUsers,addItemtoCart,handlecart} = require('.');

const express= require("express")


const router=express.Router()

router.post("/addUser",addUser)
router.post("/authenticate",handleUsers)
router.post("/addItem",addItemtoCart)
router.get("/cart",handlecart)




//router.post("/cart",addItemtoCart)

module.exports =router;