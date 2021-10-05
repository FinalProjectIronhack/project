const { Schema, model } = require("mongoose");

const userSchema = new Schema(
  {
    admin: { type: Boolean, default: false },
    bio: String,
    age: { type: Number, min: 1 },
    sports: {
      type: String,
      enum: ["Tennis", "Soccer", "Cricket", "Frisbee Golf", "Golf"],
    },
    level: { type: Number, min: 1, max: 5 },
    gender: {
      type: String,
      enum: ["M", "F", "Other"],
    },
    zip: { type: Number, min: 0, max: 99999 },

    name: String,
    email: String,
    imageUrl: String,
    googleId: String,
  },
  { timestamps: true }
);

module.exports = model("User", userSchema);
