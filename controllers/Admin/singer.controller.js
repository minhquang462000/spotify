const SingerService = require("../../services/singer.service");
const create = async (req, res) => {
    try {
        const { name, avatar, story, followers } = req.body;
        const doc = await SingerService.create({ name, avatar, story, followers });
        res.status(201).json({ message: "Singer created successfully", data: doc });
    } catch (e) {
        res.status(400).json({ error: e.message, message: " server error" });
    }
};
const update = async (req, res) => {
    try {
        const { name, avatar, story, followers } = req.body;
        const { id } = req.params;
         await SingerService.update(id, { name, avatar, story, followers });
        res.status(201).json({ message: "Singer updated successfully"});
    } catch (e) {
        res.status(400).json({ error: e.message, message: " server error" });
    }
};
const remove = async (req, res) => {
    const { id } = req.params;
    try {
        const doc = await SingerService.remove(id); 
        res.status(200).json(doc);
    } catch (e) {
        res.status(400).json({ error: e.message, message: " server error" });
    }
};
const getOne = async (req, res) => {
    const { id } = req.params;
    try {
        const doc = await SingerService.getOne(id);
        res.status(200).json(doc);
    } catch (e) {
        res.status(400).json({ error: e.message, message: " server error" });
    }
};
const getList = async (req, res) => {
    try {
        const { _start, _end, name } = req.query;
        const start = parseInt(_start) || 0;
        const end = parseInt(_end) || 10;
        const { docs, totalDoc } = await SingerService.getList({
          name,
          start,
          end,
        });
        res.header("X-Total-Count", totalDoc);
        res.header("Access-Control-Expose-Headers", "X-Total-Count");
        return res.status(200).json(docs);
      } catch (e) {
        res.status(400).json({ error: e.message, message: " server error" });
      }
};
module.exports = {
    create,
    update,
    remove,
    getList,
    getOne,
}