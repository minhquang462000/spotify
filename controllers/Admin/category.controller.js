const CategoryService = require("../../services/category.service");
// Them moi
const create = async (req, res) => {
  console.log(req.body);
  try {
    const { name, description, image } = req.body;
    const doc = await CategoryService.create({ name, description, image });
    return res.status(200).json(doc);
  } catch (error) {
    return res.status(500).json({ message: "error server", error: error });
  }
};
const createWitNoDesc = async (req, res) => {
  const { name } = req.body;
  const doc = await CategoryService.create({ name });
  return res.status(200).json(doc);
};

const update = async (req, res) => {
  const { id } = req.params;
  try {
    const { name, description, image } = req.body;
    await CategoryService.update(id, { name, description, image });
    return res.status(200).json({ message: "update success" });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "loi server update Category Controller" });
  }
};
const getList = async (req, res) => {
  try {
    const { _start, _end, name } = req.query;
    const start = parseInt(_start) || 0;
    const end = parseInt(_end) || 10;
    const { doc, totalDoc } = await CategoryService.getList({
      start,
      end,
      name,
    });
    res.header("X-Total-Count", totalDoc);
    res.header("Access-Control-Expose-Headers", "X-Total-Count");
    return res.status(200).json(doc);
  } catch (error) {
    return res
      .status(500)
      .json({ message: "loi server getList Category Controller" });
  }
};
const getOne = async (req, res) => {
  const { id } = req.params;
  try {
    const doc = await CategoryService.getOne(id);
    return res.status(200).json(doc);
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ message: "loi server getOne Category Controller" });
  }
};
const remove = async (req, res) => {
  const { id } = req.params;
  try {
    const doc = await CategoryService.remove(id);
    return res.status(200).json({ message: "delete success" });
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ message: "loi server remove Category Controller" });
  }
};
module.exports = {
  create,
  createWitNoDesc,
  update,
  getList,
  getOne,
  remove,
};
