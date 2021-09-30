const { Schema, model } = require("mongoose");

const userSchema = new Schema(
  {
    admin: { type: Boolean, default: false },
    name: String,
    email: String,
    imageUrl: String,
    googleId: String,
  },
  { timestamps: true }
);

module.exports = model("User", userSchema);
