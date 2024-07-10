const { default: mongoose } = require("mongoose");
const Category = require("../models/category.model");
const _ = require("underscore");
const checkDuplicate = async (name) => {
  const doc = await Category.findOne({ name }).exec();
  return doc != null;
};
// Them moi
const create = async ({ name, description, image }) => {
  if (await checkDuplicate(name)) {
    throw new Error("Danh mục đã tồn tại");
  }
  const category = new Category({ name, description, image });
  await category.save();
  return category;
};
// Update
const update = async (id, { name, description, image }) => {
  return await Category.findByIdAndUpdate(id, {
    name,
    description,
    image,
  }).exec();
};
// Get List
const getList = async ({ start, end, name }) => {
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

  const doc = await Category.find(filter, projection)
    .sort(sort)
    .skip(start)
    .limit(end - start)
    .lean()
    .exec();
  const totalDoc = await Category.countDocuments(filter).exec();
  return { doc, totalDoc };
};
// get One
const getOne = async (id) => {
  return await Category.findById(id).exec();
};
// Delete
const remove = async (id) => {
  return await Category.findByIdAndDelete(id).exec();
};
module.exports = {
  create,
  update,
  getList,
  getOne,
  remove,
};
