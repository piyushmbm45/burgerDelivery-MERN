const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const UserSchema = new Schema(
  {
    name: {
      type: "string",
      required: true,
    },
    email: {
      type: "string",
      required: true,
      unique: true,
    },
    password: {
      type: "string",
      required: true,
    },
    role: {
      type: "string",
      default: "customer",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", UserSchema, "Users");
