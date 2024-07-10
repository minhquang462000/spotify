const Singer = require("../models/singer.model");
const User = require("../models/user.model");
const { default: mongoose } = require("mongoose");
const _ = require("underscore");

const create = async ({ name, avatar, story, followers }) => {
  if (await checkDuplicateName(name)) {
    throw new Error("This Singer already exists");
  }
  const singer = new Singer({
    name,
    avatar,
    story,
    followers,
  });
  return await singer.save();
};
const checkDuplicateName = async (name) => {
  const singerName = await Singer.findOne({ name }).exec();
  if (singerName) return true;
  return false;
};
const update = async (id, { name, avatar, story, followers }) => {
  return await Singer.findByIdAndUpdate(id, {
    name,
    avatar,
    story,
    followers,
  }).exec();
};
const getOne = async (id) => {
  const doc = await Singer.findById(id).select("-password").exec();
  const { followers } = doc;
  followers.length > 0 &&
    (doc.followers = await User.find({ _id: { $in: followers } }).exec());
  return doc;
};
const getList = async ({ name, start, end }) => {
  let filter = {};
  let projection = {};
  let sort = {
    createdAt: -1,
  };
  // if (!_.isEmpty(name)) {
  //   filter = {
  //     ...filter,
  //    name: { $regex: name, $options: "i" },
  //   };
  // }
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
  const docs = await Singer.find(filter, projection)
    .sort(sort)
    .skip(start)
    .limit(end - start)
    .select("-password")
    .lean()
    .exec();
  const totalDoc = await Singer.countDocuments(filter).exec();
  return { docs, totalDoc };
};
const remove = async (id) => {
  return await Singer.findByIdAndDelete(id).exec();
};
module.exports = {
  create,
  update,
  getList,
  getOne,
  remove,
};
