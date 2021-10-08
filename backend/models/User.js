const { Schema, model } = require("mongoose");

const userSchema = new Schema(
  {
    admin: { type: Boolean, default: false },
    bio: String,
    age: { type: Number, min: 1 },
    sports: [String],
    level: {
      type: String,
      enum: [
        "1. Beginner",
        "2. Advanced Beginner",
        "3. Intermediate",
        "4. Competitor",
        "5. Expert",
      ],
    },
    gender: {
      type: String,
      enum: ["M", "F", "Other"],
    },
    zip: String,
    name: String,
    email: String,
    imageUrl: String,
    googleId: String,
  },
  { timestamps: true }
);

module.exports = model("User", userSchema);
