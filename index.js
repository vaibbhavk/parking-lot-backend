require("dotenv").config();
const express = require("express");
const app = express();
const db = require("./config/db");

// middleware
app.use(express.json());
app.use("/api", require("./routes/index"));

// database
db.authenticate()
  .then(() => {
    console.log("connected to mysql database");
  })
  .catch((err) => console.error(err));

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Listening on the port ${port}`);
});
