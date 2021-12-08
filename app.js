const express = require("express");
const app = express();
const usersRouter = require("./routes/users");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
require("dotenv/config");
const Users = require("./models/users");

mongoose
  .connect(process.env.DB_CONNECTION)
  .then(() => {
    console.log("Connected to the database");
    app.listen(5000, () => {
      console.log("Server is listening on port 5000");
    });
  })
  .catch((err) => console.log(err));

const users = [
  {
    id: 1,
    name: "Some name",
    description: "ncjncjncjncncnionconeioncvoeinv ncvioenvi venvienvienfvi",
  },
];

//Parser
app.use(bodyParser.json());

//Middleware
app.use("/api/v1/users", usersRouter);

app.get("/", (req, res) => {
  res.send("Hello");
});

app.get("/api/v1/users", (req, res) => {
  res.json(users);
});

//GET ("/api/v1/users")
//POST ("/api/v1/users")
//PATCH ("/api/v1/users/:id")
//DELETE ("/api/v1/users/:id")
//GET ("/api/v1/users/:id")
