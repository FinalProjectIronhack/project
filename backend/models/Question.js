const { Schema, model } = require("mongoose");

const questionSchema = new Schema(
  {
    userId: { type: Schema.Types.ObjectId, ref: "User" },
    show: { type: Boolean, default: false },
    name: String,
    question: String,
    answer: String,
  },
  { timestamps: true }
);

module.exports = model("Question", questionSchema);
