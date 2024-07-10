const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const SingerSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    avatar: {
      type: String,
    },
    story: {
      type: String,
    },
    followers: [
      {
        type: Schema.Types.ObjectId,
        ref: "User",
      },
    ],
  },
  {
    collection: "singers",
    timestamps: true,
  }
);
const Singer = mongoose.model("Singer", SingerSchema);
module.exports = Singer;
