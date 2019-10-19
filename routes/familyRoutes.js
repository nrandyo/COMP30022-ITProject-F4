var db = require("../db/db");

module.exports = app => {
    app.get("/api/familymember/all", (req, res) => {
        db.query("SELECT * FROM familymember", (err, rows, fields) => {
            if (!err) {
                res.json(rows);
            } else {
                console.log(err);
            }
        });
    });




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
            [firstName, lastName, gender, maidenName,
                dobDay, dobMonth, dobYear, accuracyDOB,
                dodDay, dodMonth, dodYear, accuracyDOD],
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

