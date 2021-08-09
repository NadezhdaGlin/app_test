const mysql = require('mysql2')

const connection = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"dean_db"
})

connection.connect(err => {
    if(err){
        console.log("Error")
    }
})
