var db = require("../db/db");

module.exports = app => {

  // GET Route for last added artifact ID
  app.get("/api/familymember/all", function(req, res) {
    db.query(
      "SELECT FamilyMemberID, FirstName, LastName from FamilyMember",
      (err, results, fields) => {
        if (!err) {
          console.log(results);
          res.send(results);
        } else {
          res.sendStatus(err);
        }
      }
    );
  });

  // Done by Tommy
  // app.get("/api/familymember/all", (req, res) => {
  //   const data = [
  //     { child: "John", parent: "", spouse: "Isabella" },
  //     { child: "Aaron", parent: "Kevin" },
  //     { child: "Kevin", parent: "John", spouse: "Emma" },
  //     { child: "Mark", parent: "Ann" },
  //     { child: "Hannah", parent: "Ann", spouse: "Williams" },
  //     { child: "Rose", parent: "Sarah" },
  //     { child: "Ann", parent: "John", spouse: "George" },
  //     { child: "Sarah", parent: "Kevin", spouse: "James" },
  //     { child: "Angel", parent: "Sarah" },
  //     { child: "Tom", parent: "Hannah" }
  //   ];
  //   res.send(data);
  // });

  app.post("/familymember/new", function(req, res) {
    const firstName = req.body.FirstName;
    const lastName = req.body.LastName;
    const gender = req.body.Gender;
    const maidenName = req.body.MaidenName;
    const dobDay = req.body.DOBDay;
    const dobMonth = req.body.DOBMonth;
    const dobYear = req.body.DOBYear;
    const accuracyDOB = req.body.AccuracyDOB;
    const dodDay = req.body.DODDay;
    const dodMonth = req.body.DODMonth;
    const dodYear = req.body.DODYear;
    const accuracyDOD = req.body.AccuracyDOD;

    //gender removed
    db.query(
      `INSERT INTO familymember SET FirstName = ?, LastName = ?, Gender = ?, MaidenName = ?,
          DOBDay = ?, DOBMonth = ?, DOBYear = ?, AccuracyDOB = ?,
          DODDay = ?, DODMonth = ?, DODYear = ? , AccuracyDOD = ?`,
      [
        firstName,
        lastName,
        gender,
        maidenName,
        dobDay,
        dobMonth,
        dobYear,
        accuracyDOB,
        dodDay,
        dodMonth,
        dodYear,
        accuracyDOD
      ],
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

  app.get("/api/familymember/:memberID", (req, res) => {
    db.query(
      `SELECT * FROM FamilyMember WHERE FamilyMemberID= ?`,
      [req.params.memberID],
      (err, rows, fields) => {
        if (!err) {
          res.json(rows);
        } else {
          console.log(err);
        }
      }
    );
  });
};
