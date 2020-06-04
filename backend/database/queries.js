var database = require("./dbConnection.js")




function getUser(UserName, cb) {
    database.query(`select * from users where full_name = '${UserName}'; `, (err, res) => {
        if (err) cb(err)
        else cb(null, res.rows);
    })
}

function postNewUser(full_name, email, password) {
    database.query(`insert into users (full_name, email, password) values ('${full_name}', '${email}', ${password}');`)
}

function addCar(manufacturer,model,make_year,last_service,full_name)
{
    database.query(`insert into cars (manufacturer, model, make_year,last_service,full_name) values ('${manufacturer}', '${model}', '${make_year}', '${last_service}',${full_name}');`)

}



