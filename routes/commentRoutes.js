var db = require("../db/db");
var axios = require("axios");

module.exports = app => {
  app.get("/api/comments/:artifactID", (req, res) => {
    db.query(
      ("SELECT * FROM artifact INNER JOIN `comment` ON artifact.artifactid = `comment`.artifact_artifactid AND artifact.artifactid=" + req.params.artifactID),
      (err, rows, fields) => {
        if (!err) {
          res.json(rows);
        } else {
          console.log(err);
        }
      }
    );
  });


    app.get("/api/newcommentid", (req, res) => {
        db.query(
          "select max(CommentID) as maximum from Comment",
          (err, rows, fields) => {
            if (!err) {
              res.send(rows);
            } else {
              console.log(err);
            }
          }
        );
      });

    function newCommentID(callback) {
        axios.get("/api/newcommentid").then(function(response) {
          return response.maximum + 1;
        });
      }

  //POST route for registration of new artifacts
  app.post("/new/comment", function(req, res) {
    var commentID = newCommentID();
    const comment = req.body.Comment;
    const artifactID = req.body.artifactID;
    const datePosted = new Date().toISOString().slice(0, 19).replace('T', ' ');

    db.query(
      `INSERT INTO Comment SET CommentID = ?, Comment = ?, Author = ?, DatePosted = ?, Artifact_ArtifactID = ?`,
      [commentID, comment, 'Leon Sterling', datePosted, artifactID],
      function(err, result) {
        if (!err) {
          console.log("Added successfully");
          res.status(201).end("Success!");
          return res;
        } else {
          console.log(err);
          res.sendStatus(404);
          return err;
        }
      }
    );
  });

};
