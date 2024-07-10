const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// tao cau truc Category
const categorySchema = new Schema(
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
  },
  {
    collection: "categories",
    timestamps: true,
  }
);
categorySchema.index({ name: "text" });
const Category = mongoose.model("Category", categorySchema);
module.exports = Category;
