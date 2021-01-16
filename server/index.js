const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  user: "root",
  host: "local",
  password: `password`,
  database: "employee_system",
});

app.post("/create", (req, res) => {
  const name = req.body.name;
  const age = req.body.age;
  const position = req.body.position;
  const wage = req.body.wage;

  console.log(req.body);

  const displayInfo = () =>
    console.log(`Added employee: ${name} + ${age} + ${position} + ${wage}`);

  db.query(
    `INSERT INTO employees (name, age, position, wage) VALUES (${name}, ${age}, ${position}, ${wage})`
  );
  // db.query(
  //   "INSERT INTO employees {name, age, position, wage} VALUES (?, ?, ?, ?)",
  //   [name, age, position, wage],
  //   (err, res) => {
  //     if (err) console.log(err);
  //     else {
  //       res.send("Values Inserted");
  //       console.log(displayInfo());
  //     }
  //   }
  // );
});

app.listen(3001, () => {
  console.log(`server running at port 3001`);
});
