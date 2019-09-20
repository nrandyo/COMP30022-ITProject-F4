const mysql =require('mysql');
require('dotenv').config();

var db = mysql.createConnection({
  host:process.env.DB_HOST,
  user:process.env.DB_USER,
  password:process.env.DB_PASS,
  database:process.env.DB_DATABASE
})

db.connect((err)=>{
    if(!err)
    console.log('DB connection succeeded.')
    else
    console.log('DB connection failed \n Error'+JSON.stringify(err,undefined,2));
  });
  
module.exports = db;