var db = require('../db/db');
var cors = require('cors');
var multer  =  require('multer');
var axios = require("axios");

module.exports = app => {

    var storage = multer.diskStorage({
      destination: "./client/src/artifactImages",
      filename: function (req, file, cb) {
        cb(null, Date.now() + '-' + file.originalname);
      }
    })

    var upload = multer({ storage: storage }).single('file')

    app.post('/upload/artifactimage', function(req, res) {
      upload(req, res, function(err) {
        console.log("Request --", req.file);
        if(!err) {
          console.log("Image uploaded to SERVER successfully");
          return res.status(200).send(req.file);
        } else {
          res.status(500).end();
        }
      })
    })

    app.get("/api/lastAddedArtifact", (req, res) => {
      db.query(
        "select max(ArtifactID) as maximum from Artifact",
        (err, rows, fields) => {
          if (!err) {
            res.send(JSON.stringify(rows));
          } else {
            console.log(err);
          }
        }
      );
    });

    // POST route to add Artifact Image to database
    app.post('/new/artifactImage', function(req, res) {
        const caption = '';
        const path = req.body.filename;
        //const artifactID = newArtifactID();
        //console.log("ID: " + artifactID);

        //console.log(artifactID);
        db.query(`INSERT INTO ArtifactImage SET Image = ?, FilePath= ?,Caption = ?,
        Artifact_ArtifactID = ?`,
          ['', path, caption, artifactID], function(err, result) {
            if (!err) {
              console.log("Added ArtifactImage successfully");
              res.status(201).end("Success!");
            } else {
              console.log(err);
              res.sendStatus(404);
            }
        });
    });
}
