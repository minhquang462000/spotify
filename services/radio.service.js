const Song = require("../models/song.model");
const Singer = require("../models/singer.model");
const Radio = require("../models/radio.model");
const _ = require("underscore");
const { default: mongoose } = require("mongoose");

const create = async ({ name, songs, singers, image, description }) => {
  if (await checkDuplicateName(name)) {
    throw new Error("This Song already exists");
  }
  const doc = new Radio({
    name,
    songs,
    singers,
    image,
    views: 0,
    likes: 0,
    description,
  });
  return await doc.save();
};

const checkDuplicateName = async (name) => {
  const songName = await Radio.findOne({ name }).exec();
  if (songName) return true;
  return false;
};
const update = async (
  id,
  { name, songs, singers, image, views, likes, description }
) => {
  return await Radio.findByIdAndUpdate(id, {
    name,
    songs,
    singers,
    image,
    views,
    likes,
    description,
  }).exec();
};

const remove = async (id) => {
  return await Radio.findByIdAndDelete(id).exec();
};
const getOne = async (id) => {
  const doc = await Radio.findById(id).exec();
  const { singers, songs } = doc;
  singers.length > 0 &&
    (doc.singers = await Singer.find({ _id: { $in: singers } })
      .select("name avatar")
      .exec());
  songs.length > 0 &&
    (doc.songs = await Song.find({ _id: { $in: songs } })
      .select("name images ")
      .exec());
  return doc;
};
const getList = async ({ singer, song, start, end, name }) => {
  let filter = {};
  let projection = {};
  let sort = {
    createdAt: -1,
  };
  if (singer) {
    if (_.isString(singer)) {
      filter.singers = new mongoose.Types.ObjectId(singer);
    } else {
      filter.singers = {
        $in: singer.map((id) => new mongoose.Types.ObjectId(id)),
      };
    }
  }
  if (!_.isEmpty(name)) {
    filter = {
      ...filter,
      $text: { $search: name },
    };

    projection = {
      score: { $meta: "textScore" },
    };

    sort = {
      score: { $meta: "textScore" },
    };
  }
  const docs = await Radio.find(filter, projection)
    .sort(sort)
    .skip(start)
    .select("-comments")
    .limit(end - start)
    .lean()
    .exec();
  const totalDoc = await Radio.countDocuments(filter).exec();
  for (let i = 0; i < docs.length; i++) {
    const { singers, songs } = docs[i];
    const singersDoc = await Singer.find({ _id: { $in: singers } })
      .select("name avatar")
      .exec();
    const songsDoc = await Song.find({ _id: { $in: songs } })
      .select("name images")
      .exec();
    docs[i].songs = songsDoc;
    docs[i].singers = singersDoc;
  }
  return { docs, totalDoc };
};
module.exports = {
  create,
  update,
  remove,
  getOne,
  getList,
};
