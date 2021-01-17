const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "schemaDB",
  insecureAuth: true,
});

db.connect((err) => {
  if (err) throw err;
  console.log("Connected");
});

app.post("/create", (req, res) => {
  const name = req.body.name;
  const sqlQuery = `INSERT INTO employee (name) VALUES (?)`;

  db.query(sqlQuery, [name], (err, res) => {
    if (err) throw err;
    console.log(res);
  });
});

app.listen(3001, () => {
  console.log(`server running at port 3001`);
});
