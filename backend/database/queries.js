var database = require("./dbConnection.js");

exports.findByUsername = (email) => new Promise((resolve, reject) =>
    database
        .query('SELECT * FROM users WHERE email = $1', [email])
        .then((user) => {
          if (!user.rows.length) {
            reject(new Error('No user was found'));
          }
          //var cart=getCart(email)
          resolve(user.rows[0]);
        })
        .catch((error) => {
          console.log(`findByUsername Error: ${error}`);
          reject(new Error('An error has occurred in the db, findByUsername'));
        })
    );






  exports.addNewUser = async (fullname, email, password,zipCode,city) => {
    return new Promise((resolve, reject) => {

      // EXISTS returns the following [ { exists: BOOLEAN } ]
      database
        .query('SELECT EXISTS(SELECT 1 FROM users WHERE email = $1)', [email])
        .then((exists) => {
          console.log(exists.rows[0].exists);
          if (exists.rows[0].exists) {
  
            return reject(new Error('User already exists in our database'));
          }
          // adds the user to the db
          var array = [
            fullname,
            email,
            password,
            city,
            zipCode? parseInt(zipCode): 0,
          ]
          console.log(array)
          // adds the user to the db
          database.query('insert into users (fullname, email, password,city,zip) values ($1, $2,$3,$4,$5)', array)
            .then(() => resolve('User has been added')).catch((e) => console.log("Error in insert new user " + e));
  
  
        })
        .catch((error) => {
          console.log(`addNewUser Error: ${error}`);
          reject(new Error('An error has occurred in the db, addNewUser'));
        })
    }
    )
  };

  exports.addNewCar = async (manufacturer, model, make_year,last_service,fullName) => {
    return new Promise((resolve, reject) => {
      var array1 = [
        manufacturer,
        model,
        make_year,
        last_service,
        fullName
      ]

       database.query('insert into cars (manufacturer, model, make_year,last_service,fullName) values ($1, $2,$3,$4,$5)', [array1[0],array1[1],array1[2],array1[3],array1[4]])
       .then(() => resolve('Car has been added')).catch((e) => console.log("Error in insert a Car " + e))
   

  })
  }
  exports.getCart = (email) => new Promise((resolve, reject) =>
  database
      .query('SELECT * FROM cart WHERE email = $1', [email])
      .then((cart) => {
        if (!cart.rows.length) {
          reject(new Error('No cart was found'));
        }

        resolve(cart.rows);
      })
      .catch((error) => {
        console.log(`findCart error : ${error}`);
        reject(new Error('An error has occurred in the db, findByUsername'));
      })
  );


  exports.addToCart = async (email,company,measure,price,quantity,department) => {
    return new Promise((resolve, reject) => {
      var array2 = [
        email,
        company,
        measure,
        price,
        quantity,
        department
      ]
      database.query('insert into cart (email, company,measure,price,quantity,department) values ($1,$2,$3,$4,$5,$6)',array2)
       .then(() => resolve('item has been added to Cart')).catch((e) => console.log("Error in insert a item " + e))

       
   

})
  }
