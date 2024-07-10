const SongService = require("../../services/song.service");
const create = async (req, res) => {
  console.log(req.body);
  try {
    const {
      name,
      song,
      singers,
      images,
      views,
      likes,
      comments,
      lyric,
      description,
      categories,
    } = req.body;
    const doc = await SongService.create({
      name,
      song,
      singers,
      images,
      views,
      likes,
      lyric,
      comments,
      description,
      categories,
    });
    res.status(201).json({ message: "Song created successfully", data: doc });
  } catch (e) {
    res.status(400).json({ error: e.message, message: " server error" });
  }
};
const update = async (req, res) => {
  try {
    const {
      name,
      song,
      singers,
      images,
      views,
      likes,
      lyric,
      comments,
      description,
      categories,
    } = req.body;
    const { id } = req.params;
    await SongService.update(id, {
      name,
      song,
      singers,
      images,
      views,
      lyric,
      likes,
      comments,
      description,
      categories,
    });
    res.status(201).json({ message: "Song updated successfully" });
  } catch (e) {
    res.status(400).json({ error: e.message, message: " server error" });
  }
};
const remove = async (req, res) => {
  const { id } = req.params;
  try {
    const doc = await SongService.remove(id);
    res.status(200).json(doc);
  } catch (e) {
    res.status(400).json({ error: e.message, message: " server error" });
  }
};
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
    const { _start, _end, singer, category, name } = req.query;
    const start = parseInt(_start) || 0;
    const end = parseInt(_end) || 10;
    const { docs, totalDoc } = await SongService.getList({
      singer,
      category,
      start,
      end,
      name
    });
    res.header("X-Total-Count", totalDoc);
    res.header("Access-Control-Expose-Headers", "X-Total-Count");
    return res.status(200).json(docs);
  } catch (e) {
    res.status(400).json({ error: e.message, message: " server error" });
  }
};
module.exports = { create, update, remove, getOne, getList };
