const Comment = require("../models/comment.model");
const User = require("../models/user.model");
const { default: mongoose } = require("mongoose");
const _ = require("underscore");

const create = async ({ content, user, song, parent }) => {
  const comment = new Comment({
    content,
    user,
    song,
    parent,
    likes: 0,
    dislikes: 0,
  });
  return await comment.save();
};
const update = async (id, { likes, dislikes }) => {
  return await Comment.findByIdAndUpdate(id, { likes, dislikes }).exec();
};
const getOne = async (id) => {
  const comment = await Comment.findById(id).exec();
  return comment;
};
const getList = async ({ start, end, song, parent }) => {
  let filter = {};
  if (song) {
    filter.song = song;
  }
  if (parent) {
    filter.parent = parent;
  } else {
    filter.parent = null;
  }
  const docs = await Comment.find(filter)
    .skip(start)
    .limit(end - start)
    .lean()
    .exec();
  const totalDoc = await Comment.countDocuments(filter).exec();
  for (let i = 0; i < docs.length; i++) {
    const { user, parent } = docs[i];
    const userDoc = await User.findById(user).select("name avatar").exec();
    const parentDoc = await Comment.findById(parent).exec();
    docs[i].parent = parentDoc;
    docs[i].user = userDoc;
  }
  return { docs, totalDoc };
};
const remove = async (id) => {
  return await Comment.findByIdAndDelete(id).exec();
};
module.exports = { create, getOne, getList, remove, update };
