const express = require("express");
require("./services/passport");

const app = express();

const port = 5000;

require("./routes/authRoutes")(app);

app.get("/api/members", (req, res) => {
  const members = [
    { id: 1, firstName: "Sean", lastName: "Wong" },
    { id: 2, firstName: "Yusuke", lastName: "Noishiki" },
    { id: 3, firstName: "Garvin", lastName: "Bulkin" },
    { id: 4, firstName: "Tommy", lastName: "Lai" }
  ];

  res.json(members);
});

app.listen(port, () => console.log(`server started on port ${port}`));
