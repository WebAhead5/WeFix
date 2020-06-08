const { findByUsername ,addNewUser,addNewCar,addToCart} = require('../database/queries');


exports.handlerHome=(req,res)=>{
    res.send('aaaa')

}

exports.handleUsers= async (req,res)=>{
    try {
        var user = await findByUsername(username);
        res.send(user)
      }
      catch (e) {
        console.log(e.message);
      }
}


exports.addUser = async(req, res, err) => {
    let fullName=req.body.fullName;
    let email=req.body.email;
    let password=req.body.password;
    let confirmPassword=req.body.confirmPassword;
    let zipCode=req.body.zipCode;
    let city=req.body.city;


   try {
     var newuser= await addNewUser(fullName, email, password,zipCode,city);
       }
       catch (e) {
        res.render('register', { error: e.message });
      }
}

exports.addCar= async(req,res,err)=>{
  var manufacturer=req.body.manufacturer;
  let model=req.body.model;
  let make_year=req.body.make_year;
  let last_service=req.body.last_service;
  let fullName=req.body.fullName;

  try {
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