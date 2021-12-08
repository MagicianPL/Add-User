const express = require("express");
const router = express.Router();
const Users = require("../models/users");

router
  .route("/")
  .get(async (req, res) => {
    try {
      const users = await Users.find();
      res.json(users);
      console.log(users);
    } catch (err) {
      console.log(err);
      res.json(err);
    }
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
  .get(async (req, res) => {
    try {
      const user = await Users.findById(req.params.id);
      console.log(user);
      res.json(user);
    } catch (err) {
      console.log(err);
      res.json(err);
    }
  })
  .patch(async (req, res) => {
    updatedUser = await Users.findById(req.params.id);
    Object.assign(updatedUser, req.body);
    updatedUser.save();
    res.send(updatedUser);
  })
  .delete(async (req, res) => {
    const deletedUser = await Users.remove({ _id: req.params.id });
    console.log(deletedUser);
    res.json(deletedUser);
  });

module.exports = router;
