const express = require("express");
const router = express.Router();
const Users = require("../models/users");

const users = [
  {
    id: 1,
    name: "Some name",
    description: "ncjncjncjncncnionconeioncvoeinv ncvioenvi venvienvienfvi",
  },
];

router
  .route("/")
  .get(async (req, res) => {
    const users = await Users.find();
    res.json(users);
    console.log(users);
  })
  .post(async (req, res) => {
    const user = new Users({
      name: req.body.name,
      description: req.body.description,
    });
    try {
      const resp = await user.save();
      res.json(resp);
    } catch (err) {
      console.log(err);
      res.json(err);
    }
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
