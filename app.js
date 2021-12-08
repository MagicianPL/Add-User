const express = require("express");
const app = express();
const usersRouter = require("./routes/users");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
require("dotenv/config");
const cors = require("cors");
const path = require("path");

//PORT
const port = process.env.PORT || 5000;
//Connection to DB
mongoose
  .connect(process.env.DB_CONNECTION)
  .then(() => {
    console.log("Connected to the database");
    app.listen(port, () => {
      console.log(`Server is listening on port ${port}`);
    });
  })
  .catch((err) => console.log(err));

//app.use('/static', express.static(path.join(__dirname, 'public')))
app.use(express.static(__dirname + "/public"));
app.use(cors());

//Parser
app.use(bodyParser.json());

//Middleware - Routes
app.use("/api/v1/users", usersRouter);

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.get("/api/v1/users", (req, res) => {
  res.json(users);
});

//GET ("/api/v1/users")
//POST ("/api/v1/users")
//PATCH ("/api/v1/users/:id")
//DELETE ("/api/v1/users/:id")
//GET ("/api/v1/users/:id")
