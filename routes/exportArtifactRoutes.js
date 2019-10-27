var db = require("../db/db");

module.exports = app => {

  app.get('/api/artifacts/export/json',(req, res, next) => {
    db.query(`SELECT Name, Tags, DateAddedYear, DateAddedMonth,
      DateAddedDay, DateAcquireYear, Description,
      Type FROM Artifact`, (err, rows, fields) => {
        if (!err) {
          res.json(rows);
        } else {
          res.sendStatus(err);
        }
    });
  });
};
