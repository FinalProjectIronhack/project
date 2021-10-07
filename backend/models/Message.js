const { Schema, model } = require("mongoose");

const messageSchema = new Schema(
  {
    text: String,
    userId: { type: Schema.Types.ObjectId, ref: "User" },
    roomId: { type: Schema.Types.ObjectId, ref: "Room" },
  },
  { timestamps: true }
);

module.exports = model("Message", messageSchema);
