const { Schema, model } = require("mongoose");

const questionSchema = new Schema(
  {
    show: { type: Boolean, default: false },
    name: String,
    question: String,
    answer: String,
  },
  { timestamps: true }
);

module.exports = model("Question", questionSchema);
