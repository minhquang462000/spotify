const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// tao cau truc Album
const albumSchema = new Schema(
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
    collection: "albums",
    timestamps: true,
  }
);
albumSchema.index({ name: "text" });
const Album = mongoose.model("Album", albumSchema);
module.exports = Album;
