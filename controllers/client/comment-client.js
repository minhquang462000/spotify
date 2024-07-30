const CommentService = require("../../services/comment.service");
const getOne = async (req, res) => {
  const { id } = req.params;
  try {
    const doc = await CommentService.getOne(id);
    res.status(200).json(doc);
  } catch (e) {
    res.status(400).json({ error: e.message, message: " server error" });
  }
};
const getList = async (req, res) => {
  try {
    const { _start, _end, song, parent, user } = req.query;
    const start = parseInt(_start) || 0;
    const end = parseInt(_end) || 10;
    const { docs, totalDoc } = await CommentService.getList({
      start,
      end,
      song,
      parent,
      user,
    });
    res.header("X-Total-Count", totalDoc);
    res.header("Access-Control-Expose-Headers", "X-Total-Count");
    return res.status(200).json(docs);
  } catch (e) {
    res.status(400).json({ error: e.message, message: " server error" });
  }
};
module.exports = { getOne, getList };
