var db = require('./db');

var all = async () => {
    return new Promise((resolve, reject) => {
        db.query('SELECT * from artifact', (err, results) => {
            if (err){
                return reject(err)
            }
            resolve(results);
        });
    });
}

module.exports = all;