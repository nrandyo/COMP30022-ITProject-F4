var db = require("../db/db");
var axios = require("axios");

module.exports = app => {
  app.get("/api/artifacts/all", (req, res) => {
    db.query("SELECT * FROM Artifact INNER JOIN ArtifactImage ON ArtifactImage.FilePath!='' AND Artifact.ArtifactID = ArtifactImage.Artifact_ArtifactID", (err, rows, fields) => {
      if (!err) {
        res.json(rows);
      } else {
        console.log(err);
      }
    });
  });

  app.get("/api/artifacts/photos", (req, res) => {
    db.query(
      "SELECT * FROM Artifact WHERE Type='photo'",
      (err, rows, fields) => {
        if (!err) {
          res.json(rows);
        } else {
          console.log(err);
        }
      }
    );
  });

  app.get("/api/artifacts/physical", (req, res) => {
    db.query(
      "SELECT * FROM Artifact INNER JOIN ArtifactImage ON ArtifactImage.FilePath!='' AND Artifact.ArtifactID = ArtifactImage.Artifact_ArtifactID AND Type='physical'",
      (err, rows, fields) => {
        if (!err) {
          res.json(rows);
        } else {
          console.log(err);
        }
      }
    );
  });

  app.get("/api/artifacts/letter", (req, res) => {
    db.query(
      "SELECT * FROM Artifact WHERE Type='letter'",
      (err, rows, fields) => {
        if (!err) {
          res.json(rows);
        } else {
          console.log(err);
        }
      }
    );
  });

  app.get("/api/artifacts/:artifactID", (req, res) => {
    db.query(
      ("SELECT * FROM Artifact INNER JOIN ArtifactImage  ON ArtifactImage.FilePath!='' AND Artifact.ArtifactId = ArtifactImage.Artifact_ArtifactID AND Artifact.ArtifactID=" + req.params.artifactID),
      (err, rows, fields) => {
        if (!err) {
          res.json(rows);
        } else {
          console.log(err);
        }
      }
    );
  });

  app.get("/api/newartifactid", (req, res) => {
    db.query(
      "select max(ArtifactID) as maximum from Artifact",
      (err, rows, fields) => {
        if (!err) {
          res.send(rows);
        } else {
          console.log(err);
        }
      }
    );
  });

  function newArtifactID(callback) {
    axios.get("/api/newartifact").then(function(response) {
      return response.maximum + 1;
    });
  }

  function doubleBackticks(inputstr) {
    try {
      return inputstr
        .split("")
        .map(function(c, i) {
          if (c === "'") return "''";
          else return c;
        })
        .join("");
    } catch (e) {
      console.log(e);
    }
  }

  //POST route for registration of new artifacts
  app.post("/artifacts/new", function(req, res) {
    const name = req.body.Name;
    const geoTag = req.body.Geotag;
    const day = req.body.Day;
    const month = req.body.Month;
    const year = Number(req.body.Year);
    const history = req.body.Description;
    var type = req.body.Type;

    if (typeof type === "undefined") {
      type = "physical";
    }
    var currOwn = 1;

    db.query(
      `INSERT INTO Artifact SET Name = ?, Geotag = ?,
          DateAcquireYear = ?, DateAcquireMonth = ?, DateAcquireDay = ?,
          description = ?, CurrentOwner = ?, Type = ?`,
      [name, geoTag, year, month, day, history, currOwn, type],
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

  //Delete Route for artifacts
  app.delete("/artifacts/delete", function(req,res) {
    const id = req.body.id;
    let sql = `DELETE FROM artifact WHERE ArtifactID = ?`;

    db.query(sql,[id], function (err, result) {
      if (err){
        res.send(err);
      }else{res.send(200)
      console.log("Number of records deleted: " + result.affectedRows);
      }
    });
  });

  //Update route for artifacts
  app.post("artifacts/update", function(req,res) {
    const id = req.body.id;
    const name = req.body.Name;
    const geoTag = req.body.Geotag;
    const day = req.body.Day;
    const month = req.body.Month;
    const year = Number(req.body.Year);
    const history = req.body.Description;
    const type = req.body.Type;

    let sql = `UPDATE todos
               SET Name = ?, Geotag = ?,
                   DateAcquireYear = ?, DateAcquireMonth = ?,
                   DateAcquireDay = ?, description = ?,
                   CurrentOwner = ?, Type = ? WHERE id = ?`;

    let toUpdate = [name, geoTag, day, month, year, history, type, id];

    db.query(sql, toUpdate, (error, results, fields) => {
      if(error) {
        return console.error(error.message);
      } else {
        console.log('Deleted Row(s):', results.affectedRows);
      }
    });
  });
};
