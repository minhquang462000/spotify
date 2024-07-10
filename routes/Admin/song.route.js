
const tokenVerify = require("../../middlewares/token-verify.middleware");
const controller = require("../../controllers/Admin/song.controller");

const endpoint = "/api/v1/songs";
const songRoute = (app) => {
  app.get(endpoint, controller.getList);
  app.get(`${endpoint}/:id`, controller.getOne);
  app.post(endpoint, controller.create);
  app.patch(`${endpoint}/:id`, controller.update);
  app.delete(`${endpoint}/:id`, controller.remove);
};
module.exports = songRoute;
