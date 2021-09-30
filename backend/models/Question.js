const { Schema, model } = require("mongoose");

const questionSchema = new Schema(
  {
    name: String,
    question: String,
  },
  { timestamps: true }
);

module.exports = model("Question", questionSchema);
