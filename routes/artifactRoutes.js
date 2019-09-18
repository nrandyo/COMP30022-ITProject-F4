var db = require('../db/db');

module.exports = app => {
    app.get('/api/artifacts', (req,res) =>{
    db.query('SELECT * FROM artifact', (err, rows, fields) => {
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

    app.post('/new/artifact', function(req, res) {
    var artifactID = newArtifactID(),
    artifactName = req.body.artifactName,
    year = req.body.year,
    description = doubleBackticks(req.body.desc)
    userID = 1,
    insertStatement = "INSERT INTO `mydb`.`Artifact` (`ArtifactID`, `Name`, `Geotag`, `Tags`, `DateAddedYear`, `DateAddedMonth`, `DateAddedDay`, `DateSentYear`, `DateSentMonth`, `DateSentDay`, `DateAcquireYear`, `DateAcquireMonth`, `DateAcquireDay`, `AccuracyAdded`, `AccuracyAcquire`, `AccuracySent`, `Text`, `Heir`, `CurrentOwner`, `User_UserID`, `Photo_PhotoID`) VALUES (" + artifactID + ", '" + artifactName + "', NULL, NULL," + year + ", NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL,'"+ description +"', NULL, NULL," + userID + ", NULL);";
    console.log(description)
    db.query(insertStatement,(err, rows, fields) => {
        if (!err){
            console.log("Sucess!");
            res.status(201).end("Success!");
        } else {
            console.log(err);
            res.status(400).end("Failed :(")
        }
        });
    });
}