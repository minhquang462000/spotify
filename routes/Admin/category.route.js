
const tokenVerify = require("../../middlewares/token-verify.middleware");
const Controller = require("../../controllers/Admin/category.controller");

const endpoint = "/api/v1/categories";

const songRoute = (app) => {
  app.get(endpoint, Controller.getList);
  app.get(`${endpoint}/:id`, Controller.getOne);
  app.post(endpoint, Controller.create);
  app.patch(`${endpoint}/:id`, Controller.update);
  app.delete(`${endpoint}/:id`, Controller.remove);
};

module.exports = songRoute;
