const express = require("express");
require("./services/passport");
const app = express();
const path = require("path");

const port = process.env.PORT || 5000;

var db = require("./db/db");
var bodyParser = require("body-parser");
app.use(express.json()); // to support JSON-encoded bodies
app.use(express.urlencoded()); // to support URL-encoded bodies

require("./routes/authRoutes")(app);
require("./routes/artifactRoutes")(app);
require("./routes/imgRoutes")(app);
require("./routes/commentRoutes")(app);
require("./routes/familyRoutes")(app);
require("./routes/exportArtifactRoutes")(app);

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

app.listen(port, () => console.log(`server started on port ${port}`));
