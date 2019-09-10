const mysql =require('mysql');

var db = mysql.createConnection({
  host:'localhost',
  user:'root',
  password:'password',
  database:'mydb'
})

db.connect((err)=>{
    if(!err)
    console.log('DB connection succeeded.')
    else
    console.log('DB connection failed \n Error'+JSON.stringify(err,undefined,2));
  });
  
module.exports = db;