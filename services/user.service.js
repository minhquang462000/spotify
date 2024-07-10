const { default: mongoose } = require("mongoose");
const User = require("../models/user.model");
const Song = require("../models/song.model");
const bcrypt = require("bcrypt");
const _ = require("underscore");
const checkDuplicate = async (name, email) => {
  const userName = await User.findOne({ name }).exec();
  if (userName) return true;
  const emailUser = await User.findOne({ email }).exec();
  if (emailUser) return true;
  return false;
};
// Compare Password
const hashPassword = async (password) => {
  //   const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(password, 10);
  return hash;
};
// Create User
const create = async ({ name, email, password, avatar, likes }) => {
  if (await checkDuplicate(name, email)) {
    throw new Error("User or Email already exists");
  }
  const passwordHash = await hashPassword(password);
  const user = new User({
    name,
    email,
    password: passwordHash,
    avatar,
    likes,
  });
  const result = await user.save();
  return result;
};
// Update
const update = async ( id, { name, email, avatar, likes, role, status } ) => {
  console.log(likes);
  return await User.findByIdAndUpdate(id, {
    name,
    email,
    avatar,
    likes,
    role,
    status,
  }).exec();
};
// Delete User
const remove = async (id) => {
  return await User.findByIdAndDelete(id).exec();
};
// Get Users
const getList = async ({ name, start, end }) => {
    let filter = {};
  if (!_.isEmpty(name)) {
    filter = {
      ...filter,
     name: { $regex: name, $options: "i" },
    };
  }
  const doc = await User.find(filter)
    .skip(start)
    .limit( end - start )
    .select("-password -role")
    .lean()
    .exec();
  const totalDoc = await User.countDocuments(filter).exec();
  for (let i = 0; i < doc.length; i++) {
    const { likes } = doc[i];
    const likesDoc = await Song.find({ _id: { $in: likes } }).select("name images like views").exec();
    doc[i].likes = likesDoc;
  }
  return { doc, totalDoc };
};
// Get OneUser
const getOne = async (id) => {
  const user = await User.findById(id).select("-password -role").exec();
  const { likes } = user;
  const likesDoc = await Song.find({ _id: { $in: likes } }).select("name images like views").exec();
  user.likes = likesDoc;
  return user;
};
module.exports = {
  create,
  update,
  remove,
  getList,
  getOne,
};
