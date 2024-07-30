const SongService = require("../../services/song.service");

const getOne = async (req, res) => {
  const { id } = req.params;
  try {
    const doc = await SongService.getOne(id);
    res.status(200).json(doc);
  } catch (e) {
    res.status(400).json({ error: e.message, message: " server error" });
  }
};
const getList = async (req, res) => {
  try {
    const { _start, _end, singer, category, name, albums } = req.query;
    const start = parseInt(_start) || 0;
    const end = parseInt(_end) || 10;
    const { docs, totalDoc } = await SongService.getList({
      singer,
      category,
      albums,
      start,
      end,
      name,
    });
    res.header("X-Total-Count", totalDoc);
    res.header("Access-Control-Expose-Headers", "X-Total-Count");
    return res.status(200).json(docs);
  } catch (e) {
    res.status(400).json({ error: e.message, message: " server error" });
  }
};

module.exports = { getOne, getList };
