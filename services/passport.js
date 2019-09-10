const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const keys = require("../config/keys");
const mysql =require('mysql');
var db = require('../db');

passport.serializeUser((user,done)=>{
  
})


passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: "/auth/google/callback"
    },
    (accessToken, refreshToken, profile, done) => {
      
      var googleID = profile.id;
      let find = 'SELECT * FROM accounts WHERE AccountsID = ?';
      let findOne =db.query(find,googleID,(err,results)=>{
        let count = results.length;
        if(count>0){
          console.log('User already exists');
        }

        else{
        console.log(err);
        let account = {AccountsID: googleID, AccessControl:'admin', User_UserID: 1};
        let sql = 'INSERT INTO accounts SET ?' ;
        let query = db.query(sql,account,(err,result)=>{
          if(err) throw err;
          res.send('User created');
          console.log('New user created');
        })}
      })
      // console.log(findOne);
      // let account = {AccountsID: googleID, AccessControl:'admin', User_UserID: 1};
      // let sql = 'INSERT INTO accounts SET ?' ;
      // let query = db.query(sql,account,(err,result)=>{
      //   if(err) throw err;
      //   res.send('User created');
      // })
      // console.log("access token", accessToken);
      // console.log("refresh token", refreshToken);
      // console.log("profile:", profile);
    }
  )
);
