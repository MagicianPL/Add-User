const mongoose = require("mongoose");
const usersSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});

const Users = mongoose.model("User", usersSchema);

module.exports = Users;
