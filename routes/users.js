const express = require("express");
const router = express.Router();

const users = [
  {
    id: 1,
    name: "Some name",
    description: "ncjncjncjncncnionconeioncvoeinv ncvioenvi venvienvienfvi",
  },
];

router
  .route("/")
  .get((req, res) => {
    res.json(users);
  })
  .post((req, res) => {
    users.push(req.body);
    res.send(req.body);
    console.log(users);
  });

router
  .route("/:id")
  .get((req, res) => {
    const user = users.find((user) => user.id === parseInt(req.params.id));
    if (user) {
      return res.json(user);
    }
    res.status(404).json({ msg: `Cannot find user by id ${req.params.id}` });
  })
  .patch((req, res) => {
    const user = req.body;
    const index = users.findIndex(
      (user) => user.id === parseInt(req.params.id)
    );
    users[index] = user;
    res.send(user);
  })
  .delete((req, res) => {
    const index = users.findIndex(
      (user) => user.id === parseInt(req.params.id)
    );
    const deleted = users.splice(index, 1);
    res.json(deleted);
  });

module.exports = router;
