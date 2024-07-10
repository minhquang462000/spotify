const Song = require("../models/song.model");
const Singer = require("../models/singer.model");
const Category = require("../models/category.model");
const _ = require("underscore");
const { default: mongoose } = require("mongoose");
const Comment = require("../models/comment.model");

const create = async ({
  name,
  song,
  singers,
  images,
  lyric,
  views,
  likes,
  description,
  categories,
}) => {
  if (await checkDuplicateName(name)) {
    throw new Error("This Song already exists");
  }
  const doc = new Song({
    name,
    song,
    lyric,
    singers,
    images,
    views,
    likes,
    comments: [],
    description,
    categories,
  });
  return await doc.save();
};

const checkDuplicateName = async (name) => {
  const songName = await Song.findOne({ name }).exec();
  if (songName) return true;
  return false;
};
const update = async (
  id,
  {
    name,
    song,
    singers,
    images,
    lyric,
    views,
    likes,
    comments,
    description,
    categories,
  }
) => {
  return await Song.findByIdAndUpdate(id, {
    name,
    song,
    lyric,
    singers,
    images,
    views,
    likes,
    comments,
    description,
    categories,
  }).exec();
};

const remove = async (id) => {
  return await Song.findByIdAndDelete(id).exec();
};
const getOne = async (id) => {
  const doc = await Song.findById(id).exec();
  const { singers, categories } = doc;
  singers.length > 0 &&
    (doc.singers = await Singer.find({ _id: { $in: singers } })
      .select("name avatar")
      .exec());
  categories.length > 0 &&
    (doc.categories = await Category.find({ _id: { $in: categories } })
      .select("name image")
      .exec());
  return doc;
};
const getList = async ({ singer, category, start, end, name }) => {
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
  if (category) {
    if (_.isString(category)) {
      filter.categories = new mongoose.Types.ObjectId(category);
    } else {
      filter.categories = {
        $in: category.map((id) => new mongoose.Types.ObjectId(id)),
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

  const docs = await Song.find(filter, projection)
    .sort(sort)
    .skip(start)
    .limit(end - start)
    .lean()
    .exec();
  const totalDoc = await Song.countDocuments(filter).exec();
  for (let i = 0; i < docs.length; i++) {
    const { singers, categories } = docs[i];
    const singersDoc = await Singer.find({ _id: { $in: singers } })
      .select("name avatar")
      .exec();
    const categoriesDoc = await Category.find({ _id: { $in: categories } })
      .select("name image")
      .exec();
    docs[i].categories = categoriesDoc;
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
