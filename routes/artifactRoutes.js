var db = require("../db/db");
var axios = require("axios");

module.exports = app => {
  app.get("/api/artifacts/all", (req, res) => {
    db.query(
      `SELECT a.*, im.*
      FROM artifact AS a
      INNER JOIN artifactimage AS im ON im.ArtifactImageID = (
          SELECT ArtifactImageID
          FROM artifactimage AS p2
          WHERE p2.Artifact_ArtifactID = a.ArtifactID
          LIMIT 1
      )
      `,
      (err, rows, fields) => {
        if (!err) {
          res.json(rows);
        } else {
          console.log(err);
        }
      }
    );
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
      `SELECT a.*, im.*
      FROM artifact AS a
      INNER JOIN artifactimage AS im ON im.ArtifactImageID = (
          SELECT ArtifactImageID
          FROM artifactimage AS p2
          WHERE p2.Artifact_ArtifactID = a.ArtifactID AND Type='physical'
          LIMIT 1
      )`,
      (err, rows, fields) => {
        if (!err) {
          res.json(rows);
        } else {
          console.log(err);
        }
      }
    );
  });

  app.get("/api/artifacts/timeline", (req, res) => {
    db.query(
      `SELECT * FROM Artifact
        INNER JOIN ArtifactImage
        ON Artifact.ArtifactID = ArtifactImage.Artifact_ArtifactID
        ORDER BY Artifact.DateAcquireYear desc,
          Artifact.DateAcquireMonth desc,
          Artifact.DateAcquireDay desc`,
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
      `SELECT * FROM Artifact
          INNER JOIN ArtifactImage
          ON Artifact.ArtifactId = ArtifactImage.Artifact_ArtifactID
          AND Artifact.ArtifactID=` + req.params.artifactID,
      (err, rows, fields) => {
        if (!err) {
          res.json(rows);
        } else {
          console.log(err);
        }
      }
    );
  });

  app.get("/api/timeline/:yearStart/:yearEnd", (req, res) => {
    db.query(
      `SELECT * FROM Artifact
        INNER JOIN ArtifactImage ON
        Artifact.ArtifactID = ArtifactImage.Artifact_ArtifactID
        WHERE Artifact.DateAcquireYear >= ? AND Artifact.DateAcquireYear <= ?
        ORDER BY Artifact.DateAcquireYear desc, Artifact.DateAcquireMonth desc,
        Artifact.DateAcquireDay desc`,
      [req.params.yearStart, req.params.yearEnd],
      (err, rows, fields) => {
        if (!err) {
          res.json(rows);
        } else {
          console.log(err);
        }
      }
    );
  });

  app.get("/api/member/:memberid/artifacts", (req, res) => {
    db.query(
      `SELECT * FROM Artifact
      INNER JOIN ArtifactImage ON
      Artifact.ArtifactID = ArtifactImage.Artifact_ArtifactID
      WHERE Artifact.CurrentOwner = ?`,
      [req.params.memberid],
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

  // GET Route for last added artifact ID
  app.get("/artifact/lastAdded", function(req, res) {
    db.query('SELECT max(ArtifactID) as lastAdded from Artifact',
    (err, results, fields) => {
      if(err) throw err;
      console.log("Acquired last added ArtifactID");
      res.send(results[0]);
    })
  })

  //POST route for registration of new artifacts
  app.post("/artifacts/new", function(req, res) {
    const name = req.body.Name;
    const geoTag = req.body.GeoTag;
    const day = req.body.Day;
    const month = req.body.Month;
    const year = Number(req.body.Year);
    const history = req.body.Description;
    const tags = req.body.Tags.toString();
    var type = req.body.Type;

    if (typeof type === "undefined") {
      type = "physical";
    }

    const currOwn = 1;

    // Acquire current data
    const currentDate = new Date();
    const yearAdded = currentDate.getFullYear();
    const monthAdded = currentDate.getMonth() + 1;
    const dayAdded = currentDate.getDate();

    db.query(
      `INSERT INTO Artifact SET Name = ?, Geotag = ?, Tags = ?,
          DateAddedYear = ?, DateAddedMonth = ?, DateAddedDay = ?,
          DateAcquireYear = ?, DateAcquireMonth = ?, DateAcquireDay = ?,
          description = ?, CurrentOwner = ?, Type = ?`,
      [
        name,
        geoTag,
        tags,
        yearAdded,
        monthAdded,
        dayAdded,
        year,
        month,
        day,
        history,
        currOwn,
        type
      ],
      function(err, result) {
        if (!err) {
          console.log("Artifact added successfully");
          res.status(201).end("Success!");
          return res.status(201);
        } else {
          console.log(err);
          res.sendStatus(404);
          return err;
        }
      }
    );
  });

  //Delete Route for artifacts
  app.delete("/artifacts/delete", function(req, res) {
    const id = req.body.id;
    let sql = `DELETE FROM artifact WHERE ArtifactID = ?`;

    db.query(sql, [id], function(err, result) {
      if (err) {
        res.send(err);
      } else {
        res.send(200);
        console.log("Number of records deleted: " + result.affectedRows);
      }
    });
  });

  //Update route for artifacts
  app.post("artifacts/update", function(req, res) {
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
      if (error) {
        return console.error(error.message);
      } else {
        console.log("Deleted Row(s):", results.affectedRows);
      }
    });
  });
};
