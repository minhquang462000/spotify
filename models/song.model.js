const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const songSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    song: {
      type: String,
      required: true,
    },
    lyric: {
      type: String,
    },
    singers: [
      {
        type: Schema.Types.ObjectId,
        ref: "Singer",
      },
    ],
    images: {
      type: String,
    },
    categories: [
      {
        type: Schema.Types.ObjectId,
        ref: "Category",
      },
    ],
    views: {
      type: Number,
    },
    likes: {
      type: Number,
    },
    description: {
      type: String,
    },
  },
  {
    timestamps: true,
    collection: "songs",
  }
);
songSchema.index({ name: "text" });
const Song = mongoose.model("Song", songSchema);
module.exports = Song;
