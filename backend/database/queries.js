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


