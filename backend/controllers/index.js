const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const saltRounds = 10;
const { findByUsername ,addNewUser,addNewCar,addToCart} = require('../database/queries');


exports.loginPage = (req, res) => {
  res.render('login', { activePage: { login: true } });
};
exports.registerPage = (req, res) => {
  res.render('register', { activePage: { register: true }, error: '' });
};


exports.handleUsers= async (req,res)=>{
  var email = req.body.email;
  var password = req.body.password;
  try {

    var user = await findByUsername(email);
    bcrypt.compare(password, user.password, function (err, result) {
      if (err) {
        res.render('login', { error: err.message });
      }
      res.send({success:true})


      if (result == true) {
        jwt.sign(user.email, process.env.JWT_SECRET, function (err, token) {
          if (err) {
            return res.render('/', { error: err.message });
          }
          
          res.cookie('access_token', token);
        });

      } 
    });}
      catch (e) {
        console.log(e.message);
      }
}
        

exports.addUser = async(req, res, err) => {
    let fullName=req.body.fullName;
    let email=req.body.email;
    let password=req.body.password;
    let zipCode=req.body.zipCode;
    let city=req.body.city;

    var manufacturer=req.body.manufacturer;
    let model=req.body.model;
    let make_year=req.body.make_year;
    let last_service=req.body.last_service;

    //let {fullName, email, password, confirmPassword, zipCode, city} = req.body;


   try {
     var newuser= await addNewUser(fullName, email, password,zipCode,city);
     var newcar= await addNewCar(manufacturer, model, make_year,last_service,fullName);
       }
       catch (e) {
        console.log(e)
      }
}




exports.addItemtoCart= async(req,res,err)=>{
  var item=req.body.item;
  let quantity=req.body.quantity;
  let price=req.body.price;
  let department=req.body.department;
  let fullName=req.body.fullName;
  var dateCart=req.body.dateCart;

  try {
    var newitem= await addToCart(item,quantity, price,department,fullName,dateCart);
  }
  catch (e) {
    console.log(e)
  }
}