var db = require('../db/db');
var multer  =  require('multer');


module.exports = app => {

    // let storage = multer.diskStorage({
    //     destination: function (req, file, callback) {
    //       callback(null, DIR);
    //     },
    //     filename: function (req, file, cb) {
    //       cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    //     }
    // });

    // let upload = multer({storage: storage});

    // app.set('views', __dirname + '/views');
    // app.set('view engine', 'ejs');

    // app.post('/api/photo',function(req,res){
    //     upload(req,res,function(err) {
    //         if(err) {
    //             return res.end("Error uploading file.");
    //         }
    //         res.end("File is uploaded");
    //     });
    // });
    function newArtifactID() {
        // axios.get('/api/newartifact')
        // .then(function (response) {
        //     return response.maximum + 1
        // })
        var high = 10000,
        low = 0;
        return Math.random() * (high - low) + low
    }

    app.post('/new/artifactImage', function(req, res) {
        const imageID = newArtifactID();
        const caption = req.body.Caption;
        const path = req.body.FilePath;
        const artifactID = req.body.ArtifactID;

        db.query(`INSERT INTO ArtifactImage SET ArtifactImageID = ?, Image = ?, FilePath= ?,Caption = ?,
        ArtifactID = ?`,
          [imageID, '', path, caption, artifactID], function(err, result) {
            if (!err) {
              console.log("Added successfully");
              res.status(201).end("Success!");
            } else {
              console.log(err);
              res.sendStatus(404);
            }
        });
    });

    function doubleBackticks(inputstr){
        try{
            return inputstr
                .split("")
                .map(function (c, i) { if (c === "'") return "''"; else return c; })
                .join('');
        } catch (e) {
            console.log(e);
        }
    }
}
