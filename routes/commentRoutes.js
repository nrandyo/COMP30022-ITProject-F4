var db = require("../db/db");

module.exports = app => {

  //GET route to request user comments
  app.get("/api/comments/:artifactID", (req, res) => {
    db.query(
      ("SELECT * FROM Artifact INNER JOIN `Comment` ON Artifact.ArtifactID = `Comment`.ArtifactID AND Artifact.ArtifactID =" + req.params.artifactID),
      (err, rows, fields) => {
        if (!err) {
          res.json(rows);
        } else {
          console.log(err);
        }
      }
    );
  });

  //POST for user to add comment
  app.post("/new/comment", function(req, res) {
    const comment = req.body.Comment;
    const author = req.body.Author;
    const artifactID = req.body.ArtifactID;
    console.log(artifactID);
    const datePosted = new Date().toISOString().slice(0, 19).replace('T', ' ');

    db.query(
      `INSERT INTO Comment SET Comment = ?, Author = ?, DatePosted = ?, ArtifactID = ?`,
      [comment, author, datePosted, artifactID],
      function(err, result) {
        if (!err) {
          res.sendStatus(201);
        } else {
          res.sendStatus(err);
        }
      }
    );
  });
};
