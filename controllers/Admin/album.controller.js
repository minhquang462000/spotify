const AlbumService = require("../../services/album.service");
const create = async (req, res) => {
  console.log(req.body);
  try {
    const { name, songs, singers, image, description } = req.body;
    const doc = await AlbumService.create({
      name,
      songs,
      singers,
      image,
      description,
    });
    res.status(201).json({ message: "Album created successfully", data: doc });
  } catch (e) {
    res.status(400).json({ error: e.message, message: " server error" });
  }
};
const update = async (req, res) => {
  try {
    const { name, songs, singers, image, views, likes, description } = req.body;
    const { id } = req.params;
    await AlbumService.update(id, {
      name,
      songs,
      singers,
      image,
      views,
      lyric,
      likes,
      description,
    });
    res.status(201).json({ message: "Album updated successfully" });
  } catch (e) {
    res.status(400).json({ error: e.message, message: " server error" });
  }
};
const remove = async (req, res) => {
  const { id } = req.params;
  try {
    const doc = await AlbumService.remove(id);
    res.status(200).json(doc);
  } catch (e) {
    res.status(400).json({ error: e.message, message: " server error" });
  }
};
const getOne = async (req, res) => {
  const { id } = req.params;
  try {
    const doc = await AlbumService.getOne(id);
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
    const { docs, totalDoc } = await AlbumService.getList({
      singer,
      category,
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
module.exports = { create, update, remove, getOne, getList };
