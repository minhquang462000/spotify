const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// tao cau truc Radio
const RadioSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
      index: 1,
    },
    description: {
      type: String,
    },
    image: {
      type: String,
    },
    songs: [
      {
        type: Schema.Types.ObjectId,
        ref: "Song",
      },
    ],
    singers: [
      {
        type: Schema.Types.ObjectId,
        ref: "Singer",
      },
    ],
    likes: {
      type: Number,
    },
    views: {
      type: Number,
    },
  },
  {
    collection: "Radios",
    timestamps: true,
  }
);
RadioSchema.index({ name: "text" });
const Radio = mongoose.model("Radio", RadioSchema);
module.exports = Radio;
