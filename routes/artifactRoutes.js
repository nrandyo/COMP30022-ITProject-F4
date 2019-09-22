var db = require("../db/db");
var axios = require("axios");

module.exports = app => {
  app.get("/api/artifacts/all", (req, res) => {
    db.query("SELECT * FROM Artifact", (err, rows, fields) => {
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
      "SELECT * FROM Artifact WHERE Type='physical'",
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

  app.get("/api/newartifactid", (req, res) => {
    db.query(
      "select max(artifactID) as maximum from artifact",
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
    console.log(type);

    var artifactID = newArtifactID();
    var currOwn = 1;

    db.query(
      `INSERT INTO Artifact SET ArtifactID = ?, Name = ?, Geotag = ?,
          DateAcquireYear = ?, DateAcquireMonth = ?, DateAcquireDay = ?,
          description = ?, CurrentOwner = ?, Type = ?`,
      [artifactID, name, geoTag, year, month, day, history, currOwn, type],
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
