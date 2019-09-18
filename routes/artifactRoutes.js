var db = require('../db/db');

module.exports = app => {
    app.get('/api/artifacts/all', (req,res) =>{
        db.query('SELECT * FROM Artifact', (err, rows, fields) => {
            if (!err){
            res.json(rows)
            } else {
            console.log(err);
            }
        });
    })

    app.get('/api/artifacts/photos', (req,res) =>{
        db.query('SELECT * FROM Artifact WHERE Type=\'photo\'', (err, rows, fields) => {
            if (!err){
            res.json(rows)
            } else {
            console.log(err);
            }
        });
    })

    app.get('/api/artifacts/physical', (req,res) =>{
        db.query('SELECT * FROM Artifact WHERE Type=\'physical\'', (err, rows, fields) => {
            if (!err){
            res.json(rows)
            } else {
            console.log(err);
            }
        });
    })

    app.get('/api/artifacts/letter', (req,res) =>{
        db.query('SELECT * FROM Artifact WHERE Type=\'letter\'', (err, rows, fields) => {
            if (!err){
            res.json(rows)
            } else {
            console.log(err);
            }
        });
    })

    // app.get('/api/familymembers', (req,res) =>{
    // db.query('SELECT * FROM user', (err, rows, fields) => {
    //     if (!err){
    //         res.send(rows);
    //     } else {
    //     console.log(err);
    //     }
    // });
    // })

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
        try{
            return inputstr
                .split("")
                .map(function (c, i) { if (c === "'") return "''"; else return c; })
                .join('');
        } catch (e) {
            console.log(e);
        }
    }

    //POST route for registration of new artifacts
    app.post('/artifacts/new', function(req, res) {
        const name = req.body.Name;
        const geoTag = req.body.Geotag;
        const day = req.body.Day;
        const month = req.body.Month;
        const year = req.body.Year;
        const history = req.body.Description;
        const type = req.body.Type;

        var artifactID = newArtifactID();
        var currOwn = 1;

        db.query(`INSERT INTO Artifact SET ArtifactID = ?, Name = ?, Geotag = ?,
          DateAcquireYear = ?, DateAcquireMonth = ?, DateAcquireDay = ?,
          description = ?, CurrentOwner = ?, Type = ?`,
          [artifactID, name, geoTag, year, month, day, history, currOwn, type], function(err, result) {
            if (!err) {
              console.log("Added successfully");
              res.status(201).end("Success!");
            } else {
              console.log(err);
              res.sendStatus(404);
            }
        });
    });

    // app.post('/new/artifact', function(req, res) {
    // var artifactID = newArtifactID(),
    // artifactName = doubleBackticks(req.body.Name),
    // year = req.body.Year,
    // description = doubleBackticks(req.body.Description)
    // userID = 1,
    // insertStatement = "INSERT INTO `mydb`.`Artifact` (`ArtifactID`, `Name`, `Geotag`, `Tags`, `DateAddedYear`, `DateAddedMonth`, `DateAddedDay`, `DateSentYear`, `DateSentMonth`, `DateSentDay`, `DateAcquireYear`, `DateAcquireMonth`, `DateAcquireDay`, `AccuracyAdded`, `AccuracyAcquire`, `AccuracySent`, `Text`, `Heir`, `CurrentOwner`, `User_UserID`, `Photo_PhotoID`) VALUES (" + artifactID + ", '" + artifactName + "', NULL, NULL," + year + ", NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL,'"+ description +"', NULL, NULL," + userID + ", NULL);";
    // db.query(insertStatement,(err, rows, fields) => {
    //     if (!err){
    //         console.log("Sucess!");
    //         res.status(201).end("Success!");
    //     } else {
    //         console.log(err);
    //         res.status(400).end("Failed :(")
    //     }
    //     });
    // });
}
