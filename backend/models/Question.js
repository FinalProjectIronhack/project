const { Schema, model } = require("mongoose");

const questionSchema = new Schema(
  {
    show: { type: Boolean, default: false },
    name: String,
    question: String,
    answer: String,
    userId: { type: Schema.Types.ObjectId, ref: "User" },
  },
  { timestamps: true }
);

module.exports = model("Question", questionSchema);
