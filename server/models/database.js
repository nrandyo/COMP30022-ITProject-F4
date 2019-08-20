const mongoose = require("mongoose");

// username: ynoishiki@student.unimelb.edu.au
// pwd: !a1234567

//copy from CONNECT (MongoDB Atlas)
const dbURI =
    "mongodb+srv://ynoishiki:Fantastic4@itproject-sjfqy.mongodb.net/test?retryWrites=true&w=majority";


const options = {
    useNewUrlParser: true,
    dbName: "ITProject"
};

mongoose.connect(dbURI, options).then(
    () => {
        console.log("Database connection established!");
    },
    err => {
        console.log("Error connecting Database instance due to: ", err);
    }
);
