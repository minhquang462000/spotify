const UserService = require("../../services/user.service");

const create = async (req, res) => {
  try {
    const { name, email, password, avatar, likes } = req.body;
    const doc = await UserService.create({
      name,
      email,
      password,
      avatar,
      likes,
    });
    res.status(201).json({ message: "User created successfully", data: doc });
  } catch (e) {
    res.status(400).json({ error: e.message, message: " server error" });
  }
};
const update = async (req, res) => {
  try {
    const { name, email, password, avatar, likes, role, status } = req.body;
    const { id } = req.params;
    await UserService.update( id, {
      name,
      email,
      password,
      avatar,
      likes,
      role,
      status,
    });
    res.status(201).json({ message: "User updated successfully" });
  } catch (e) {
    res.status(400).json({ error: e.message, message: " server error" });
  }
};
const getList = async (req, res) => {
  try {
    const { name, _start, _end } = req.query;
    const start = parseInt(_start) || 0;
    const end = parseInt(_end) || 10;
    const { doc, totalDoc } = await UserService.getList({ name, start, end });
    res.header("X-Total-Count", totalDoc);
    res.header("Access-Control-Expose-Headers", "X-Total-Count");
    return res.status(200).json(doc);
  } catch (e) {
    res.status(400).json({ error: e.message, message: " server error" });
  }
};
const getOne = async (req, res) => {
  const { id } = req.params;
  try {
    const doc = await UserService.getOne(id);
    res.status(200).json(doc);
  } catch (e) {
    res.status(400).json({ error: e.message, message: " server error" });
  }
};
const remove = async (req, res) => {
  const { id } = req.params;
  try {
    const doc = await UserService.remove(id);
    res.status(200).json(doc);
  } catch (e) {
    res.status(400).json({ error: e.message, message: " server error" });
  }
};
module.exports = { create, update, getList, getOne, remove };
