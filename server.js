const express = require("express");
require("./services/passport");
const cors = require('cors');
const app = express();

const port = 5000;

var db = require('./db/db');
var bodyParser = require('body-parser')
app.use(express.json());       // to support JSON-encoded bodies
app.use(express.urlencoded()); // to support URL-encoded bodies
app.use(cors());

require("./routes/authRoutes")(app);
// require("./routes/artifactRoutes")(app);

app.get("/members", (req, res) => {
  db.query('SELECT * FROM user',(err,rows,fields)=>{
    if(!err)
    res.send(rows);
    else
    console.log(err);
  })
});

app.get('/api/artifacts', (req,res) =>{
  //IMPT: Garvin artifact db query was SELECT * FROM artifact
  //Case sensitive for tables -From Randy
  db.query('SELECT * FROM Artifact', (err, rows, fields) => {
    if (!err){
      res.json(rows)
    } else {
      console.log(err);
    }
  });
})

app.get('/api/familymembers', (req,res) =>{
  db.query('SELECT * FROM user', (err, rows, fields) => {
    if (!err){
        res.send(rows);
    } else {
      console.log(err);
    }
  });
})

function newArtifactID(callback) {
  var high = 10000,
  low = 0;
  return Math.random() * (high - low) + low

  // let newID = db.query('select max(artifactID) as maximum from artifact', (err, rows, fields) => {
  //   return callback(rows[0].maximum + 1);
  // });
  // return newID;
}

function doubleBackticks(inputstr){
  return inputstr
    .split("")
    .map(function (c, i) { if (c === "'") return "''"; else return c; })
    .join('')
}

//POST route for registration of new artifacts
app.post('/artifacts/new', function(req, res) {
    const name = req.body.name;
    const geoTag = req.body.geoTag;
    const day = req.body.day;
    const month = req.body.month;
    const year = req.body.year;
    const history = req.body.history;

    var artifactID = newArtifactID();
    var currOwn = 1;

    db.query(`INSERT INTO Artifact SET ArtifactID = ?, Name = ?, Geotag = ?,
      DateAcquireYear = ?, DateAcquireMonth = ?, DateAcquireDay = ?,
      description = ?, CurrentOwner = ? `,
      [artifactID, name, geoTag, year, month, day, history, currOwn], function(err, result) {
        if (!err) {
          console.log("Added successfully");
        } else {
          console.log(err);
          res.sendStatus(404);
        }
    });
});
// Previous route /new/artifact
// app.post('/artifacts/new', function(req, res) {
//   var artifactID = newArtifactID(),
//   artifactName = req.body.artifactName,
//   year = req.body.year,
//   description = doubleBackticks(req.body.desc)
//   userID = 1,
//   insertStatement = "INSERT INTO `mydb`.`Artifact` (`ArtifactID`, `Name`, `Geotag`, `Tags`, `DateAddedYear`, `DateAddedMonth`, `DateAddedDay`, `DateSentYear`, `DateSentMonth`, `DateSentDay`, `DateAcquireYear`, `DateAcquireMonth`, `DateAcquireDay`, `AccuracyAdded`, `AccuracyAcquire`, `AccuracySent`, `Text`, `Heir`, `CurrentOwner`, `User_UserID`, `Photo_PhotoID`) VALUES (" + artifactID + ", '" + artifactName + "', NULL, NULL," + year + ", NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL,'"+ description +"', NULL, NULL," + userID + ", NULL);";
//   console.log(description)
//   db.query(insertStatement,(err, rows, fields) => {
//       if (!err){
//         console.log("Sucess!");
//         res.status(201).end("Success!");
//       } else {
//         console.log(err);
//         res.status(400).end("Failed :(")
//       }
//     });
// });




app.listen(port, () => console.log(`server started on port ${port}`));
