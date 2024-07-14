const RadioService = require("../../services/radio.service");
const create = async (req, res) => {
  try {
    const { name, songs, singers, image, description } = req.body;
    const doc = await RadioService.create({
      name,
      songs,
      singers,
      image,
      description,
    });
    res.status(201).json({ message: "Radio created successfully", data: doc });
  } catch (e) {
    res.status(400).json({ error: e.message, message: " server error" });
  }
};
const update = async (req, res) => {
  try {
    const { name, songs, singers, image, views, likes, description } = req.body;
    const { id } = req.params;
    await RadioService.update(id, {
      name,
      songs,
      singers,
      image,
      views,
      likes,
      description,
    });
    res.status(201).json({ message: "Radio updated successfully" });
  } catch (e) {
    res.status(400).json({ error: e.message, message: " server error" });
  }
};
const remove = async (req, res) => {
  const { id } = req.params;
  try {
    const doc = await RadioService.remove(id);
    res.status(200).json(doc);
  } catch (e) {
    res.status(400).json({ error: e.message, message: " server error" });
  }
};
const getOne = async (req, res) => {
  const { id } = req.params;
  try {
    const doc = await RadioService.getOne(id);
    res.status(200).json(doc);
  } catch (e) {
    res.status(400).json({ error: e.message, message: " server error" });
  }
};
const getList = async (req, res) => {
  try {
    const { _start, _end, singer, name } = req.query;
    const start = parseInt(_start) || 0;
    const end = parseInt(_end) || 10;
    const { docs, totalDoc } = await RadioService.getList({
      singer,
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
