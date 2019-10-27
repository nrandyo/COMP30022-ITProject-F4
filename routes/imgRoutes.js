var db = require("../db/db");
var multer = require("multer");

module.exports = app => {
  var storage = multer.diskStorage({
    destination: "./client/src/artifactImages",
    filename: function(req, file, cb) {
      cb(null, Date.now() + "-" + file.originalname);
    }
  });

  var upload = multer({ storage: storage }).array("file");

  app.post("/upload/artifactimage", function(req, res) {
    upload(req, res, function(err) {
      if (!err) {
        return res.status(200).send(req.files);
      } else {
        res.status(500).end();
      }
    });
  });

  // POST route to add Artifact Image to database
  app.post("/new/artifactImage", function(req, res) {
    const caption = "";
    const path = req.body.filename;
    const artifactID = req.body.lastAdded;

    db.query(
      `INSERT INTO ArtifactImage SET Image = ?, FilePath= ?,Caption = ?,
        Artifact_ArtifactID = ?`,
      ["", path, caption, artifactID],
      function(err, result) {
        if (!err) {
          res.status(201).end("Success!");
        } else {
          res.sendStatus(500);
        }
      }
    );
  });
};
