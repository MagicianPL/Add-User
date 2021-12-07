const express = require("express");
const app = express();
const usersRouter = require("./routes/users");
const bodyParser = require("body-parser");

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

app.listen(5000, () => {
  console.log("Server is listening on port 5000");
});

//GET ("/api/v1/users")
//POST ("/api/v1/users")
//PATCH ("/api/v1/users/:id")
//DELETE ("/api/v1/users/:id")
//GET ("/api/v1/users/:id")
