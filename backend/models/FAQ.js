const { Schema, model } = require("mongoose");

const faqSchema = new Schema(
  {
    name: String,
    question: String,
    answer: String,
    userId: { type: Schema.Types.ObjectId, ref: "User" },
  },
  { timestamps: true }
);

module.exports = model("FAQ", faqSchema);
