const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const saltRounds = 10;
const {
  findByUsername,
  addNewUser,
  addNewCar,
  addToCart,getCart
} = require("../database/queries");

exports.handleUsers = async (req, res) => {
  var email = req.body.email;
  var password = req.body.password;
  //var email= localStorage.setItem('email1', email)

  try {
    var user = await findByUsername(email);
    bcrypt.compare(password, user.password, function (err, result) {
      if (err) {
        console.log(err);
        res.status(401).send();
      }

      if (result === true) {
        jwt.sign(user.email, process.env.JWT_SECRET, function (err, token) {
          if (err) {
            console.log(err);
            res.status(401).send();
          }
          res.status(201).send();
          res.cookie("access_token", token);
        });
      }
    });
  } catch (e) {
    console.log(e);

    console.log(e.message);
  }
};
exports.handlecart = async (req, res) => {
  var email ="amirfahoum@gmail.com"
  try {
    var cart = await getCart(email);
    console.log(cart);
    res.send(cart);
    //res.status(201).send(cart);

  }
  catch(e){console.log(e)}
}



exports.addUser = async (req, res, err) => {
  let fullName = req.body.fullName;
  let email = req.body.email;
  let password = req.body.password;
  let zipCode = req.body.zipCode;
  let city = req.body.city;
  let confirmpassword = req.body.confirmpassword;

  var manufacturer = req.body.manufacturer;
  let model = req.body.model;
  let make_year = req.body.make_year;
  let last_service = req.body.last_service;

  if (
    email.length === 0 ||
    password.length === 0 ||
    confirmpassword.length === 0
  ) {
    res.status(401).send();
  }
  if (password !== confirmpassword) {
    res.status(401).send();
  }
  bcrypt.hash(password, saltRounds, async function (err, hashpassword) {
    if (err) {
      console.log(err);
    }
    //let {fullName, email, password, confirmPassword, zipCode, city} = req.body;

    try {
      var newuser = await addNewUser(
        fullName,
        email,
        hashpassword,
        zipCode,
        city
      );
      var newcar = await addNewCar(
        manufacturer,
        model,
        make_year,
        last_service,
        fullName
      );
      res.status(200).send();
    } catch (e) {
      console.log(e);
    }
  });
};

exports.addItemtoCart = async (req, res, err) => {



  let email = req.body.email;
  let company = req.body.company.title;
  let measure = req.body.measure;
  let price = req.body.price
  let quantity= req.body.quantity;
  let department=req.body.department;
  try { 
    
    var newitem = await addToCart(
      email,
      company,
      measure,
      price,
      quantity,
      department
    );
    res.status(200).send();


  } catch (e) {
    console.log(e);
  }
};
