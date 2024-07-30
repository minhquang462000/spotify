const CategoryService = require("../../services/category.service");
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

module.exports = { getList, getOne };