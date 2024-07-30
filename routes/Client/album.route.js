const tokenVerify = require("../../middlewares/token-verify.middleware");
const Controller = require("../../controllers/client/album-client");

const endpoint = "/api/client/albums";
const albumClientRoute = (app) => {
  app.get(endpoint, tokenVerify, Controller.getList);
  app.get(`${endpoint}/:id`, tokenVerify, Controller.getOne);
};
module.exports = albumClientRoute;
