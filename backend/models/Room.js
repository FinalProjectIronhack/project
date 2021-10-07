const { Schema, model } = require("mongoose");

const roomSchema = new Schema(
  {
    userId: [{ type: Schema.Types.ObjectId, ref: "User" }],
    usersEmail: [String],
  },

  { timestamps: true }
);

module.exports = model("Room", roomSchema);
